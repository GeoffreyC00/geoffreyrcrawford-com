import { Check } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";

const BENEFITS = [
  "Save your campaign history",
  "Edit and revisit previous campaigns",
  "Access every new AI marketing tool",
  "Build your own marketing workspace",
];

/**
 * Post-result prompt to create a free workspace.
 *
 * Phase 1: accounts aren't live yet, so this captures early-access interest via
 * the existing Resend list (source: ai-campaign-builder-account) and the just-
 * generated run is already cached in sessionStorage by the wizard. Phase 2
 * replaces this with the real Supabase signup handoff that persists that run.
 */
export function SaveWorkspacePrompt() {
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
          <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Free accounts are rolling out now. Add your email and you&apos;ll be first in — your
            workspace will be waiting with this campaign saved.
          </p>
          <div className="mt-6">
            <NewsletterForm
              source="ai-campaign-builder-account"
              buttonLabel="Create my workspace"
              successMessage="You're on the early-access list — your workspace is coming soon."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
