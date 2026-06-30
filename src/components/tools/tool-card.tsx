import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/data/tools";
import { cn } from "@/lib/utils";

type ToolCardProps = {
  tool: Tool;
  /** Override the catalog copy for a specific placement (e.g. homepage). */
  description?: string;
  cta?: string;
  className?: string;
};

/** Small status label — Live (accent) or Coming soon (muted). */
export function StatusPill({ status }: { status: Tool["status"] }) {
  const live = status === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        live
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-border text-muted-foreground"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          live ? "bg-accent" : "bg-muted-foreground/50"
        )}
      />
      {live ? "Live" : "Coming soon"}
    </span>
  );
}

/**
 * Large, scannable product card for a single tool. Bordered, generous padding,
 * a status pill, value prop, "Best for" line, and a clear CTA. Live tools link
 * straight to the tool; coming-soon tools link to their preview/waitlist page.
 */
export function ToolCard({ tool, description, cta, className }: ToolCardProps) {
  const live = tool.status === "live";
  const ctaLabel = cta ?? tool.cta;

  return (
    <Link
      href={tool.href}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-muted/20 p-7 transition-colors duration-300 hover:border-foreground/25 hover:bg-muted/40 sm:p-8",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <StatusPill status={tool.status} />
        <span className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">
          {tool.tagline}
        </span>
      </div>

      <h3 className="mt-6 font-serif text-2xl font-light leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.75rem]">
        {tool.name}
      </h3>

      <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
        {description ?? tool.description}
      </p>

      <p className="mt-5 text-sm text-muted-foreground">
        <span className="text-foreground/70">Best for:</span> {tool.bestFor}
      </p>

      <span
        className={cn(
          "mt-7 inline-flex items-center gap-1.5 text-sm font-medium",
          live ? "text-foreground" : "text-muted-foreground"
        )}
      >
        <span className="link-underline">{ctaLabel}</span>
        {live ? (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        ) : (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </Link>
  );
}
