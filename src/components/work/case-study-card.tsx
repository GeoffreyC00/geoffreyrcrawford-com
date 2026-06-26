import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block border-t border-border pt-7"
    >
      <h3 className="font-serif text-[2rem] font-light leading-[1.1] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[2.25rem]">
        {study.title}
      </h3>

      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        {study.subtitle}
      </p>

      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
        <span className="link-underline">View case study</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
