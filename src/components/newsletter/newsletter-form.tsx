"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export type NewsletterFormProps = {
  /** Identifies the signup origin for analytics/segmentation (e.g. "footer"). */
  source?: string;
  /** Optional Resend Audience override for lead magnets / launches. */
  audienceId?: string;
  buttonLabel?: string;
  placeholder?: string;
  successMessage?: string;
  layout?: "row" | "stacked";
  className?: string;
};

/**
 * Reusable newsletter capture form. Posts to `/api/subscribe`, which routes to
 * a Resend Audience. Drop it anywhere and pass a `source` (and optionally an
 * `audienceId`) to support future lead magnets, gated resources, and launches.
 */
export function NewsletterForm({
  source = "website",
  audienceId,
  buttonLabel = "Subscribe",
  placeholder = "you@email.com",
  successMessage = "You're on the list. Thanks for subscribing.",
  layout = "row",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, audienceId }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        return;
      }

      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setMessage(data.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("flex items-center gap-2 text-sm text-foreground", className)}>
        <Check className="h-4 w-4 text-accent" />
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-2", className)}>
      <div className={cn("flex gap-2", layout === "row" ? "flex-col sm:flex-row" : "flex-col")}>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className={layout === "row" ? "sm:max-w-xs" : undefined}
          disabled={status === "loading"}
        />
        <Button type="submit" disabled={status === "loading"} className={layout === "stacked" ? "w-full" : undefined}>
          {status === "loading" ? "Subscribing…" : buttonLabel}
          {status !== "loading" && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
      {status === "error" && <p className="text-xs text-red-400">{message}</p>}
    </form>
  );
}
