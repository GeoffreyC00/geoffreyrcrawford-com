import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CampaignActions } from "@/components/app/campaign-actions";
import { BlueprintDocument } from "@/components/tools/blueprint-document";
import { getToolRun } from "@/lib/db/tool-runs";
import {
  isValidCampaignPlan,
  parseCampaignInput,
  type CampaignBuilderInput,
  type CampaignPlan,
  type GeneratedBy,
} from "@/lib/tools/campaign-builder";

export const metadata = {
  title: "Saved campaign",
  robots: { index: false },
};

export default async function SavedCampaignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const run = await getToolRun(id);
  if (!run) notFound();

  // Defensive: only the campaign builder is wired today, and the stored JSON
  // must still validate before we render it as a blueprint.
  const input = parseCampaignInput(run.input);
  const validPlan = isValidCampaignPlan(run.output);

  return (
    <div>
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/app"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>
        {run.tool === "ai-campaign-builder" && input && (
          <CampaignActions id={run.id} input={input as CampaignBuilderInput} />
        )}
      </div>

      {run.tool === "ai-campaign-builder" && input && validPlan ? (
        <BlueprintDocument
          plan={run.output as CampaignPlan}
          input={input as CampaignBuilderInput}
          generatedBy={run.generated_by as GeneratedBy}
        />
      ) : (
        <div className="rounded-xl border border-dashed border-border px-6 py-14 text-center">
          <p className="font-serif text-xl font-light text-foreground">
            This campaign couldn&apos;t be displayed.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            The saved data is incomplete. Try building a new campaign.
          </p>
        </div>
      )}
    </div>
  );
}
