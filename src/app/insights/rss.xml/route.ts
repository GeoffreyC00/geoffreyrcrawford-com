import { getAllInsightMeta } from "@/lib/content/insights";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** RSS 2.0 feed for the Insights knowledge base. */
export function GET() {
  const insights = getAllInsightMeta();
  const feedUrl = absoluteUrl("/insights/rss.xml");
  const siteUrl = absoluteUrl("/insights");
  const lastBuild = insights[0]
    ? new Date(insights[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const items = insights
    .map((meta) => {
      const url = absoluteUrl(meta.path);
      return `    <item>
      <title>${escapeXml(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(meta.description)}</description>
      <category>${escapeXml(meta.typeLabel)}</category>
      <pubDate>${new Date(meta.publishedAt).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Insights</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
