import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  CONTENT_TYPE_LABELS,
  type ContentType,
  type Insight,
  type InsightFrontmatter,
  type InsightMeta,
} from "@/lib/content/types";

/**
 * Insights content loader.
 *
 * Source of truth is the `content/insights/*.mdx` directory. Each file is one
 * piece of content. To publish, drop a new `.mdx` file with frontmatter — no
 * code changes needed. This module reads, validates, and normalizes those
 * files into typed metadata the rest of the app consumes.
 *
 * All exports are server-only (filesystem access). They are safe to call from
 * Server Components, route handlers, sitemap/RSS generators, and metadata.
 */

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

/** Posts per page on the Insights index. */
export const INSIGHTS_PER_PAGE = 9;

const WORDS_PER_MINUTE = 220;

function estimateReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

function normalizeFrontmatter(
  slug: string,
  data: Partial<InsightFrontmatter>,
  body: string
): InsightMeta {
  if (!data.title || !data.description || !data.publishedAt) {
    throw new Error(
      `Insight "${slug}" is missing required frontmatter (title, description, publishedAt).`
    );
  }

  const type: ContentType = data.type ?? "article";

  return {
    slug,
    title: data.title,
    description: data.description,
    type,
    typeLabel: CONTENT_TYPE_LABELS[type] ?? CONTENT_TYPE_LABELS.article,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    tags: data.tags ?? [],
    cover: data.cover,
    author: data.author ?? "Geoffrey R. Crawford",
    featured: data.featured ?? false,
    draft: data.draft ?? false,
    readingTime: estimateReadingTime(body),
    path: `/insights/${slug}`,
  };
}

function readInsightFile(slug: string): Insight {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: normalizeFrontmatter(slug, data as Partial<InsightFrontmatter>, content),
    body: content,
  };
}

/** Whether drafts should be visible (only outside production builds). */
function includeDrafts(): boolean {
  return process.env.NODE_ENV !== "production";
}

let cache: Insight[] | null = null;

/** All insights, newest first, with drafts filtered out in production. */
export function getAllInsights(): Insight[] {
  if (cache) return cache;

  if (!fs.existsSync(CONTENT_DIR)) {
    cache = [];
    return cache;
  }

  const insights = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readInsightFile(file.replace(/\.mdx$/, "")))
    .filter((insight) => includeDrafts() || !insight.meta.draft)
    .sort(
      (a, b) =>
        new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime()
    );

  cache = insights;
  return insights;
}

/** Metadata only (no MDX body) — for index, lists, sitemap, RSS. */
export function getAllInsightMeta(): InsightMeta[] {
  return getAllInsights().map((insight) => insight.meta);
}

/** All published slugs — for `generateStaticParams`. */
export function getInsightSlugs(): string[] {
  return getAllInsights().map((insight) => insight.meta.slug);
}

/** A single insight (metadata + body) by slug, or `undefined`. */
export function getInsightBySlug(slug: string): Insight | undefined {
  return getAllInsights().find((insight) => insight.meta.slug === slug);
}

/** Featured insights for spotlighting on the index or homepage. */
export function getFeaturedInsights(): InsightMeta[] {
  return getAllInsightMeta().filter((meta) => meta.featured);
}

/** Distinct tags across all content, alphabetized. */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const meta of getAllInsightMeta()) {
    for (const tag of meta.tags) tags.add(tag);
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export type PaginatedInsights = {
  items: InsightMeta[];
  page: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
};

/** A page of insight metadata for the paginated index. */
export function getPaginatedInsights(
  page = 1,
  perPage = INSIGHTS_PER_PAGE
): PaginatedInsights {
  const all = getAllInsightMeta();
  const totalItems = all.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;

  return {
    items: all.slice(start, start + perPage),
    page: current,
    totalPages,
    totalItems,
    perPage,
  };
}
