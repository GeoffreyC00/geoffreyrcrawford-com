import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { roles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Geoffrey R. Crawford — performance marketing operator combining paid media, analytics, AI, and conversion systems to scale revenue.",
};

const principles = [
  {
    title: "Systems beat tactics",
    body: "A clever campaign wins a month. A system wins every month after. I build the structure — architecture, attribution, automation — that makes results repeatable.",
  },
  {
    title: "Data earns the decision",
    body: "Opinions are cheap. I instrument everything so spend decisions are backed by attribution and revenue, not gut feel or platform vanity metrics.",
  },
  {
    title: "Creative is a lever, not decoration",
    body: "On paid social and YouTube, creative is the variable that moves performance most. I treat it like an experiment, not an afterthought.",
  },
  {
    title: "Strategy without execution is a deck",
    body: "I don't just recommend — I build. Campaigns, dashboards, landing pages, and workflows. The plan and the implementation come from the same person.",
  },
];

const platforms = [
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "Amazon Ads",
  "Microsoft Ads",
  "GA4",
  "Looker Studio",
  "Google Tag Manager",
  "HubSpot",
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">About</p>
              <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
                I&apos;m a marketer who builds.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                I combine strategy, technical implementation, creative thinking, and execution —
                the rare mix that turns marketing budgets into systems that scale.
              </p>
            </div>
            <ProfilePortrait
              variant="light"
              className="mx-auto aspect-[4/5] w-full max-w-xs lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <Reveal>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  I started in digital marketing the way a lot of people do — running ads. But I
                  was never satisfied just managing a platform. I wanted to know{" "}
                  <span className="text-foreground">why</span> something worked, whether it would
                  work again, and how to build it so it didn&apos;t fall apart the moment I looked
                  away.
                </p>
                <p>
                  That curiosity pulled me deeper. Into analytics, because you can&apos;t improve
                  what you can&apos;t measure. Into landing pages and funnels, because the best ad
                  in the world fails against a broken conversion path. Into automation and AI,
                  because the time you save on manual reporting is time you spend actually growing
                  the business.
                </p>
                <p>
                  Over 7+ years I&apos;ve managed six-figure monthly budgets across Google, Meta,
                  YouTube, Amazon, and Microsoft Ads — for ecommerce brands moving millions in
                  revenue, B2B companies generating qualified pipeline, and creator-led education
                  businesses scaling digital products and live events.
                </p>
                <p>
                  The throughline isn&apos;t a channel or a tactic. It&apos;s the way I work: treat
                  marketing as a system. Connect the channels, the data, and the offers into
                  something coherent — then build the reporting and automation that lets it scale.
                </p>
                <p>
                  I enjoy the hard problems most. The account nobody can make profitable. The
                  reporting that takes three days and should take three minutes. The funnel that
                  leaks somewhere nobody&apos;s looked. That&apos;s the work I&apos;m built for.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-10">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">Focus</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {roles.map((role) => (
                      <Badge key={role} variant="secondary">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">Platforms & tools</h2>
                  <ul className="mt-4 space-y-3">
                    {platforms.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">Based in</h2>
                  <p className="mt-3 text-muted-foreground">
                    Los Angeles, CA · Working with teams remote and on-site
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card/20 !py-16">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">How I work</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
