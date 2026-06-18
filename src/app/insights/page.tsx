import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { insightCategories } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and perspectives on paid media, AI, marketing systems, growth strategy, and SEO.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Insights</p>
            <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
              Perspectives on growth.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Articles on paid media, AI, marketing systems, and growth strategy — coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <SectionHeader
            label="Topics"
            title="What I'll be writing about."
            description="A framework for future articles covering the strategies, systems, and tools behind modern growth marketing."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insightCategories.map((category) => (
              <Card
                key={category.id}
                className="transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-accent/60">
                    Coming soon
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
