import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5";
const MAX_INPUT = 180;
const MAX_OUTPUT = 240;
const MAX_BODY = 2000;
const MAX_REQUESTS = 8;
const WINDOW_MS = 10 * 60 * 1000;

const hits = new Map<string, number[]>();

type Example = {
  offer: string;
  openingA: string;
  openingB: string;
  question: string;
};

function limited(request: Request): boolean {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const key = (forwarded || "unknown").slice(0, 80);
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 500) {
    const oldest = hits.keys().next().value;
    if (oldest) hits.delete(oldest);
  }
  return false;
}

function field(value: unknown, required: boolean): string | null {
  if (value == null || value === "") return required ? null : "";
  if (typeof value !== "string") return null;
  const text = value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  if (text.length > MAX_INPUT) return null;
  if (required && text.length < 2) return null;
  return text;
}

function shortText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length < 8 || text.length > MAX_OUTPUT) return null;
  return text;
}

function parseExample(raw: string): Example | null {
  const json = raw.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") return null;
  const record = parsed as Record<string, unknown>;
  const offer = shortText(record.offer);
  const openingA = shortText(record.openingA);
  const openingB = shortText(record.openingB);
  const question = shortText(record.question);
  if (!offer || !openingA || !openingB || !question) return null;
  return { offer, openingA, openingB, question };
}

export async function POST(request: Request) {
  if (limited(request)) {
    return NextResponse.json(
      { error: "Please wait a few minutes before generating another example." },
      { status: 429 }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "The example isn’t available right now. Please try again later." },
      { status: 503 }
    );
  }

  let raw = "";
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (raw.length > MAX_BODY) {
    return NextResponse.json({ error: "Please shorten your answers." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const service = field(record.service, true);
  const audience = field(record.audience, false);
  if (service == null || audience == null) {
    return NextResponse.json(
      { error: "Add the service you provide. Keep each answer under 180 characters." },
      { status: 400 }
    );
  }

  const system = [
    "You draft a brief starting point for one local service business Meta lead campaign that uses an Instant Form.",
    "Return only JSON with keys offer, openingA, openingB, and question.",
    "offer is one sentence the business could use.",
    "openingA and openingB are two short ad openings for that same offer.",
    "question is one Instant Form question that helps qualify the lead.",
    "Use only the service and audience given. Do not invent prices, guarantees, awards, reviews, or results.",
    "Do not promise ad approval, leads, customers, or profit.",
    "Keep each value under 180 characters.",
  ].join(" ");

  const user = audience
    ? `Service: ${service}\nWho they want to reach: ${audience}`
    : `Service: ${service}`;

  let response: Response;
  try {
    response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system,
        messages: [{ role: "user", content: user }],
      }),
      signal: AbortSignal.timeout(20000),
    });
  } catch {
    return NextResponse.json(
      { error: "The example didn’t come back. Please try again." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    console.error("Anthropic example request failed", response.status);
    return NextResponse.json(
      { error: "The example didn’t come back. Please try again." },
      { status: 502 }
    );
  }

  const data = (await response.json()) as { content?: Array<{ type?: string; text?: string }> };
  const text = (data.content ?? [])
    .filter((block) => block.type === "text" && typeof block.text === "string")
    .map((block) => block.text)
    .join("\n");
  const example = parseExample(text);
  if (!example) {
    return NextResponse.json(
      { error: "The example didn’t come back in a usable form. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ example });
}
