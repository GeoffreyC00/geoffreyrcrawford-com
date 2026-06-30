"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

/**
 * Email magic-link + Google sign-in. Google only appears if you've enabled the
 * provider in Supabase; if it's not enabled the button simply returns an error
 * we surface inline, so it's safe to show by default.
 */
export function LoginForm({ next }: { next: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const redirectTo =
    typeof window !== "undefined"
      ? `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`
      : undefined;

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createClient();
    if (!supabase) {
      setStatus("error");
      setMessage("Sign-in isn't available yet.");
      return;
    }
    setStatus("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });
    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }
    setStatus("sent");
  }

  async function signInWithGoogle() {
    const supabase = createClient();
    if (!supabase) return;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
    if (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-muted/30 p-8 text-center">
        <Check className="mx-auto h-6 w-6 text-accent" />
        <p className="mt-4 font-serif text-2xl font-light">Check your email</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          We sent a sign-in link to <span className="text-foreground">{email}</span>. Open it on
          this device to continue.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={sendMagicLink} className="space-y-3">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          disabled={status === "sending"}
        />
        <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
          <Mail className="h-4 w-4" />
          {status === "sending" ? "Sending link…" : "Email me a sign-in link"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-hairline" />
        <span className="text-xs uppercase tracking-editorial text-muted-foreground">or</span>
        <span className="h-px flex-1 bg-hairline" />
      </div>

      <Button type="button" variant="secondary" size="lg" className="w-full" onClick={signInWithGoogle}>
        Continue with Google
        <ArrowRight className="h-4 w-4" />
      </Button>

      {status === "error" && <p className="mt-4 text-xs text-red-400">{message}</p>}

      <p className="mt-8 text-center text-xs text-muted-foreground">
        No passwords. We&apos;ll create your free workspace automatically.
      </p>
    </div>
  );
}
