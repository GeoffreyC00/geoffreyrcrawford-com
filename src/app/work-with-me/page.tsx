import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Hands-on growth marketing for brands, creators, coaches, and education companies — paid media, funnels, AI systems, and conversion optimization.",
};

const offerings = [
  {
    title: "Paid Media Strategy & Management",
    items: [
      "Google Ads",
      "Meta Ads",
      "YouTube Ads",
      "Campaign architecture",
      "Budget scaling & ROAS optimization",
    ],
  },
  {
    title: "Funnels & Conversion Systems",
    items: [
      "Landing page strategy",
      "Lead generation funnels",
      "Webinar & product launch flows",
      "Creative testing frameworks",
      "Conversion path optimization",
    ],
  },
  {
    title: "AI & Marketing Operations",
    items: [
      "AI reporting dashboards",
      "Marketing automation",
      "Workflow design",
      "Analytics & attribution visibility",
      "Operational efficiency",
    ],
  },
];

const idealFor = [
  "Brands scaling paid acquisition",
  "Creators and education companies",
  "Coaches launching offers or webinars",
  "eCommerce & B2B companies",
  "Teams needing a hands-on operator — not an agency layer",
];

const process = [
  "Audit where you are — channels, funnels, data, and gaps",
  "Build a focused plan tied to revenue, not vanity metrics",
  "Execute directly or embed with your team",
  "Report clearly and iterate fast",
];

export default function WorkWithMePage() {
  return (
    <>
      <PageHero
        label="Work With Me"
        title="A growth operator in your corner."
        description="I work directly with business owners, creators, coaches, and brands who need paid media, funnel optimization, AI-powered reporting, and marketing systems that actually move revenue — without the agency overhead."
      >
        <LinkButton href="/contact" size="lg">
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </LinkButton>
      </PageHero>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            You get someone who has managed real budgets, built real dashboards, and optimized
            real funnels — not a deck and a handoff. I combine paid media execution with the
            systems, analytics, and automation that make growth sustainable.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold tracking-tight">What I help with</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offerings.map((group) => (
              <Card key={group.title} className="border-border/80">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">A good fit if you are...</h2>
            <ul className="mt-6 space-y-3">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">How engagements work</h2>
            <ol className="mt-6 space-y-4">
              {process.map((step, i) => (
                <li key={step} className="flex gap-4 text-muted-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide text-center">
          <p className="text-sm text-muted-foreground">Also exploring local business systems?</p>
          <LinkButton href="/local-business" variant="outline" className="mt-4">
            Local Business Systems →
          </LinkButton>
        </div>
      </section>

      <CtaSection
        title="Ready to talk growth?"
        description="Tell me what you're building and where you're stuck — paid media, funnels, or the systems behind them."
        primaryHref="/contact"
        primaryLabel="Get in Touch"
        secondaryHref="/work"
        secondaryLabel="See Case Studies"
      />
    </>
  );
}
