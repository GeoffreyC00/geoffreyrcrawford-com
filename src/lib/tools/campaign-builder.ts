/**
 * AI Campaign Builder — input model, option sets, and a deterministic
 * rules-based plan generator.
 *
 * This module is intentionally pure (no node/server imports) so it can run on
 * the server inside the API route AND in the browser as a client-side fallback
 * when the API is unavailable. The AI path (when an API key is configured)
 * returns the same `CampaignPlan` shape, so the renderer never has to care
 * whether a plan came from rules or AI.
 */

// ---------------------------------------------------------------------------
// Input model
// ---------------------------------------------------------------------------

export type BusinessType = "local" | "ecommerce" | "b2b" | "saas" | "creator" | "other";
export type BudgetTier = "under-1k" | "1k-3k" | "3k-10k" | "10k-50k" | "50k-plus";
export type PlatformChoice = "google" | "meta" | "youtube" | "microsoft" | "amazon" | "not-sure";
export type Goal = "leads" | "sales" | "bookings" | "webinar" | "product" | "awareness" | "not-sure";
export type Challenge =
  | "traffic"
  | "expensive-leads"
  | "conversion"
  | "messy-structure"
  | "what-to-test"
  | "tracking"
  | "scratch";
export type LandingStatus = "have-lp" | "have-site" | "need-build" | "not-sure";

export type CampaignBuilderInput = {
  businessType: BusinessType;
  selling: string;
  budget: BudgetTier;
  platform: PlatformChoice;
  goal: Goal;
  audience: string;
  challenge: Challenge;
  landingStatus: LandingStatus;
  email?: string;
};

// ---------------------------------------------------------------------------
// Labels + form options
// ---------------------------------------------------------------------------

export const BUSINESS_TYPE_LABELS: Record<BusinessType, string> = {
  local: "Local business",
  ecommerce: "eCommerce",
  b2b: "B2B / lead generation",
  saas: "SaaS",
  creator: "Creator / education business",
  other: "Other",
};

export const BUDGET_LABELS: Record<BudgetTier, string> = {
  "under-1k": "Under $1,000",
  "1k-3k": "$1,000–$3,000",
  "3k-10k": "$3,000–$10,000",
  "10k-50k": "$10,000–$50,000",
  "50k-plus": "$50,000+",
};

export const PLATFORM_LABELS: Record<PlatformChoice, string> = {
  google: "Google Ads",
  meta: "Meta Ads",
  youtube: "YouTube Ads",
  microsoft: "Microsoft Ads",
  amazon: "Amazon Ads",
  "not-sure": "Not sure",
};

export const GOAL_LABELS: Record<Goal, string> = {
  leads: "Leads",
  sales: "Sales",
  bookings: "Bookings",
  webinar: "Webinar registrations",
  product: "Product purchases",
  awareness: "Brand awareness",
  "not-sure": "Not sure",
};

export const CHALLENGE_LABELS: Record<Challenge, string> = {
  traffic: "Not enough traffic",
  "expensive-leads": "Leads are too expensive",
  conversion: "Poor conversion rate",
  "messy-structure": "Campaign structure is messy",
  "what-to-test": "Don't know what to test",
  tracking: "Tracking/reporting is unclear",
  scratch: "Starting from scratch",
};

export const LANDING_STATUS_LABELS: Record<LandingStatus, string> = {
  "have-lp": "I have a landing page",
  "have-site": "I have a website but no dedicated landing page",
  "need-build": "I need to build one",
  "not-sure": "Not sure",
};

function toOptions<T extends string>(labels: Record<T, string>) {
  return (Object.keys(labels) as T[]).map((value) => ({ value, label: labels[value] }));
}

export const FORM_OPTIONS = {
  businessType: toOptions(BUSINESS_TYPE_LABELS),
  budget: toOptions(BUDGET_LABELS),
  platform: toOptions(PLATFORM_LABELS),
  goal: toOptions(GOAL_LABELS),
  challenge: toOptions(CHALLENGE_LABELS),
  landingStatus: toOptions(LANDING_STATUS_LABELS),
};

