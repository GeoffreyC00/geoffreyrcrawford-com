import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/data/tools";

type ToolCardProps = {
  tool: Tool;
  /** Optional ordinal shown as a mono index (e.g. on the /tools index). */
  index?: number;
  /** Override the catalog copy for a specific placement (e.g. homepage). */
  description?: string;
  cta?: string;
};

/**
 * Editorial top-rule tile for a single tool. Minimal by design — serif title,
 * one line of copy, and an underlined CTA. No boxed card, no gradient.
 */
export function ToolCard({ tool, index, description, cta }: ToolCardProps) {
  return (
    <Link href={tool.href} className="group block border-t border-border pt-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[1.75rem] font-light leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[2rem]">
          {tool.name}
        </h3>
        {index !== undefined && (
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
        {description ?? tool.description}
      </p>

      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
        <span className="link-underline">{cta ?? tool.cta}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
