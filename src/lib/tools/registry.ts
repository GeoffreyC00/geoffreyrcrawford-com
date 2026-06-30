/**
 * Tool registry — the single extension point for the platform.
 *
 * Every AI tool (current and future) registers one `ToolDefinition` here. The
 * marketing index, the dashboard launcher, and the (Phase 2) persistence layer
 * all read from this registry, so adding a tool is a matter of:
 *   1. building its engine + input/output types,
 *   2. building its result renderer,
 *   3. adding one entry below.
 *
 * No surface needs to be redesigned to accommodate a new tool. The dashboard
 * lists saved runs polymorphically by `slug`, and `summarizeRun` lets each tool
 * describe its own history cards.
 */
import type { CampaignBuilderInput, CampaignPlan } from "@/lib/tools/campaign-builder";

/** Short, human label + machine value for the dashboard run cards. */
export type RunSummary = {
  /** e.g. "eCommerce · Meta · Sales" */
  title: string;
  /** One-line description for the history card. */
  subtitle: string;
};

/**
 * A tool definition is generic over its own input/output shapes. The registry
 * stores them behind a common interface so callers can stay tool-agnostic.
 */
export type ToolDefinition<Input = unknown, Output = unknown> = {
  slug: string;
  name: string;
  category: string;
  /** One-line value prop for index + launcher cards. */
  tagline: string;
  description: string;
  /** Public route where the tool runs. */
  href: string;
  /** CTA label used on cards. */
  cta: string;
  status: "live" | "soon";
  /** Produce a dashboard-friendly summary from a saved run. */
  summarizeRun: (input: Input, output: Output) => RunSummary;
};

import {
  BUSINESS_TYPE_LABELS,
  GOAL_LABELS,
} from "@/lib/tools/campaign-builder";

const aiCampaignBuilder: ToolDefinition<CampaignBuilderInput, CampaignPlan> = {
  slug: "ai-campaign-builder",
  name: "AI Campaign Builder",
  category: "Paid media planning",
  tagline: "Paid media planning",
  description:
    "Build a practical campaign structure for Google, Meta, YouTube, Microsoft, or Amazon Ads based on your business, budget, offer, and growth goal.",
  href: "/tools/ai-campaign-builder",
  cta: "Build a Campaign",
  status: "live",
  summarizeRun: (input, output) => ({
    title: `${BUSINESS_TYPE_LABELS[input.businessType]} · ${output.platformLabel} · ${
      GOAL_LABELS[input.goal]
    }`,
    subtitle: output.summary,
  }),
};

/**
 * The ordered registry. Add future tools (Landing Page Auditor, Creative Brief
 * Builder, UTM Builder, Google/Meta Ads Audit, …) to this array.
 */
export const toolRegistry = [aiCampaignBuilder] as const;

export type ToolSlug = (typeof toolRegistry)[number]["slug"];

export function getTool(slug: string): ToolDefinition | undefined {
  return toolRegistry.find((tool) => tool.slug === slug) as ToolDefinition | undefined;
}

/** Tools that are live and runnable today. */
export const liveTools = toolRegistry.filter((tool) => tool.status === "live");
