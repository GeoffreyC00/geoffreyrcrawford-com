import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Parallax, Reveal } from "@/components/shared/reveal";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { featuredCaseStudies } from "@/lib/data/case-studies";
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
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_24rem] lg:gap-20">
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

            <Parallax distance={40} className="animate-rise hidden lg:block [animation-delay:300ms]">
              <EditorialImage
                src={photos.portraitStanding.src}
                alt={photos.portraitStanding.alt}
                priority
                zoom={false}
                className="aspect-[4/5] w-full"
                imgClassName="object-top"
                sizes="(max-width: 1024px) 100vw, 24rem"
              />
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
