import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import "./apogp.css";

export const metadata: Metadata = {
  title: "A Part of GOD's Plan, Inc. — Proof of Concept",
  description:
    "Proof-of-concept redesign for A Part of GOD's Plan, Inc. — professional property management and consulting across Western New York.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/poc-apogp" },
};

const services = [
  {
    title: "Property Management",
    body: "Hands-on multifamily management rooted in compliance, resident care, and operational excellence.",
  },
  {
    title: "Affordable Housing Consulting",
    body: "Guidance for nonprofits, EDCs, and developers navigating HUD, Tax Credit, USDA-RD, and state programs.",
  },
  {
    title: "Compliance & Transitions",
    body: "Help organizations transition into effective internal property management with clean systems and standards.",
  },
  {
    title: "Brokerage & Advisory",
    body: "Licensed real estate brokerage supporting owners and partners with trusted, mission-driven counsel.",
  },
] as const;

const trusted = [
  "Developments by JEM, LLC",
  "Joy Real Estate, LLC",
  "True Community Development Corporation",
] as const;

export default function PocApogpPage() {
  return (
    <div className="apogp-poc min-h-screen">
      {/* Subtle POC note — brand-aligned, not dark */}
      <div className="border-b border-[var(--brand-purple)]/20 bg-[var(--brand-gold-light)] px-4 py-2 text-center">
        <p className="text-[11px] font-medium tracking-wide text-[var(--brand-text-purple)]">
          Proof of concept · Expanded redesign matching A Part of GOD&apos;s Plan, Inc. brand ·
          Private preview link
        </p>
      </div>

      {/* Header — gold + purple nav */}
      <header className="border-b border-[var(--brand-purple)]/15 bg-[var(--brand-gold)]">
        <div className="apogp-wrap flex items-center justify-between gap-6 py-3 md:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/poc-apogp" className="block shrink-0">
              <Image
                src="/images/apogp/logo.png"
                alt="A Part of GOD's Plan, Inc. — Professional Property Management Brokerage Firm"
                width={240}
                height={135}
                priority
                className="h-[3.25rem] w-auto object-contain sm:h-16 md:h-[4.5rem]"
              />
            </Link>
            <Image
              src="/images/apogp/nys-mwbe-certified.png"
              alt="New York State MWBE Certified"
              width={100}
              height={75}
              className="h-8 w-auto object-contain sm:h-10 md:h-11"
            />
          </div>

          <nav className="apogp-nav hidden items-center gap-8 md:flex">
            <a href="#home" data-active="true">
              Home
            </a>
            <a href="#leadership">Leadership</a>
            <a href="#services">Services</a>
            <a href="#fair-housing">Fair Housing Notice</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="text-sm font-semibold text-[var(--brand-text-purple)] underline md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[70vh] overflow-hidden md:min-h-[78vh]">
        <Image
          src="/images/apogp/hero.jpg"
          alt="Multifamily residential property"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--brand-overlay)" }}
          aria-hidden
        />

        <div className="apogp-wrap relative flex min-h-[70vh] items-center py-20 md:min-h-[78vh] md:py-24">
          <div className="max-w-3xl">
            <h1 className="apogp-headline apogp-headline-hero">
              Real Estate with Purpose.
              <br />
              Property Management You Can Trust.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg">
              Founded and led by CEO F. Renee Bellamy, who brings more than 40 years of leadership
              and expertise in affordable housing, compliance, property management, and consulting
              throughout Western New York.
            </p>
            <a href="#about" className="apogp-btn mt-8">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="apogp-section bg-[var(--brand-gold)]">
        <div className="apogp-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="apogp-headline apogp-headline-lg">
              Real Estate with Purpose.
              <br />
              Property Management You Can Trust.
            </h2>
            <p className="apogp-body mt-6">
              At A Part of GOD&apos;s Plan, Inc., we provide professional property management and
              consulting services to not-for-profit organizations, for-profit developers, property
              owners, and real estate firms throughout Western New York. Through expert property
              management, compliance oversight, and operational consulting, our leadership helps
              clients strengthen operations, maintain regulatory compliance, meet funding
              requirements, and create well-managed communities.
            </p>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden">
            <Image
              src="/images/apogp/building.jpg"
              alt="Residential property"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Services — improved content, original brand styling */}
      <section id="services" className="apogp-section border-t border-[var(--brand-purple)]/20 bg-[var(--brand-gold-light)]">
        <div className="apogp-wrap">
          <h2 className="apogp-headline apogp-headline-lg">Our Services</h2>
          <p className="apogp-body mt-4 max-w-2xl">
            Expert property management, consulting, and brokerage support for organizations building
            and managing housing across Western New York.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="apogp-service">
                <Home className="mb-3 h-5 w-5 text-[var(--brand-purple)]" strokeWidth={1.75} />
                <h3 className="text-lg font-bold text-[var(--brand-text-purple)]">{service.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--brand-text-purple)]">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted partners */}
      <section className="apogp-section bg-[var(--brand-gold)]">
        <div className="apogp-wrap">
          <h2 className="apogp-headline apogp-headline-lg">
            Trusted by organizations and leaders in the affordable housing industry.
          </h2>
          <p className="apogp-body mt-5 max-w-3xl">
            A Part of GOD&apos;s Plan, Inc. delivers expert guidance with heart, precision, and a
            mission to support decent, sanitary, and stable housing throughout Western New York.
          </p>

          <ul className="mt-10 space-y-0 border-t border-[var(--brand-purple)]/30">
            {trusted.map((org) => (
              <li
                key={org}
                className="border-b border-[var(--brand-purple)]/30 py-4 text-base font-semibold text-[var(--brand-text-purple)] sm:text-lg"
              >
                {org}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="apogp-section border-t border-[var(--brand-purple)]/20 bg-[var(--brand-gold-light)]">
        <div className="apogp-wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/apogp/community.jpg"
              alt="Community-focused housing"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="apogp-headline apogp-headline-lg">Leadership</h2>
            <p className="mt-4 text-xl font-bold text-[var(--brand-text-purple)]">
              Froziner (F.) Renee Bellamy
            </p>
            <p className="mt-1 text-base font-semibold text-[var(--brand-purple)]">
              Owner &amp; President · Licensed Real Estate Broker
            </p>
            <p className="mt-2 text-sm text-[var(--brand-text-purple)]/80">
              Brokerage ID: 10311209829
            </p>

            <p className="apogp-body mt-6">
              With over 40 years of experience in property management, real estate compliance, and
              leadership, F. Renee Bellamy is a highly respected figure in Western New York&apos;s
              affordable housing community. She is a licensed real estate broker, certified in HUD,
              Tax Credit, USDA-RD, and state housing programs, and has successfully overseen
              portfolios totaling more than 1,500 residential units.
            </p>
            <p className="apogp-body mt-4">
              Before launching A Part of GOD&apos;s Plan, Inc., Renee served as Executive Vice
              President and a Shareholder of Belmont Management Co., Inc., where she helped guide
              multimillion-dollar assets across New York State. Today, she leads her own firm with a
              focus on multi-family affordable housing property management and consulting — rooted
              in faith and guided by purpose.
            </p>

            <div className="apogp-divider my-8" />

            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-text-purple)]">
              Credentials
            </p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem] text-[var(--brand-text-purple)]">
              <li>Licensed Real Estate Broker</li>
              <li>HUD · Tax Credit · USDA-RD · State Housing Programs</li>
              <li>1,500+ residential units overseen</li>
              <li>NYS MWBE Certified</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats — gold, purple text, simple dividers (no dark strip) */}
      <section className="border-y border-[var(--brand-purple)]/25 bg-[var(--brand-gold)]">
        <div className="apogp-wrap grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "40+", label: "Years of Leadership" },
            { value: "1,500+", label: "Residential Units Overseen" },
            { value: "MWBE", label: "NYS Certified" },
            { value: "WNY", label: "Serving Western New York" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-10 text-center ${
                i % 2 === 1 ? "border-l border-[var(--brand-purple)]/25" : ""
              } ${i >= 2 ? "border-t border-[var(--brand-purple)]/25 md:border-t-0" : ""} ${
                i === 2 || i === 3 ? "md:border-l md:border-[var(--brand-purple)]/25" : ""
              }`}
            >
              <p className="apogp-headline text-3xl md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-[var(--brand-text-purple)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="apogp-section bg-[var(--brand-gold-light)]">
        <div className="apogp-wrap max-w-3xl">
          <h2 className="apogp-headline apogp-headline-lg">Let&apos;s Work Together</h2>
          <p className="apogp-body mt-5">
            We&apos;re always open to new opportunities. Whether you&apos;re a developer, a
            for-profit or not-for-profit organization, or a property owner, we&apos;re here to
            provide expert property management, consulting, and support.
          </p>
          <p className="apogp-body mt-4">
            Please get in touch, and a member of our team will contact you to begin the proposal
            process.
          </p>
          <a href="#contact" className="apogp-btn mt-8">
            Contact Us
          </a>
        </div>
      </section>

      {/* Fair Housing */}
      <section id="fair-housing" className="border-t border-[var(--brand-purple)]/20 bg-[var(--brand-gold)] py-12">
        <div className="apogp-wrap">
          <h2 className="apogp-headline text-2xl">Fair Housing Notice</h2>
          <p className="apogp-body mt-4 max-w-3xl text-[0.95rem]">
            A Part of GOD&apos;s Plan, Inc. is committed to equal housing opportunity. We do not
            discriminate on the basis of race, color, religion, sex, disability, familial status,
            national origin, or any other protected class under federal, state, or local fair
            housing laws.
          </p>
        </div>
      </section>

      {/* Footer — matches original gold footer */}
      <footer id="contact" className="border-t border-[var(--brand-purple)]/30 bg-[var(--brand-gold)]">
        <div className="apogp-wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/apogp/logo.png"
              alt="A Part of GOD's Plan, Inc."
              width={200}
              height={112}
              className="h-16 w-auto object-contain"
            />
            <Image
              src="/images/apogp/nys-mwbe-certified.png"
              alt="NYS MWBE Certified"
              width={90}
              height={68}
              className="mt-4 h-12 w-auto object-contain"
            />
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--brand-text-purple)]">Quick Links:</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--brand-text-purple)]">
              <li>
                <a href="#fair-housing" className="underline">
                  Fair Housing Notice
                </a>
              </li>
              <li>
                <a href="#leadership" className="underline">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#services" className="underline">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--brand-text-purple)]">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--brand-text-purple)]">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  P.O. Box 935
                  <br />
                  Buffalo, New York, 14215
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:7164313856">(716) 431-3856</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:FRBellamy@apogpinc.com">FRBellamy@apogpinc.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--brand-text-purple)]">Socials</h3>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-purple)] text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--brand-purple)]/30">
          <div className="apogp-wrap flex flex-col gap-3 py-5 text-xs text-[var(--brand-text-purple)] sm:flex-row sm:items-center sm:justify-between">
            <span>© Copyright {new Date().getFullYear()} apogpinc</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>Privacy policy</span>
              <span>Terms &amp; Conditions</span>
              <a href="#fair-housing" className="underline">
                Fair Housing Notice
              </a>
            </div>
          </div>
          <p className="pb-4 text-center text-[10px] text-[var(--brand-text-purple)]/60">
            Proof-of-concept redesign by Geoffrey R. Crawford · Not indexed · Not linked from main
            navigation
          </p>
        </div>
      </footer>
    </div>
  );
}
