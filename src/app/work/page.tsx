import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CaseStudyCard } from "@/components/work/case-study-card";
import {
  featuredCaseStudies,
  supportingCaseStudies,
} from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Performance marketing case studies organized by problem solved — ecommerce growth, B2B demand, creator businesses, analytics, and conversion systems.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="This is what I solve."
        description="Case studies organized around the problem and the system that solved it — not company names. Across ecommerce, B2B, creator businesses, analytics, and conversion."
      />

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Featured</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Core capabilities</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.07}>
                <CaseStudyCard study={study} featured />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">More Work</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Creative, video & web systems
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {supportingCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.07}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
