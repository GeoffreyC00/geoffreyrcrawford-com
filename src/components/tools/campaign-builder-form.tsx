"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CampaignPlanOutput } from "@/components/tools/campaign-plan-output";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FORM_OPTIONS,
  generateCampaignPlan,
  type CampaignBuilderInput,
  type CampaignPlan,
  type GeneratedBy,
} from "@/lib/tools/campaign-builder";
import { cn } from "@/lib/utils";

type FormState = Partial<CampaignBuilderInput>;

const REQUIRED_SELECTS = ["businessType", "budget", "platform", "goal", "challenge", "landingStatus"] as const;

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="kicker">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </legend>
      <div className="mt-4">{children}</div>
      {error && <p className="mt-2 text-xs text-red-400">Please make a selection.</p>}
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

export function CampaignBuilderForm() {
  const [form, setForm] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [plan, setPlan] = useState<CampaignPlan | null>(null);
  const [generatedBy, setGeneratedBy] = useState<GeneratedBy>("rules");
  const topRef = useRef<HTMLDivElement>(null);

  function set<K extends keyof CampaignBuilderInput>(key: K, value: CampaignBuilderInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: false }));
  }

  function validate(): boolean {
    const next: Record<string, boolean> = {};
    for (const key of REQUIRED_SELECTS) {
      if (!form[key]) next[key] = true;
    }
    if (!form.selling?.trim()) next.selling = true;
    if (!form.audience?.trim()) next.audience = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      // Bring the first error into view.
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const payload = form as CampaignBuilderInput;
    setStatus("loading");

    try {
      const res = await fetch("/api/campaign-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        setPlan(data.plan as CampaignPlan);
        setGeneratedBy((data.generatedBy as GeneratedBy) ?? "rules");
      } else {
        setPlan(generateCampaignPlan(payload));
        setGeneratedBy("rules");
      }
    } catch {
      // Network failure — generate locally so the tool always works.
      setPlan(generateCampaignPlan(payload));
      setGeneratedBy("rules");
    }

    setStatus("done");
    requestAnimationFrame(() =>
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  function startOver() {
    setStatus("idle");
    setPlan(null);
    requestAnimationFrame(() =>
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  // ----- Output view -----
  if (status === "done" && plan) {
    return (
      <div ref={topRef} className="scroll-mt-24">
        <CampaignPlanOutput plan={plan} generatedBy={generatedBy} />

        {/* Lead capture */}
        <div className="mt-12 grid gap-8 border-y border-hairline py-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">Take it with you</p>
            <h2 className="mt-5 font-serif text-display-md font-light text-balance">
              Want the printable version plus my campaign setup checklist?
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              I&apos;ll send a printable copy and the checklist I use to launch campaigns.
            </p>
            <div className="mt-6">
              <NewsletterForm
                source="ai-campaign-builder"
                buttonLabel="Send me the checklist"
                successMessage="Checklist coming soon — you're on the list."
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="button"
            onClick={startOver}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Build another plan
          </button>
        </div>
      </div>
    );
  }

  // ----- Form view -----
  return (
    <div ref={topRef} className="scroll-mt-24">
      <form onSubmit={handleSubmit} className="space-y-12">
      <Field label="Business type" required error={errors.businessType}>
        <OptionGroup
          options={FORM_OPTIONS.businessType}
          value={form.businessType}
          onChange={(v) => set("businessType", v)}
        />
      </Field>

      <Field label="What are you selling?" required error={errors.selling}>
        <Input
          value={form.selling ?? ""}
          onChange={(e) => set("selling", e.target.value)}
          placeholder="e.g. premium dog supplements, B2B payroll software, a $2k coaching program"
          maxLength={500}
        />
      </Field>

      <Field label="Monthly ad budget" required error={errors.budget}>
        <OptionGroup
          options={FORM_OPTIONS.budget}
          value={form.budget}
          onChange={(v) => set("budget", v)}
        />
      </Field>

      <Field label="Primary platform" required error={errors.platform}>
        <OptionGroup
          options={FORM_OPTIONS.platform}
          value={form.platform}
          onChange={(v) => set("platform", v)}
        />
      </Field>

      <Field label="Primary goal" required error={errors.goal}>
        <OptionGroup
          options={FORM_OPTIONS.goal}
          value={form.goal}
          onChange={(v) => set("goal", v)}
        />
      </Field>

      <Field label="Target audience" required error={errors.audience}>
        <Textarea
          value={form.audience ?? ""}
          onChange={(e) => set("audience", e.target.value)}
          placeholder="Who are you trying to reach? Demographics, job titles, interests, location, pain points…"
          maxLength={1000}
        />
      </Field>

      <Field label="Biggest current challenge" required error={errors.challenge}>
        <OptionGroup
          options={FORM_OPTIONS.challenge}
          value={form.challenge}
          onChange={(v) => set("challenge", v)}
        />
      </Field>

      <Field label="Landing page status" required error={errors.landingStatus}>
        <OptionGroup
          options={FORM_OPTIONS.landingStatus}
          value={form.landingStatus}
          onChange={(v) => set("landingStatus", v)}
        />
      </Field>

      <Field label="Email (optional)">
        <Input
          type="email"
          value={form.email ?? ""}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@email.com — to get the printable version later"
          className="sm:max-w-sm"
        />
      </Field>

      <div className="flex items-center gap-6 border-t border-hairline pt-10">
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? "Building…" : "Build My Plan"}
          {status !== "loading" && <ArrowRight className="h-4 w-4" />}
        </Button>
        <span className="text-sm text-muted-foreground">Free · no login required</span>
      </div>
      </form>
    </div>
  );
}
