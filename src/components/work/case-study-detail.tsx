import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { Reveal } from "@/components/shared/reveal";
import type { CaseStudy } from "@/lib/data/case-studies";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <>
      {/* Header */}
      <section className="section-padding !pb-16 !pt-24 md:!pt-28">
        <div className="container-wide">
          <Link
            href="/work"
            className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="kicker">{study.category}</p>
            <h1 className="mt-7 font-serif text-display-xl font-light text-pretty">
              {study.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty">
              {study.summary}
            </p>
          </div>

          {study.metrics.length > 0 && (
            <div className="mt-16 grid grid-cols-1 gap-px border-y border-hairline bg-hairline sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="bg-background py-8 sm:pr-8">
                  <p className="font-serif text-4xl font-light tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge + Role */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide grid gap-x-16 gap-y-12 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">The Challenge</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">My Role</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {study.role}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strategy — numbered editorial rows */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">Strategy</p>
            <h2 className="mt-6 font-serif text-display-md font-light">How I approached it.</h2>
          </Reveal>
          <ol className="mt-14">
            {study.strategy.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.04}>
                <div className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-border py-7 sm:gap-x-10">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">{item}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </ol>
        </div>
      </section>

      {/* Platforms / Skills / Outcomes */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide grid gap-12 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <p className="kicker">Platforms &amp; Tools</p>
            <ul className="mt-6 space-y-2.5">
              {study.platforms.map((item) => (
                <li key={item} className="text-[15px] text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Skills Demonstrated</p>
            <ul className="mt-6 space-y-2.5">
              {study.skills.map((skill) => (
                <li key={skill} className="text-[15px] text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="kicker">Outcomes</p>
            <ul className="mt-6 space-y-4">
              {study.outcomes.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-foreground/90">
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
