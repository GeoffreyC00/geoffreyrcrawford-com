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
import { platformProduct } from "@/lib/data/platform-case-study";
import { featuredTool, tools } from "@/lib/data/tools";
import { proofPoints, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Marketing Systems & Product Builder",
  description:
    "Geoffrey R. Crawford builds AI-powered marketing systems — dashboards, reporting platforms, automation workflows, and decision-support tools. Plus free AI marketing tools.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Marketing Systems Product Builder",
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA" },
  sameAs: [siteConfig.linkedin, siteConfig.instagram],
  knowsAbout: [
    "AI Marketing Systems",
    "Marketing Automation",
    "Executive Dashboards",
    "Product Design",
    "Marketing Analytics",
    "Performance Marketing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

const builderCapabilities = [
  "AI-powered dashboards",
  "Marketing automation",
  "Executive reporting",
  "Attribution systems",
  "Internal software",
  "Decision support tools",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />

      {/* Hero — product builder + personal portrait */}
      <section className="section-padding !pb-16 !pt-24 md:!pt-32">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_26rem] lg:gap-16">
            <div className="order-1">
              <p className="kicker animate-rise">Product · AI · Marketing Systems</p>

              <h1 className="mt-8 font-serif text-display-2xl font-light text-pretty">
                <span className="block overflow-hidden">
                  <span className="reveal-mask block [animation-delay:80ms]">
                    I build AI-powered
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-mask block text-accent [animation-delay:200ms]">
                    marketing systems.
                  </span>
                </span>
              </h1>

              <p className="animate-rise mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:320ms]">
                Dashboards, reporting platforms, automation workflows, and decision-support tools —
                designed and shipped as product, not spreadsheets.
              </p>

              <div className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 [animation-delay:420ms]">
                <LinkButton href={platformProduct.slug} size="lg">
                  Explore the Platform
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <Link
                  href="/tools"
                  className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Free AI tools →
                </Link>
              </div>
            </div>

            {/* Portrait — below headline on mobile, right column on desktop */}
            <Parallax
              distance={24}
              className="animate-rise order-2 mx-auto w-full max-w-[20rem] lg:order-2 lg:mx-0 lg:max-w-none [animation-delay:280ms]"
            >
              <HeroPortrait priority />
            </Parallax>
          </div>
        </div>
      </section>

      {/* Featured Project — immediately below hero, impossible to miss */}
      <FeaturedProjectSection variant="homepage" />

      {/* Selected Work — three product pillars */}
      <section className="section-padding border-t border-hairline !py-20">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="kicker">Selected work</p>
                <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
                  AI product systems for marketing.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground text-pretty">
                  Not campaigns — products. Internal software, intelligence platforms, and
                  automation systems built for marketing teams.
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

      {/* Builder capabilities strip */}
      <section className="section-padding border-t border-hairline !py-16">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">What I build</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {builderCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {cap}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-px border border-hairline bg-hairline lg:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point} className="bg-background px-6 py-8 sm:px-8">
                <p className="text-sm leading-snug text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured live tool */}
      <section className="section-padding border-t border-hairline !py-20">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-3xl border border-border bg-muted/20 p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
                <div>
                  <div className="flex items-center gap-3">
                    <StatusPill status="live" />
                    <span className="font-mono text-[11px] uppercase tracking-editorial text-muted-foreground">
                      Free tool
                    </span>
                  </div>
                  <h2 className="mt-6 font-serif text-display-lg font-light text-balance">
                    {featuredTool.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                    Answer a few questions and get a practical paid media plan — campaign structure,
                    budget allocation, audience strategy, tracking, creative angles, and a 7-day
                    launch plan. No login required.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <LinkButton href={featuredTool.href} size="lg">
                      Launch Tool
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
                    <li key={item} className="bg-background px-5 py-4 text-sm leading-snug text-foreground/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tools grid */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="kicker">The toolkit</p>
                <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
                  Free AI marketing tools for operators.
                </h2>
              </div>
              <Link href="/tools" className="link-underline text-sm font-medium text-foreground">
                View all tools →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => (
              <Reveal key={tool.slug} delay={i * 0.05}>
                <ToolCard tool={tool} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Building marketing technology?"
        description="Explore the platform case study — or use the free Campaign Builder to plan your next campaign."
        primaryHref={platformProduct.slug}
        primaryLabel="Explore the Platform"
        secondaryHref="/work-with-me"
        secondaryLabel="Work With Me"
      />
    </>
  );
}
