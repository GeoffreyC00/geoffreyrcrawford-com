/**
 * Content for the AI Marketing Systems portfolio case study.
 * All metrics and labels use sample/anonymized data only.
 */

export const aiSystemsHero = {
  label: "Portfolio · AI Marketing Systems",
  title: "AI-powered dashboards and reporting systems built for faster marketing decisions.",
  subheadline:
    "I build marketing intelligence tools that connect paid media, CRM, attribution, customer data, and AI workflows into clear executive reporting systems.",
};

export const overviewCopy = [
  "These are anonymized examples of reporting systems, dashboards, and AI-powered workflows I've built to help marketing teams understand performance, track revenue, and make better decisions — without waiting on manual spreadsheets or fragmented platform reports.",
  "Each system is designed as a product: clear information hierarchy, executive-readable summaries, and an automation layer that surfaces what changed, why it matters, and what to do next.",
];

export const whatIBuild = [
  {
    title: "Executive Marketing Dashboards",
    description:
      "Single-pane views that connect spend, revenue, funnel health, and channel performance for leadership.",
  },
  {
    title: "Attribution & ROAS Reporting",
    description:
      "Models that tie ad spend to outcomes across platforms, products, and customer journeys — with assumptions made visible.",
  },
  {
    title: "Customer Intelligence Systems",
    description:
      "Unified customer views: purchase history, journey stages, cohort behavior, and high-value segments.",
  },
  {
    title: "AI Campaign Analysis",
    description:
      "Automated summaries of campaign structure, efficiency, and testing opportunities across paid channels.",
  },
  {
    title: "Budget Planning Tools",
    description:
      "Pacing, allocation, and scenario planning so teams know where they stand against plan — before month-end.",
  },
  {
    title: "Creative Performance Libraries",
    description:
      "Centralized creative assets with performance metadata — what ran, where, and how it performed.",
  },
  {
    title: "Automated Weekly Briefings",
    description:
      "Scheduled executive summaries: what moved, what broke, and recommended next actions — generated, not assembled by hand.",
  },
  {
    title: "Workflow Automation",
    description:
      "Data sync, alerting, and AI-assisted reporting pipelines that reduce manual ops and reporting lag.",
  },
] as const;

export const marketingOs = {
  title: "Marketing OS",
  subtitle: "An internal marketing command center for leadership clarity.",
  description:
    "A unified marketing operating system that helps leadership answer three questions every week: what happened, why it happened, and what to do next. Modules connect paid media, customer data, and AI-generated insights into one executive-readable workspace.",
  features: [
    "Weekly briefing",
    "Spend pacing",
    "Funnel performance",
    "Attribution view",
    "Customer intelligence",
    "Growth strategy",
    "Budget planner",
    "Creative library",
    "Alerts and decisions",
  ],
};

export const attributionDashboard = {
  title: "Attribution & ROI Dashboard",
  subtitle: "Connecting spend, revenue, and customer outcomes in one executive view.",
  description:
    "This system maps ad spend, revenue signals, customer orders, and campaign performance into a clearer attribution picture — with model assumptions visible so leadership can debate the numbers, not wonder where they came from.",
  sampleMetrics: [
    { value: "3.2×", label: "Blended ROAS (sample)" },
    { value: "$124K", label: "Attributed revenue (sample)" },
    { value: "68%", label: "Paid-influenced share (sample)" },
    { value: "12", label: "Active campaigns tracked" },
  ],
  sampleChannels: [
    { channel: "Google Ads", spend: "$42K", roas: "3.8×", share: "34%" },
    { channel: "Meta Ads", spend: "$38K", roas: "2.9×", share: "31%" },
    { channel: "YouTube", spend: "$22K", roas: "4.1×", share: "18%" },
    { channel: "Email / CRM", spend: "—", roas: "8.2×", share: "17%" },
  ],
};

export const aiAutomation = {
  title: "AI & automation layer",
  description:
    "AI isn't bolted on as a chat widget — it's embedded in the reporting workflow to compress analysis time and improve decision quality.",
  capabilities: [
    "Summarize weekly performance in plain language for executives",
    "Identify trend shifts and anomalies before they become crises",
    "Surface risks: pacing gaps, efficiency drops, tracking breaks",
    "Generate next-step recommendations tied to live data",
    "Reduce manual reporting and slide-deck assembly",
    "Improve leadership decision-making with consistent, repeatable briefs",
  ],
};

export const myRoleBullets = [
  "Product strategy",
  "Dashboard architecture",
  "AI workflow design",
  "Data mapping",
  "Marketing analytics",
  "Executive reporting",
  "UX/UI direction",
  "Growth strategy",
  "Prompt engineering",
  "Claude Code development",
] as const;

export const confidentialityNote =
  "Screenshots and examples shown here are anonymized or recreated with sample data to protect confidential business information. The purpose of this page is to demonstrate system design, workflow thinking, and product strategy.";

/** Sample KPIs for the Marketing OS dashboard preview (all fictional). */
export const marketingOsSampleKpis = [
  { label: "Weekly spend", value: "$48.2K", delta: "+4.2%" },
  { label: "Attributed revenue", value: "$156K", delta: "+11%" },
  { label: "Blended ROAS", value: "3.2×", delta: "+0.3" },
  { label: "New customers", value: "842", delta: "+6%" },
];

