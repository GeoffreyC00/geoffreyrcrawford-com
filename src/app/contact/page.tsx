import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { EditorialImage } from "@/components/shared/editorial-image";
import { photos } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Geoffrey R. Crawford for consulting and growth marketing projects.",
};

export default function ContactPage() {
  return (
    <section className="section-padding !pt-24 md:!pt-28">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="kicker animate-rise">Contact</p>
            <h1 className="animate-rise mt-7 font-serif text-display-xl font-light text-pretty [animation-delay:80ms]">
              Let&apos;s build something that performs.
            </h1>
            <p className="animate-rise mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:180ms]">
              Ready to discuss paid media, AI systems, or full-funnel growth? I&apos;d love to hear
              about your project.
            </p>

            <div className="mt-12 max-w-xl">
              <ContactForm />
            </div>
          </div>

          <div className="hidden lg:block">
            <EditorialImage
              src={photos.portraitStudio.src}
              alt={photos.portraitStudio.alt}
              priority
              zoom={false}
              className="aspect-[4/5] w-full"
              imgClassName="object-top"
              sizes="(max-width: 1024px) 0px, 36rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
