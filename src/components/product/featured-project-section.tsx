import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlatformHeroVisual } from "@/components/product/platform-hero-visual";
import { Reveal } from "@/components/shared/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { platformProduct } from "@/lib/data/platform-case-study";

type FeaturedProjectSectionProps = {
  /** Tighter spacing when nested on homepage directly under hero */
  variant?: "homepage" | "standalone";
};

/**
 * Featured marketing system — business-outcome framing for recruiters.
 */
export function FeaturedProjectSection({ variant = "homepage" }: FeaturedProjectSectionProps) {
  const isHomepage = variant === "homepage";

  return (
    <section
      className={
        isHomepage
          ? "relative border-t border-hairline bg-gradient-to-b from-accent/[0.03] to-background section-padding !py-20 md:!py-28"
          : "section-padding border-t border-hairline"
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="container-wide relative">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-editorial text-accent">
              Featured marketing system
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <h2
                className={
                  isHomepage
                    ? "font-serif text-display-lg font-light text-balance"
                    : "font-serif text-display-md font-light text-balance"
                }
              >
                {platformProduct.name}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                {isHomepage ? platformProduct.homepageDescription : platformProduct.shortDescription}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <LinkButton href={platformProduct.slug} size="lg">
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <Link
                  href="/work"
                  className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Explore all work →
                </Link>
              </div>
            </div>

            <PlatformHeroVisual size={isHomepage ? "hero" : "default"} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
