import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Geoffrey R. Crawford for consulting and growth marketing projects.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding !pb-16 !pt-24 md:!pt-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="kicker animate-rise">Contact</p>
            <h1 className="animate-rise mt-7 font-serif text-display-xl font-light text-pretty [animation-delay:80ms]">
              Let&apos;s build something that performs.
            </h1>
            <p className="animate-rise mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty [animation-delay:180ms]">
              Ready to discuss paid media, AI systems, or full-funnel growth? I&apos;d love to hear
              about your project.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-hairline !pt-16">
        <div className="container-wide">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
