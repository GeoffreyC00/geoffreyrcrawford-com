import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { articles } from "@/lib/data/articles";
import { insightCategories } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and perspectives on paid media, AI, marketing systems, growth strategy, and SEO.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title="Perspectives on growth."
        description="Practical thinking on paid media, marketing systems, AI, and building revenue — from someone in the accounts, not the sidelines."
      />

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Latest</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Articles</h2>
          <div className="mt-10 space-y-4">
            {articles.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group block">
                <Card className="transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-accent">
                        {article.category}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{article.description}</p>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        · {article.readTime}
                      </p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent sm:block" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <SectionHeader
            label="Topics"
            title="More coming soon."
            description="Future articles on the strategies, systems, and tools behind modern growth marketing."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insightCategories.map((category) => (
              <Card key={category.id} className="border-border/80">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
