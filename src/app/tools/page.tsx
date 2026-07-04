import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { AiSystemsPortfolioStrip } from "@/components/work/ai-systems-portfolio-strip";
import { ToolCard } from "@/components/tools/tool-card";
import { tools } from "@/lib/data/tools";

export const metadata: Metadata = {
  title: "AI Marketing Tools",
  description:
    "Free AI marketing tools for people building better campaigns — campaign planning, creative, analytics, and optimization, built by a marketer running live paid media.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  const liveCount = tools.filter((t) => t.status === "live").length;

  return (
    <>
      <PageHero
        label="AI marketing tools"
        title="Free AI marketing tools for people building better campaigns."
        description="Practical tools for campaign strategy, paid media planning, analytics, and growth — built by a marketer actively managing accounts. More shipping soon."
      />

      <section className="section-padding !pt-0">
        <div className="container-wide space-y-16">
          <AiSystemsPortfolioStrip />

          <div>
            <Reveal>
              <p className="mb-10 font-mono text-xs uppercase tracking-editorial text-muted-foreground">
                {liveCount} live · {tools.length - liveCount} in development
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, i) => (
                <Reveal key={tool.slug} delay={i * 0.05}>
                  <ToolCard tool={tool} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need the full system, not just a tool?"
        description="The tools are a starting point. When you're ready to build and run the whole growth system, let's talk."
        primaryHref="/work-with-me"
        primaryLabel="Work With Me"
        secondaryHref="/contact"
        secondaryLabel="Get in Touch"
      />
    </>
  );
}
