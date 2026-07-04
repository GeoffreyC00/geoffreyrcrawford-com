import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

/**
 * Featured portfolio strip for the AI Marketing Systems case study — surfaces
 * on Work and Tools index pages so recruiters can find it quickly.
 */
export function AiSystemsPortfolioStrip() {
  return (
    <Reveal>
      <Link
        href="/work/ai-marketing-systems"
        className="group block rounded-3xl border border-border bg-muted/20 p-8 transition-colors hover:border-foreground/25 hover:bg-muted/40 sm:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="kicker">Portfolio · AI systems</p>
            <h2 className="mt-5 font-serif text-display-md font-light text-balance transition-colors duration-300 group-hover:text-accent">
              AI Marketing Systems
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Dashboards, attribution views, customer intelligence, and AI workflows — anonymized
              case study for product, growth ops, and performance roles.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
            <span className="link-underline">View case study</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
