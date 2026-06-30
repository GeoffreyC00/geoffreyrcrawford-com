import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/shared/reveal";

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
  description = "Whether you're hiring, scaling paid media, or need a senior operator on a project — let's talk.",
  primaryHref = "/contact",
  primaryLabel = "Get in Touch",
  secondaryHref = "/work-with-me",
  secondaryLabel = "Work With Me",
}: CtaSectionProps) {
  return (
    <section className="section-padding border-t border-hairline">
      <div className="container-wide">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <h2 className="font-serif text-display-xl font-light text-balance">{title}</h2>
            <div className="lg:pb-3">
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <LinkButton href={primaryHref} size="lg">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <Link
                  href={secondaryHref}
                  className="link-underline text-sm font-medium text-foreground"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HeroCta() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <LinkButton href="/tools" size="lg">
        Use Free Tools
        <ArrowRight className="h-4 w-4" />
      </LinkButton>
      <LinkButton href="/work-with-me" variant="secondary" size="lg">
        Work With Me
      </LinkButton>
    </div>
  );
}
