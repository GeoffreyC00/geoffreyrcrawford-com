import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { footerLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-background">
      <div className="container-wide section-padding !py-20">
        {/* Newsletter — single calm block */}
        <div className="max-w-2xl">
          <p className="font-serif text-display-md font-light text-balance">
            {siteConfig.newsletter.title}
          </p>
          <p className="mt-4 text-muted-foreground text-pretty">
            {siteConfig.newsletter.description}
          </p>
          <div className="mt-8 max-w-md">
            <NewsletterForm source="footer" />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10 border-t border-hairline pt-10 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email
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
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          &copy; {year} {siteConfig.name}. {siteConfig.location}.
        </p>
      </div>
    </footer>
  );
}
