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
  headline: "Growth Marketing, Paid Media & AI Systems",
  subheadline:
    "I help businesses grow through paid ads, AI-powered workflows, conversion systems, analytics, and full-funnel marketing strategy.",
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
  "7+ years in digital marketing",
  "Up to $200K+ monthly ad spend managed",
  "Google, Meta, YouTube, Amazon & Microsoft Ads",
  "eCommerce, SaaS, B2B & creator economy",
] as const;

export const roles = [
  "Growth Marketing Strategist",
  "Paid Media Expert",
  "AI Systems Consultant",
  "Marketing Operator",
] as const;
