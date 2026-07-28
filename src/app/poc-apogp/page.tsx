import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Home, Mail, MapPin, Phone, Shield } from "lucide-react";

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
  "Developments by JEM, LLC (DbJEM)",
  "Joy Real Estate, LLC (JRE)",
  "True Community Development Corporation (TCDC)",
] as const;

const credentials = [
  "Licensed Real Estate Broker",
  "HUD Certified",
  "Tax Credit Programs",
  "USDA-RD",
  "State Housing Programs",
  "1,500+ Units Overseen",
] as const;

export default function PocApogpPage() {
  return (
    <div className="apogp-poc min-h-screen bg-[#0B0912] text-[#F7F1E6] antialiased">
      {/* POC banner — not part of her real brand site */}
      <div className="border-b border-white/10 bg-[#1A1428] px-4 py-2.5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9B6E8]/90">
          Proof of concept · Redesign concept for A Part of GOD&apos;s Plan, Inc. · Not linked from
          GeoffreyRCrawford.com
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0912]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Primary brand logo — larger */}
            <Link href="/poc-apogp" className="block shrink-0">
              <Image
                src="/images/apogp/logo.png"
                alt="A Part of GOD's Plan, Inc. — Professional Property Management Brokerage Firm"
                width={220}
                height={124}
                priority
                className="h-12 w-auto object-contain sm:h-14 md:h-[4.25rem]"
              />
            </Link>

            {/* Clear space + divider */}
            <div className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden />

            {/* MWBE seal — ~65% of logo height, secondary hierarchy */}
            <Image
              src="/images/apogp/nys-mwbe-certified.png"
              alt="New York State MWBE Certified — Minority and Women-Owned Business Enterprise"
              width={120}
              height={90}
              className="h-8 w-auto object-contain sm:h-9 md:h-11"
            />
          </div>

          <nav className="hidden items-center gap-7 text-sm text-[#F7F1E6]/70 md:flex">
            <a href="#about" className="transition-colors hover:text-[#F7F1E6]">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-[#F7F1E6]">
              Services
            </a>
            <a href="#leadership" className="transition-colors hover:text-[#F7F1E6]">
              Leadership
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[#D4AF37] px-4 py-2 font-medium text-[#0B0912] transition-opacity hover:opacity-90"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#D4AF37] px-3.5 py-2 text-xs font-medium text-[#0B0912] md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/images/apogp/hero.jpg"
          alt="Multifamily residential property"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0912] via-[#0B0912]/85 to-[#0B0912]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0912] via-transparent to-[#0B0912]/40" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">
            Western New York · Property Management & Consulting
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight text-[#F7F1E6]">
            Real Estate with Purpose.
            <span className="mt-2 block text-[#C9B6E8]">
              Property Management You Can Trust.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#F7F1E6]/75">
            Founded and led by CEO F. Renee Bellamy — more than 40 years of leadership in affordable
            housing, compliance, property management, and consulting throughout Western New York.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-medium text-[#0B0912] transition-opacity hover:opacity-90"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-[#F7F1E6] transition-colors hover:border-white/50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-white/10 bg-[#120E1C]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {[
            { value: "40+", label: "Years of leadership" },
            { value: "1,500+", label: "Residential units overseen" },
            { value: "MWBE", label: "NYS Certified" },
            { value: "WNY", label: "Serving Western New York" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#120E1C] px-6 py-8 sm:px-8">
              <p className="font-serif text-3xl font-light text-[#D4AF37]">{stat.value}</p>
              <p className="mt-2 text-sm text-[#F7F1E6]/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9B6E8]">
              Who we are
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-tight text-[#F7F1E6]">
              Trusted consulting for organizations that house communities.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#F7F1E6]/70">
              At A Part of GOD&apos;s Plan, Inc., we provide trusted consulting services for
              not-for-profit and for-profit organizations, economic development corporations, and
              real estate firms across Western New York.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#F7F1E6]/70">
              Our leadership and property management compliance experience help organizations
              transition into effective property management operations, improve internal processes,
              and uphold housing program standards with integrity.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[5/4]">
            <Image
              src="/images/apogp/building.jpg"
              alt="Residential property managed with care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0912]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-white/10 bg-[#120E1C] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9B6E8]">
            What we do
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-tight">
            Expertise with heart, precision, and purpose.
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#0B0912]/60 p-8 transition-colors hover:border-[#C9B6E8]/35"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Home className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-light text-[#F7F1E6]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F7F1E6]/65">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9B6E8]">
            Trusted partners
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-snug text-[#F7F1E6]">
            Trusted by organizations and leaders in the affordable housing industry.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F7F1E6]/65">
            A Part of GOD&apos;s Plan, Inc. delivers expert guidance with heart, precision, and a
            mission to support decent, sanitary, and stable housing throughout Western New York.
          </p>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {trusted.map((org) => (
              <li
                key={org}
                className="rounded-xl border border-white/10 bg-[#120E1C] px-6 py-5 text-sm leading-snug text-[#F7F1E6]/85"
              >
                {org}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-24 border-t border-white/10 bg-[#120E1C] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9B6E8]">
              Leadership
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-tight">
              Froziner (F.) Renee Bellamy
            </h2>
            <p className="mt-3 text-lg text-[#D4AF37]">
              Owner &amp; President · Licensed Real Estate Broker
            </p>
            <p className="mt-2 font-mono text-xs text-[#F7F1E6]/45">
              Brokerage ID: 10311209829
            </p>

            <p className="mt-8 text-base leading-relaxed text-[#F7F1E6]/70">
              With over 40 years of experience in property management, real estate compliance, and
              leadership, F. Renee Bellamy is a highly respected figure in Western New York&apos;s
              affordable housing community. She is a licensed real estate broker, certified in HUD,
              Tax Credit, USDA-RD, and state housing programs, and has successfully overseen
              portfolios totaling more than 1,500 residential units.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#F7F1E6]/70">
              Before launching A Part of GOD&apos;s Plan, Inc., Renee served as Executive Vice
              President and a Shareholder of Belmont Management Co., Inc., where she helped guide
              multimillion-dollar assets across New York State. Today she leads with faith, purpose,
              and a belief that everyone deserves a decent, sanitary, and stable place to call home.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/apogp/community.jpg"
                alt="Community-focused housing"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0B0912] p-6">
              <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9B6E8]">
                <Shield className="h-3.5 w-3.5" />
                Credentials
              </p>
              <ul className="space-y-2.5">
                {credentials.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#F7F1E6]/80">
                    <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C9B6E8]">
            Let&apos;s work together
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight text-[#F7F1E6]">
            Ready to strengthen your property operations?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F7F1E6]/65">
            Whether you&apos;re a developer, a for-profit or not-for-profit organization, or a
            property owner — we&apos;re here to provide expert property management, consulting, and
            support. Get in touch and a member of our team will begin the proposal process.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-medium text-[#0B0912] transition-opacity hover:opacity-90"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-[#120E1C]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-10">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/apogp/logo.png"
                alt="A Part of GOD's Plan, Inc."
                width={180}
                height={100}
                className="h-12 w-auto object-contain"
              />
              <Image
                src="/images/apogp/nys-mwbe-certified.png"
                alt="NYS MWBE Certified"
                width={90}
                height={68}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#F7F1E6]/55">
              Professional property management and consulting — serving Western New York with
              integrity and purpose.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9B6E8]">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#F7F1E6]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                P.O. Box 935
                <br />
                Buffalo, New York 14215
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <a href="tel:7164313856" className="hover:text-[#F7F1E6]">
                  (716) 431-3856
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <a href="mailto:FRBellamy@apogpinc.com" className="hover:text-[#F7F1E6]">
                  FRBellamy@apogpinc.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9B6E8]">
              Quick links
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-[#F7F1E6]/70">
              <li>
                <a href="#about" className="hover:text-[#F7F1E6]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F1E6]">
                  Services
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#F7F1E6]">
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="https://www.apogpinc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F1E6]"
                >
                  Current live site ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-6 text-center sm:px-8">
          <p className="text-xs text-[#F7F1E6]/40">
            © {new Date().getFullYear()} A Part of GOD&apos;s Plan, Inc. · Proof-of-concept redesign
            by Geoffrey R. Crawford · Not indexed · Not linked from main navigation
          </p>
        </div>
      </footer>
    </div>
  );
}
