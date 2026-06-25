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
 * Self-contained newsletter call-to-action block. Reuse it on the Insights
 * index, inside content, on lead-magnet pages, or for product launches — pass
 * a distinct `source` (and optional `audienceId`) per placement.
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
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="relative">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
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
