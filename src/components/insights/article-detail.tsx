import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/shared/cta-section";
import type { Article } from "@/lib/data/articles";

function ArticleBody({ content }: { content: string[] }) {
  return (
    <div className="prose prose-invert max-w-none">
      {content.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={index} className="mt-10 text-2xl font-semibold tracking-tight text-foreground">
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("**") && block.endsWith("**")) {
          return (
            <p key={index} className="mt-6 font-medium text-foreground">
              {block.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={index} className="mt-4 list-none space-y-2 pl-0">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {block.replace("- ", "")}
              </li>
            </ul>
          );
        }
        return (
          <p key={index} className="mt-4 text-base leading-relaxed text-muted-foreground">
            {block}
          </p>
        );
      })}
    </div>
  );
}

type ArticleDetailProps = {
  article: Article;
};

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <>
      <section className="section-padding !pb-8">
        <div className="container-narrow">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>
          <div className="mt-8">
            <Badge variant="secondary">{article.category}</Badge>
            <h1 className="mt-4 text-display-md font-semibold tracking-tight text-balance sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{article.description}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {article.readTime}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !pt-8">
        <div className="container-narrow">
          <ArticleBody content={article.content} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
