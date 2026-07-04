export const siteConfig = {
  name: "Geoffrey R. Crawford",
  title: "Growth Marketing & AI Product Builder",
  tagline: "Marketing systems that turn attention into revenue.",
  description:
    "Product builder and growth strategist — I design and ship AI-powered marketing systems, dashboards, automation workflows, and decision-support tools for marketing teams.",
  url: "https://geoffreyrcrawford.com",
  email: "info@geoffreyrcrawford.com",
  inboxEmail: "geoffreyrcrawford@gmail.com",
  phone: "(716) 861-3482",
  linkedin: "https://www.linkedin.com/in/geoffrey-crawford-9a761527/",
  instagram: "https://www.instagram.com/geoffreyrcrawford/",
  location: "Los Angeles, CA",
  headline: "Performance marketing systems that scale revenue.",
  subheadline:
    "I build the paid media, analytics, and AI systems that turn ad spend into predictable growth.",
  newsletter: {
    title: "The systems behind the strategy",
    description: "Occasional notes on performance marketing, analytics, and AI.",
  },
};

// Primary navigation — Platform leads so recruiters find the flagship product immediately.
export const navLinks = [
  { href: "/work/ai-marketing-systems", label: "Platform" },
  { href: "/tools", label: "Tools" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
] as const;

// Minimal footer links — secondary destinations live here, not in the nav.
export const footerLinks = [
  { href: "/work/ai-marketing-systems", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/tools", label: "Tools" },
  { href: "/insights", label: "Insights" },
  { href: "/work-with-me", label: "Consulting" },
  { href: "/contact", label: "Contact" },
] as const;

export const proofPoints = [
  "7+ years in performance marketing",
  "Six-figure monthly ad budgets",
  "Google · Meta · YouTube · Amazon",
  "eCommerce, B2B & creator economy",
] as const;

export const roles = [
  "Performance Marketing",
  "Growth Strategy",
  "Marketing Analytics",
  "AI & Automation",
] as const;

// One integrated consulting offer, told as three pillars rather than a service matrix.
export const pillars = [
  {
    title: "Acquire customers",
    body: "Paid media across Google, Meta, YouTube, and Amazon — campaign architecture built to scale efficiently.",
  },
  {
    title: "Measure performance",
    body: "Analytics, attribution, and reporting that connect spend to revenue and answer what's actually working.",
  },
  {
    title: "Build better systems",
    body: "AI workflows, automation, and conversion systems that make growth repeatable instead of resetting every quarter.",
  },
] as const;

// What the single consulting engagement includes — presented as one service, not seven.
export const consultingIncludes = [
  "Google Ads",
  "Meta Ads",
  "Analytics",
  "AI Systems",
  "Conversion Optimization",
  "Automation",
  "Creative Strategy",
] as const;
