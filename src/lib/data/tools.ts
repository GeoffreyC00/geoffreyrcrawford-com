/**
 * Catalog of public AI marketing tools. New tools are added here and surface
 * automatically on the /tools index and (optionally) the homepage. Keeping this
 * data-driven means adding a tool is a single entry, no component changes.
 */
export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  status: "live" | "soon";
};

export const tools: Tool[] = [
  {
    slug: "ai-campaign-builder",
    name: "AI Campaign Builder",
    tagline: "Paid media planning",
    description:
      "Build a practical campaign structure for Google, Meta, YouTube, Microsoft, or Amazon Ads based on your business, budget, offer, and growth goal.",
    href: "/tools/ai-campaign-builder",
    cta: "Build a Campaign",
    status: "live",
  },
];

export const featuredTool = tools[0];
