import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { SocialLinksRow } from "@/components/shared/social-links";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  "Google Tag Manager",
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
      <section className="relative overflow-hidden section-padding !pb-20 !pt-24 md:!pt-32">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {roles.map((role) => (
                  <Badge key={role} variant="secondary">
                    {role}
                  </Badge>
                ))}
              </div>

              <h1 className="animate-slide-up text-display-lg font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {siteConfig.headline}
              </h1>

              <p className="animate-slide-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:100ms]">
                {siteConfig.subheadline}
              </p>

              <div className="animate-slide-up mt-10 [animation-delay:200ms]">
                <HeroCta />
              </div>

              <div className="animate-slide-up mt-8 [animation-delay:300ms]">
                <SocialLinksRow />
              </div>
            </div>

            <ProfilePortrait
              variant="dark"
              priority
              className="mx-auto aspect-[4/5] w-full max-w-xs lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-y border-border bg-card/40">
        <div className="container-wide px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <p className="text-sm font-medium text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform marquee */}
      <section className="border-b border-border bg-background">
        <div className="container-wide px-5 py-8 sm:px-8 lg:px-12">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Platforms & tools I work across
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {platforms.map((platform) => (
              <span key={platform} className="text-sm font-medium text-muted-foreground">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="What I Do"
              title="Marketing systems — not one-off campaigns."
              description="I work across the full performance stack: the channels that drive demand, the analytics that prove it, and the automation that makes it repeatable."
            />
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section-padding border-t border-border bg-card/20">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              label="Selected Work"
              title="Problems solved, organized by what I do."
              description="Case studies framed around the business problem and the system that solved it — across ecommerce, B2B, creator businesses, and analytics."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuredCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08}>
                <CaseStudyCard study={study} featured />
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeader
                label="How I Think"
                title="Strategy and execution — not one without the other."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Most marketing problems aren&apos;t channel problems — they&apos;re systems
                  problems. Spend goes up, dashboards multiply, and nobody can say what actually
                  drove revenue.
                </p>
                <p>
                  I&apos;ve spent 7+ years closing that gap: managing six-figure monthly budgets,
                  building the reporting that ties spend to outcomes, and designing the automation
                  and AI workflows that make a marketing team faster.
                </p>
                <p>
                  I think like an operator and build like an engineer — campaign architecture,
                  attribution, creative testing, and conversion systems that compound instead of
                  reset every quarter.
                </p>
              </div>
            </Reveal>
          </div>
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
