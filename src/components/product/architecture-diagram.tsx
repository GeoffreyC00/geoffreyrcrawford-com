"use client";

import { motion } from "framer-motion";
import { architectureFlow } from "@/lib/data/platform-case-study";

const sourceIcons: Record<string, string> = {
  meta: "M",
  google: "G",
  microsoft: "MS",
  crm: "CRM",
  hubspot: "HS",
  orders: "Ord",
};

function FlowNode({
  label,
  variant = "default",
  delay = 0,
}: {
  label: string;
  variant?: "default" | "accent" | "output";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className={
        variant === "accent"
          ? "rounded-xl border border-accent/30 bg-accent/10 px-5 py-3 text-center"
          : variant === "output"
            ? "rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-center"
            : "rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-center"
      }
    >
      <p
        className={
          variant === "accent"
            ? "text-sm font-medium text-accent"
            : variant === "output"
              ? "text-sm font-medium text-emerald-400"
              : "text-sm text-foreground/90"
        }
      >
        {label}
      </p>
    </motion.div>
  );
}

function FlowArrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center py-2"
    >
      <div className="h-6 w-px bg-gradient-to-b from-white/20 to-accent/40" />
      <div className="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-accent/50" />
    </motion.div>
  );
}

/** Animated enterprise architecture diagram. */
export function ArchitectureDiagram() {
  const { sources, pipeline, database, aiLayer, dashboard, output } = architectureFlow;

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Source nodes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3"
      >
        {sources.map((src, i) => (
          <motion.div
            key={src.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-3 text-center transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
          >
            <span className="font-mono text-[10px] text-accent/70">
              {sourceIcons[src.icon] ?? "·"}
            </span>
            <p className="mt-1 text-[10px] leading-tight text-zinc-400 sm:text-[11px]">{src.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <FlowArrow delay={0.3} />
      <FlowNode label={pipeline} variant="default" delay={0.35} />
      <FlowArrow delay={0.4} />
      <FlowNode label={database} variant="default" delay={0.45} />
      <FlowArrow delay={0.5} />
      <FlowNode label={aiLayer} variant="accent" delay={0.55} />
      <FlowArrow delay={0.6} />
      <FlowNode label={dashboard} variant="accent" delay={0.65} />
      <FlowArrow delay={0.7} />
      <FlowNode label={output} variant="output" delay={0.75} />

      {/* Animated flow pulse */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