/** Allowed enum values, used for server-side validation. */
export const VALID_VALUES = {
  businessType: Object.keys(BUSINESS_TYPE_LABELS) as BusinessType[],
  budget: Object.keys(BUDGET_LABELS) as BudgetTier[],
  platform: Object.keys(PLATFORM_LABELS) as PlatformChoice[],
  goal: Object.keys(GOAL_LABELS) as Goal[],
  challenge: Object.keys(CHALLENGE_LABELS) as Challenge[],
  landingStatus: Object.keys(LANDING_STATUS_LABELS) as LandingStatus[],
};

// ---------------------------------------------------------------------------
// Output model
// ---------------------------------------------------------------------------

export type CampaignPlan = {
  summary: string;
  platformLabel: string;
  platformAssumed: boolean;
  structure: { name: string; detail: string }[];
  budgetSummary: string;
  budgetAllocation: { label: string; percent: number }[];
  funnelStrategy: string[];
  audienceStrategy: string[];
  tracking: string[];
  landingPageNotes: string[];
  creativeAngles: string[];
  actionPlan: { day: string; task: string }[];
  whatToWatch: { metric: string; why: string }[];
};

export type GeneratedBy = "rules" | "ai";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type PlatformFamily = "search" | "social" | "video" | "marketplace";

type EffectivePlatform = {
  key: Exclude<PlatformChoice, "not-sure">;
  label: string;
  family: PlatformFamily;
  assumed: boolean;
};

/** Resolve "not sure" into a sensible default platform for the business type. */
function resolvePlatform(input: CampaignBuilderInput): EffectivePlatform {
  const familyFor = (key: Exclude<PlatformChoice, "not-sure">): PlatformFamily => {
    if (key === "google" || key === "microsoft") return "search";
    if (key === "meta") return "social";
    if (key === "youtube") return "video";
    return "marketplace";
  };

  if (input.platform !== "not-sure") {
    return {
      key: input.platform,
      label: PLATFORM_LABELS[input.platform],
      family: familyFor(input.platform),
      assumed: false,
    };
  }

  const byBusiness: Record<BusinessType, Exclude<PlatformChoice, "not-sure">> = {
    local: "google",
    ecommerce: "google",
    b2b: "google",
    saas: "google",
    creator: "youtube",
    other: "google",
  };
  const key = byBusiness[input.businessType];
  return { key, label: PLATFORM_LABELS[key], family: familyFor(key), assumed: true };
}

function goalAction(goal: Goal): string {
  switch (goal) {
    case "leads":
      return "a lead form submission";
    case "sales":
      return "a purchase";
    case "bookings":
      return "a booking or appointment";
    case "webinar":
      return "a webinar registration";
    case "product":
      return "a product purchase";
    case "awareness":
      return "a qualified view or engagement";
    default:
      return "your primary conversion";
  }
}

function campaignCountForBudget(tier: BudgetTier): number {
  switch (tier) {
    case "under-1k":
      return 2;
    case "1k-3k":
      return 3;
    case "3k-10k":
      return 4;
    default:
      return 5;
  }
}

function shortSelling(selling: string): string {
  const trimmed = selling.trim();
  if (!trimmed) return "your offer";
  return trimmed.length > 64 ? `${trimmed.slice(0, 61).trimEnd()}…` : trimmed;
}

type WeightedCampaign = { name: string; detail: string; weight: number };

