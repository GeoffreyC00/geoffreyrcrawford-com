import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { LinkButton } from "@/components/ui/link-button";

export const metadata: Metadata = {
  title: "Local Business Systems",
  description:
    "AI marketing systems for local businesses — websites, Google Business Profile, lead capture, local SEO, and optional paid ads.",
};

const systemIncludes = [
  "Website or high-converting landing page",
  "Google Business Profile optimization",
  "Local SEO foundations",
  "Lead capture forms & intake flows",
  "AI chatbot or automated intake system",
  "Review generation strategy",
  "Simple reporting dashboard",
  "Optional Google Ads or Meta Ads setup",
  "Hosting & maintenance options",
];

const problems = [
  "People can't find you online",
  "Your website doesn't convert visitors into calls",
  "You're juggling five tools that don't talk to each other",
  "You don't know which marketing actually works",
];

export default function LocalBusinessPage() {
  return (
    <>
      <PageHero
        label="Local Business"
        title="AI Marketing Systems for Local Businesses"
        description="Most local businesses don't need more random marketing. They need a simple system that helps people find them, trust them, and contact them."
      >
        <LinkButton href="/contact" size="lg">
          Get a Local System Quote
          <ArrowRight className="h-4 w-4" />
        </LinkButton>
      </PageHero>

      <section className="section-padding border-t border-hairline !pt-16">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="kicker">Sound familiar?</p>
            <ul className="mt-6 space-y-5">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="border-t border-border pt-5 text-lg leading-relaxed text-muted-foreground"
                >
                  {problem}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">What I build</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              A connected local presence — not a pile of disconnected tactics. From your Google
              Business Profile to your website, lead forms, and optional ad campaigns, everything
              works toward one goal: more qualified inquiries.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              I&apos;ve done this end-to-end for businesses like{" "}
              <Link href="/work/full-funnel-web-cro" className="text-accent link-underline">
                The Food Experience
              </Link>{" "}
              — from brand and UX through launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">The local business system</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-x-12 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
            {systemIncludes.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex items-baseline gap-4 border-t border-border py-5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground/90">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding border-t border-hairline">
        <div className="container-wide max-w-3xl">
          <p className="kicker">Who this is for</p>
          <p className="mt-6 font-serif text-display-md font-light leading-snug text-balance">
            Restaurants, caterers, contractors, salons, and professional services that want a modern
            web presence and a clear path from search to contact.
          </p>
        </div>
      </section>

      <CtaSection
        title="Let's build your local system."
        description="Tell me about your business and what you need — website, Google presence, leads, or the full package."
        primaryHref="/contact"
        primaryLabel="Contact Me"
        secondaryHref="/work/full-funnel-web-cro"
        secondaryLabel="See Local Project"
      />
    </>
  );
}
