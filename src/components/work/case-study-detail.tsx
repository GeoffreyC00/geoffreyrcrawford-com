import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/shared/cta-section";
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
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Focus Areas</h2>
              <ul className="mt-4 space-y-3">
                {study.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/30 !py-16">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Approach</h2>
              <ul className="mt-6 space-y-4">
                {study.approach.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent/30 pl-4 text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
              <ul className="mt-6 space-y-4">
                {study.results.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
