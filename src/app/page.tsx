import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Parallax, Reveal } from "@/components/shared/reveal";
import { StatusPill, ToolCard } from "@/components/tools/tool-card";
import { LinkButton } from "@/components/ui/link-button";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { AiSystemsPortfolioStrip } from "@/components/work/ai-systems-portfolio-strip";
import { featuredCaseStudies } from "@/lib/data/case-studies";
import { featuredTool, tools } from "@/lib/data/tools";
import { photos } from "@/lib/photography";
import { proofPoints, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free AI Marketing Tools",
  description:
    "Free AI marketing tools for people building better campaigns — practical campaign planning, creative, analytics, and optimization, built by a marketer actively managing paid media.",
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
    "Performance Marketing",
    "Paid Media",
    "Marketing Analytics",
    "Marketing Automation",
    "Conversion Optimization",
    "AI Marketing Systems",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

const proofCapabilities = [
  "Paid media",
  "Marketing analytics",
  "AI workflows",
  "Executive dashboards",
  "eCommerce",
  "Creator economy",
  "B2B / lead gen",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />

      {/* Hero — tool-first */}
      <section className="section-padding !pb-20 !pt-24 md:!pt-32">
        <div className="container-wide">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_28rem] lg:gap-16">
            <div>
              <p className="kicker animate-rise">Free AI marketing tools</p>

              <h1 className="mt-8 font-serif text-display-2xl font-light text-pretty">
                <span className="block overflow-hidden">
                  <span className="reveal-mask block [animation-delay:80ms]">
                    Build better marketing
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-mask block [animation-delay:200ms]">
                    campaigns with
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-mask block text-accent [animation-delay:320ms]">
                    free AI tools.
                  </span>
                </span>
              </h1>

              <p className="animate-rise mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:420ms]">
                Practical campaign planning, creative, analytics, and optimization tools — built by
                a marketer actively managing paid media accounts.
              </p>

              <div className="animate-rise mt-10 [animation-delay:520ms]">
                <HeroCta />
              </div>
            </div>

            <Parallax distance={32} className="animate-rise relative hidden lg:block [animation-delay:300ms]">
              <div aria-hidden className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[18%] h-[68%] w-[88%] -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />
                <div className="absolute left-1/2 top-[34%] h-[58%] w-[68%] -translate-x-1/2 rounded-full bg-foreground/[0.06] blur-[70px]" />
              </div>

              <Image
                src={photos.portraitHero.src}
                alt={photos.portraitHero.alt}
                width={photos.portraitHero.width}
                height={photos.portraitHero.height}
                priority
                sizes="(max-width: 1024px) 0px, 28rem"
                className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
            </Parallax>
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
                      Featured tool
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
                  AI marketing tools for operators.
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

      {/* Proof */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Built from real campaign experience</p>
            <h2 className="mt-6 max-w-3xl font-serif text-display-lg font-light text-balance">
              Not theory — tools shaped by managing live paid media every day.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              These tools come from real work across paid media, analytics, AI workflows, and
              executive reporting — for eCommerce, creator, and B2B businesses.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-2.5">
              {proofCapabilities.map((cap) => (
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

      {/* Selected work — supporting proof */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="kicker">Selected work</p>
                <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
                  Problems solved, not logos collected.
                </h2>
              </div>
              <Link href="/work" className="link-underline text-sm font-medium text-foreground">
                View all work →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 space-y-14">
            <AiSystemsPortfolioStrip />

            <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
              {featuredCaseStudies
                .filter((s) => s.slug !== "ai-marketing-systems")
                .slice(0, 2)
                .map((study, i) => (
                  <Reveal key={study.slug} delay={i * 0.06}>
                    <CaseStudyCard study={study} />
                  </Reveal>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Start with a free tool. Scale with a partner."
        description="Use the free Campaign Builder to plan your next campaign — or work with me to build the whole system."
        primaryHref="/tools/ai-campaign-builder"
        primaryLabel="Use the Free Campaign Builder"
        secondaryHref="/work-with-me"
        secondaryLabel="Work With Me"
      />
    </>
  );
}
