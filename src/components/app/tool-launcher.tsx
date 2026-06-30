import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { liveTools } from "@/lib/tools/registry";

/** Grid of launchable tools, sourced from the registry — new tools appear here automatically. */
export function ToolLauncher() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-hairline sm:grid-cols-2">
      {liveTools.map((tool) => (
        <Link
          key={tool.slug}
          href={tool.href}
          className="group flex flex-col bg-background p-6 transition-colors hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl font-light text-foreground">{tool.name}</h3>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            {tool.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
