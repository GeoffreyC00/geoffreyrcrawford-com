"use client";

import { useState } from "react";
import { Check, Copy, Printer } from "lucide-react";
import {
  BUDGET_LABELS,
  BUSINESS_TYPE_LABELS,
  GOAL_LABELS,
  type CampaignBuilderInput,
  type CampaignPlan,
  type GeneratedBy,
} from "@/lib/tools/campaign-builder";
import { cn } from "@/lib/utils";

/**
 * The campaign blueprint — a document-grade rendering of a generated plan.
 *
 * Used both for a freshly generated result and (Phase 2) for a saved run at
 * /app/campaigns/[id]. It is intentionally self-contained and presentational:
 * pass it a plan + the input it came from and it renders the full deliverable.
 */

type SectionDef = { id: string; index: string; label: string };

const SECTIONS: SectionDef[] = [
  { id: "overview", index: "01", label: "Campaign Overview" },
  { id: "funnel", index: "02", label: "Funnel Recommendation" },
  { id: "budget", index: "03", label: "Budget Allocation" },
  { id: "audience", index: "04", label: "Audience Strategy" },
  { id: "creative", index: "05", label: "Creative Angles" },
  { id: "landing", index: "06", label: "Landing Page Recommendations" },
  { id: "tracking", index: "07", label: "Tracking Setup" },
  { id: "launch", index: "08", label: "7-Day Launch Plan" },
];

function Section({
  def,
  children,
}: {
  def: SectionDef;
  children: React.ReactNode;
}) {
  return (
    <section id={def.id} className="scroll-mt-28 border-t border-hairline py-10 md:py-12">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-muted-foreground">{def.index}</span>
        <h3 className="font-serif text-2xl font-light tracking-tight text-foreground">
          {def.label}
        </h3>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((p) => (
        <p key={p} className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
          {p}
        </p>
      ))}
    </div>
  );
}

/** Serialize a plan to clean plaintext for the Copy action. */
function planToText(plan: CampaignPlan): string {
  const lines: string[] = [];
  const h = (s: string) => lines.push("", s.toUpperCase(), "");
  lines.push("CAMPAIGN BLUEPRINT", plan.summary);

  h("01 · Campaign Overview");
  plan.structure.forEach((c, i) => lines.push(`${i + 1}. ${c.name} — ${c.detail}`));

  h("02 · Funnel Recommendation");
  plan.funnelStrategy.forEach((p) => lines.push(`- ${p}`));

  h("03 · Budget Allocation");
  lines.push(plan.budgetSummary);
  plan.budgetAllocation.forEach((b) => lines.push(`- ${b.label}: ${b.percent}%`));

  h("04 · Audience Strategy");
  plan.audienceStrategy.forEach((p) => lines.push(`- ${p}`));

  h("05 · Creative Angles");
  plan.creativeAngles.forEach((a, i) => lines.push(`${i + 1}. ${a}`));

  h("06 · Landing Page Recommendations");
  plan.landingPageNotes.forEach((n) => lines.push(`- ${n}`));

  h("07 · Tracking Setup");
  plan.tracking.forEach((t) => lines.push(`- ${t}`));

  h("08 · 7-Day Launch Plan");
  plan.actionPlan.forEach((s) => lines.push(`${s.day}: ${s.task}`));
  lines.push("", "What to watch:");
  plan.whatToWatch.forEach((m) => lines.push(`- ${m.metric}: ${m.why}`));

  return lines.join("\n");
}

function ActionButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
    >
      {children}
    </button>
  );
}

export function BlueprintDocument({
  plan,
  input,
  generatedBy,
}: {
  plan: CampaignPlan;
  input: CampaignBuilderInput;
  generatedBy: GeneratedBy;
}) {
  const [copied, setCopied] = useState(false);

  const meta = [
    BUSINESS_TYPE_LABELS[input.businessType],
    plan.platformLabel,
    BUDGET_LABELS[input.budget],
    GOAL_LABELS[input.goal],
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(planToText(plan));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <article className="blueprint">
      {/* Document header */}
      <header className="border-b border-hairline pb-10">
        <p className="kicker">Campaign Blueprint</p>
        <h1 className="mt-5 max-w-3xl font-serif text-display-md font-light leading-snug text-balance">
          {plan.summary}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {meta.map((m) => (
            <span
              key={m}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {generatedBy === "ai"
              ? "Generated with AI · refined from a strategist's framework"
              : "Built from a marketing strategist's framework"}
            {plan.platformAssumed && ` · platform suggested: ${plan.platformLabel}`}
          </p>
          <div className="no-print flex items-center gap-2">
            <ActionButton onClick={copy}>
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </ActionButton>
            <ActionButton onClick={() => window.print()}>
              <Printer className="h-4 w-4" />
              Print / PDF
            </ActionButton>
          </div>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[12rem_1fr] lg:gap-16">
        {/* Table of contents */}
        <aside className="no-print hidden lg:block">
          <nav className="sticky top-28">
            <p className="kicker mb-4">Contents</p>
            <ol className="space-y-2.5">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-mono text-xs">{s.index}</span>
                    <span className="link-underline">{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Sections */}
        <div>
          <Section def={SECTIONS[0]}>
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
          </Section>

          <Section def={SECTIONS[1]}>
            <Paragraphs items={plan.funnelStrategy} />
          </Section>

          <Section def={SECTIONS[2]}>
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
                    <div className="h-px bg-foreground/45" style={{ width: `${b.percent}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section def={SECTIONS[3]}>
            <Paragraphs items={plan.audienceStrategy} />
          </Section>

          <Section def={SECTIONS[4]}>
            <ol className="space-y-4">
              {plan.creativeAngles.map((a, i) => (
                <li key={a} className="grid grid-cols-[auto_1fr] gap-x-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
                    {a}
                  </p>
                </li>
              ))}
            </ol>
          </Section>

          <Section def={SECTIONS[5]}>
            <ul className="space-y-3">
              {plan.landingPageNotes.map((n) => (
                <li
                  key={n}
                  className="text-[15px] leading-relaxed text-muted-foreground text-pretty"
                >
                  {n}
                </li>
              ))}
            </ul>
          </Section>

          <Section def={SECTIONS[6]}>
            <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {plan.tracking.map((t) => (
                <li key={t} className="text-[15px] leading-relaxed text-foreground/90">
                  {t}
                </li>
              ))}
            </ul>
          </Section>

          <Section def={SECTIONS[7]}>
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

            <div className="mt-8 border-t border-hairline pt-8">
              <p className="kicker mb-5">What to watch as it runs</p>
              <ul className="space-y-4">
                {plan.whatToWatch.map((m) => (
                  <li key={m.metric} className="grid gap-x-6 sm:grid-cols-[10rem_1fr]">
                    <span className="font-serif text-lg font-light text-foreground">
                      {m.metric}
                    </span>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground text-pretty sm:mt-0">
                      {m.why}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <div className={cn("border-t border-hairline")} />
        </div>
      </div>
    </article>
  );
}
