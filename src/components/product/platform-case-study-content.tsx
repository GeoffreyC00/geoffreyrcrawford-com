import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ArchitectureDiagram } from "@/components/product/architecture-diagram";
import { PlatformHeroVisual } from "@/components/product/platform-hero-visual";
import { ProductModuleGrid } from "@/components/product/product-module-grid";
import { TechStackGrid } from "@/components/product/tech-stack-grid";
import { CtaSection } from "@/components/shared/cta-section";
import { Reveal } from "@/components/shared/reveal";
import { LinkButton } from "@/components/ui/link-button";
import {
  buildProcess,
  businessImpact,
  capabilities,
  caseStudyHero,
  confidentialityNote,
  platformProduct,
  theProblem,
  theSolution,
} from "@/lib/data/platform-case-study";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-6 font-serif text-display-md font-light text-balance">{title}</h2>
    </div>
  );
}

export function PlatformCaseStudyContent() {
  return (
    <>
      {/* §1 Hero */}
      <section className="relative overflow-hidden section-padding !pb-20 !pt-24 md:!pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,182,255,0.12),transparent)]"
        />

        <div className="container-wide relative">
          <Link
            href="/work"
            className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="mt-12 max-w-3xl">
            <p className="kicker">Product Case Study</p>
            <h1 className="mt-7 font-serif text-display-xl font-light text-pretty">
              {caseStudyHero.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty">
              {caseStudyHero.subheadline}
            </p>
            <div className="mt-10">
              <LinkButton href="/contact" size="lg">
                {caseStudyHero.cta}
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>

          <Reveal delay={0.15} className="mt-16 lg:mt-20">
            <PlatformHeroVisual size="hero" />
          </Reveal>
        </div>
      </section>

      {/* §2 The Problem */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="01" title={theProblem.title} />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {theProblem.intro}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-editorial text-muted-foreground">
              Data lived across
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {theProblem.dataSources.map((src) => (
                <span
                  key={src}
                  className="rounded-full border border-border bg-muted/30 px-4 py-2 text-sm text-foreground/80"
                >
                  {src}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-14">
            <p className="font-mono text-[10px] uppercase tracking-editorial text-muted-foreground">
              Leadership couldn&apos;t quickly answer
            </p>
            <ul className="mt-6 space-y-4">
              {theProblem.questions.map((q, i) => (
                <li
                  key={q}
                  className="flex items-start gap-4 border-t border-hairline py-5 text-lg text-foreground/90"
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* §3 The Solution */}
      <section className="section-padding border-t border-hairline bg-gradient-to-b from-accent/[0.03] to-transparent">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="02" title={theSolution.title} />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {theSolution.intro}
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {theSolution.points.map((point, i) => (
              <Reveal
                as="li"
                key={point}
                delay={i * 0.04}
                className="flex items-start gap-3 rounded-xl border border-border bg-muted/20 px-5 py-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-[15px] leading-relaxed text-foreground/90">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* §4 Product Highlights */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="03" title="Product Highlights" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {platformProduct.name} ships as a modular system — each module solves a specific
              operational or executive need. Click any card to explore.
            </p>
          </Reveal>

          <div className="mt-14">
            <ProductModuleGrid />
          </div>
        </div>
      </section>

      {/* §5 System Architecture */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="04" title="System Architecture" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Fragmented platform data flows through a unified pipeline — normalized, analyzed, and
              surfaced as executive intelligence.
            </p>
          </Reveal>

          <div className="mt-16">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* §6 Capabilities */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="05" title="Capabilities" />
          </Reveal>

          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap}
                delay={i * 0.03}
                className="bg-background px-6 py-6 transition-colors hover:bg-muted/20"
              >
                <p className="font-serif text-lg font-light text-foreground">{cap}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* §7 How I Built It */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="06" title={buildProcess.title} />
          </Reveal>

          <div className="mt-14 space-y-0">
            {buildProcess.steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.06}
                className="grid gap-4 border-t border-hairline py-10 sm:grid-cols-[200px_1fr]"
              >
                <p className="font-mono text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-serif text-xl font-light text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* §8 Technology Stack */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="07" title="Technology Stack" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Production-grade full-stack marketing software — custom-built, not a dashboard embed.
            </p>
          </Reveal>

          <div className="mt-14">
            <TechStackGrid />
          </div>
        </div>
      </section>

      {/* §9 Business Impact */}
      <section className="section-padding border-t border-hairline bg-gradient-to-b from-transparent to-accent/[0.03]">
        <div className="container-wide">
          <Reveal>
            <SectionHeading kicker="08" title={businessImpact.title} />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessImpact.outcomes.map((outcome, i) => (
              <Reveal
                key={outcome.label}
                delay={i * 0.05}
                className="rounded-2xl border border-border bg-muted/20 p-8 transition-colors hover:border-foreground/15"
              >
                <p className="font-serif text-3xl font-light text-accent">{outcome.metric}</p>
                <p className="mt-3 font-medium text-foreground">{outcome.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {outcome.description}
                </p>
              </Reveal>
            ))}
          </div>
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

      {/* CTA */}
      <section className="section-padding border-t border-hairline !py-20">
        <div className="container-wide">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-display-md font-light text-balance">
              He doesn&apos;t just run ads. He builds products.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Looking for someone who can design and ship AI-powered marketing systems? Let&apos;s
              talk.
            </p>
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
        title="Building marketing technology?"
        description="Whether you're hiring for product, growth ops, or engineering leadership — let's talk about what you're building."
        primaryHref="/contact"
        primaryLabel="Contact Me"
        secondaryHref="/work-with-me"
        secondaryLabel="Work With Me"
      />
    </>
  );
}
