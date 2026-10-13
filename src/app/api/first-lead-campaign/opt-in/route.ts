import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  createKitDownloadToken,
  kitDownloadUrl,
  kitFileAvailable,
  type KitFileKey,
} from "@/lib/products/first-lead-kit-delivery";

export const dynamic = "force-dynamic";

const MAX_BODY = 4000;
const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function publicOrigin(request: Request): string {
  const host =
    request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    request.headers.get("host")?.trim();
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const localHost = host?.startsWith("localhost") || host?.startsWith("127.0.0.1");
  const proto = forwardedProto || (localHost ? "http" : "https");
  if (host && /^[a-z0-9.-]+(?::\d+)?$/i.test(host)) return `${proto}://${host}`;
  return new URL(request.url).origin;
}

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
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function filesAreReady(): Promise<boolean> {
  const keys: KitFileKey[] = ["guide", "workbook"];
  const ready = await Promise.all(keys.map((key) => kitFileAvailable(key)));
  return ready.every(Boolean);
}

export async function POST(request: Request) {
  if (limited(request)) {
    return NextResponse.json(
      { error: "Please wait a few minutes before trying again." },
      { status: 429 }
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) {
    return NextResponse.json({ error: "Please shorten your answers." }, { status: 400 });
  }

  let body: { email?: string; firstName?: string; website?: string };
  try {
    body = JSON.parse(raw) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ error: "Please try again." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const firstName = typeof body.firstName === "string" ? body.firstName.trim().slice(0, 80) : "";

  if (!email || email.length > 180 || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const segmentId = process.env.RESEND_KIT_SEGMENT_ID?.trim();

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "The kit can’t be sent right now. Please try again later." },
      { status: 503 }
    );
  }

  if (!segmentId) {
    console.error("First Lead Campaign opt-in requires RESEND_KIT_SEGMENT_ID.");
    return NextResponse.json(
      { error: "The kit can’t be sent right now. Please try again later." },
      { status: 503 }
    );
  }

  if (!(await filesAreReady())) {
    return NextResponse.json(
      { error: "The kit can’t be sent right now. Please try again later." },
      { status: 503 }
    );
  }

  const token = createKitDownloadToken(email);
  if (!token) {
    return NextResponse.json(
      { error: "The kit can’t be sent right now. Please try again later." },
      { status: 503 }
    );
  }

  const origin = publicOrigin(request);
  const guideUrl = kitDownloadUrl(origin, "guide", token);
  const workbookUrl = kitDownloadUrl(origin, "workbook", token);
  const privacyUrl = `${origin}/first-lead-campaign/policies`;
  const pageUrl = `${origin}/first-lead-campaign`;
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";

  const captured = await addToKitSegment(apiKey, segmentId, email, firstName);

  if (!captured) {
    return NextResponse.json(
      { error: "We couldn’t save your email. Please try again." },
      { status: 502 }
    );
  }

  const delivered = await sendKitEmail({
    apiKey,
    fromEmail,
    email,
    greeting,
    guideUrl,
    workbookUrl,
    privacyUrl,
    pageUrl,
  });

  if (!delivered) {
    return NextResponse.json(
      { error: "We saved your email, but the kit email did not send. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    downloads: { guide: guideUrl, workbook: workbookUrl },
  });
}

async function addToKitSegment(
  apiKey: string,
  segmentId: string,
  email: string,
  firstName: string
): Promise<boolean> {
  const resend = new Resend(apiKey);
  const created = await resend.contacts.create({
    email,
    firstName: firstName || undefined,
    unsubscribed: false,
    segments: [{ id: segmentId }],
  });

  if (!created.error) return true;
  if (created.error.statusCode !== 409) {
    console.error("Kit contact create failed:", created.error.statusCode, created.error.name);
    return false;
  }

  const added = await resend.contacts.segments.add({ email, segmentId });
  if (!added.error || added.error.statusCode === 409) return true;
  console.error("Kit segment add failed:", added.error.statusCode, added.error.name);
  return false;
}

async function sendKitEmail(input: {
  apiKey: string;
  fromEmail: string;
  email: string;
  greeting: string;
  guideUrl: string;
  workbookUrl: string;
  privacyUrl: string;
  pageUrl: string;
}): Promise<boolean> {
  const text = [
    input.greeting,
    "",
    "Here is The First Lead Campaign Kit: the PDF field guide and the Excel workbook.",
    "",
    `PDF field guide: ${input.guideUrl}`,
    `Excel workbook: ${input.workbookUrl}`,
    "",
    "These links work for 7 days. After that, submit the form again for a fresh email:",
    input.pageUrl,
    "",
    "The kit helps you plan one Meta Leads campaign with an Instant Form. It does not promise ad approval, leads, customers, or profit.",
    "",
    "I may email you again with practical campaign guidance. Reply to this email if you do not want those notes. This email is the kit delivery. It is not an automated series.",
    "",
    `Privacy notes: ${input.privacyUrl}`,
  ].join("\n");

  const resend = new Resend(input.apiKey);
  const response = await resend.emails.send({
    from: `Geoffrey R. Crawford <${input.fromEmail}>`,
    to: input.email,
    subject: "Your First Lead Campaign Kit",
    text,
    html: `<p>${escapeHtml(input.greeting)}</p>
        <p>Here is <strong>The First Lead Campaign Kit</strong>: the PDF field guide and the Excel workbook.</p>
        <p><a href="${input.guideUrl}">Download the PDF field guide</a><br>
        <a href="${input.workbookUrl}">Download the Excel workbook</a></p>
        <p>These links work for 7 days. After that, <a href="${input.pageUrl}">submit the form again</a> for a fresh email.</p>
        <p>The kit helps you plan one Meta Leads campaign with an Instant Form. It does not promise ad approval, leads, customers, or profit.</p>
        <p>I may email you again with practical campaign guidance. Reply to this email if you do not want those notes. This email is the kit delivery. It is not an automated series.</p>
        <p><a href="${input.privacyUrl}">Privacy notes</a></p>`,
  });

  if (response.error) {
    console.error("Kit delivery email failed:", response.error.statusCode, response.error.name);
    return false;
  }
  return true;
}
