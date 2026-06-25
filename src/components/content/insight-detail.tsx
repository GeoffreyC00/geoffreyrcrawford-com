import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { NewsletterCard } from "@/components/newsletter/newsletter-card";
import { Badge } from "@/components/ui/badge";
import type { InsightMeta } from "@/lib/content/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type InsightDetailProps = {
  meta: InsightMeta;
  children: ReactNode;
};

export function InsightDetail({ meta, children }: InsightDetailProps) {
  return (
    <>
      <article className="section-padding !pb-0">
        <div className="container-narrow">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Insights
          </Link>

          <header className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{meta.typeLabel}</Badge>
              <span className="text-sm text-muted-foreground">
                {formatDate(meta.publishedAt)} · {meta.readingTime}
              </span>
            </div>
            <h1 className="mt-5 text-display-md font-semibold tracking-tight text-balance sm:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground text-balance">
              {meta.description}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">By {meta.author}</p>
          </header>

          <div className="mt-12 prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']">
            {children}
          </div>

          {meta.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
              {meta.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </article>

      <section className="section-padding">
        <div className="container-narrow">
          <NewsletterCard source={`insight:${meta.slug}`} />
        </div>
      </section>
    </>
  );
}
