import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { SectionHeader } from "@/components/shared/section-header";
import { CaseStudyCard } from "@/components/work/case-study-card";
import {
  featuredCaseStudies,
  supportingCaseStudies,
} from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across paid media, ecommerce, B2B, digital products, and web development.",
};

export default function WorkPage() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Work</p>
            <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
              Case studies & projects.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              A selection of engagements across ecommerce, B2B, digital products, creator brands,
              and web development.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <SectionHeader label="Featured" title="Primary engagements" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <SectionHeader label="More Work" title="Supporting projects" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
