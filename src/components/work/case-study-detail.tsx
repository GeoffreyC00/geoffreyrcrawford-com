import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/shared/cta-section";
import { Reveal } from "@/components/shared/reveal";
import type { CaseStudy } from "@/lib/data/case-studies";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <>
      <section className="section-padding pb-12">
        <div className="container-wide">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {study.category}
            </p>
            <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{study.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {study.metrics.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-semibold tracking-tight">My Role</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{study.role}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/30 !py-16">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Strategy</h2>
          </Reveal>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {study.strategy.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-lg border border-border bg-background/50 p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide grid gap-16 lg:grid-cols-3">
          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">Platforms & Tools</h2>
            <ul className="mt-4 space-y-2">
              {study.platforms.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-lg font-semibold tracking-tight">Skills Demonstrated</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-lg font-semibold tracking-tight">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {study.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Have a problem like this?"
        description="Let's talk about how a performance marketing system could solve it."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/work"
        secondaryLabel="More Work"
      />
    </>
  );
}
