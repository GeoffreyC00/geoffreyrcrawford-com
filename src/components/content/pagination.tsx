import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  /** Builds the href for a given page (page 1 → /insights, others → /insights/page/N). */
  hrefForPage: (page: number) => string;
};

export function Pagination({ page, totalPages, hrefForPage }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <nav className="mt-12 flex items-center justify-between border-t border-border pt-8" aria-label="Pagination">
      {hasPrev ? (
        <Link
          href={hrefForPage(page - 1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Link>
      ) : (
        <span />
      )}

      <div className="flex items-center gap-2">
        {pages.map((p) => (
          <Link
            key={p}
            href={hrefForPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm transition-colors",
              p === page
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {p}
          </Link>
        ))}
      </div>

      {hasNext ? (
        <Link
          href={hrefForPage(page + 1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
