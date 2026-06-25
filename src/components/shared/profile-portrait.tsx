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
    variant === "light" ? "/images/geoffrey-light.png" : "/images/geoffrey-dark.png";

  return (
    <div className={cn("group relative overflow-hidden bg-card", className)}>
      <Image
        src={src}
        alt="Geoffrey R. Crawford"
        width={640}
        height={800}
        priority={priority}
        className="h-full w-full object-cover object-top grayscale-[0.35] contrast-[1.02] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 480px"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
    </div>
  );
}
