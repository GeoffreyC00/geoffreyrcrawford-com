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
  /** One-line value prop shown on cards. */
  tagline: string;
  description: string;
  /** Who the tool is for — shown as a "Best for" line on product cards. */
  bestFor: string;
  /** Public route where the tool runs (or its coming-soon preview). */
  href: string;
  /** CTA label used on cards. */
  cta: string;
  status: "live" | "soon";
  /** Produce a dashboard-friendly summary from a saved run. Live tools only. */
  summarizeRun?: (input: Input, output: Output) => RunSummary;
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
  bestFor: "Marketers and owners planning a new paid media campaign.",
  href: "/tools/ai-campaign-builder",
  cta: "Launch Tool",
  status: "live",
  summarizeRun: (input, output) => ({
    title: `${BUSINESS_TYPE_LABELS[input.businessType]} · ${output.platformLabel} · ${
      GOAL_LABELS[input.goal]
    }`,
    subtitle: output.summary,
  }),
};

// Coming-soon tools — each gets a preview page at /tools/<slug> with a waitlist.
const landingPageAuditor: ToolDefinition = {
  slug: "landing-page-auditor",
  name: "Landing Page Auditor",
  category: "Conversion optimization",
  tagline: "Conversion optimization",
  description:
    "Paste a URL and get a prioritized list of conversion fixes — message match, clarity, proof, speed, and CTA strength.",
  bestFor: "Anyone sending paid traffic to a page that isn't converting.",
  href: "/tools/landing-page-auditor",
  cta: "Join Waitlist",
  status: "soon",
};

const creativeBriefBuilder: ToolDefinition = {
  slug: "creative-brief-builder",
  name: "Creative Brief Builder",
  category: "Creative strategy",
  tagline: "Creative strategy",
  description:
    "Turn an offer and audience into a structured creative brief with hooks, angles, formats, and messaging directions.",
  bestFor: "Teams briefing designers, editors, or UGC creators.",
  href: "/tools/creative-brief-builder",
  cta: "Join Waitlist",
  status: "soon",
};

const utmBuilder: ToolDefinition = {
  slug: "utm-builder",
  name: "UTM Builder",
  category: "Analytics & tracking",
  tagline: "Analytics & tracking",
  description:
    "Generate clean, consistent UTM-tagged URLs with a naming convention that keeps your reporting tidy.",
  bestFor: "Anyone who wants campaign tracking that stays consistent.",
  href: "/tools/utm-builder",
  cta: "Join Waitlist",
  status: "soon",
};

const googleAdsAudit: ToolDefinition = {
  slug: "google-ads-audit",
  name: "Google Ads Audit",
  category: "Paid search",
  tagline: "Paid search",
  description:
    "Answer a few questions about your account and get a structured audit of structure, targeting, tracking, and waste.",
  bestFor: "Advertisers who suspect their Google Ads spend is leaking.",
  href: "/tools/google-ads-audit",
  cta: "Join Waitlist",
  status: "soon",
};

const metaAdsAudit: ToolDefinition = {
  slug: "meta-ads-audit",
  name: "Meta Ads Audit",
  category: "Paid social",
  tagline: "Paid social",
  description:
    "Review your Meta account setup — campaign structure, creative strategy, audiences, and tracking — and find the gaps.",
  bestFor: "Advertisers scaling Facebook & Instagram campaigns.",
  href: "/tools/meta-ads-audit",
  cta: "Join Waitlist",
  status: "soon",
};

/**
 * The ordered registry. Add future tools to this array — surfaces, routing,
 * sitemap, and the dashboard launcher all read from here, so no other file
 * needs to change to introduce a tool.
 */
export const toolRegistry: ToolDefinition[] = [
  // Cast the typed builder to the base shape; its generic summarizeRun is
  // otherwise contravariant with the registry's unknown-typed entries.
  aiCampaignBuilder as ToolDefinition,
  landingPageAuditor,
  creativeBriefBuilder,
  utmBuilder,
  googleAdsAudit,
  metaAdsAudit,
];

export type ToolSlug = string;

export function getTool(slug: string): ToolDefinition | undefined {
  return toolRegistry.find((tool) => tool.slug === slug);
}

/** Tools that are live and runnable today. */
export const liveTools = toolRegistry.filter((tool) => tool.status === "live");

/** Tools announced but not yet shipped (have a coming-soon preview page). */
export const comingSoonTools = toolRegistry.filter((tool) => tool.status === "soon");
