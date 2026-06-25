import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  /** Optional editorial index, e.g. "01". */
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {(label || index) && (
        <div
          className={cn(
            "mb-6 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          {index && <span className="font-mono text-xs text-muted-foreground">{index}</span>}
          {index && label && <span className="h-px w-8 bg-border" />}
          {label && <span className="kicker">{label}</span>}
        </div>
      )}
      <h2 className="font-serif text-display-lg font-light text-balance">{title}</h2>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
