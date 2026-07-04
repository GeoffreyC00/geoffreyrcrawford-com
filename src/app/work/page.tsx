import type { Metadata } from "next";
import { FeaturedProjectSection } from "@/components/product/featured-project-section";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CaseStudyFeature } from "@/components/work/case-study-feature";
import { featuredCaseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product case studies and performance marketing work — AI marketing systems, ecommerce growth, B2B demand, and creator businesses.",
};

export default function WorkPage() {
  const otherStudies = featuredCaseStudies.filter((s) => s.slug !== "ai-marketing-systems");

  return (
    <>
      <PageHero
        label="Work"
        title="Products built. Problems solved."
        description="From AI-powered marketing operating systems to performance marketing engagements — organized around the system, not the logo."
      />

      <FeaturedProjectSection variant="standalone" />

      <section className="section-padding border-t border-hairline">
        <div className="container-wide space-y-24 md:space-y-32">
          {otherStudies.map((study, i) => (
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
