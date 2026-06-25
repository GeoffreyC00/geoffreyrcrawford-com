import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { EditorialImage } from "@/components/shared/editorial-image";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CaseStudyCard } from "@/components/work/case-study-card";
import {
  featuredCaseStudies,
  supportingCaseStudies,
} from "@/lib/data/case-studies";
import { photos } from "@/lib/photography";

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

      {/* Full-bleed documentary — credibility */}
      <section className="relative">
        <EditorialImage
          src={photos.collaborationMastermind.src}
          alt={photos.collaborationMastermind.alt}
          className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-wide px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14">
            <p className="max-w-2xl font-serif text-2xl font-light leading-snug text-balance sm:text-3xl">
              The work behind the numbers: advising operators, teams, and founders.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
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
