import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { Reveal } from "@/components/shared/reveal";
import { AttributionPreview, MarketingOsPreview } from "@/components/work/dashboard-preview";
import { LinkButton } from "@/components/ui/link-button";
import {
  aiAutomation,
  aiSystemsHero,
  attributionDashboard,
  confidentialityNote,
  marketingOs,
  myRoleBullets,
  overviewCopy,
  whatIBuild,
} from "@/lib/data/ai-marketing-systems";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-6 font-serif text-display-md font-light text-balance">{title}</h2>
    </div>
  );
}

export function AiMarketingSystemsContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding !pb-16 !pt-24 md:!pt-28">
        <div className="container-wide">
          <Link
            href="/work"
            className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="kicker">{aiSystemsHero.label}</p>
            <h1 className="mt-7 font-serif text-display-xl font-light text-pretty">
              {aiSystemsHero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty">
              {aiSystemsHero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="Overview" title="Marketing intelligence, built as product." />
            <div className="mt-8 max-w-3xl space-y-5">
              {overviewCopy.map((p) => (
                <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What I Build */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="What I build" title="Systems for operators and leadership." />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatIBuild.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-muted/20 p-6 transition-colors hover:border-foreground/20 hover:bg-muted/35">
                  <h3 className="font-serif text-lg font-light text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: Marketing OS */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <Reveal>
              <p className="kicker">Featured system</p>
              <h2 className="mt-6 font-serif text-display-md font-light">{marketingOs.title}</h2>
              <p className="mt-2 text-lg text-muted-foreground">{marketingOs.subtitle}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
                {marketingOs.description}
              </p>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {marketingOs.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <MarketingOsPreview />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured: Attribution & ROI */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <Reveal className="lg:order-2">
              <p className="kicker">Featured system</p>
              <h2 className="mt-6 font-serif text-display-md font-light">
                {attributionDashboard.title}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">{attributionDashboard.subtitle}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
                {attributionDashboard.description}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-4">
                {attributionDashboard.sampleMetrics.map((m) => (
                  <div key={m.label} className="bg-background px-4 py-5">
                    <p className="font-serif text-2xl font-light text-foreground">{m.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:order-1">
              <AttributionPreview channels={attributionDashboard.sampleChannels} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI & Automation */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker={aiAutomation.title} title="Intelligence embedded in the workflow." />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {aiAutomation.description}
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {aiAutomation.capabilities.map((cap, i) => (
              <Reveal
                as="li"
                key={cap}
                delay={i * 0.04}
                className="flex gap-4 border-t border-hairline py-5"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed text-foreground/90">{cap}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* My Role */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading kicker="My role" title="Product, data, and marketing — end to end." />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              I don&apos;t just advise on dashboards — I architect them, map the data, design the UX,
              wire the AI layer, and ship the product. This work sits at the intersection of growth
              marketing, marketing operations, and AI product development.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {myRoleBullets.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="section-padding border-t border-hairline !py-16">
        <div className="container-wide max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-editorial text-muted-foreground">
            Confidentiality
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
            {confidentialityNote}
          </p>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="section-padding border-t border-hairline !py-20">
        <div className="container-wide">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-display-md font-light text-balance">
              Want to see how I think through marketing systems?
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <LinkButton href="/contact" size="lg">
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/tools/ai-campaign-builder" variant="secondary" size="lg">
                View AI Campaign Builder
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Building a marketing intelligence layer?"
        description="Whether you're hiring for product, growth ops, or performance leadership — let's talk about what you're building."
        primaryHref="/contact"
        primaryLabel="Contact Me"
        secondaryHref="/work-with-me"
        secondaryLabel="Work With Me"
      />
    </>
  );
}
