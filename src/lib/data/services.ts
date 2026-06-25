export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Full-funnel paid acquisition built around revenue, not vanity metrics — strategy, execution, and the measurement that proves it worked.",
    items: ["Channel strategy", "Funnel design", "Budget allocation", "Scaling systems"],
  },
  {
    id: "paid-media-strategy",
    title: "Paid Media Strategy",
    description:
      "Campaign architecture and account structure across search, social, and marketplace — designed to scale efficiently and stay measurable.",
    items: ["Google Ads", "Meta Ads", "Microsoft Ads", "Amazon Ads", "YouTube Ads"],
  },
  {
    id: "marketing-analytics",
    title: "Marketing Analytics",
    description:
      "Reporting and attribution that answer \"what's actually working?\" — connecting spend to revenue across every channel.",
    items: ["GA4", "Looker Studio", "Attribution", "Reporting systems"],
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description:
      "The infrastructure behind the work — automated reporting, data connections, and workflows that remove manual busywork.",
    items: ["Reporting automation", "Data pipelines", "Workflow design", "Tooling integration"],
  },
  {
    id: "conversion-optimization",
    title: "Conversion Optimization",
    description:
      "Landing pages, funnels, and lead systems engineered to turn traffic into pipeline — not just clicks.",
    items: ["Landing pages", "Funnel optimization", "Lead systems", "CRO"],
  },
  {
    id: "video-creative",
    title: "Video Marketing & Creative",
    description:
      "Performance-focused creative and video strategy — where creative quality is the real lever on paid social and YouTube.",
    items: ["Creative testing", "Video strategy", "Packaging", "Paid social content"],
  },
  {
    id: "ai-workflows",
    title: "AI Workflow Development",
    description:
      "Practical AI applied to marketing operations — summarizing performance, drafting recommendations, and speeding up decisions.",
    items: ["AI reporting", "Workflow automation", "Decision support", "Operational efficiency"],
  },
  {
    id: "fractional-growth",
    title: "Fractional Growth Consulting",
    description:
      "Embedded, senior-level growth leadership — strategy and hands-on execution without the cost of a full-time hire.",
    items: ["Growth strategy", "Team enablement", "Roadmapping", "Hands-on execution"],
  },
];