function campaignTemplates(
  platform: EffectivePlatform,
  input: CampaignBuilderInput
): WeightedCampaign[] {
  const action = goalAction(input.goal);
  const isEcom = input.businessType === "ecommerce";

  if (platform.family === "search") {
    return [
      {
        name: "Non-Brand Search — Core Terms",
        detail: `Your highest-intent commercial keywords in tightly themed ad groups, mapped to ${action}.`,
        weight: 45,
      },
      {
        name: "Retargeting (RLSA + Display)",
        detail: "Re-engage past visitors and searchers with tailored bids and messaging.",
        weight: 16,
      },
      {
        name: "Brand / High Intent",
        detail:
          "Defend your brand terms — cheap, high-converting traffic you don't want a competitor capturing.",
        weight: 12,
      },
      isEcom
        ? {
            name: "Shopping / Performance Max",
            detail: "Product-feed campaign to capture shopping intent across Google surfaces.",
            weight: 17,
          }
        : {
            name: "Competitor / Conquesting",
            detail: "Bid on close competitor terms with a sharp differentiation message.",
            weight: 17,
          },
      {
        name: "Ad Copy / RSA Testing",
        detail: "A dedicated structure to test headlines, descriptions, and offers systematically.",
        weight: 10,
      },
    ];
  }

  if (platform.family === "social") {
    return [
      {
        name: "Prospecting — Cold Audiences",
        detail: `Broad and interest-based targeting to find new buyers, optimized for ${action}.`,
        weight: 50,
      },
      {
        name: "Retargeting — Warm Audiences",
        detail: "Site visitors, video viewers, and engagers — your highest-converting pool.",
        weight: 20,
      },
      {
        name: "Creative Testing",
        detail: "A constant testing campaign for hooks, formats, and angles. Creative is the main lever.",
        weight: 20,
      },
      isEcom
        ? {
            name: "Existing Customers / Retention",
            detail: "Cross-sell and repeat-purchase campaigns to lift lifetime value.",
            weight: 10,
          }
        : {
            name: "Lookalike Expansion",
            detail: "Lookalikes built from your best converters to scale what works.",
            weight: 10,
          },
    ];
  }

  if (platform.family === "video") {
    return [
      {
        name: "Prospecting — In-Market & Affinity",
        detail: `Reach new viewers most likely to want ${shortSelling(input.selling)}, optimized for ${action}.`,
        weight: 45,
      },
      {
        name: "Retargeting — Viewers & Visitors",
        detail: "Follow up with people who watched your videos or visited the site.",
        weight: 20,
      },
      {
        name: "Creative Testing — Hooks & Formats",
        detail: "Test the first five seconds, formats, and CTAs — retention drives YouTube performance.",
        weight: 20,
      },
      {
        name: "Brand / Channel Growth",
        detail: "Build durable audience and remarketing pools for long-term efficiency.",
        weight: 15,
      },
    ];
  }

  // marketplace (Amazon)
  return [
    {
      name: "Sponsored Products — Non-Brand / Category",
      detail: "Capture shoppers searching category and competitor terms.",
      weight: 45,
    },
    {
      name: "Sponsored Products — Brand Defense",
      detail: "Protect your branded search results from competitors.",
      weight: 16,
    },
    {
      name: "Sponsored Brands",
      detail: "Headline and brand-store placements to build awareness and consideration.",
      weight: 19,
    },
    {
      name: "Sponsored Display — Retargeting",
      detail: "Re-engage shoppers who viewed your products but didn't buy.",
      weight: 20,
    },
  ];
}

/** Round a set of weights to integer percentages that sum to exactly 100. */
function normalizePercents(weights: number[]): number[] {
  const total = weights.reduce((sum, w) => sum + w, 0) || 1;
  const raw = weights.map((w) => (w / total) * 100);
  const floored = raw.map((r) => Math.floor(r));
  let remainder = 100 - floored.reduce((a, b) => a + b, 0);
  const byFraction = raw
    .map((r, idx) => ({ idx, frac: r - Math.floor(r) }))
    .sort((a, b) => b.frac - a.frac);
  for (let k = 0; remainder > 0 && byFraction.length > 0; k++, remainder--) {
    floored[byFraction[k % byFraction.length].idx] += 1;
  }
  return floored;
}

function budgetSummary(tier: BudgetTier): string {
  switch (tier) {
    case "under-1k":
      return "Under $1,000/mo (~$30/day). Concentrate on one platform and your highest-intent audience — don't spread this thin across campaigns.";
    case "1k-3k":
      return "$1,000–$3,000/mo (~$35–100/day). Enough for a focused 3-campaign structure. Prioritize intent and one strong retargeting layer.";
    case "3k-10k":
      return "$3,000–$10,000/mo (~$100–330/day). Room to run prospecting, retargeting, and a real testing campaign in parallel.";
    case "10k-50k":
      return "$10,000–$50,000/mo. Diversify across the full structure and fund continuous creative/keyword testing.";
    case "50k-plus":
      return "$50,000+/mo. Operate the full structure, segment aggressively, and treat testing as its own funded line item.";
  }
}

