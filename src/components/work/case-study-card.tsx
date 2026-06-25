import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  index?: number;
  featured?: boolean;
};

export function CaseStudyCard({ study, index, featured = false }: CaseStudyCardProps) {
  const headlineMetric = study.metrics[0];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative block border-t border-border pt-7"
    >
      <div className="flex items-center justify-between">
        <span className="kicker">{study.category}</span>
        {typeof index === "number" && (
          <span className="font-mono text-xs text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <h3
        className={cn(
          "mt-6 font-serif font-light leading-[1.08] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent",
          featured ? "text-[2rem] sm:text-[2.5rem]" : "text-[1.75rem]"
        )}
      >
        {study.title}
      </h3>

      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
        {study.subtitle}
      </p>

      <div className="mt-8 flex items-end justify-between gap-6">
        {headlineMetric && (
          <div>
            <span className="font-serif text-2xl font-light text-foreground">
              {headlineMetric.value}
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">
              {headlineMetric.label}
            </span>
          </div>
        )}
        <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <span className="link-underline">View case study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
