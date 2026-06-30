import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoonTool } from "@/components/tools/coming-soon-tool";
import { comingSoonTools, getTool } from "@/lib/tools/registry";

/**
 * Coming-soon preview pages for not-yet-shipped tools (e.g.
 * /tools/landing-page-auditor). Live tools have their own dedicated routes
 * (e.g. /tools/ai-campaign-builder), which take precedence over this dynamic
 * segment, so this only ever serves "soon" tools.
 */
export function generateStaticParams() {
  return comingSoonTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool || tool.status !== "soon") return {};
  return {
    title: `${tool.name} (Coming Soon)`,
    description: tool.description,
    alternates: { canonical: `/tools/${tool.slug}` },
  };
}

export default async function ComingSoonToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);

  // Only render coming-soon tools here; anything else is a 404.
  if (!tool || tool.status !== "soon") notFound();

  return <ComingSoonTool tool={tool} />;
}
