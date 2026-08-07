import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturedProjectSection } from "@/components/product/featured-project-section";
import { CtaSection } from "@/components/shared/cta-section";
import { HeroPortrait } from "@/components/shared/hero-portrait";
import { JsonLd } from "@/components/seo/json-ld";
import { Parallax, Reveal } from "@/components/shared/reveal";
import { StatusPill, ToolCard } from "@/components/tools/tool-card";
import { LinkButton } from "@/components/ui/link-button";
import { SelectedWorkGrid } from "@/components/work/selected-work-grid";
import {
  credibilityCapabilities,
  credibilityMetrics,
  credibilityPlatforms,
  currentEngagement,
  selectedResults,
  workIntersection,
} from "@/lib/data/homepage";
import { featuredTool, tools } from "@/lib/data/tools";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Growth Marketing Strategist & Performance Marketing Leader",
  description:
    "Geoffrey R. Crawford — Senior Growth Marketing Strategist with 8+ years in performance marketing, paid acquisition, analytics, experimentation, and marketing systems. Los Angeles.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Growth Marketing Strategist",
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA" },
  sameAs: [siteConfig.linkedin, siteConfig.instagram],
  knowsAbout: [
    "Growth Marketing",
    "Performance Marketing",
    "Paid Acquisition",
    "Marketing Analytics",
    "Marketing Attribution",
    "Experimentation",
    "Marketing Operations",
    "AI Workflows",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

const heroCapabilities = [
  "Paid Media",
  "Growth Strategy",
  "Analytics",
  "Attribution",
  "Landing Page Optimization",
  "Experimentation",
  "Marketing Systems",
  "AI Automation",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />

      {/* Hero — growth / performance marketing leader */}
      <section className="section-padding !pb-16 !pt-24 md:!pt-32">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_26rem] lg:gap-16">
            <div className="order-1">
              <p className="kicker animate-rise">Growth Marketing · Performance · Systems</p>

              <h1 className="mt-8 font-serif text-display-2xl font-light text-pretty">
                <span className="block overflow-hidden">
                  <span className="reveal-mask block [animation-delay:80ms]">
                    I build marketing systems
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-mask block text-accent [animation-delay:200ms]">
                    that scale.
                  </span>
                </span>
              </h1>

              <p className="animate-rise mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:320ms]">
                Growth marketing strategist with 8+ years helping businesses scale through paid
                media, analytics, experimentation, and AI-powered workflows — strategy and
                execution from the same operator.
              </p>

              <div className="animate-rise mt-8 flex flex-wrap gap-2 [animation-delay:380ms]">
                {heroCapabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 [animation-delay:420ms]">
                <LinkButton href="/work" size="lg">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <Link
                  href="/work/ai-marketing-systems"
                  className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  See marketing systems →
                </Link>
              </div>
            </div>

            <Parallax
              distance={24}
              className="animate-rise order-2 mx-auto w-full max-w-[20rem] lg:mx-0 lg:max-w-none [animation-delay:280ms]"
            >
              <HeroPortrait priority />
            </Parallax>
          </div>
        </div>
      </section>

      {/* Credibility — metrics + current engagement trust block */}
      <section className="section-padding border-t border-hairline !py-16 md:!py-20">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Credibility</p>
          </Reveal>

          {/* Three quantitative signals — open columns, not equal cards */}
          <Reveal delay={0.04}>
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
              {credibilityMetrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`sm:px-8 ${i === 0 ? "sm:pl-0" : ""} ${
                    i > 0 ? "sm:border-l sm:border-hairline" : ""
                  } ${i === credibilityMetrics.length - 1 ? "sm:pr-0" : ""}`}
                >
                  <p className="font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-3 max-w-[14rem] text-sm leading-snug text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Current organization — separate trust signal */}
          <Reveal delay={0.08}>
            <div className="mt-14 border-t border-hairline pt-12 md:mt-16 md:pt-14">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {currentEngagement.eyebrow}
                  </p>
                  <p className="mt-4 font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                    {currentEngagement.organization}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {currentEngagement.role}
                  </p>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
                  Trusted with paid acquisition for a leading creator-education brand —
                  strategy, spend, and systems.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Capabilities + platforms — quiet supporting layer */}
          <Reveal delay={0.12}>
            <div className="mt-12 flex flex-col gap-5 border-t border-hairline pt-10 sm:mt-14 sm:pt-12">
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/80">
                {credibilityCapabilities.join("  ·  ")}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground/60">Expert across</span>
                {"  "}
                {credibilityPlatforms.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About my work — intersection */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">About my work</p>
            <h2 className="mt-6 max-w-3xl font-serif text-display-lg font-light text-balance">
              Where growth marketing meets systems thinking.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              I sit at the intersection of strategy and execution — running paid acquisition,
              building the analytics layer, and using AI as a capability that makes marketing
              teams faster and clearer. Not a SaaS company. A senior operator who ships.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workIntersection.map((item, i) => (
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

      {/* Featured marketing system */}
      <FeaturedProjectSection variant="homepage" />

      {/* Marketing systems I've built */}
      <section className="section-padding border-t border-hairline !py-20">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="kicker">Featured marketing projects</p>
                <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
                  Marketing systems I&apos;ve built.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground text-pretty">
                  Internal tools and reporting platforms designed to help teams grow more
                  efficiently — clearer attribution, faster decisions, less manual ops.
                </p>
              </div>
              <Link href="/work" className="link-underline text-sm font-medium text-foreground">
                View all work →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <SelectedWorkGrid />
          </Reveal>
        </div>
      </section>

      {/* Selected Results */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Selected results</p>
            <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
              Business impact across brands and channels.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {selectedResults.map((result, i) => (
              <Reveal key={result.company} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-muted/20 p-8">
                  <p className="font-mono text-[10px] uppercase tracking-editorial text-muted-foreground">
                    {result.role}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-light text-foreground">
                    {result.company}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {result.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free tools — supporting, not the identity */}
      <section className="section-padding border-t border-hairline !py-20">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-3xl border border-border bg-muted/20 p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
                <div>
                  <div className="flex items-center gap-3">
                    <StatusPill status="live" />
                    <span className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">
                      Free resource
                    </span>
                  </div>
                  <h2 className="mt-6 font-serif text-display-lg font-light text-balance">
                    {featuredTool.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                    A practical planning tool from the same playbook I use on live accounts —
                    campaign structure, budget allocation, tracking, and a 7-day launch plan.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <LinkButton href={featuredTool.href} size="lg">
                      Try the Tool
                      <ArrowRight className="h-4 w-4" />
                    </LinkButton>
                    <Link
                      href="/tools"
                      className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Browse all tools
                    </Link>
                  </div>
                </div>

                <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-hairline">
                  {[
                    "Campaign structure tailored to your platform",
                    "Budget allocation across the funnel",
                    "Tracking & analytics setup",
                    "Creative angles + 7-day launch plan",
                  ].map((item) => (
                    <li
                      key={item}
                      className="bg-background px-5 py-4 text-sm leading-snug text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="kicker">Also available</p>
                  <h2 className="mt-6 max-w-2xl font-serif text-display-md font-light text-balance">
                    Free tools for marketers.
                  </h2>
                </div>
                <Link href="/tools" className="link-underline text-sm font-medium text-foreground">
                  View all tools →
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools.slice(0, 3).map((tool, i) => (
                <Reveal key={tool.slug} delay={i * 0.05}>
                  <ToolCard tool={tool} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Looking for a senior growth marketer who builds systems?"
        description="I bring paid media leadership, analytics depth, and AI fluency — ready for Senior Growth, Performance, Marketing Ops, or Acquisition roles."
        primaryHref="/contact"
        primaryLabel="Get in Touch"
        secondaryHref="/work"
        secondaryLabel="View My Work"
      />
    </>
  );
}
