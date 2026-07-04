/**
 * AI Marketing Intelligence Platform — product case study content.
 * All metrics, names, and previews use fictional demo data only.
 */

export const platformProduct = {
  slug: "/work/ai-marketing-systems",
  name: "AI Marketing Intelligence Platform",
  tagline: "An AI-powered marketing operating system",
  shortDescription:
    "Designed and built an AI-powered marketing operating system that unifies advertising, attribution, CRM, reporting, automation, and executive decision making.",
  homepageDescription:
    "See how I designed and built an AI-powered operating system that unifies marketing analytics, attribution, automation, reporting, and executive decision making.",
} as const;

export const caseStudyHero = {
  headline: "AI Marketing Intelligence Platform",
  subheadline:
    "An AI-powered operating system built to help marketing teams make faster decisions using unified attribution, reporting, automation, and executive intelligence.",
  cta: "Explore the Platform",
} as const;

export const theProblem = {
  title: "The Problem",
  intro:
    "Marketing data lived across disconnected platforms. Reporting required manually pulling exports every week — and leadership still couldn't get clear answers fast enough.",
  dataSources: [
    "Google Ads",
    "Meta Ads",
    "Microsoft Ads",
    "CRM",
    "Orders",
    "Attribution",
    "Analytics",
    "Revenue",
  ],
  questions: [
    "Where are we making money?",
    "What campaigns are underperforming?",
    "What deserves more budget?",
    "What should we do next?",
  ],
} as const;

export const theSolution = {
  title: "The Solution",
  intro: "I designed and built a centralized AI-powered marketing platform that:",
  points: [
    "Unifies cross-platform marketing data",
    "Generates executive summaries",
    "Tracks attribution",
    "Automates reporting",
    "Surfaces opportunities",
    "Prioritizes next actions",
    "Monitors campaign health",
    "Reduces manual reporting from hours to minutes",
  ],
} as const;

export type ModulePreviewType =
  | "briefing"
  | "attribution"
  | "customers"
  | "growth"
  | "portfolio"
  | "budget"
  | "monitoring"
  | "recommendations"
  | "pulse"
  | "alerts";

export const productModules = [
  {
    id: "weekly-brief",
    title: "Weekly Executive Brief",
    description: "Auto-generated leadership summary — what happened, why it matters, and what to do next.",
    detail:
      "Every Monday, leadership receives a structured briefing derived from live data. Status badges, narrative columns, and a prioritized decision queue replace the manual slide-deck assembly process.",
    preview: "briefing" as ModulePreviewType,
  },
  {
    id: "attribution",
    title: "Marketing Attribution Engine",
    description: "Connect spend to revenue across channels with visible model assumptions.",
    detail:
      "Multi-mode attribution views tie ad spend, order data, and touchpoints into ROAS by channel, product line, and campaign — with audit panels so stakeholders trust the numbers.",
    preview: "attribution" as ModulePreviewType,
  },
  {
    id: "customers",
    title: "Customer Intelligence",
    description: "Unified customer profiles with purchase history, journey stages, and enrichment.",
    detail:
      "CRM and attribution APIs enrich each customer record on demand — purchase timeline, touchpoint buckets, and high-value segment flags in one drawer.",
    preview: "customers" as ModulePreviewType,
  },
  {
    id: "growth",
    title: "Growth Strategy",
    description: "12-week channel trends, goal tracking, and automated insight callouts.",
    detail:
      "Long-horizon trend analysis with background enrichment queues surfaces which channels are accelerating, plateauing, or need intervention.",
    preview: "growth" as ModulePreviewType,
  },
  {
    id: "portfolio",
    title: "Portfolio Management",
    description: "Campaign command center with compare mode, filters, and detail drawers.",
    detail:
      "Sortable campaign tables, multi-select compare (up to 5), time presets, trend sparklines, and slide-out detail panels — built for media buyers and leadership.",
    preview: "portfolio" as ModulePreviewType,
  },
  {
    id: "budget",
    title: "Budget Planner",
    description: "Planned vs actual pacing by initiative with real-time alerts.",
    detail:
      "Monthly budgets by initiative track against live spend. Over/under pacing flags merge with performance alerts so teams adjust before month-end.",
    preview: "budget" as ModulePreviewType,
  },
  {
    id: "monitoring",
    title: "Campaign Monitoring",
    description: "Live operational view of running ads and daily budgets by platform.",
    detail:
      "Operational monitor for active campaigns — daily budgets, platform status, stale-sync detection, and quick links to underperforming ad sets.",
    preview: "monitoring" as ModulePreviewType,
  },
  {
    id: "recommendations",
    title: "AI Recommendation Engine",
    description: "Prioritized actions derived from spend, pacing, and efficiency rules.",
    detail:
      "Rule-based intelligence surfaces scale, pause, and test recommendations with severity ranking — an AI-ready layer designed for LLM summary upgrades.",
    preview: "recommendations" as ModulePreviewType,
  },
  {
    id: "pulse",
    title: "Marketing Pulse",
    description: "Real-time health signals across spend, efficiency, and funnel metrics.",
    detail:
      "At-a-glance pulse panel for leadership — trend direction, narrative signals, and platform concentration warnings updated on every sync cycle.",
    preview: "pulse" as ModulePreviewType,
  },
  {
    id: "alerts",
    title: "Executive Alerts",
    description: "Severity-ranked alerts for pacing gaps, CPA spikes, and tracking breaks.",
    detail:
      "Merged spend and budget alerts sorted by severity — so the right problems surface before they become crises.",
    preview: "alerts" as ModulePreviewType,
  },
] as const;

