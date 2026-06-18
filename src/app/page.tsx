import Link from "next/link";
import { ArrowRight, BarChart3, Bot, LineChart, Megaphone, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CtaSection, HeroCta } from "@/components/shared/cta-section";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { SectionHeader } from "@/components/shared/section-header";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { featuredCaseStudies } from "@/lib/data/case-studies";
import { services } from "@/lib/data/services";
import { proofPoints, roles, siteConfig } from "@/lib/site-config";

const serviceIcons = [Megaphone, Bot, LineChart, Search, BarChart3];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding !pb-20 !pt-24 md:!pt-32">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:grid-cols-[1fr_420px]">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-2">
                {roles.map((role) => (
                  <Badge key={role} variant="secondary">
                    {role}
                  </Badge>
                ))}
              </div>

              <h1 className="animate-slide-up text-display-lg font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                {siteConfig.headline}
              </h1>

              <p className="animate-slide-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl [animation-delay:100ms]">
                {siteConfig.subheadline}
              </p>

              <div className="animate-slide-up mt-10 [animation-delay:200ms]">
                <HeroCta />
              </div>
            </div>

            <ProfilePortrait
              variant="dark"
              priority
              className="mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-y border-border bg-card/40">
        <div className="container-wide px-5 py-8 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <p className="text-sm font-medium text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Services"
            title="Strategy, execution, and systems — built to grow revenue."
            description="From paid media management to AI-powered workflows, I help businesses operate and scale their marketing with precision."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Card
                  key={service.id}
                  className="transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-padding border-t border-border bg-card/20">
        <div className="container-wide">
          <SectionHeader
            label="Selected Work"
            title="Businesses grown through paid media, data, and systems."
            description="A sample of consulting engagements across ecommerce, B2B, digital products, and creator brands."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} featured />
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="How I Work"
                title="At the intersection of marketing, data, and AI."
              />
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                I don&apos;t just run campaigns — I build the systems behind them. Reporting
                dashboards, conversion funnels, AI workflows, and the strategic frameworks that
                connect ad spend to revenue.
              </p>
              <p>
                With 7+ years managing budgets up to $200K+ monthly across Google, Meta, YouTube,
                Amazon, and Microsoft Ads, I bring operator-level experience to every engagement.
              </p>
              <p>
                Whether you&apos;re scaling ecommerce revenue, generating B2B leads, or launching
                digital products — I help you grow with clarity and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
