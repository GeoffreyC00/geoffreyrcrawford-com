"use client";

import { demoAlerts, demoBriefingColumns, demoKpis, demoNavItems } from "@/lib/data/platform-case-study";
import { cn } from "@/lib/utils";

type PlatformHeroVisualProps = {
  className?: string;
  /** Larger variant for case study hero */
  size?: "default" | "hero";
};

/**
 * Premium SaaS-style product visualization — Stripe/Linear inspired.
 * All data is fictional. Communicates the product without exposing real metrics.
 */
export function PlatformHeroVisual({ className, size = "default" }: PlatformHeroVisualProps) {
  const isHero = size === "hero";

  return (
    <div className={cn("relative", className)}>
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-accent/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-1/2 -translate-y-1/4 bg-gradient-to-t from-accent/[0.04] to-transparent"
      />

      <div
        className={cn(
          "product-frame overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0C0E] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_-12px_rgba(0,0,0,0.7)]",
          isHero && "rounded-3xl"
        )}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Marketing Intelligence Platform · demo data
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] text-emerald-500/80">Live sync</span>
          </div>
        </div>

        <div className="flex min-h-0">
          {/* Sidebar */}
          <aside className="hidden w-36 shrink-0 border-r border-white/[0.06] bg-black/20 p-3 sm:block lg:w-40">
            <p className="mb-3 px-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Modules
            </p>
            <nav className="space-y-0.5">
              {demoNavItems.map((item, i) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-[11px] transition-colors",
                    i === 0
                      ? "bg-accent/10 text-accent"
                      : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className={cn("min-w-0 flex-1 p-4 sm:p-5", isHero && "sm:p-6 lg:p-7")}>
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {demoKpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 sm:px-4 sm:py-3"
                >
                  <p className="text-[10px] text-zinc-500">{kpi.label}</p>
                  <p
                    className={cn(
                      "mt-0.5 font-serif font-light text-zinc-100",
                      isHero ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                    )}
                  >
                    {kpi.value}
                  </p>
                  <p
                    className={cn(
                      "mt-0.5 text-[10px]",
                      kpi.positive ? "text-emerald-500/90" : "text-red-400/90"
                    )}
                  >
                    {kpi.delta} vs prior week
                  </p>
                </div>
              ))}
            </div>

            {/* Chart + alerts */}
            <div className="mt-3 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                    Spend vs plan
                  </p>
                  <p className="text-[10px] text-zinc-600">Last 12 weeks</p>
                </div>
                <div className="mt-3 flex h-20 items-end gap-1 sm:h-24 sm:gap-1.5">
                  {[38, 52, 48, 61, 68, 58, 74, 79, 72, 85, 88, 82].map((h, i) => (
                    <div key={i} className="relative flex-1">
                      <div
                        className="w-full rounded-sm bg-gradient-to-t from-accent/30 to-accent/60"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                  Priority alerts
                </p>
                <ul className="mt-3 space-y-2">
                  {demoAlerts.map((alert) => (
                    <li key={alert.text} className="flex gap-2 text-[10px] leading-snug text-zinc-400 sm:text-[11px]">
                      <span
                        className={cn(
                          "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                          alert.severity === "high"
                            ? "bg-red-400"
                            : alert.severity === "medium"
                              ? "bg-amber-400"
                              : "bg-zinc-500"
                        )}
                      />
                      {alert.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Executive framework */}
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {demoBriefingColumns.map((col) => (
                <div
                  key={col.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                >
                  <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-500">{col.label}</p>
                  <p className="mt-2 text-[10px] leading-relaxed text-zinc-400 sm:text-[11px]">
                    {col.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
