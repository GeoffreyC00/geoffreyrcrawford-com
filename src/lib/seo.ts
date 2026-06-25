import { siteConfig } from "@/lib/site-config";

/** Build an absolute URL from a site-relative path (for canonical/OG/RSS). */
export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Dynamic Open Graph image URL for an insight. */
export function insightOgImage(slug: string): string {
  return absoluteUrl(`/insights/${slug}/opengraph-image`);
}
