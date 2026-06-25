import { CtaSection } from "@/components/shared/cta-section";
import { InsightCard } from "@/components/content/insight-card";
import { Pagination } from "@/components/content/pagination";
import { NewsletterCard } from "@/components/newsletter/newsletter-card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import type { PaginatedInsights } from "@/lib/content/insights";
import { insightCategories } from "@/lib/data/insights";

/** Builds index pagination hrefs: page 1 → /insights, others → /insights/page/N. */
function hrefForPage(page: number): string {
  return page <= 1 ? "/insights" : `/insights/page/${page}`;
}

export function InsightsIndex({ data }: { data: PaginatedInsights }) {
  const hasContent = data.items.length > 0;

  return (
    <>
      <PageHero
        label="Insights"
        title="A knowledge base for modern growth."
        description="Articles, case study breakdowns, tutorials, and AI experiments on paid media, analytics, marketing systems, and the technology behind them."
      />

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          {hasContent ? (
            <>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-accent">
                    Latest
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    {data.totalItems} {data.totalItems === 1 ? "piece" : "pieces"} of writing
                  </h2>
                </div>
                {data.totalPages > 1 && (
                  <p className="text-sm text-muted-foreground">
                    Page {data.page} of {data.totalPages}
                  </p>
                )}
              </div>

              <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {data.items.map((insight) => (
                  <InsightCard key={insight.slug} insight={insight} />
                ))}
              </div>

              <Pagination
                page={data.page}
                totalPages={data.totalPages}
                hrefForPage={hrefForPage}
              />
            </>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <h2 className="text-xl font-semibold tracking-tight">First posts coming soon.</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                The knowledge base is being written. Subscribe below to get new breakdowns,
                tutorials, and experiments as they land.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <NewsletterCard source="insights-index" />
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <SectionHeader
            index="03"
            label="Topics"
            title="What you'll find here."
            description="The recurring themes behind the work — written for operators, recruiters, and business owners who want substance over buzzwords."
          />
          <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {insightCategories.map((category) => (
              <div key={category.id} className="border-t border-border pt-6">
                <h3 className="font-serif text-xl font-light">{category.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
