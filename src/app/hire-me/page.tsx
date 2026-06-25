import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { ResumeDownloadButton } from "@/components/resume/resume-download-button";
import { LinkButton } from "@/components/ui/link-button";
import {
  coreSkills,
  experienceHighlights,
  platforms,
  professionalSummary,
  targetRoles,
} from "@/lib/data/resume";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hire Me",
  description:
    "Resume and background for Geoffrey R. Crawford — Growth Marketing Strategist, Paid Media Expert, and AI Marketing operator.",
};

export default function HireMePage() {
  return (
    <>
      <PageHero
        label="Hire Me"
        title="Growth marketing operator, ready to contribute."
        description={professionalSummary}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <LinkButton href={siteConfig.linkedin} size="lg">
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </LinkButton>
          <ResumeDownloadButton />
          <Link href="/contact" className="link-underline text-sm font-medium text-foreground">
            Schedule a Conversation
          </Link>
        </div>
      </PageHero>

      {/* Target roles */}
      <section className="section-padding border-t border-hairline !pt-16">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Roles I&apos;m suited for</p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {targetRoles.map((role) => (
              <span key={role} className="font-serif text-xl font-light text-foreground sm:text-2xl">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + platforms */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="kicker">Core skills</p>
            <ul className="mt-6 space-y-2.5">
              {coreSkills.map((skill) => (
                <li key={skill} className="text-[15px] text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Platforms &amp; tools</p>
            <ul className="mt-6 space-y-2.5">
              {platforms.map((platform) => (
                <li key={platform} className="text-[15px] text-muted-foreground">
                  {platform}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Experience highlights</p>
          </Reveal>
          <Stagger className="mt-14">
            {experienceHighlights.map((item) => (
              <StaggerItem key={item.company}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group grid gap-x-10 gap-y-3 border-t border-border py-9 md:grid-cols-[1fr_1.4fr_auto] md:py-10"
                >
                  <div>
                    <h3 className="font-serif text-xl font-light transition-colors duration-300 group-hover:text-accent">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                  </div>
                  <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:flex-col md:items-end md:gap-2">
                    <span className="font-mono text-xs">{item.period}</span>
                    <span className="inline-flex items-center gap-1 text-foreground">
                      Case study
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
            <div className="border-t border-border" />
          </Stagger>

          <p className="mt-12 text-[15px] text-muted-foreground">
            Based in {siteConfig.location} — open to remote and hybrid roles.
          </p>
        </div>
      </section>

      <CtaSection
        title="Interested in working together?"
        description="Reach out via LinkedIn or the contact form — I'd love to hear about the role."
        primaryHref={siteConfig.linkedin}
        primaryLabel="LinkedIn"
        secondaryHref="/contact"
        secondaryLabel="Contact"
      />
    </>
  );
}
