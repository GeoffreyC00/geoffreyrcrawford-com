import type { CampaignPlan, GeneratedBy } from "@/lib/tools/campaign-builder";

type Section = {
  index: string;
  label: string;
  children: React.ReactNode;
};

function PlanSection({ index, label, children }: Section) {
  return (
    <section className="grid gap-x-10 border-t border-hairline py-10 md:grid-cols-[5rem_1fr] md:py-12">
      <div className="mb-4 flex items-baseline gap-3 md:mb-0 md:flex-col md:gap-2">
        <span className="font-mono text-sm text-muted-foreground">{index}</span>
      </div>
      <div>
        <h3 className="kicker">{label}</h3>
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}

export function CampaignPlanOutput({
  plan,
  generatedBy,
}: {
  plan: CampaignPlan;
  generatedBy: GeneratedBy;
}) {
  return (
    <div>
      {/* Header */}
      <div>
        <p className="kicker">Your campaign plan</p>
        <p className="mt-5 max-w-2xl font-serif text-display-md font-light leading-snug text-balance">
          {plan.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>{generatedBy === "ai" ? "Generated with AI" : "Generated from a rules-based model"}</span>
          {plan.platformAssumed && (
            <span className="border-l border-hairline pl-4">
              Platform suggested: {plan.platformLabel}
            </span>
          )}
        </div>
      </div>

      <div className="mt-10">
        {/* 1 — Structure */}
        <PlanSection index="01" label="Recommended Campaign Structure">
          <ol className="space-y-5">
            {plan.structure.map((c, i) => (
              <li key={c.name} className="grid grid-cols-[auto_1fr] gap-x-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-lg font-light text-foreground">{c.name}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                    {c.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </PlanSection>

        {/* 2 — Budget allocation */}
        <PlanSection index="02" label="Budget Allocation">
          <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
            {plan.budgetSummary}
          </p>
          <ul className="mt-6 space-y-4">
            {plan.budgetAllocation.map((b) => (
              <li key={b.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] text-foreground">{b.label}</span>
                  <span className="font-mono text-sm text-muted-foreground">{b.percent}%</span>
                </div>
                <div className="mt-2 h-px w-full bg-hairline">
                  <div
                    className="h-px bg-foreground/45"
                    style={{ width: `${b.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </PlanSection>

        {/* 3 — Funnel */}
        <PlanSection index="03" label="Funnel Strategy">
          <div className="space-y-4">
            {plan.funnelStrategy.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
          </div>
        </PlanSection>

        {/* 4 — Tracking */}
        <PlanSection index="04" label="Tracking Setup">
          <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {plan.tracking.map((t) => (
              <li key={t} className="text-[15px] leading-relaxed text-foreground/90">
                {t}
              </li>
            ))}
          </ul>
        </PlanSection>

        {/* 5 — Landing page */}
        <PlanSection index="05" label="Landing Page Notes">
          <ul className="space-y-3">
            {plan.landingPageNotes.map((n) => (
              <li key={n} className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
                {n}
              </li>
            ))}
          </ul>
        </PlanSection>

        {/* 6 — Creative */}
        <PlanSection index="06" label="Creative / Messaging Angles">
          <ol className="space-y-4">
            {plan.creativeAngles.map((a, i) => (
              <li key={a} className="grid grid-cols-[auto_1fr] gap-x-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">{a}</p>
              </li>
            ))}
          </ol>
        </PlanSection>

        {/* 7 — Action plan */}
        <PlanSection index="07" label="First 7-Day Action Plan">
          <ol className="space-y-4">
            {plan.actionPlan.map((step) => (
              <li key={step.day} className="grid grid-cols-[5.5rem_1fr] gap-x-4">
                <span className="font-mono text-xs text-muted-foreground">{step.day}</span>
                <p className="text-[15px] leading-relaxed text-foreground/90 text-pretty">
                  {step.task}
                </p>
              </li>
            ))}
          </ol>
        </PlanSection>

        {/* 8 — What to watch */}
        <PlanSection index="08" label="What to Watch">
          <ul className="space-y-4">
            {plan.whatToWatch.map((m) => (
              <li key={m.metric} className="grid gap-x-6 sm:grid-cols-[10rem_1fr]">
                <span className="font-serif text-lg font-light text-foreground">{m.metric}</span>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground text-pretty sm:mt-0">
                  {m.why}
                </p>
              </li>
            ))}
          </ul>
        </PlanSection>

        <div className="border-t border-hairline" />
      </div>
    </div>
  );
}
