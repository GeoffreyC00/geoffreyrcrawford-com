export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "paid-media",
    title: "Paid Media Strategy",
    description:
      "Full-funnel paid acquisition across search, social, and marketplace channels — built for scale, efficiency, and measurable revenue growth.",
    items: ["Google Ads", "Meta Ads", "Microsoft Ads", "Amazon Ads", "YouTube Ads"],
  },
  {
    id: "ai-consulting",
    title: "AI Consulting & Automation",
    description:
      "Practical AI systems that reduce manual work, improve decision speed, and connect marketing data to business outcomes.",
    items: [
      "Marketing automation",
      "AI workflows",
      "Reporting systems",
      "Data dashboards",
      "Operational efficiency",
    ],
  },
  {
    id: "conversion",
    title: "Conversion Optimization",
    description:
      "Landing pages, funnels, and lead systems designed to turn traffic into pipeline — not just clicks.",
    items: ["Landing pages", "Funnels", "Lead generation systems"],
  },
  {
    id: "seo",
    title: "SEO & Content Strategy",
    description:
      "Technical foundations and content planning that compound organic growth alongside paid performance.",
    items: ["Technical SEO", "Content planning", "Organic growth"],
  },
  {
    id: "video",
    title: "Video Ad Creative",
    description:
      "Performance-focused creative strategy for paid social and YouTube — where creative quality directly drives ROAS.",
    items: [
      "Performance-focused creative",
      "UGC",
      "Paid social content",
      "YouTube creative strategy",
    ],
  },
];
