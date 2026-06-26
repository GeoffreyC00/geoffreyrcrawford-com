"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-lg font-light tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <LinkButton href="/work-with-me" size="sm">
            Work With Me
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base transition-colors",
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LinkButton
              href="/work-with-me"
              className="mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Work With Me
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
