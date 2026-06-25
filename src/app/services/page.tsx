import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data/services";
import { LinkButton } from "@/components/ui/link-button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Paid media, AI systems, conversion optimization, SEO, and video creative — overview of growth marketing services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What I help businesses build."
        description="An overview of how I work — from paid acquisition to AI-powered operations. For consulting engagements, start at Work With Me. For local businesses, see Local Business Systems."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/work-with-me" size="lg">
            Work With Me
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton href="/local-business" variant="outline" size="lg">
            Local Business
          </LinkButton>
        </div>
      </PageHero>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3">
                    <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
                      <span className="text-sm font-mono text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="col-span-2 p-8">
                      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Capabilities
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-foreground"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
            Recruiting?{" "}
            <Link href="/hire-me" className="text-accent hover:underline">
              View my hire-me page
            </Link>{" "}
            for roles, skills, and experience.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
