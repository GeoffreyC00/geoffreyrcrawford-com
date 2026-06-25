import type { Metadata } from "next";
import { InsightsIndex } from "@/components/content/insights-index";
import { getPaginatedInsights } from "@/lib/content/insights";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "A knowledge base on paid media, marketing analytics, AI systems, growth strategy, and the technology behind modern performance marketing.",
  alternates: {
    canonical: absoluteUrl("/insights"),
    types: {
      "application/rss+xml": [
        { url: absoluteUrl("/insights/rss.xml"), title: "Insights RSS Feed" },
      ],
    },
  },
};

export default function InsightsPage() {
  const data = getPaginatedInsights(1);
  return <InsightsIndex data={data} />;
}
