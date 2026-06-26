import type { Metadata } from "next";
import { CtaSection } from "@/components/shared/cta-section";
import { EditorialImage } from "@/components/shared/editorial-image";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { photos } from "@/lib/photography";
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
  "GA4",
  "Looker Studio",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — asymmetric editorial intro */}
      <section className="section-padding !pb-16 !pt-24 md:!pt-28">
        <div className="container-wide">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
            <div className="max-w-3xl">
              <p className="kicker animate-rise">About</p>
              <h1 className="animate-rise mt-7 font-serif text-display-2xl font-light text-pretty [animation-delay:80ms]">
                A marketer who builds.
              </h1>
              <p className="animate-rise mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:180ms]">
                I combine strategy, technical implementation, creative thinking, and execution —
                the rare mix that turns marketing budgets into systems that scale.
              </p>
            </div>
            <Parallax distance={32} className="animate-rise hidden lg:block [animation-delay:260ms]">
              <EditorialImage
                src={photos.portraitEditorial.src}
                alt={photos.portraitEditorial.alt}
                priority
                zoom={false}
                className="aspect-[4/5] w-full"
                imgClassName="object-top"
                sizes="(max-width: 1024px) 100vw, 20rem"
              />
            </Parallax>
          </div>
        </div>
      </section>

      {/* Narrative + meta sidebar */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
            <Reveal>
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground text-pretty">
                <p className="font-serif text-2xl font-light leading-snug text-foreground">
                  I started in digital marketing running ads — but I was never satisfied just
                  managing a platform.
                </p>
                <p>
                  I wanted to know why something worked, whether it would work again, and how to
                  build it so it didn&apos;t fall apart the moment I looked away. That curiosity
                  pulled me into analytics, funnels, and automation.
                </p>
                <p>
                  Over 7+ years I&apos;ve managed six-figure monthly budgets across Google, Meta,
                  YouTube, and Amazon — for ecommerce brands, B2B companies, and creator-led
                  education businesses. The throughline isn&apos;t a channel. It&apos;s the way I
                  work: treat marketing as a system.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-12">
                <div>
                  <p className="kicker">Focus</p>
                  <ul className="mt-5 space-y-2">
                    {roles.map((role) => (
                      <li key={role} className="font-serif text-xl font-light text-foreground">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="kicker">Platforms &amp; tools</p>
                  <ul className="mt-5 space-y-2.5">
                    {platforms.map((item) => (
                      <li key={item} className="text-[15px] text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="kicker">Based in</p>
                  <p className="mt-5 text-[15px] text-muted-foreground">
                    Los Angeles, CA — working with teams remote and on-site.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial feature — teaching */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <EditorialImage
                src={photos.speakingWhiteboard.src}
                alt={photos.speakingWhiteboard.alt}
                className="aspect-[4/5] w-full sm:aspect-[3/2]"
                imgClassName="object-top"
                sizes="(max-width: 1024px) 100vw, 50rem"
              />
            </div>
            <Reveal className="lg:col-span-5">
              <p className="kicker">Teaching &amp; leadership</p>
              <p className="mt-6 font-serif text-display-md font-light leading-snug text-balance">
                I teach what I build — and I build what I teach.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Whether it&apos;s a team mastermind or a client working session, the goal is the
                same: turn complex marketing systems into something a room full of people can
                actually act on.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles — numbered editorial rows */}
      <section className="section-padding border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <p className="kicker">How I work</p>
            <h2 className="mt-6 font-serif text-display-lg font-light text-balance">
              Four principles behind the work.
            </h2>
          </Reveal>
          <Stagger className="mt-16">
            {principles.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="group grid gap-x-10 border-t border-border py-9 sm:grid-cols-[5rem_1fr_1.3fr] md:py-11">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-light leading-tight transition-colors duration-300 group-hover:text-accent sm:mt-0">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:mt-0">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
            <div className="border-t border-border" />
          </Stagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
