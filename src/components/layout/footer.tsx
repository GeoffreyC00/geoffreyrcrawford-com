import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { footerSections, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide section-padding !py-16">
        {/* Newsletter — audience capture for the long-term hub */}
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              {siteConfig.newsletter.title}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.newsletter.description}
            </p>
          </div>
          <div className="lg:pt-1">
            <NewsletterSignup />
          </div>
        </div>

        {/* Navigation pillars */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Growth marketing strategist working across paid media, analytics, AI systems,
              automation, and conversion optimization.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{siteConfig.location}</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-medium text-foreground">{section.title}</p>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 border-t border-border pt-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Paid Media &middot; Analytics &middot; AI Systems &middot; Growth Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
