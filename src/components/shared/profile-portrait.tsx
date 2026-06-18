import Image from "next/image";
import { cn } from "@/lib/utils";

type ProfilePortraitProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function ProfilePortrait({
  variant = "dark",
  className,
  priority = false,
}: ProfilePortraitProps) {
  const src =
    variant === "light"
      ? "/images/geoffrey-light.png"
      : "/images/geoffrey-dark.png";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-card",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <Image
        src={src}
        alt="Geoffrey R. Crawford — Growth Marketing Strategist"
        width={640}
        height={800}
        priority={priority}
        className="h-full w-full object-cover object-top"
        sizes="(max-width: 768px) 100vw, 480px"
      />
    </div>
  );
}
