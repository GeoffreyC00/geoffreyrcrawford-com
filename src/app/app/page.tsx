import Link from "next/link";
import { PendingRunSync } from "@/components/app/pending-run-sync";
import { RunCard } from "@/components/app/run-card";
import { ToolLauncher } from "@/components/app/tool-launcher";
import { listToolRuns } from "@/lib/db/tool-runs";

export default async function DashboardPage() {
  const runs = await listToolRuns();

  return (
    <div>
      <PendingRunSync />

      <header className="mb-12">
        <h1 className="font-serif text-display-md font-light">Dashboard</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Your tools and saved campaigns, all in one place.
        </p>
      </header>

      {/* Tool launcher */}
      <section className="mb-16">
        <p className="kicker mb-5">Tools</p>
        <ToolLauncher />
      </section>

      {/* Campaign history */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <p className="kicker">Campaign history</p>
          {runs.length > 0 && (
            <span className="font-mono text-xs text-muted-foreground">
              {runs.length} saved
            </span>
          )}
        </div>

        {runs.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border px-6 py-14 text-center">
            <p className="font-serif text-xl font-light text-foreground">
              No saved campaigns yet.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Build a campaign and it will be saved here automatically.
            </p>
            <Link
              href="/tools/ai-campaign-builder"
              className="link-underline mt-6 inline-block text-sm font-medium text-foreground"
            >
              Build a campaign →
            </Link>
          </div>
        ) : (
          <div>
            {runs.map((run) => (
              <RunCard key={run.id} run={run} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
