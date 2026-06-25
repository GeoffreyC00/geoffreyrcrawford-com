import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent } from "@/components/ui/card";

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

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Sound familiar?</h2>
            <ul className="mt-6 space-y-4">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="rounded-lg border border-border bg-card/50 p-4 text-muted-foreground"
                >
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What I build</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A connected local presence — not a pile of disconnected tactics. From your Google
              Business Profile to your website, lead forms, and optional ad campaigns, everything
              works toward one goal: more qualified inquiries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I&apos;ve done this end-to-end for businesses like{" "}
              <Link href="/work/the-food-experience" className="text-accent hover:underline">
                The Food Experience
              </Link>{" "}
              — from brand and UX through launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold tracking-tight">The local business system</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemIncludes.map((item) => (
              <Card key={item} className="border-border/80">
                <CardContent className="flex items-start gap-3 p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who this is for</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Restaurants, caterers, contractors, salons, professional services, and any local
            operator who wants a modern web presence and a clear path from search to contact — without
            hiring a full agency or figuring out tech alone.
          </p>
        </div>
      </section>

      <CtaSection
        title="Let's build your local system."
        description="Tell me about your business and what you need — website, Google presence, leads, or the full package."
        primaryHref="/contact"
        primaryLabel="Contact Me"
        secondaryHref="/work/the-food-experience"
        secondaryLabel="See Local Project"
      />
    </>
  );
}
