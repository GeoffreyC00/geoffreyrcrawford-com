import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    <Link href={insight.path} className="group block h-full">
      <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="secondary">{insight.typeLabel}</Badge>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
            {insight.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {insight.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {formatDate(insight.publishedAt)} · {insight.readingTime}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
