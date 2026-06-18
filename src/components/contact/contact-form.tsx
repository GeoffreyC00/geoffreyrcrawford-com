"use client";

import { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Interested in consulting, a project collaboration, or just want to connect? Send a
          message and I&apos;ll get back to you.
        </p>

        <div className="mt-10 space-y-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Mail className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">{siteConfig.email}</p>
            </div>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Linkedin className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium text-foreground">Connect on LinkedIn</p>
            </div>
          </a>
        </div>
      </div>

      <div className="lg:col-span-3">
        {submitted ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-lg font-medium">Opening your email client...</p>
            <p className="mt-2 text-sm text-muted-foreground">
              If it didn&apos;t open, email me directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or goals..."
                required
              />
            </div>
            <Button type="submit" size="lg">
              Send Message
              <Send className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
