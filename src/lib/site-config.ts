export const siteConfig = {
  name: "Geoffrey R. Crawford",
  title: "Growth Marketing, Paid Media & AI Systems",
  tagline: "Marketing systems that turn attention into revenue.",
  description:
    "Growth Marketing Strategist and marketing operator helping businesses grow through paid media, AI-powered workflows, conversion systems, analytics, and full-funnel strategy.",
  url: "https://geoffreyrcrawford.com",
  email: "info@geoffreyrcrawford.com",
  inboxEmail: "geoffreyrcrawford@gmail.com",
  linkedin: "https://www.linkedin.com/in/geoffreyrcrawford",
  instagram: "https://www.instagram.com/geoffreyrcrawford/",
  location: "Los Angeles, CA",
  headline: "I build performance marketing systems that scale revenue.",
  subheadline:
    "Paid media, analytics, AI, and automation — engineered into systems that turn ad spend into predictable, measurable growth.",
  newsletter: {
    title: "The systems behind the strategy",
    description:
      "Occasional notes on performance marketing, analytics, and AI systems. No noise — just the thinking behind the work.",
  },
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerPaths = [
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/local-business", label: "Local Business" },
  { href: "/hire-me", label: "Hire Me" },
  { href: "/work", label: "Case Studies" },
] as const;

// Footer information architecture — grouped so future content pillars
// (insights, tools, products, courses, etc.) slot in without a redesign.
export const footerSections = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Work With Me",
    links: [
      { href: "/work-with-me", label: "Consulting" },
      { href: "/local-business", label: "Local Business" },
      { href: "/hire-me", label: "Hire Me" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

export const audiencePaths = [
  {
    id: "hire",
    title: "I'm hiring for a role",
    description:
      "Recruiters and hiring managers — view my background, platforms, and case study highlights.",
    href: "/hire-me",
    cta: "View Resume",
  },
  {
    id: "consulting",
    title: "I need marketing help",
    description:
      "Brands, creators, coaches, and education companies looking for a hands-on growth operator.",
    href: "/work-with-me",
    cta: "Work With Me",
  },
  {
    id: "local",
    title: "I run a local business",
    description:
      "Websites, Google Business Profile, lead capture, and simple systems that turn searches into calls.",
    href: "/local-business",
    cta: "Local Business Systems",
  },
] as const;

export const proofPoints = [
  "7+ years in performance marketing",
  "Six-figure monthly ad budgets managed",
  "Google, Meta, YouTube, Amazon & Microsoft Ads",
  "eCommerce, B2B, SaaS & creator economy",
] as const;

export const roles = [
  "Performance Marketing",
  "Growth Strategy",
  "Marketing Analytics",
  "AI & Automation",
] as const;

export const capabilities = [
  {
    title: "Full-Funnel Paid Media",
    description:
      "Campaign architecture across Google, Meta, YouTube, Amazon, and Microsoft — built to scale efficiently.",
  },
  {
    title: "Marketing Analytics & Reporting",
    description:
      "GA4, Looker Studio, and attribution systems that connect spend to revenue and answer what's working.",
  },
  {
    title: "AI Marketing Systems",
    description:
      "Automation and AI-assisted workflows that compress reporting time and speed up decisions.",
  },
  {
    title: "Conversion Optimization",
    description:
      "Landing pages, funnels, and lead systems engineered to turn traffic into pipeline.",
  },
  {
    title: "Performance Creative & Video",
    description:
      "Creative strategy and testing frameworks that treat creative as the real performance lever.",
  },
  {
    title: "Growth Strategy",
    description:
      "Senior, embedded thinking that ties channels, data, and offers into one coherent growth plan.",
  },
] as const;