export const architectureFlow = {
  title: "System Architecture",
  subtitle: "From fragmented sources to unified decisions",
  sources: [
    { label: "Meta Ads", icon: "meta" },
    { label: "Google Ads", icon: "google" },
    { label: "Microsoft Ads", icon: "microsoft" },
    { label: "CRM", icon: "crm" },
    { label: "HubSpot", icon: "hubspot" },
    { label: "Orders", icon: "orders" },
  ],
  pipeline: "Unified Data Pipeline",
  database: "Marketing Database",
  aiLayer: "AI Analysis Layer",
  dashboard: "Executive Dashboard",
  output: "Leadership Decisions",
} as const;

export const capabilities = [
  "Executive Reporting",
  "Marketing Attribution",
  "Campaign Monitoring",
  "Forecasting",
  "Budget Planning",
  "AI Recommendations",
  "Customer Intelligence",
  "Growth Analytics",
  "Workflow Automation",
  "Marketing Operations",
  "Cross-platform Reporting",
  "Decision Support",
] as const;

export const buildProcess = {
  title: "How I Built It",
  steps: [
    {
      title: "Centralized the data",
      body: "Organized disconnected marketing data from six platforms into one normalized pipeline with scheduled sync and local caching.",
    },
    {
      title: "Designed attribution",
      body: "Built a unified attribution model with visible assumptions — so leadership debates strategy, not spreadsheet accuracy.",
    },
    {
      title: "Embedded intelligence",
      body: "Created AI-assisted executive reporting that generates briefings, trend signals, and prioritized decisions from live data.",
    },
    {
      title: "Automated workflows",
      body: "Replaced manual Monday exports with auto-sync, alert engines, and Slack/PDF export pipelines.",
    },
    {
      title: "Designed for decisions",
      body: "Every interface prioritizes business questions over raw data tables — built for executives, not analysts.",
    },
  ],
} as const;

export const techStackItems = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Supabase", category: "Backend" },
  { name: "Claude Code", category: "AI" },
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "GA4", category: "Analytics" },
  { name: "HubSpot", category: "Integrations" },
  { name: "Google Ads", category: "Integrations" },
  { name: "Meta Ads", category: "Integrations" },
  { name: "Microsoft Ads", category: "Integrations" },
  { name: "Attribution APIs", category: "Integrations" },
  { name: "Commerce APIs", category: "Integrations" },
  { name: "REST APIs", category: "Backend" },
  { name: "Automation", category: "Ops" },
  { name: "AI Agents", category: "AI" },
  { name: "Recharts", category: "Frontend" },
] as const;

export const businessImpact = {
  title: "Business Impact",
  outcomes: [
    {
      metric: "6 hrs → 20 min",
      label: "Reduced weekly reporting time",
      description: "Automated data pulls and executive brief generation replaced manual Monday exports.",
    },
    {
      metric: "6 sources",
      label: "Unified disconnected systems",
      description: "Ads, CRM, orders, and attribution consolidated into one operating system.",
    },
    {
      metric: "Real-time",
      label: "Improved executive visibility",
      description: "Leadership gets live pacing, alerts, and decision queues — not stale spreadsheets.",
    },
    {
      metric: "Multi-mode",
      label: "Centralized attribution",
      description: "One attribution model with audit trails replaced fragmented platform reports.",
    },
    {
      metric: "Repeatable",
      label: "Reusable AI reporting workflows",
      description: "Briefing templates, export pipelines, and alert rules scale across teams.",
    },
    {
      metric: "Scalable",
      label: "Internal marketing infrastructure",
      description: "Modular architecture supports new data sources, modules, and AI upgrades.",
    },
  ],
} as const;

export const confidentialityNote =
  "All product previews use fictional demo data. No client names, revenue figures, campaign details, or confidential business information are shown. This case study demonstrates product design, system architecture, and engineering capability.";

/** Fictional KPIs for the flagship product visualization. */
export const demoKpis = [
  { label: "Weekly spend", value: "$48.2K", delta: "+4.2%", positive: true },
  { label: "Attributed revenue", value: "$156K", delta: "+11%", positive: true },
  { label: "Blended ROAS", value: "3.2×", delta: "+0.3", positive: true },
  { label: "New customers", value: "842", delta: "+6%", positive: true },
] as const;

export const demoNavItems = [
  "Briefing",
  "Attribution",
  "Portfolio",
  "Budget",
  "Customers",
  "Growth",
  "Alerts",
] as const;

export const demoBriefingColumns = [
  {
    label: "What happened",
    text: "Spend 4% above plan. Prospecting CPA up 18%. Brand search ROAS holding at 6.1×.",
  },
  {
    label: "Why it matters",
    text: "Creative fatigue on prospecting. Brand channel under-invested relative to return.",
  },
  {
    label: "What to do next",
    text: "Refresh top creatives. Shift 15% budget to brand. Audit landing page conversion.",
  },
] as const;

export const demoAlerts = [
  { severity: "high" as const, text: "Prospecting CPA exceeded target by 21%" },
  { severity: "medium" as const, text: "Brand search ROAS above scale threshold" },
  { severity: "low" as const, text: "Budget pacing on track for Q2 plan" },
] as const;
