import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

export function CtaSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <div className="relative">
            <h2 className="text-display-md font-semibold tracking-tight text-balance sm:text-4xl">
              Let&apos;s build something that performs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Whether you need paid media strategy, AI systems, or full-funnel growth —
              let&apos;s talk about what&apos;s possible.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton href="/contact" size="lg">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/work" variant="outline" size="lg">
                View My Work
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroCta() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <LinkButton href="/work" size="lg">
        View My Work
        <ArrowRight className="h-4 w-4" />
      </LinkButton>
      <LinkButton href="/contact" variant="outline" size="lg">
        Let&apos;s Talk
      </LinkButton>
    </div>
  );
}
