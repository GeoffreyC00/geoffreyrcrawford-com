"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type EditorialImageProps = {
  src: string;
  alt: string;
  /** Aspect ratio utility class, e.g. "aspect-[4/5]". */
  className?: string;
  /** object-position helper, e.g. "object-top". */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Slow scroll-driven zoom that settles as the image enters view. */
  zoom?: boolean;
};

/**
 * Editorial photography frame: a slow fade-up reveal plus an almost
 * imperceptible scroll zoom. Built for full-bleed and feature imagery so the
 * page feels like a magazine spread rather than a UI grid.
 */
export function EditorialImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  zoom = true,
}: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative overflow-hidden bg-card", className)}
    >
      <motion.div style={{ scale: reduce || !zoom ? 1 : scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
