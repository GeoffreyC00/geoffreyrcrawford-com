import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Geoffrey R. Crawford for consulting and growth marketing projects.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding !pb-12">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Contact</p>
            <h1 className="mt-4 text-display-md font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something that performs.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Ready to discuss paid media, AI systems, or full-funnel growth? I&apos;d love to
              hear about your project.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border !py-16">
        <div className="container-wide">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
