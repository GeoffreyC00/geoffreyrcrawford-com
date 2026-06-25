import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  featured?: boolean;
};

const categoryAccent: Record<string, string> = {
  eCommerce: "from-emerald-500/20 to-transparent",
  "Creator Economy & Digital Products": "from-indigo-500/20 to-transparent",
  B2B: "from-blue-500/20 to-transparent",
  "Analytics & Automation": "from-cyan-500/20 to-transparent",
  "Creative & Video": "from-violet-500/20 to-transparent",
  "Web & CRO": "from-amber-500/20 to-transparent",
};

export function CaseStudyCard({ study, featured = false }: CaseStudyCardProps) {
  const gradient = categoryAccent[study.category] ?? "from-accent/15 to-transparent";

  return (
    <Link href={`/work/${study.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
        <div className={cn("h-1.5 bg-gradient-to-r", gradient)} />
        <CardContent className={cn("flex h-full flex-col p-6", featured && "lg:p-8")}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                {study.category}
              </p>
              <h3
                className={cn(
                  "mt-2 font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent",
                  featured ? "text-2xl" : "text-xl"
                )}
              >
                {study.title}
              </h3>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.subtitle}</p>

          {study.metrics.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-4">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {study.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
