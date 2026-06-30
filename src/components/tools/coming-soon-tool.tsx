import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { StatusPill } from "@/components/tools/tool-card";
import type { ToolDefinition } from "@/lib/tools/registry";

/**
 * Preview + waitlist page for a tool that hasn't shipped yet. Matches the
 * editorial design language and captures interest via the existing Resend
 * newsletter system, tagged per-tool (source: waitlist:<slug>).
 */
export function ComingSoonTool({ tool }: { tool: ToolDefinition }) {
  return (
    <>
      <section className="section-padding !pb-16 !pt-24 md:!pt-28">
        <div className="container-wide max-w-3xl">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All tools
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <StatusPill status="soon" />
            <span className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">
              {tool.tagline}
            </span>
          </div>

          <h1 className="mt-6 font-serif text-display-xl font-light text-pretty">{tool.name}</h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty">
            {tool.description}
          </p>

          <p className="mt-6 text-base text-muted-foreground">
            <span className="text-foreground/70">Best for:</span> {tool.bestFor}
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-hairline !pt-16">
        <div className="container-wide max-w-3xl">
          <div className="rounded-2xl border border-border bg-muted/20 p-8 sm:p-10">
            <p className="kicker">Join the waitlist</p>
            <h2 className="mt-5 font-serif text-display-md font-light text-balance">
              Be first to use it.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              I&apos;m building this now. Add your email and I&apos;ll let you know the moment it&apos;s
              live — no spam, just the launch.
            </p>
            <div className="mt-6">
              <NewsletterForm
                source={`waitlist:${tool.slug}`}
                buttonLabel="Join the waitlist"
                successMessage="You're on the list — I'll email you when it launches."
              />
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/tools/ai-campaign-builder"
              className="link-underline text-sm font-medium text-foreground"
            >
              Meanwhile, try the live AI Campaign Builder →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
