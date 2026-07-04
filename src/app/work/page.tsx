import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { AiSystemsPortfolioStrip } from "@/components/work/ai-systems-portfolio-strip";
import { CaseStudyFeature } from "@/components/work/case-study-feature";
import { featuredCaseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected performance marketing case studies — ecommerce growth, B2B demand, creator businesses, and analytics systems.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="This is what I solve."
        description="A few engagements that show how I work — organized around the problem and the system that solved it."
      />

      <section className="section-padding border-t border-hairline">
        <div className="container-wide space-y-24 md:space-y-32">
          <AiSystemsPortfolioStrip />

          {featuredCaseStudies.map((study, i) => (
              <Reveal key={study.slug}>
                <CaseStudyFeature study={study} reverse={i % 2 === 1} />
              </Reveal>
            ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
