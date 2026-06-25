import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { ResumeDownloadButton } from "@/components/resume/resume-download-button";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent } from "@/components/ui/card";
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
        title="Growth marketing operator. Ready to contribute."
        description={professionalSummary}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <LinkButton href={siteConfig.linkedin} size="lg">
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </LinkButton>
          <LinkButton href="/contact" variant="outline" size="lg">
            Schedule a Conversation
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <ResumeDownloadButton />
        </div>
      </PageHero>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold tracking-tight">Roles I&apos;m suited for</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <Badge key={role} variant="default">
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Core skills</h2>
            <ul className="mt-6 space-y-3">
              {coreSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Platforms & tools</h2>
            <ul className="mt-6 space-y-3">
              {platforms.map((platform) => (
                <li key={platform} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold tracking-tight">Experience highlights</h2>
          <div className="mt-10 space-y-4">
            {experienceHighlights.map((item) => (
              <Card key={item.company} className="border-border/80">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.company}</h3>
                      <p className="text-sm text-accent">{item.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                      <Link
                        href={`/work/${item.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                      >
                        Case study
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide text-center">
          <p className="text-muted-foreground">
            Based in {siteConfig.location} · Open to remote and hybrid roles
          </p>
          <LinkButton href="/work" variant="outline" className="mt-6">
            View Full Portfolio
          </LinkButton>
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
