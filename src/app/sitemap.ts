import type { MetadataRoute } from "next";
import {
  getAllInsightMeta,
  getPaginatedInsights,
} from "@/lib/content/insights";
import { caseStudies } from "@/lib/data/case-studies";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/work",
    "/work-with-me",
    "/local-business",
    "/hire-me",
    "/hire-me/resume",
    "/contact",
    "/insights",
  ];

  const insights = getAllInsightMeta();
  const { totalPages } = getPaginatedInsights(1);

  // Paginated insight index pages (page 2..N).
  const insightPages = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    url: absoluteUrl(`/insights/page/${i + 2}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/work/${study.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((meta) => ({
      url: absoluteUrl(meta.path),
      lastModified: new Date(meta.updatedAt ?? meta.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insightPages,
  ];
}
