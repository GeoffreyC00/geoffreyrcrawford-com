import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ToolCard } from "@/components/tools/tool-card";
import { tools } from "@/lib/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Free AI marketing tools for operators — campaign strategy, paid media planning, analytics, and growth systems.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        label="Tools"
        title="AI marketing tools built for operators."
        description="Practical tools for campaign strategy, paid media planning, analytics, and growth systems."
      />

      <section className="section-padding !pt-0">
        <div className="container-wide">
          <div className="space-y-12">
            {tools.map((tool, i) => (
              <Reveal key={tool.slug} delay={i * 0.06}>
                <ToolCard tool={tool} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Need this done for you?"
        description="The tools are a starting point. When you're ready to build the real system, let's talk."
        primaryHref="/work-with-me"
        primaryLabel="Work With Me"
        secondaryHref="/contact"
        secondaryLabel="Get in Touch"
      />
    </>
  );
}
