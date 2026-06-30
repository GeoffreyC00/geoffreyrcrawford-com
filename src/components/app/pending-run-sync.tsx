"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PENDING_KEY = "acb:lastRun";

/**
 * Runs once when the dashboard mounts. If the visitor generated a campaign
 * before signing in (cached in sessionStorage by the wizard), it's persisted
 * to their new workspace, then cleared. No-op when there's nothing pending.
 */
export function PendingRunSync() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function sync() {
      let raw: string | null = null;
      try {
        raw = sessionStorage.getItem(PENDING_KEY);
      } catch {
        return;
      }
      if (!raw) return;

      try {
        const payload = JSON.parse(raw);
        const res = await fetch("/api/tool-runs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        // Clear regardless of a duplicate/late save so we don't loop.
        sessionStorage.removeItem(PENDING_KEY);
        if (res.ok && !cancelled) {
          setSaved(true);
          router.refresh();
        }
      } catch {
        // Leave it in storage for a later attempt.
      }
    }

    sync();
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (!saved) return null;

  return (
    <div className="mb-8 rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground">
      Your campaign was saved to your workspace.
    </div>
  );
}
