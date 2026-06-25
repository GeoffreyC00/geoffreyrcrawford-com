import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AudienceCard } from "@/components/shared/audience-card";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { SectionHeader } from "@/components/shared/section-header";
import { SocialLinksRow } from "@/components/shared/social-links";
import { Badge } from "@/components/ui/badge";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { featuredCaseStudies } from "@/lib/data/case-studies";
import { audiencePaths, proofPoints, roles, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding !pb-20 !pt-24 md:!pt-32">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-medium tracking-wide text-accent">
                {siteConfig.tagline}
              </p>
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

      {/* Proof */}
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

      {/* Audience routing */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Start Here"
            title="What brings you here?"
            description="This site routes three different paths — hiring, consulting, and local business systems. Pick the one that fits."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiencePaths.map((path) => (
              <AudienceCard
                key={path.id}
                title={path.title}
                description={path.description}
                href={path.href}
                cta={path.cta}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding border-t border-border bg-card/20">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeader
              label="What I Build"
              title="Marketing systems — not just campaigns."
              description="Paid media, AI workflows, analytics, websites, and automation connected into systems that turn attention into revenue."
            />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Geoffrey R. Crawford — a growth marketing operator based in Los Angeles.
                I&apos;ve spent 7+ years inside accounts, dashboards, and funnels — managing up to
                $200K+ in monthly ad spend and building the infrastructure that makes marketing
                scale.
              </p>
              <p>
                That means campaign architecture on Google, Meta, YouTube, Amazon, and Microsoft
                Ads. It also means reporting systems, landing pages, AI automations, and conversion
                paths that connect spend to outcomes.
              </p>
              <p>
                I work with brands, creators, education companies, ecommerce businesses, and local
                operators who need someone who can think strategically and execute directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <SectionHeader
            label="Selected Work"
            title="Proof across industries."
            description="Think Media, PoolSupplies.com, VoIP Supply, and more — paid media, systems, and growth at different scales."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} featured />
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

      <CtaSection />
    </>
  );
}
