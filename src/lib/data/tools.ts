/**
 * Display catalog for the marketing surface (/tools index + homepage). This is
 * a thin projection of the canonical tool registry so there is a single source
 * of truth: add tools in `@/lib/tools/registry`, and they surface here too.
 */
import { toolRegistry } from "@/lib/tools/registry";

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  status: "live" | "soon";
};

export const tools: Tool[] = toolRegistry.map((tool) => ({
  slug: tool.slug,
  name: tool.name,
  tagline: tool.tagline,
  description: tool.description,
  href: tool.href,
  cta: tool.cta,
  status: tool.status,
}));

export const featuredTool = tools[0];
