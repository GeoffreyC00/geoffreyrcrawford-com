import { marketingOsSampleKpis } from "@/lib/data/ai-marketing-systems";

/**
 * CSS-only dashboard mockups for the portfolio case study. All numbers are
 * sample/fictional — no real client data, no screenshots of confidential systems.
 */

function PreviewChrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-zinc-950/80 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-editorial text-zinc-500">
          {title} · sample data
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

/** Marketing OS — executive command center preview. */
export function MarketingOsPreview() {
  return (
    <PreviewChrome title="Marketing OS">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {marketingOsSampleKpis.map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3">
            <p className="text-[11px] text-zinc-500">{kpi.label}</p>
            <p className="mt-1 font-serif text-xl font-light text-zinc-100">{kpi.value}</p>
            <p className="mt-0.5 text-xs text-emerald-500/90">{kpi.delta} vs prior week</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        {/* Fake spend trend bars */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-[11px] uppercase tracking-editorial text-zinc-500">Spend vs plan</p>
          <div className="mt-4 flex h-24 items-end gap-1.5">
            {[42, 58, 51, 67, 72, 65, 78, 82, 76, 88, 91, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Fake alert panel */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-[11px] uppercase tracking-editorial text-zinc-500">Alerts</p>
          <ul className="mt-3 space-y-2.5 text-xs text-zinc-400">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              Meta prospecting CPA up 18% — review creative fatigue
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              Google brand ROAS holding at 6.1× — scale opportunity
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
              Budget pacing on track for Q2 plan
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {["Briefing", "Attribution", "Customers", "Budget", "Creative"].map((mod) => (
          <div
            key={mod}
            className="rounded-md border border-zinc-800/80 bg-zinc-900/30 px-2 py-2 text-center text-[10px] text-zinc-500"
          >
            {mod}
          </div>
        ))}
      </div>
    </PreviewChrome>
  );
}

type ChannelRow = { channel: string; spend: string; roas: string; share: string };

/** Attribution & ROI dashboard preview with sample channel breakdown. */
export function AttributionPreview({ channels }: { channels: ChannelRow[] }) {
  return (
    <PreviewChrome title="Attribution & ROI">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total spend", value: "$102K" },
          { label: "Attributed revenue", value: "$124K" },
          { label: "Blended ROAS", value: "3.2×" },
          { label: "Paid-influenced", value: "68%" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3">
            <p className="text-[11px] text-zinc-500">{m.label}</p>
            <p className="mt-1 font-serif text-xl font-light text-zinc-100">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-zinc-800">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/60 text-zinc-500">
              <th className="px-4 py-2.5 font-normal">Channel</th>
              <th className="px-4 py-2.5 font-normal">Spend</th>
              <th className="px-4 py-2.5 font-normal">ROAS</th>
              <th className="hidden px-4 py-2.5 font-normal sm:table-cell">Rev. share</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((row) => (
              <tr key={row.channel} className="border-b border-zinc-800/60 last:border-0">
                <td className="px-4 py-3 text-zinc-300">{row.channel}</td>
                <td className="px-4 py-3 text-zinc-400">{row.spend}</td>
                <td className="px-4 py-3 text-zinc-300">{row.roas}</td>
                <td className="hidden px-4 py-3 text-zinc-400 sm:table-cell">{row.share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[10px] text-zinc-600">
        Sample attribution model · last-touch with paid assist · fictional data
      </p>
    </PreviewChrome>
  );
}
