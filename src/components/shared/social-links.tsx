import { Instagram, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  const links = [
    { href: `mailto:${siteConfig.email}`, label: siteConfig.email, icon: Mail },
    { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
    { href: siteConfig.instagram, label: "Instagram", icon: Instagram, external: true },
  ];

  return (
    <ul className={cn("space-y-3", className)}>
      {links.map(({ href, label, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-4 w-4 shrink-0" />
            {showLabels ? label : label.split("@")[0] === label ? label : "Email"}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SocialLinksRow({ className }: { className?: string }) {
  const links = [
    { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: siteConfig.instagram, label: "Instagram", icon: Instagram },
    { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
  ];

  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
