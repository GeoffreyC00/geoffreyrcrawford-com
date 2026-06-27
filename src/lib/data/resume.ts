export const targetRoles = [
  "Growth Marketing Manager",
  "Paid Media Strategist",
  "Performance Marketing Manager",
  "Demand Generation Manager",
  "AI Marketing Strategist",
  "Fractional Growth Lead",
] as const;

export const coreSkills = [
  "Paid media strategy & execution",
  "Campaign architecture & scaling",
  "Conversion optimization & funnels",
  "Marketing analytics & reporting",
  "AI workflows & automation",
  "Landing pages & web systems",
  "Creative testing & iteration",
  "Full-funnel growth strategy",
] as const;

export const platforms = [
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "Amazon Ads",
  "Microsoft Ads",
  "Google Analytics",
  "Looker Studio",
  "HubSpot",
  "Next.js / Vercel",
] as const;

export const experienceHighlights = [
  {
    company: "Think Media",
    role: "Paid Media & Growth",
    period: "Consulting",
    summary:
      "YouTube and Meta campaigns for a leading digital education brand — webinars, digital products, funnels, and creative testing at scale.",
    slug: "scaling-creator-businesses",
  },
  {
    company: "PoolSupplies.com",
    role: "Paid Media Manager",
    period: "Consulting",
    summary:
      "Multi-channel ecommerce growth across Google, Amazon, and Microsoft Ads — campaign architecture supporting $1M+ quarterly revenue.",
    slug: "enterprise-ecommerce-growth",
  },
  {
    company: "VoIP Supply",
    role: "Paid Media Consultant",
    period: "Long-term engagement",
    summary:
      "B2B and ecommerce paid search — lead generation, performance reporting, and strategic account management.",
    slug: "b2b-lead-generation",
  },
  {
    company: "OmegaGreed",
    role: "Content & YouTube Strategy",
    period: "Consulting",
    summary:
      "Personal brand growth through content strategy, storytelling, thumbnails, and audience development.",
    slug: "performance-creative-video",
  },
  {
    company: "The Food Experience",
    role: "Web & Brand Lead",
    period: "Project",
    summary:
      "End-to-end website design, UX, and launch for a Buffalo, NY catering business.",
    slug: "full-funnel-web-cro",
  },
] as const;

export const professionalSummary =
  "Growth marketing operator with 7+ years building revenue systems across paid media, analytics, AI automation, websites, and conversion optimization. I've managed up to $200K+ in monthly ad spend across Google, Meta, YouTube, Amazon, and Microsoft Ads — for ecommerce brands, B2B companies, digital product businesses, and creator-led brands. I work best where strategy meets execution: campaign architecture, reporting systems, funnel optimization, and the technology that makes marketing teams faster.";

// ---------------------------------------------------------------------------
// Print résumé content — a self-contained, editorial one-pager. Kept separate
// from the Hire Me page data so the printed document can be tuned on its own.
// ---------------------------------------------------------------------------

export const resumeTitle = "Growth Marketing Strategist";
export const resumeSpecialties = "Paid Media · AI Systems · Marketing Analytics";

export const resumeSummary =
  "I build the systems that turn ad spend into predictable revenue — across paid media, marketing analytics, AI automation, attribution, and conversion optimization. My work connects the channels that drive demand, the data that proves it, and the executive reporting that makes it legible to leadership. I operate where strategy meets execution: campaign architecture one day, the dashboards and automation behind it the next. The throughline isn't a channel or a tactic — it's treating marketing as a system that compounds.";

export const coreExpertise = [
  "Growth Strategy",
  "Paid Media",
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "Marketing Analytics",
  "GA4",
  "HubSpot",
  "AI Workflows",
  "Automation",
  "Conversion Optimization",
  "Executive Dashboards",
  "Creative Testing",
  "Landing Pages",
  "Cross-functional Leadership",
] as const;

export type ResumeRole = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const resumeExperience: ResumeRole[] = [
  {
    company: "Think Media",
    role: "Growth & Paid Media Strategist",
    period: "Consulting",
    summary:
      "Lead multi-channel growth and paid acquisition for a leading digital-education brand — across YouTube, Meta, and an ongoing slate of product launches, funnels, and live events.",
    bullets: [
      "Architected full-funnel YouTube and Meta programs for webinars, digital products, and events, fed by a high-velocity creative testing and experimentation system.",
      "Built the marketing analytics and AI-assisted reporting layer that ties spend to revenue and turns leadership decisions from days into minutes.",
      "Run continuous funnel optimization and experimentation, partnering with leadership and creative teams to convert performance data into the next round of bets.",
    ],
  },
  {
    company: "Crawford Creative Ventures",
    role: "Founder & Growth Consultant",
    period: "Consulting",
    summary:
      "Strategic growth consulting for ecommerce, B2B, and creator-led businesses — paid media, marketing systems, and growth strategy delivered as one integrated engagement.",
    bullets: [
      "Design the connective tissue behind growth: attribution, AI automation, conversion optimization, and executive dashboards that make results repeatable.",
    ],
  },
  {
    company: "PoolSupplies.com",
    role: "Paid Media Manager",
    period: "Consulting",
    summary:
      "Multi-channel ecommerce paid media across Google, Microsoft, and Amazon Ads — campaign architecture supporting $1M+ in quarterly revenue.",
    bullets: [
      "Managed six-figure quarterly budgets, scaling efficiently through seasonal demand while cutting wasted spend.",
    ],
  },
  {
    company: "VoIP Supply",
    role: "Paid Media Consultant",
    period: "Long-term engagement",
    summary:
      "Long-term B2B and ecommerce paid search across Google and Microsoft Ads — lead generation and transparent reporting guiding multi-year strategy.",
    bullets: [],
  },
];

export const earlierExperience =
  "Earlier — content & YouTube strategy (OmegaGreed) and end-to-end web design and launch (The Food Experience).";

export const education = {
  degree: "Bachelor of Science, Marketing",
  school: "SUNY Buffalo State",
};

export const certifications = [
  "Google Ads",
  "Meta Blueprint",
  "HubSpot",
  "SEMrush",
  "Pacvue (In Progress)",
] as const;
