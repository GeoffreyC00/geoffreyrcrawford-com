"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlueprintDocument } from "@/components/tools/blueprint-document";
import { SaveWorkspacePrompt } from "@/components/tools/save-workspace-prompt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGET_LABELS,
  BUSINESS_TYPE_LABELS,
  FORM_OPTIONS,
  GOAL_LABELS,
  generateCampaignPlan,
  type CampaignBuilderInput,
  type CampaignPlan,
  type GeneratedBy,
} from "@/lib/tools/campaign-builder";
import { cn } from "@/lib/utils";

type FormState = Partial<CampaignBuilderInput>;

/** Fields required to advance each step. */
const STEP_FIELDS: (keyof CampaignBuilderInput)[][] = [
  ["businessType", "selling"],
  ["budget", "platform"],
  ["goal", "audience"],
  ["challenge", "landingStatus"],
  [],
];

const STEP_TITLES = [
  "About your business",
  "Budget & platform",
  "Goal & audience",
  "A little context",
  "Review & build",
];

const LOADING_MESSAGES = [
  "Structuring your campaigns…",
  "Allocating budget across the funnel…",
  "Mapping your audience strategy…",
  "Writing creative angles…",
  "Building your tracking plan…",
];

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="kicker">{label}</legend>
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-4">{children}</div>
      {error && <p className="mt-2 text-xs text-red-400">This one&apos;s required.</p>}
    </fieldset>
  );
}

function OptionGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value?: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(opt.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
              selected
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function CampaignBuilderWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [plan, setPlan] = useState<CampaignPlan | null>(null);
  const [generatedBy, setGeneratedBy] = useState<GeneratedBy>("rules");
  const [loadingMsg, setLoadingMsg] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const totalSteps = STEP_FIELDS.length;

  function set<K extends keyof CampaignBuilderInput>(key: K, value: CampaignBuilderInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: false }));
  }

  function validateStep(index: number): boolean {
    const next: Record<string, boolean> = {};
    for (const key of STEP_FIELDS[index]) {
      const value = form[key];
      if (typeof value === "string" ? !value.trim() : !value) next[key] = true;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function scrollTop() {
    requestAnimationFrame(() =>
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  function next() {
    if (!validateStep(step)) return;
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
      scrollTop();
    }
  }

  function back() {
    if (step > 0) {
      setStep((s) => s - 1);
      scrollTop();
    }
  }

  // Cycle the loading copy so generation reads like real work.
  useEffect(() => {
    if (status !== "loading") return;
    const id = setInterval(
      () => setLoadingMsg((m) => (m + 1) % LOADING_MESSAGES.length),
      1100
    );
    return () => clearInterval(id);
  }, [status]);

  async function build() {
    // Final guard across all required fields.
    for (let i = 0; i < totalSteps; i++) {
      if (!validateStep(i)) {
        setStep(i);
        scrollTop();
        return;
      }
    }

    const payload = form as CampaignBuilderInput;
    setStatus("loading");
    setLoadingMsg(0);

    let result: CampaignPlan;
    let by: GeneratedBy = "rules";
    try {
      const res = await fetch("/api/campaign-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        result = data.plan as CampaignPlan;
        by = (data.generatedBy as GeneratedBy) ?? "rules";
      } else {
        result = generateCampaignPlan(payload);
      }
    } catch {
      result = generateCampaignPlan(payload);
    }

    setPlan(result);
    setGeneratedBy(by);
    setStatus("done");

    // Cache the run so a future account signup (Phase 2) can persist it.
    try {
      sessionStorage.setItem(
        "acb:lastRun",
        JSON.stringify({ tool: "ai-campaign-builder", input: payload, output: result, generatedBy: by })
      );
    } catch {
      /* storage unavailable — non-fatal */
    }

    scrollTop();
  }

  function restart() {
    setStatus("idle");
    setPlan(null);
    setStep(0);
    setForm({});
    setErrors({});
    scrollTop();
  }

  // ---- Result view ----
  if (status === "done" && plan) {
    const input = form as CampaignBuilderInput;
    return (
      <div ref={topRef} className="mx-auto max-w-5xl scroll-mt-24">
        <BlueprintDocument plan={plan} input={input} generatedBy={generatedBy} />
        <div className="mt-12">
          <SaveWorkspacePrompt />
        </div>
        <div className="no-print mt-10">
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Build another campaign
          </button>
        </div>
      </div>
    );
  }

  // ---- Loading view ----
  if (status === "loading") {
    return (
      <div ref={topRef} className="mx-auto max-w-2xl scroll-mt-24 py-16 text-center">
        <p className="font-serif text-display-md font-light text-foreground">
          {LOADING_MESSAGES[loadingMsg]}
        </p>
        <div className="mx-auto mt-8 h-px w-48 overflow-hidden bg-hairline">
          <div className="h-px w-1/3 animate-[loadingbar_1.1s_ease-in-out_infinite] bg-foreground/50" />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Building your blueprint…</p>
      </div>
    );
  }

  // ---- Wizard view ----
  return (
    <div ref={topRef} className="mx-auto max-w-2xl scroll-mt-24">
      {/* Progress */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          <p className="kicker">
            Step {step + 1} of {totalSteps}
          </p>
          <p className="text-sm text-muted-foreground">{STEP_TITLES[step]}</p>
        </div>
        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-0.5 flex-1 rounded-full transition-colors duration-300",
                i <= step ? "bg-foreground" : "bg-hairline"
              )}
            />
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {step === 0 && (
          <>
            <Field label="What kind of business is this?" error={errors.businessType}>
              <OptionGroup
                options={FORM_OPTIONS.businessType}
                value={form.businessType}
                onChange={(v) => set("businessType", v)}
              />
            </Field>
            <Field label="What are you selling?" error={errors.selling}>
              <Input
                value={form.selling ?? ""}
                onChange={(e) => set("selling", e.target.value)}
                placeholder="e.g. premium dog supplements, B2B payroll software, a $2k coaching program"
                maxLength={500}
              />
            </Field>
          </>
        )}

        {step === 1 && (
          <>
            <Field label="Monthly ad budget" error={errors.budget}>
              <OptionGroup
                options={FORM_OPTIONS.budget}
                value={form.budget}
                onChange={(v) => set("budget", v)}
              />
            </Field>
            <Field
              label="Primary platform"
              hint="Not sure? Pick &ldquo;Not sure&rdquo; and I&apos;ll recommend one."
              error={errors.platform}
            >
              <OptionGroup
                options={FORM_OPTIONS.platform}
                value={form.platform}
                onChange={(v) => set("platform", v)}
              />
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <Field label="Primary goal" error={errors.goal}>
              <OptionGroup
                options={FORM_OPTIONS.goal}
                value={form.goal}
                onChange={(v) => set("goal", v)}
              />
            </Field>
            <Field label="Who are you trying to reach?" error={errors.audience}>
              <Textarea
                value={form.audience ?? ""}
                onChange={(e) => set("audience", e.target.value)}
                placeholder="Demographics, job titles, interests, location, pain points…"
                maxLength={1000}
              />
            </Field>
          </>
        )}

        {step === 3 && (
          <>
            <Field label="Biggest current challenge" error={errors.challenge}>
              <OptionGroup
                options={FORM_OPTIONS.challenge}
                value={form.challenge}
                onChange={(v) => set("challenge", v)}
              />
            </Field>
            <Field label="Landing page status" error={errors.landingStatus}>
              <OptionGroup
                options={FORM_OPTIONS.landingStatus}
                value={form.landingStatus}
                onChange={(v) => set("landingStatus", v)}
              />
            </Field>
          </>
        )}

        {step === 4 && (
          <>
            <div>
              <p className="kicker mb-5">Here&apos;s what I&apos;ll build from</p>
              <dl className="divide-y divide-hairline border-y border-hairline">
                {[
                  ["Business", form.businessType && BUSINESS_TYPE_LABELS[form.businessType]],
                  ["Selling", form.selling],
                  ["Budget", form.budget && BUDGET_LABELS[form.budget]],
                  ["Platform", form.platform && FORM_OPTIONS.platform.find((o) => o.value === form.platform)?.label],
                  ["Goal", form.goal && GOAL_LABELS[form.goal]],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="text-sm text-foreground">{value || "—"}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Field label="Email (optional)" hint="To save or send yourself the blueprint later.">
              <Input
                type="email"
                value={form.email ?? ""}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@email.com"
                className="sm:max-w-sm"
              />
            </Field>
          </>
        )}
      </div>

      {/* Nav */}
      <div className="mt-12 flex items-center justify-between border-t border-hairline pt-8">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <span className="text-sm text-muted-foreground">Free · no login required</span>
        )}

        {step < totalSteps - 1 ? (
          <Button type="button" size="lg" onClick={next}>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="button" size="lg" onClick={build}>
            Build my blueprint
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
