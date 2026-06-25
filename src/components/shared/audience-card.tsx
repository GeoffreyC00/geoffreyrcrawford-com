import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AudienceCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  className?: string;
};

export function AudienceCard({ title, description, href, cta, className }: AudienceCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card className="h-full transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover">
        <CardContent className="flex h-full flex-col p-8">
          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
