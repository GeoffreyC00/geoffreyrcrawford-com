import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Paid media strategy, AI consulting, conversion optimization, SEO, and video ad creative services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Services</p>
            <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
              Marketing systems built to perform.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              From paid acquisition to AI automation — I help businesses grow through strategy,
              execution, and the technology that connects them.
            </p>
          </div>
        </div>
      </section>

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
        <div className="container-wide">
          <SectionHeader
            title="Engagements tailored to your stage."
            description="Whether you need a strategic advisor, a hands-on operator, or someone to build the systems your team runs on — I adapt to what the business needs."
            align="center"
          />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
