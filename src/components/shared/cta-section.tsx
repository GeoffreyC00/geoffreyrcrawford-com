import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

type CtaSectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaSection({
  title = "Let's build something that performs.",
  description = "Whether you're hiring, scaling paid media, or need a local business system — let's talk.",
  primaryHref = "/contact",
  primaryLabel = "Get in Touch",
  secondaryHref = "/work-with-me",
  secondaryLabel = "Work With Me",
}: CtaSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
          <div className="relative">
            <h2 className="text-display-md font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
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
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <LinkButton href="/work-with-me" size="lg">
        Work With Me
        <ArrowRight className="h-4 w-4" />
      </LinkButton>
      <LinkButton href="/hire-me" variant="secondary" size="lg">
        View Resume
      </LinkButton>
      <Link
        href="/work"
        className="inline-flex h-12 items-center px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-4"
      >
        See My Work →
      </Link>
    </div>
  );
}
