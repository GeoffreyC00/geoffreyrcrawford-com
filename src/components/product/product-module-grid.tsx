"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ModulePreviewType } from "@/lib/data/platform-case-study";
import { productModules } from "@/lib/data/platform-case-study";

function MiniPreview({ type }: { type: ModulePreviewType }) {
  const barHeights = [45, 62, 38, 71, 55, 68, 48, 75];

  switch (type) {
    case "briefing":
      return (
        <div className="space-y-1.5 p-3">
          <div className="h-2 w-16 rounded bg-accent/40" />
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded border border-white/[0.06] bg-white/[0.02] p-1.5">
                <div className="h-1 w-full rounded bg-zinc-700" />
                <div className="mt-1 h-1 w-3/4 rounded bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>
      );
    case "attribution":
      return (
        <div className="p-3">
          <div className="grid grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded bg-white/[0.03] p-1.5 text-center">
                <div className="h-1.5 w-full rounded bg-accent/30" />
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-1">
                <div className="h-1 flex-1 rounded bg-zinc-800" />
                <div className="h-1 w-8 rounded bg-zinc-700" />
              </div>
            ))}
          </div>
        </div>
      );
    case "portfolio":
      return (
        <div className="space-y-1 p-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1 flex-1 rounded bg-zinc-800" />
              <div className="h-1 w-6 rounded bg-emerald-500/30" />
            </div>
          ))}
        </div>
      );
    case "budget":
      return (
        <div className="space-y-2 p-3">
          {[88, 110, 94].map((pct, i) => (
            <div key={i}>
              <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full rounded-full bg-accent/40" style={{ width: `${Math.min(pct, 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    case "alerts":
      return (
        <div className="space-y-1.5 p-3">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <div className="h-1 flex-1 rounded bg-zinc-800" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <div className="h-1 flex-1 rounded bg-zinc-800" />
          </div>
        </div>
      );
    default:
      return (
        <div className="flex h-full items-end gap-1 p-3">
          {barHeights.slice(0, 6).map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-accent/25"
              style={{ height: `${h * 0.5}%` }}
            />
          ))}
        </div>
      );
  }
}

function ModuleModal({
  module,
  onClose,
}: {
  module: (typeof productModules)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0C0E] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/[0.06] px-6 py-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-editorial text-zinc-500">
              Product module · demo
            </p>
            <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{module.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-hidden border-b border-white/[0.06] bg-black/30">
          <div className="h-36 sm:h-44">
            <MiniPreview type={module.preview} />
          </div>
        </div>

        <div className="px-6 py-5">
          <p className="text-base leading-relaxed text-muted-foreground">{module.detail}</p>
          <p className="mt-4 font-mono text-[10px] text-zinc-600">
            Fictional demo data · no confidential information
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Premium product module cards with detail modal. */
export function ProductModuleGrid() {
  const [active, setActive] = useState<(typeof productModules)[number] | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productModules.map((mod, i) => (
          <motion.button
            key={mod.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.04 }}
            onClick={() => setActive(mod)}
            className="group product-card text-left"
          >
            <div className="overflow-hidden rounded-t-xl border-b border-white/[0.06] bg-[#0A0A0C]">
              <MiniPreview type={mod.preview} />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-light text-foreground transition-colors group-hover:text-accent">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
              <span className="mt-4 inline-block text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                View module →
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <ModuleModal module={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
