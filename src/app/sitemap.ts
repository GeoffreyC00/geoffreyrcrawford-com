import type { MetadataRoute } from "next";
import {
  getAllInsightMeta,
  getPaginatedInsights,
} from "@/lib/content/insights";
import { caseStudies } from "@/lib/data/case-studies";
import { toolRegistry } from "@/lib/tools/registry";
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
    "/tools",
    "/work/ai-marketing-systems",
  ];

  // Every tool (live + coming soon) from the registry.
  const toolPages = toolRegistry.map((tool) => ({
    url: absoluteUrl(tool.href),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: tool.status === "live" ? 0.9 : 0.5,
  }));

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
    ...toolPages,
    ...insights.map((meta) => ({
      url: absoluteUrl(meta.path),
      lastModified: new Date(meta.updatedAt ?? meta.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insightPages,
  ];
}
