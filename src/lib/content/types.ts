/**
 * Content type taxonomy for the Insights knowledge base.
 *
 * The Insights section is a knowledge base, not just a blog. Each piece of
 * content declares a `type` in its MDX frontmatter. Adding a new content type
 * is a two-line change here — no component or routing changes required.
 */
export const CONTENT_TYPES = [
  "article",
  "case-study",
  "tutorial",
  "experiment",
  "breakdown",
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];

/** Human-readable labels shown in the UI (badges, filters, headers). */
export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  article: "Article",
  "case-study": "Case Study",
  tutorial: "Tutorial",
  experiment: "AI Experiment",
  breakdown: "Breakdown",
};

/**
 * Raw frontmatter as authored in an `.mdx` file. Only `title`, `description`,
 * and `publishedAt` are required; everything else has a sensible default
 * applied by the loader (see `normalizeFrontmatter`).
 */
export type InsightFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  type?: ContentType;
  updatedAt?: string;
  tags?: string[];
  cover?: string;
  author?: string;
  draft?: boolean;
  featured?: boolean;
};

/**
 * Normalized, fully-resolved metadata for a single piece of content.
 * This is the shape every UI component and SEO helper consumes.
 */
export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  type: ContentType;
  typeLabel: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  cover?: string;
  author: string;
  featured: boolean;
  draft: boolean;
  readingTime: string;
  /** Site-relative URL, e.g. `/insights/my-post`. */
  path: string;
};

/** A piece of content plus its raw MDX body, ready to compile. */
export type Insight = {
  meta: InsightMeta;
  body: string;
};
