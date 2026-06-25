import type { MetadataRoute } from "next";
import { articles } from "@/lib/data/articles";
import { caseStudies } from "@/lib/data/case-studies";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/work",
    "/services",
    "/work-with-me",
    "/local-business",
    "/hire-me",
    "/hire-me/resume",
    "/contact",
    "/insights",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: `${base}/work/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${base}/insights/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
