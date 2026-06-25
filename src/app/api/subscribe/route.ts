import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

type SubscribeBody = {
  email?: string;
  /** Where the signup came from (footer, lead-magnet slug, launch, etc.). */
  source?: string;
  /** Optional override so different forms can target different audiences. */
  audienceId?: string;
};

export async function POST(request: Request) {
  let body: SubscribeBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim();
  const source = body.source?.trim() || "website";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = body.audienceId?.trim() || process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.inboxEmail;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Subscriptions aren't configured yet." },
      { status: 503 }
    );
  }

  try {
    // Preferred path: add the subscriber to a Resend Audience so the list
    // lives in a real ESP and is ready for a future newsletter send.
    if (audienceId) {
      const response = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        console.error("Resend audience error:", error);
        return NextResponse.json({ error: "Couldn't subscribe. Please try again." }, { status: 502 });
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: no audience configured yet — notify the inbox so no
    // signup is ever lost while the list provider is being set up.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `GeoffreyRCrawford.com <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: "New newsletter subscriber",
        text: `New subscriber: ${email}\nSource: ${source}`,
        html: `<p>New newsletter subscriber: <strong>${email}</strong></p><p>Source: ${source}</p>`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Couldn't subscribe. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json({ error: "Couldn't subscribe. Please try again." }, { status: 500 });
  }
}
