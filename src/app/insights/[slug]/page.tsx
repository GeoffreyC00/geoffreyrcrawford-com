import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { InsightDetail } from "@/components/content/insight-detail";
import { mdxComponents } from "@/components/content/mdx-components";
import { JsonLd } from "@/components/seo/json-ld";
import { getInsightBySlug, getInsightSlugs } from "@/lib/content/insights";
import { absoluteUrl, insightOgImage } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  const { meta } = insight;
  const url = absoluteUrl(meta.path);
  const ogImage = meta.cover ? absoluteUrl(meta.cover) : insightOgImage(slug);

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url,
      siteName: siteConfig.name,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      authors: [meta.author],
      tags: meta.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const { content } = await compileMDX({
    source: insight.body,
    components: mdxComponents,
  });

  const { meta } = insight;
  const url = absoluteUrl(meta.path);
  const ogImage = meta.cover ? absoluteUrl(meta.cover) : insightOgImage(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: {
      "@type": "Person",
      name: meta.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: ogImage,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <InsightDetail meta={meta}>{content}</InsightDetail>
    </>
  );
}
