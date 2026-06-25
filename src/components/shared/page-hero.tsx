import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({ label, title, description, className, children }: PageHeroProps) {
  return (
    <section className={cn("section-padding !pb-12", className)}>
      <div className="container-wide">
        <div className="max-w-3xl">
          {label && (
            <p className="text-sm font-medium uppercase tracking-widest text-accent">{label}</p>
          )}
          <h1 className="mt-4 text-display-md font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground text-balance">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
