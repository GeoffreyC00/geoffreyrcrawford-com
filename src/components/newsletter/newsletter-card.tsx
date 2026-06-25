import { NewsletterForm, type NewsletterFormProps } from "@/components/newsletter/newsletter-form";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type NewsletterCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  source?: string;
  audienceId?: string;
  buttonLabel?: string;
  className?: string;
  layout?: NewsletterFormProps["layout"];
};

/**
 * Newsletter call-to-action block — an open editorial layout (no boxed card).
 * Reuse it on the Insights index, inside content, on lead-magnet pages, or for
 * product launches by passing a distinct `source` (and optional `audienceId`).
 */
export function NewsletterCard({
  eyebrow = "Newsletter",
  title = siteConfig.newsletter.title,
  description = siteConfig.newsletter.description,
  source = "newsletter-card",
  audienceId,
  buttonLabel,
  className,
  layout = "row",
}: NewsletterCardProps) {
  return (
    <div className={cn("grid gap-8 border-y border-hairline py-12 lg:grid-cols-2 lg:gap-16", className)}>
      <div>
        {eyebrow && <p className="kicker">{eyebrow}</p>}
        <h2 className="mt-5 font-serif text-display-md font-light text-balance">{title}</h2>
      </div>
      <div className="flex flex-col justify-center">
        <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
        <div className="mt-6">
          <NewsletterForm
            source={source}
            audienceId={audienceId}
            buttonLabel={buttonLabel}
            layout={layout}
          />
        </div>
      </div>
    </div>
  );
}
