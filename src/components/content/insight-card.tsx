import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InsightMeta } from "@/lib/content/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function InsightCard({ insight }: { insight: InsightMeta }) {
  return (
    <Link href={insight.path} className="group block border-t border-border pt-7">
      <div className="flex items-center justify-between">
        <span className="kicker">{insight.typeLabel}</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>
      <h3 className="mt-6 font-serif text-2xl font-light leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent">
        {insight.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        {insight.description}
      </p>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        {formatDate(insight.publishedAt)} — {insight.readingTime}
      </p>
    </Link>
  );
}
