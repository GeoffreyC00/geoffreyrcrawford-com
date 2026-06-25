/**
 * Renders a JSON-LD structured-data block. Used for SEO so search engines and
 * AI crawlers understand the page (Article, Person, WebSite, BreadcrumbList).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, server-rendered content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
