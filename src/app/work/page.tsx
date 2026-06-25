import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { CaseStudyCard } from "@/components/work/case-study-card";
import {
  featuredCaseStudies,
  supportingCaseStudies,
} from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across paid media, ecommerce, B2B, digital products, creator brands, and local business.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Case studies & projects."
        description="Paid media, growth systems, content strategy, and web — across ecommerce, B2B, digital products, creators, and local businesses."
      />

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Featured</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Primary engagements</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">More Work</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Supporting projects</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {supportingCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
