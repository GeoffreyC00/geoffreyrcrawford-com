import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { FeaturedProjectSection } from "@/components/product/featured-project-section";
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
          <FeaturedProjectSection variant="standalone" />

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
        title="See the full platform case study"
        description="Explore how I designed and built an AI-powered marketing operating system — then try the free tools."
        primaryHref="/work/ai-marketing-systems"
        primaryLabel="Explore the Platform"
        secondaryHref="/work-with-me"
        secondaryLabel="Work With Me"
      />
    </>
  );
}
