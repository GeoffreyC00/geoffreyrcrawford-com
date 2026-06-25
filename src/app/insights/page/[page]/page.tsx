import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { InsightsIndex } from "@/components/content/insights-index";
import {
  getAllInsightMeta,
  getPaginatedInsights,
  INSIGHTS_PER_PAGE,
} from "@/lib/content/insights";
import { absoluteUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  const total = getAllInsightMeta().length;
  const totalPages = Math.max(1, Math.ceil(total / INSIGHTS_PER_PAGE));
  // Page 1 is served by /insights; generate routes for pages 2..N only.
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Insights — Page ${page}`,
    description:
      "A knowledge base on paid media, marketing analytics, AI systems, and growth strategy.",
    alternates: { canonical: absoluteUrl(`/insights/page/${page}`) },
  };
}

export default async function InsightsPaginatedPage({ params }: Props) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 1) notFound();
  if (pageNumber === 1) redirect("/insights");

  const data = getPaginatedInsights(pageNumber);
  if (pageNumber > data.totalPages) notFound();

  return <InsightsIndex data={data} />;
}
