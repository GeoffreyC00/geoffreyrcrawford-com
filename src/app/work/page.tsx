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

      <section className="section-padding border-t border-hairline !pt-20">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Core capabilities</p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-16 md:grid-cols-2">
            {featuredCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.05}>
                <CaseStudyCard study={study} index={i + 1} featured />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Creative, video &amp; web systems</p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-16 md:grid-cols-2">
            {supportingCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.05}>
                <CaseStudyCard study={study} index={featuredCaseStudies.length + i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
