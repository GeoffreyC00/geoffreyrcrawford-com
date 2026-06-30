import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { isSupabaseConfigured } from "@/lib/supabase/env";

const BENEFITS = [
  "Save your campaign history",
  "Edit and revisit previous campaigns",
  "Access every new AI marketing tool",
  "Build your own marketing workspace",
];

/**
 * Post-result prompt to create a free workspace.
 *
 * Adaptive by configuration:
 * - Supabase configured → real signup CTA. The just-generated run is already
 *   cached in sessionStorage by the wizard, and PendingRunSync persists it the
 *   moment the user lands on /app after signing in.
 * - Not configured → graceful early-access capture via the existing Resend
 *   list (source: ai-campaign-builder-account), so the prompt is never broken.
 */
export function SaveWorkspacePrompt() {
  const configured = isSupabaseConfigured();

  return (
    <div className="no-print rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="kicker">Your free workspace</p>
          <h2 className="mt-5 font-serif text-display-md font-light text-balance">
            Save this blueprint and pick up where you left off.
          </h2>
          <ul className="mt-7 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          {configured ? (
            <>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                Create a free account and this campaign will be saved to your workspace
                automatically — no password, just a magic link.
              </p>
              <div className="mt-6">
                <Link
                  href="/login?next=/app"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-[15px] font-medium text-background transition-all duration-300 hover:bg-foreground/85"
                >
                  Create my free workspace
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login?next=/app" className="link-underline text-foreground">
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                Free accounts are rolling out now. Add your email and you&apos;ll be first in —
                your workspace will be waiting with this campaign saved.
              </p>
              <div className="mt-6">
                <NewsletterForm
                  source="ai-campaign-builder-account"
                  buttonLabel="Create my workspace"
                  successMessage="You're on the early-access list — your workspace is coming soon."
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
