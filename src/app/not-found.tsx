import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center section-padding text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <LinkButton href="/">Go Home</LinkButton>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center px-6 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