function trackingList(input: CampaignBuilderInput, platform: EffectivePlatform): string[] {
  const base = [
    "GA4 with key conversion events configured",
    "UTM parameters on every campaign, ad set, and ad",
    `${platform.label} conversion tracking imported`,
  ];

  const leadLike: Goal[] = ["leads", "bookings", "webinar"];
  const saleLike: Goal[] = ["sales", "product"];
  const leadBusiness: BusinessType[] = ["local", "b2b", "saas"];

  const extra: string[] = [];
  if (leadLike.includes(input.goal) || leadBusiness.includes(input.businessType)) {
    extra.push("Form submissions");
    extra.push("Phone call tracking");
    extra.push("CRM / lead-source tracking (which campaign produced each lead)");
  }
  if (input.goal === "bookings") extra.push("Booking & appointment completions");
  if (input.goal === "webinar") extra.push("Webinar registrations & attendance");
  if (saleLike.includes(input.goal) || input.businessType === "ecommerce") {
    extra.push("Purchases & revenue (ecommerce events)");
    extra.push("Add-to-cart & begin-checkout");
    extra.push("ROAS by campaign");
  }
  if (input.goal === "awareness") {
    extra.push("Reach & frequency");
    extra.push("Video views / engagement rate");
  }

  // De-duplicate while preserving order.
  return [...new Set([...base, ...extra])];
}

function landingPageNotes(input: CampaignBuilderInput): string[] {
  const action = goalAction(input.goal);
  switch (input.landingStatus) {
    case "have-lp":
      return [
        "Audit the page for one clear call-to-action above the fold.",
        "Make the headline match your ad's promise — message match lifts conversion rate fast.",
        "Add proof near the CTA: testimonials, numbers, or recognizable logos.",
      ];
    case "have-site":
      return [
        "Don't send paid traffic to your homepage — build a focused landing page.",
        `Strip navigation and competing links so there's one path to ${action}.`,
        "Mirror the ad's language in the page headline so visitors feel they're in the right place.",
      ];
    case "need-build":
      return [
        "Build one simple, fast landing page before scaling spend.",
        "One offer, one CTA, minimal distractions.",
        "Above the fold: headline, subhead, proof, and the action — everything else is secondary.",
      ];
    default:
      return [
        "Use a single, focused landing page rather than a general site page.",
        "One goal per page; remove anything that doesn't support the conversion.",
        "Test mobile load speed — most paid traffic arrives on a phone.",
      ];
  }
}

function audienceStrategy(input: CampaignBuilderInput, platform: EffectivePlatform): string[] {
  const notes: string[] = [];

  if (platform.family === "search") {
    notes.push(
      "On search you target intent, not people — build audiences from keyword themes that match where the buyer is in their decision, then layer in-market and remarketing audiences as bid modifiers."
    );
  } else if (platform.family === "marketplace") {
    notes.push(
      "On Amazon you target products and categories — segment by branded, category, and competitor ASINs so you can read intent and adjust bids by tier."
    );
  } else {
    notes.push(
      "Start broad and let the platform's algorithm find your buyer — modern social/video targeting performs best when creative does the qualifying, not narrow interest stacks."
    );
  }

  // Reflect the operator's own description back as a concrete segmentation cue.
  notes.push(
    `Translate your audience — "${shortSelling(input.audience)}" — into one primary segment to launch against, then expand only after you have a winning control.`
  );

  if (input.businessType === "b2b" || input.businessType === "saas") {
    notes.push(
      "For B2B, prioritize by firmographics and role; exclude existing customers and current pipeline, and feed your CRM lists back in for retargeting and lookalikes."
    );
  } else if (input.businessType === "local") {
    notes.push(
      "Tighten geo-targeting to a realistic service radius and dayparting to when you can actually answer — wasted impressions outside your area are pure spend leakage."
    );
  } else if (input.businessType === "ecommerce" || input.goal === "product") {
    notes.push(
      "Build the retargeting ladder: all visitors → product viewers → add-to-cart → past purchasers, each with its own message and budget."
    );
  } else {
    notes.push(
      "Define one warm and one cold segment to start; keep them separate so prospecting and retargeting performance never blur together."
    );
  }

  notes.push(
    "Exclude converters and existing customers from prospecting so you're paying to acquire, not to reach people you already have."
  );

  return notes;
}

