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

export function CaseStudyCard({ study, featured = false }: CaseStudyCardProps) {
  return (
    <Link href={`/work/${study.slug}`} className="group block h-full">
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover",
          featured && "lg:p-2"
        )}
      >
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

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {study.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
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
