import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Parallax, Reveal } from "@/components/shared/reveal";
import { ToolCard } from "@/components/tools/tool-card";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { featuredCaseStudies } from "@/lib/data/case-studies";
import { featuredTool } from "@/lib/data/tools";
import { photos } from "@/lib/photography";
import { proofPoints, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />

      {/* Hero */}
      <section className="section-padding !pb-24 !pt-24 md:!pt-32">
        <div className="container-wide">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_30rem] lg:gap-16">
            <div>
              <p className="kicker animate-rise">Growth Marketing Strategist — {siteConfig.location}</p>

              <h1 className="mt-8 font-serif text-display-2xl font-light text-pretty">
                <span className="block overflow-hidden">
                  <span className="reveal-mask block [animation-delay:80ms]">
                    Performance marketing
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-mask block [animation-delay:200ms]">
                    systems that scale
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-mask block text-accent [animation-delay:320ms]">
                    revenue.
                  </span>
                </span>
              </h1>

              <p className="animate-rise mt-8 max-w-md text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:420ms]">
                {siteConfig.subheadline}
              </p>

              <div className="animate-rise mt-10 [animation-delay:520ms]">
                <HeroCta />
              </div>
            </div>

            <Parallax distance={32} className="animate-rise relative hidden lg:block [animation-delay:300ms]">
              {/* Soft depth behind the subject — a restrained glow and gradient
                  that match the dark theme, à la Stripe / Linear / Vercel. */}
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
                sizes="(max-width: 1024px) 0px, 30rem"
                className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              />

              {/* Fade the lower edge so the figure melts into the page. */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
            </Parallax>
          </div>
        </div>
      </section>

      {/* Proof row */}
      <section className="border-y border-hairline">
        <div className="container-wide grid grid-cols-2 gap-px bg-hairline lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point} className="bg-background px-6 py-8 sm:px-8">
              <p className="text-sm leading-snug text-foreground">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Selected work</p>
            <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
              Problems solved, not logos collected.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
            {featuredCaseStudies.slice(0, 4).map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.06}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/work" className="link-underline text-sm font-medium text-foreground">
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Tools</p>
            <h2 className="mt-6 max-w-2xl font-serif text-display-lg font-light text-balance">
              Free AI marketing tools.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              I&apos;m building practical tools that turn marketing strategy, AI, and analytics
              into systems people can actually use.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14">
              <ToolCard
                tool={featuredTool}
                description="Plan campaign structure, budget allocation, tracking, and creative angles in minutes."
                cta="Use the Tool"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <blockquote className="max-w-4xl font-serif text-display-lg font-light leading-[1.15] text-balance">
              Most marketing problems aren&apos;t channel problems. They&apos;re{" "}
              <span className="text-accent">systems problems</span>.
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              I think like an operator and build like an engineer — campaign architecture,
              attribution, and automation that compound instead of resetting every quarter.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Let's build a system that scales."
        description="Whether you're scaling paid media or hiring a performance leader — let's talk."
        primaryHref="/work-with-me"
        primaryLabel="Work With Me"
        secondaryHref="/contact"
        secondaryLabel="Get in Touch"
      />
    </>
  );
}
