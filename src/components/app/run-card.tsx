import Link from "next/link";
import { getTool } from "@/lib/tools/registry";
import type { ToolRun } from "@/lib/db/tool-runs";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

/** A single saved run in the campaign history list. */
export function RunCard({ run }: { run: ToolRun }) {
  const tool = getTool(run.tool);

  return (
    <Link
      href={`/app/campaigns/${run.id}`}
      className="group block border-t border-hairline py-6 transition-colors first:border-t-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-lg font-light text-foreground transition-colors group-hover:text-accent">
          {run.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {formatDate(run.created_at)}
        </span>
      </div>
      {run.summary && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          {run.summary}
        </p>
      )}
      <p className="mt-3 text-xs uppercase tracking-editorial text-muted-foreground">
        {tool?.name ?? run.tool}
        {run.generated_by === "ai" ? " · AI" : ""}
      </p>
    </Link>
  );
}
