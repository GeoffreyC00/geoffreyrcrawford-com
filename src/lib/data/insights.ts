export type InsightCategory = {
  id: string;
  title: string;
  description: string;
};

export const insightCategories: InsightCategory[] = [
  {
    id: "paid-media",
    title: "Paid Media",
    description:
      "Campaign architecture, budget scaling, channel strategy, and performance optimization across search and social.",
  },
  {
    id: "ai",
    title: "AI",
    description:
      "Practical applications of AI in marketing operations, reporting, automation, and decision-making.",
  },
  {
    id: "marketing-systems",
    title: "Marketing Systems",
    description:
      "Dashboards, attribution, workflows, and the infrastructure that connects marketing to revenue.",
  },
  {
    id: "growth-strategy",
    title: "Growth Strategy",
    description:
      "Full-funnel thinking, offer positioning, and the strategic frameworks behind sustainable growth.",
  },
  {
    id: "creator-economy",
    title: "Creator Economy",
    description:
      "Audience building, content packaging, and monetization for creators and digital product businesses.",
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Technical SEO, content strategy, and organic growth tactics that complement paid acquisition.",
  },
];
