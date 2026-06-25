import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { SocialLinksRow } from "@/components/shared/social-links";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { featuredCaseStudies } from "@/lib/data/case-studies";
import { capabilities, proofPoints, roles, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

const platforms = [
  "Google Ads",
  "Meta",
  "YouTube",
  "Amazon Ads",
  "Microsoft Ads",
  "GA4",
  "HubSpot",
  "Looker Studio",
];

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
      <section className="section-padding !pb-20 !pt-20 md:!pt-28">
        <div className="container-wide">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem] lg:gap-20">
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

              <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty [animation-delay:420ms]">
                {siteConfig.subheadline}
              </p>

              <div className="animate-rise mt-10 [animation-delay:520ms]">
                <HeroCta />
              </div>

              <div className="animate-rise mt-10 [animation-delay:600ms]">
                <SocialLinksRow />
              </div>
            </div>

            <Parallax distance={36} className="animate-rise hidden lg:block [animation-delay:300ms]">
              <ProfilePortrait variant="dark" priority className="aspect-[4/5] w-full" />
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

      {/* Platform strip */}
      <section className="border-b border-hairline">
        <div className="container-wide flex flex-wrap items-center gap-x-8 gap-y-3 px-6 py-7 sm:px-10 lg:px-16">
          <span className="kicker mr-2">Platforms</span>
          {platforms.map((platform) => (
            <span key={platform} className="text-sm text-muted-foreground">
              {platform}
            </span>
          ))}
        </div>
      </section>

      {/* Capabilities — editorial index */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              index="01"
              label="Capabilities"
              title="Marketing systems, not one-off campaigns."
              description="I work across the full performance stack — the channels that drive demand, the analytics that prove it, and the automation that makes it repeatable."
            />
          </Reveal>

          <Stagger className="mt-20">
            {capabilities.map((cap, i) => (
              <StaggerItem key={cap.title}>
                <div className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-border py-8 transition-colors sm:grid-cols-[5rem_1fr_1.2fr] sm:gap-x-10 md:py-10">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-light leading-tight transition-colors duration-300 group-hover:text-accent sm:text-[1.75rem]">
                    {cap.title}
                  </h3>
                  <p className="col-start-2 mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:col-start-3 sm:mt-0">
                    {cap.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
            <div className="border-t border-border" />
          </Stagger>

          <div className="mt-12">
            <Link href="/services" className="link-underline text-sm font-medium text-foreground">
              Explore services →
            </Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              index="02"
              label="Selected Work"
              title="Problems solved, framed by what I do."
              description="Case studies built around the business problem and the system that solved it — across ecommerce, B2B, creator businesses, and analytics."
            />
          </Reveal>

          <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2">
            {featuredCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.06}>
                <CaseStudyCard study={study} index={i + 1} featured />
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/work" className="link-underline text-sm font-medium text-foreground">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Pull quote / positioning */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">How I think</p>
            <blockquote className="mt-8 max-w-4xl font-serif text-display-lg font-light leading-[1.15] text-balance">
              Most marketing problems aren&apos;t channel problems. They&apos;re{" "}
              <span className="text-accent">systems problems</span> — spend goes up, dashboards
              multiply, and nobody can say what actually drove revenue.
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-8 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-16">
              <p>
                I&apos;ve spent 7+ years closing that gap — managing six-figure monthly budgets,
                building the reporting that ties spend to outcomes, and designing the automation
                and AI workflows that make a marketing team faster.
              </p>
              <p>
                I think like an operator and build like an engineer: campaign architecture,
                attribution, creative testing, and conversion systems that compound instead of
                resetting every quarter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Let's build a system that scales."
        description="Whether you're hiring a performance leader or need a senior operator on a project — let's talk."
        primaryHref="/contact"
        primaryLabel="Get in Touch"
        secondaryHref="/work"
        secondaryLabel="See the Work"
      />
    </>
  );
}