function creativeAngles(input: CampaignBuilderInput, platform: EffectivePlatform): string[] {
  const selling = shortSelling(input.selling);
  const angles = [
    `Problem-first: open with the specific pain your audience feels before they buy ${selling}.`,
    `Proof & specificity: use real numbers, outcomes, or testimonials to make ${selling} credible.`,
    "Offer-led: lead with your strongest offer, guarantee, or incentive in the headline.",
  ];

  if (input.challenge === "expensive-leads") {
    angles.push("Qualifier angle: name exactly who it's for (and who it's not) to filter out poor-fit clicks.");
  } else if (input.challenge === "conversion") {
    angles.push("Objection-handling: name the top reason people hesitate, then answer it directly.");
  } else {
    angles.push("Outcome angle: paint the after-state — what life looks like once the problem is solved.");
  }

  if (platform.family === "video" || platform.family === "social") {
    angles.push("Hook in 3 seconds: open with motion and a bold claim or question to stop the scroll.");
  }

  return angles;
}

function actionPlan(platform: EffectivePlatform): { day: string; task: string }[] {
  const monitor =
    platform.family === "search"
      ? "Monitor — review search terms, add negatives, and watch CTR, CPC, and conversion rate."
      : platform.family === "marketplace"
        ? "Monitor — review search terms and ASIN targets; watch ACoS, CTR, and conversion rate."
        : "Monitor — review placements and audiences; watch CTR, CPC, frequency, and conversion rate.";

  return [
    {
      day: "Day 1",
      task: `Tracking & measurement — install or verify GA4, conversion events, and the ${platform.label} conversion import.`,
    },
    {
      day: "Day 2",
      task: "Campaign structure — build the campaigns above with clean naming and conservative starting budgets.",
    },
    {
      day: "Day 3",
      task:
        platform.family === "search"
          ? "Ad copy — write responsive search ads and sitelinks for each ad group."
          : "Creative & copy — produce assets for each angle (a few variations per concept).",
    },
    {
      day: "Day 4",
      task: "Launch — go live only after confirming conversions fire correctly end-to-end.",
    },
    { day: "Day 5–7", task: monitor },
  ];
}

