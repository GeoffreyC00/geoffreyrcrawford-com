import { NextResponse } from "next/server";
import { createToolRun, listToolRuns } from "@/lib/db/tool-runs";
import { getTool } from "@/lib/tools/registry";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getCurrentUser } from "@/lib/supabase/server";
import {
  isValidCampaignPlan,
  parseCampaignInput,
  type CampaignBuilderInput,
  type CampaignPlan,
} from "@/lib/tools/campaign-builder";

function notConfigured() {
  return NextResponse.json({ error: "Workspace not configured." }, { status: 503 });
}

/** GET /api/tool-runs — list the signed-in user's saved runs. */
export async function GET() {
  if (!isSupabaseConfigured()) return notConfigured();

  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated." }, { status: 401 });

  const runs = await listToolRuns();
  return NextResponse.json({ runs });
}

/**
 * POST /api/tool-runs — persist a generated run for the signed-in user.
 *
 * Validates the payload per-tool using that tool's own parser/validator so a
 * forged body can't write garbage. Today only the campaign builder is wired;
 * future tools register their own validation here.
 */
export async function POST(request: Request) {
  if (!isSupabaseConfigured()) return notConfigured();

  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated." }, { status: 401 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const b = body as { tool?: unknown; input?: unknown; output?: unknown; generatedBy?: unknown };
  const toolSlug = typeof b.tool === "string" ? b.tool : "";
  const tool = getTool(toolSlug);
  if (!tool) {
    return NextResponse.json({ error: "Unknown tool." }, { status: 400 });
  }

  // Per-tool validation.
  if (toolSlug === "ai-campaign-builder") {
    const input = parseCampaignInput(b.input);
    if (!input || !isValidCampaignPlan(b.output)) {
      return NextResponse.json({ error: "Invalid run payload." }, { status: 400 });
    }
    const output = b.output as CampaignPlan;
    const { title, subtitle } = tool.summarizeRun(input as CampaignBuilderInput, output);
    const run = await createToolRun({
      tool: toolSlug,
      title,
      summary: subtitle,
      input,
      output,
      generated_by: b.generatedBy === "ai" ? "ai" : "rules",
    });
    if (!run) return NextResponse.json({ error: "Could not save." }, { status: 500 });
    return NextResponse.json({ run });
  }

  return NextResponse.json({ error: "Tool not supported." }, { status: 400 });
}
