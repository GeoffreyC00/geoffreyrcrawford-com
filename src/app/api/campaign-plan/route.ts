import { NextResponse } from "next/server";
import {
  generateCampaignPlan,
  isValidCampaignPlan,
  parseCampaignInput,
  type CampaignBuilderInput,
  type CampaignPlan,
} from "@/lib/tools/campaign-builder";

/**
 * Campaign plan generator endpoint.
 *
 * Tries an AI-generated plan when an API key is configured, and always falls
 * back to the deterministic rules engine. The endpoint can never fail to
 * return a usable plan for valid input, and the build never depends on an
 * AI key existing.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input = parseCampaignInput(body);
  if (!input) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (apiKey) {
    try {
      const aiPlan = await generateWithAI(input, apiKey);
      if (aiPlan) {
        return NextResponse.json({ plan: aiPlan, generatedBy: "ai" });
      }
    } catch (error) {
      console.error("AI campaign plan failed; using rules fallback:", error);
    }
  }

  return NextResponse.json({ plan: generateCampaignPlan(input), generatedBy: "rules" });
}

/**
 * Ask the model for a plan in the exact `CampaignPlan` shape. We pass the
 * rules-based plan as a scaffold so the AI refines a known-good structure
 * rather than inventing one. Any parsing/shape issue returns null → fallback.
 */
async function generateWithAI(
  input: CampaignBuilderInput,
  apiKey: string
): Promise<CampaignPlan | null> {
  const scaffold = generateCampaignPlan(input);

  const system = [
    "You are Geoffrey R. Crawford, a senior growth marketing strategist who builds paid media systems.",
    "Produce a practical, specific paid media campaign plan for the user's inputs.",
    "Return ONLY JSON matching this TypeScript type, with no extra commentary:",
    "{ summary: string; platformLabel: string; platformAssumed: boolean; structure: {name:string; detail:string}[]; budgetSummary: string; budgetAllocation: {label:string; percent:number}[]; funnelStrategy: string[]; tracking: string[]; landingPageNotes: string[]; creativeAngles: string[]; actionPlan: {day:string; task:string}[]; whatToWatch: {metric:string; why:string}[] }",
    "budgetAllocation percentages MUST sum to 100. Keep copy concise, concrete, and free of fluff. 3–5 items per list.",
  ].join("\n");

  const user = JSON.stringify({ input, scaffold });

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.5,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
    // Don't let a slow API hang the request.
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    console.error("OpenAI error:", await response.text());
    return null;
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== "string") return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    return null;
  }

  return isValidCampaignPlan(parsed) ? parsed : null;
}
