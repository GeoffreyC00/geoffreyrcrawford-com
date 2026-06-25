import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Custom renderers for MDX content. Most typographic styling comes from the
 * `prose` wrapper (see `InsightBody`); these handle behavior that prose can't,
 * like turning internal links into Next.js `<Link>` and a few content blocks
 * authors can use directly in `.mdx` files (e.g. `<Callout>`).
 */

function MdxLink({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return <Link href={href} {...props} />;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

type CalloutProps = {
  children: React.ReactNode;
  type?: "note" | "tip" | "warning";
};

function Callout({ children, type = "note" }: CalloutProps) {
  const styles: Record<NonNullable<CalloutProps["type"]>, string> = {
    note: "border-accent/40 bg-accent/5",
    tip: "border-emerald-500/40 bg-emerald-500/5",
    warning: "border-amber-500/40 bg-amber-500/5",
  };
  return (
    <div className={cn("not-prose my-6 rounded-xl border p-5 text-sm leading-relaxed", styles[type])}>
      {children}
    </div>
  );
}

export const mdxComponents = {
  a: MdxLink,
  Callout,
};
