import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Clean, on-brand state shown wherever the workspace would appear when
 * Supabase isn't configured yet. No errors, no broken UI — just a tasteful
 * "coming soon" that keeps the premium feel intact.
 */
export function WorkspaceComingSoon() {
  return (
    <section className="section-padding flex min-h-[70vh] items-center">
      <div className="container-narrow text-center">
        <p className="kicker">Workspace</p>
        <h1 className="mt-6 font-serif text-display-lg font-light text-balance">
          Your marketing workspace is coming soon.
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Accounts, saved campaign history, and a home for every new AI tool are
          almost here. In the meantime, the Campaign Builder is free to use — no
          login required.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link
            href="/tools/ai-campaign-builder"
            className="link-underline text-sm font-medium text-foreground"
          >
            Use the Campaign Builder →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
