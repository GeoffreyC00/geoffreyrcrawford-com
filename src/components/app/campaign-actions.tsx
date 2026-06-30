"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import type { CampaignBuilderInput } from "@/lib/tools/campaign-builder";

const PREFILL_KEY = "acb:prefill";

/**
 * Edit / delete actions for a saved campaign. "Edit" stashes the inputs so the
 * builder opens prefilled at the review step; "Delete" removes the run.
 */
export function CampaignActions({
  id,
  input,
}: {
  id: string;
  input: CampaignBuilderInput;
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const [confirming, setConfirming] = useState(false);

  function edit() {
    try {
      sessionStorage.setItem(PREFILL_KEY, JSON.stringify(input));
    } catch {
      /* non-fatal */
    }
    router.push("/tools/ai-campaign-builder");
  }

  async function remove() {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    setDeleting(true);
    try {
      const res = await fetch(`/api/tool-runs/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.push("/app");
        router.refresh();
        return;
      }
    } catch {
      /* fall through */
    }
    setDeleting(false);
    setConfirming(false);
  }

  return (
    <div className="no-print flex items-center gap-2">
      <button
        type="button"
        onClick={edit}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
      >
        <Pencil className="h-4 w-4" />
        Edit & rebuild
      </button>
      <button
        type="button"
        onClick={remove}
        disabled={deleting}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-red-500/40 hover:text-red-400"
      >
        <Trash2 className="h-4 w-4" />
        {confirming ? "Confirm delete" : "Delete"}
      </button>
    </div>
  );
}
