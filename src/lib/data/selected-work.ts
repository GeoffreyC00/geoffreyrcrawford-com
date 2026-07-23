/**
 * Homepage Featured Marketing Projects — business-outcome framing.
 * AI is a capability inside these systems, not the headline.
 */

export type SelectedWorkProject = {
  slug: string;
  title: string;
  description: string;
  href: string;
  /** Flagship / featured project */
  featured?: boolean;
  tags: readonly string[];
  badge?: string;
};

export const selectedWorkProjects: readonly SelectedWorkProject[] = [
  {
    slug: "unified-marketing-intelligence",
    title: "Unified Marketing Intelligence Platform",
    description:
      "Connected paid media, CRM, attribution, and revenue into one executive system — so leadership can see what’s working and decide what to do next.",
    href: "/work/ai-marketing-systems",
    featured: true,
    badge: "Featured system",
    tags: ["Executive reporting", "Attribution", "Paid media"],
  },
  {
    slug: "marketing-attribution",
    title: "Marketing Attribution Platform",
    description:
      "Mapped spend to customer outcomes across channels — with model assumptions visible so teams debate strategy, not spreadsheet accuracy.",
    href: "/work/ai-marketing-systems#customer-intelligence",
    badge: "Attribution",
    tags: ["ROAS", "CRM", "Customer journeys"],
  },
  {
    slug: "executive-reporting",
    title: "Executive Reporting & Automation",
    description:
      "Weekly briefings, alerts, and export workflows that replaced manual Monday exports — reporting that supports decisions, not just data collection.",
    href: "/work/ai-marketing-systems#automation",
    badge: "Operations",
    tags: ["Automation", "Briefings", "Marketing ops"],
  },
] as const;
