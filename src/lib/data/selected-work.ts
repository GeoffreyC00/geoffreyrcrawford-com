/**
 * Homepage Selected Work — three product pillars that reframe the portfolio
 * as AI product building, not generic marketing services.
 */

export type SelectedWorkProject = {
  slug: string;
  title: string;
  description: string;
  href: string;
  /** Hero / flagship project */
  featured?: boolean;
  tags: readonly string[];
};

export const selectedWorkProjects: readonly SelectedWorkProject[] = [
  {
    slug: "ai-marketing-intelligence",
    title: "AI Marketing Intelligence Platform",
    description:
      "An AI-powered marketing operating system — executive dashboards, attribution, budget planning, campaign monitoring, and decision support in one product.",
    href: "/work/ai-marketing-systems",
    featured: true,
    tags: ["Product design", "Full-stack", "Executive OS"],
  },
  {
    slug: "customer-intelligence",
    title: "Customer Intelligence Platform",
    description:
      "Unified attribution and customer insights — CRM enrichment, purchase history, journey mapping, and touchpoint analysis across every channel.",
    href: "/work/ai-marketing-systems#customer-intelligence",
    tags: ["Attribution", "CRM integration", "Customer data"],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow & Automation Systems",
    description:
      "Agents, automations, and reporting pipelines — auto-sync, executive briefings, Slack exports, and AI-assisted analysis that replaces manual ops.",
    href: "/work/ai-marketing-systems#automation",
    tags: ["Automation", "AI agents", "Reporting"],
  },
] as const;