/** Anonymized impact metrics for recruiter-facing proof. */
export const impactMetrics = [
  { value: "6 hrs → 20 min", label: "Weekly reporting cycle" },
  { value: "4 platforms", label: "Unified in one dashboard" },
  { value: "15+ modules", label: "Executive to operational views" },
  { value: "Auto-sync", label: "Sheets + API data pipeline" },
] as const;

/** Connected data sources shown in architecture preview (generic labels). */
export const dataSources = [
  { name: "Google Ads", type: "API sync" },
  { name: "Meta Ads", type: "API sync" },
  { name: "Google Sheets", type: "Auto-pull" },
  { name: "Commerce platform", type: "Order sync" },
  { name: "CRM", type: "Enrichment" },
  { name: "Attribution API", type: "Touchpoints" },
] as const;

export const automationPipeline = {
  title: "Data → Dashboard → Decision",
  description:
    "Instead of exporting CSVs from five platforms every Monday, the system pulls spend, revenue, and customer data on a schedule — normalizes it, caches it locally, and surfaces it through executive dashboards, alerts, and export-ready briefings.",
  outputs: [
    "Executive weekly briefing",
    "Spend & pacing alerts",
    "Attribution & ROI views",
    "Slack-ready reports",
    "Printable PDF exports",
  ],
};

/** Fictional weekly briefing — demonstrates the executive narrative layer. */
export const weeklyBriefingSample = {
  status: "Attention needed" as const,
  headline: "Prospecting efficiency dipped while brand held strong — reallocate before month-end.",
  whatHappened:
    "Total spend came in 4% above plan. Meta prospecting CPA rose 18% week-over-week while Google brand search maintained a 6.1× ROAS. New customer volume held flat despite higher spend.",
  whyItMatters:
    "The prospecting efficiency drop suggests creative fatigue on top-of-funnel ads. Brand search is under-invested relative to its return. Budget pacing is on track overall, but channel mix needs adjustment.",
  whatNext: [
    "Refresh top 3 Meta prospecting creatives — test 2 new hooks this week",
    "Increase Google brand budget by 15% while prospecting tests run",
    "Review landing page conversion on paid social traffic (down 0.4 pts)",
    "Confirm tracking on new campaign UTMs before scaling",
  ],
  decisions: [
    { priority: "High", action: "Pause underperforming Meta ad set (CPA 2.1× target)" },
    { priority: "Medium", action: "Scale Google brand — ROAS holding above threshold" },
    { priority: "Low", action: "Audit YouTube view-through attribution window" },
  ],
};

/** Sample campaign rows for portfolio workspace preview. */
export const portfolioCampaigns = [
  { name: "Brand Search — Core", platform: "Google", spend: "$12.4K", roas: "6.1×", status: "Scale" },
  { name: "Prospecting — Video", platform: "Meta", spend: "$18.2K", roas: "2.4×", status: "Review" },
  { name: "Retargeting — Site visitors", platform: "Meta", spend: "$8.1K", roas: "4.8×", status: "Hold" },
  { name: "YouTube — Awareness", platform: "YouTube", spend: "$6.3K", roas: "3.9×", status: "Test" },
  { name: "Shopping — Best sellers", platform: "Google", spend: "$9.8K", roas: "3.2×", status: "Hold" },
] as const;

export const portfolioWorkspace = {
  title: "Campaign Portfolio Workspace",
  subtitle: "Compare, filter, and drill into live campaign performance.",
  description:
    "A command center for media buyers and leadership — sortable campaign tables, multi-campaign compare mode, trend sparklines, and a detail drawer for deep dives. Built to replace the weekly \"export everything to Sheets\" ritual.",
};

/** Sample budget pacing data for preview. */
export const budgetPacingSample = [
  { initiative: "Brand & Search", planned: "$45K", actual: "$42.1K", pct: 94, status: "On track" },
  { initiative: "Prospecting", planned: "$38K", actual: "$41.8K", pct: 110, status: "Over pace" },
  { initiative: "Retargeting", planned: "$22K", actual: "$19.4K", pct: 88, status: "Under pace" },
  { initiative: "Content & Video", planned: "$15K", actual: "$14.2K", pct: 95, status: "On track" },
] as const;

export const budgetPlanner = {
  title: "Budget Planner & Pacing",
  subtitle: "Planned vs actual, by initiative and month.",
  description:
    "Leadership sets monthly budgets by initiative. The system tracks actual spend against plan in real time, flags over/under pacing, and merges budget alerts with performance alerts so teams catch problems before month-end.",
};

export const techStack = {
  title: "Built with modern full-stack tooling",
  description:
    "Production-grade marketing OS — not a Looker Studio embed. Custom Next.js app with API integrations, client-side caching, and export workflows.",
  categories: [
    {
      label: "Frontend",
      items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts"],
    },
    {
      label: "Data & APIs",
      items: ["Google Ads API", "Meta Graph API", "Google Sheets", "HubSpot", "Attribution APIs"],
    },
    {
      label: "Intelligence",
      items: ["Rule-based insight engine", "Executive brief generator", "Alert & pacing logic", "AI-ready architecture"],
    },
    {
      label: "Distribution",
      items: ["Slack report export", "PDF generation", "Print-ready HTML", "Scheduled sync"],
    },
  ],
};