function whatToWatch(input: CampaignBuilderInput): { metric: string; why: string }[] {
  const base = [
    { metric: "CTR", why: "Signals whether your ad and targeting match. Low CTR usually means a creative or audience problem." },
    { metric: "CPC", why: "Your cost to buy a click. Rising CPC erodes everything downstream." },
    { metric: "Conversion rate", why: "How well traffic plus landing page turn clicks into results." },
  ];

  const saleLike: Goal[] = ["sales", "product"];
  if (saleLike.includes(input.goal) || input.businessType === "ecommerce") {
    base.push({ metric: "ROAS", why: "Revenue per dollar spent — the north star for ecommerce and sales." });
    base.push({ metric: "CPA / AOV", why: "Cost per purchase against average order value tells you if the math works." });
  } else if (input.goal === "awareness") {
    base.push({ metric: "CPM", why: "Cost per thousand impressions — the efficiency of your reach." });
    base.push({ metric: "Frequency", why: "High enough to register, low enough to avoid fatigue." });
  } else {
    base.push({ metric: "CPL / CPA", why: "Cost per lead or booking — your core efficiency metric." });
    base.push({ metric: "Lead quality", why: "Cheap leads that never close are expensive. Track lead-to-customer, not just volume." });
  }

  base.push({ metric: "Budget pacing", why: "Keep spend steady and flowing to what works — not one runaway campaign." });
  return base;
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

/** Deterministic, rules-based campaign plan. Always returns a complete plan. */
export function generateCampaignPlan(input: CampaignBuilderInput): CampaignPlan {
  const platform = resolvePlatform(input);
  const templates = campaignTemplates(platform, input);
  const count = Math.min(campaignCountForBudget(input.budget), templates.length);
  const chosen = templates.slice(0, count);

  const percents = normalizePercents(chosen.map((c) => c.weight));
  const budgetAllocation = chosen.map((c, i) => ({ label: c.name, percent: percents[i] }));

  const summary = `A ${BUDGET_LABELS[input.budget]} ${platform.label} plan for a ${BUSINESS_TYPE_LABELS[
    input.businessType
  ].toLowerCase()} focused on ${GOAL_LABELS[input.goal].toLowerCase()}.`;

  const dest =
    input.landingStatus === "have-lp"
      ? "your existing landing page"
      : input.landingStatus === "have-site"
        ? "a focused landing page (not your homepage)"
        : input.landingStatus === "need-build"
          ? "a dedicated landing page you build before scaling spend"
          : "a single, focused landing page";

  const funnelStrategy = [
    `Drive traffic to ${dest} built around one goal: ${goalAction(input.goal)}. Every element on the page should support that single action.`,
    platform.family === "search"
      ? "Search captures existing demand — match the ad and the landing page tightly to the query intent."
      : platform.family === "marketplace"
        ? "On Amazon your product listing IS the landing page — fix images, title, bullets, and reviews before scaling spend."
        : "Cold traffic needs context — lead with the problem and proof before asking for the conversion.",
    "Close the loop: every campaign reports back to one conversion so you compare them on cost per result, not clicks.",
  ];

  return {
    summary,
    platformLabel: platform.label,
    platformAssumed: platform.assumed,
    structure: chosen.map(({ name, detail }) => ({ name, detail })),
    budgetSummary: budgetSummary(input.budget),
    budgetAllocation,
    funnelStrategy,
    audienceStrategy: audienceStrategy(input, platform),
    tracking: trackingList(input, platform),
    landingPageNotes: landingPageNotes(input),
    creativeAngles: creativeAngles(input, platform),
    actionPlan: actionPlan(platform),
    whatToWatch: whatToWatch(input),
  };
}

/** Runtime shape check for an externally-produced (AI) plan. */
export function isValidCampaignPlan(value: unknown): value is CampaignPlan {
  if (!value || typeof value !== "object") return false;
  const p = value as Record<string, unknown>;
  const isStrArr = (v: unknown) => Array.isArray(v) && v.every((x) => typeof x === "string");
  const isPairArr = (v: unknown, a: string, b: string) =>
    Array.isArray(v) &&
    v.length > 0 &&
    v.every(
      (x) =>
        x && typeof x === "object" && typeof (x as Record<string, unknown>)[a] === "string"
    ) &&
    v.every((x) => (x as Record<string, unknown>)[b] !== undefined);

  return (
    typeof p.summary === "string" &&
    typeof p.platformLabel === "string" &&
    typeof p.budgetSummary === "string" &&
    isPairArr(p.structure, "name", "detail") &&
    Array.isArray(p.budgetAllocation) &&
    p.budgetAllocation.length > 0 &&
    isStrArr(p.funnelStrategy) &&
    isStrArr(p.audienceStrategy) &&
    isStrArr(p.tracking) &&
    isStrArr(p.landingPageNotes) &&
    isStrArr(p.creativeAngles) &&
    isPairArr(p.actionPlan, "day", "task") &&
    isPairArr(p.whatToWatch, "metric", "why")
  );
}

/** Validate + normalize an unknown payload into a CampaignBuilderInput. */
export function parseCampaignInput(body: unknown): CampaignBuilderInput | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;

  const inEnum = <T extends string>(v: unknown, allowed: T[]): v is T =>
    typeof v === "string" && (allowed as string[]).includes(v);

  if (
    !inEnum(b.businessType, VALID_VALUES.businessType) ||
    !inEnum(b.budget, VALID_VALUES.budget) ||
    !inEnum(b.platform, VALID_VALUES.platform) ||
    !inEnum(b.goal, VALID_VALUES.goal) ||
    !inEnum(b.challenge, VALID_VALUES.challenge) ||
    !inEnum(b.landingStatus, VALID_VALUES.landingStatus)
  ) {
    return null;
  }

  const selling = typeof b.selling === "string" ? b.selling.trim() : "";
  const audience = typeof b.audience === "string" ? b.audience.trim() : "";
  if (!selling || !audience) return null;

  const email = typeof b.email === "string" && b.email.trim() ? b.email.trim() : undefined;

  return {
    businessType: b.businessType,
    selling: selling.slice(0, 500),
    budget: b.budget,
    platform: b.platform,
    goal: b.goal,
    audience: audience.slice(0, 1000),
    challenge: b.challenge,
    landingStatus: b.landingStatus,
    email,
  };
}
