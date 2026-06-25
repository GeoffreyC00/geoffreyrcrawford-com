import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { LinkButton } from "@/components/ui/link-button";

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

      <section className="section-padding border-t border-hairline !pt-16">
        <div className="container-wide">
          <Reveal>
            <p className="max-w-3xl font-serif text-display-md font-light leading-snug text-balance">
              You get someone who has managed real budgets, built real dashboards, and optimized
              real funnels — not a deck and a handoff.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Offerings — editorial columns */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">What I help with</p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {offerings.map((group) => (
              <Reveal key={group.title}>
                <div className="border-t border-border pt-7">
                  <h3 className="font-serif text-xl font-light leading-snug">{group.title}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-[15px] text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fit + process */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="kicker">A good fit if you are…</p>
            <ul className="mt-6 space-y-3.5">
              {idealFor.map((item) => (
                <li key={item} className="text-lg leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">How engagements work</p>
            <Stagger className="mt-6">
              {process.map((step, i) => (
                <StaggerItem key={step}>
                  <div className="flex gap-5 border-t border-border py-5">
                    <span className="font-mono text-sm text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] leading-relaxed text-foreground/90">{step}</p>
                  </div>
                </StaggerItem>
              ))}
              <div className="border-t border-border" />
            </Stagger>
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Link
            href="/local-business"
            className="link-underline text-sm font-medium text-foreground"
          >
            Also exploring local business systems? →
          </Link>
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
