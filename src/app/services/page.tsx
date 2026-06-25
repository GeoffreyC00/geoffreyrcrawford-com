import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Performance marketing, paid media, analytics, automation, conversion optimization, video, AI workflows, and fractional growth consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What I help businesses build."
        description="How I work — from paid acquisition to AI-powered operations. For consulting engagements, start at Work With Me. For local businesses, see Local Business Systems."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <LinkButton href="/work-with-me" size="lg">
            Work With Me
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <Link
            href="/local-business"
            className="link-underline text-sm font-medium text-foreground"
          >
            Local Business
          </Link>
        </div>
      </PageHero>

      <section className="section-padding border-t border-hairline !pt-16">
        <div className="container-wide">
          <Stagger>
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <div className="group grid gap-x-12 gap-y-5 border-t border-border py-10 md:grid-cols-[6rem_1fr_1.1fr] md:py-12">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-[1.75rem] font-light leading-tight transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-x-6 gap-y-3 md:justify-end md:text-right">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
            <div className="border-t border-border" />
          </Stagger>
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="max-w-2xl font-serif text-display-md font-light text-balance">
              Recruiting instead?{" "}
              <Link href="/hire-me" className="text-accent link-underline">
                View my résumé and experience
              </Link>{" "}
              — built for hiring managers.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
