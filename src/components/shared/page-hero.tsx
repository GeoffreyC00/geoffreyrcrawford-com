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
    <section className={cn("section-padding !pb-16 !pt-24 md:!pt-28", className)}>
      <div className="container-wide">
        <div className="max-w-4xl">
          {label && <p className="kicker animate-rise">{label}</p>}
          <h1 className="animate-rise mt-7 font-serif text-display-xl font-light text-pretty [animation-delay:80ms]">
            {title}
          </h1>
          {description && (
            <p className="animate-rise mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:180ms]">
              {description}
            </p>
          )}
          {children && <div className="animate-rise mt-10 [animation-delay:280ms]">{children}</div>}
        </div>
      </div>
    </section>
  );
}
