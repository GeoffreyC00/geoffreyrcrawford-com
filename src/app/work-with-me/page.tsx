import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { EditorialImage } from "@/components/shared/editorial-image";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { photos } from "@/lib/photography";
import { consultingIncludes, pillars } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Performance marketing consulting — one integrated engagement spanning paid media, analytics, AI systems, conversion optimization, and creative strategy.",
};

export default function WorkWithMePage() {
  return (
    <>
      <PageHero
        label="Performance Marketing Consulting"
        title="How I help businesses grow."
        description="One operator across paid media, analytics, and the systems behind them — not an agency layer or a deck and a handoff."
      >
        <LinkButton href="/contact" size="lg">
          Work With Me
          <ArrowRight className="h-4 w-4" />
        </LinkButton>
      </PageHero>

      {/* Documentary feature — consulting */}
      <section className="relative">
        <EditorialImage
          src={photos.collaborationMeeting.src}
          alt={photos.collaborationMeeting.alt}
          className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-wide px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14">
            <p className="max-w-2xl font-serif text-2xl font-light leading-snug text-balance sm:text-3xl">
              Embedded with your team, working on the real problem.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section-padding">
        <div className="container-wide">
          <Stagger className="grid gap-x-16 gap-y-14 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div className="border-t border-border pt-7">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-6 font-serif text-[1.75rem] font-light leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                    {pillar.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* One integrated engagement */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="max-w-3xl font-serif text-display-md font-light leading-snug text-balance">
              It&apos;s one integrated engagement — not seven separate services.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {consultingIncludes.map((item) => (
                <li key={item} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-12">
              <Link
                href="/local-business"
                className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Run a local business? See local systems →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Ready to talk growth?"
        description="Tell me what you're building and where you're stuck."
        primaryHref="/contact"
        primaryLabel="Get in Touch"
        secondaryHref="/work"
        secondaryLabel="See the Work"
      />
    </>
  );
}
