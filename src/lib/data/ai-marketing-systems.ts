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
