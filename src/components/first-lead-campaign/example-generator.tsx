"use client";

import { useState } from "react";
import { PurchaseCta } from "@/components/first-lead-campaign/purchase-cta";

type Example = {
  offer: string;
  openingA: string;
  openingB: string;
  question: string;
};

type Status = "idle" | "loading" | "error" | "ready";

function visitorMessage(message: string | undefined): string {
  const fallback = "The example didn’t come back. Please try again.";
  if (!message) return fallback;
  if (/anthropic|api[_ -]?key/i.test(message)) {
    return "The example isn’t available right now. Please try again later.";
  }
  return message;
}

export function ExampleGenerator({ checkoutUrl }: { checkoutUrl: string | null }) {
  const [service, setService] = useState("");
  const [audience, setAudience] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [example, setExample] = useState<Example | null>(null);

  async function generate() {
    const trimmedService = service.trim();
    if (trimmedService.length < 2) {
      setStatus("error");
      setError("Add the service your business provides.");
      setExample(null);
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/first-lead-campaign/example", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: trimmedService,
          audience: audience.trim(),
        }),
      });
      const data = (await response.json()) as { example?: Example; error?: string };
      if (!response.ok || !data.example) {
        setExample(null);
        setStatus("error");
        setError(visitorMessage(data.error));
        return;
      }
      setExample(data.example);
      setStatus("ready");
    } catch {
      setExample(null);
      setStatus("error");
      setError("The example didn’t come back. Please try again.");
    }
  }

  return (
    <section className="px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto w-full min-w-0 max-w-xl rounded-3xl border border-[#e4dccb] bg-white p-5 shadow-[0_18px_40px_-32px_rgba(23,32,51,0.45)] sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a6232]">Free example</p>
        <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1B2B4B]">
          Try a free example
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[#3d4556]">
          One offer, two ad openings, and a form question. The kit is how you build the campaign.
        </p>

        <form
          className="mt-6 space-y-4"
          aria-busy={status === "loading"}
          onSubmit={(event) => {
            event.preventDefault();
            if (status !== "loading") void generate();
          }}
        >
          <div>
            <label htmlFor="lead-service" className="block text-base font-semibold text-[#1B2B4B]">
              What service do you provide?
            </label>
            <input
              id="lead-service"
              name="service"
              required
              maxLength={180}
              value={service}
              onChange={(event) => setService(event.target.value)}
              autoComplete="off"
              disabled={status === "loading"}
              className="mt-2 w-full rounded-xl border border-[#d7dde6] bg-[#f6f3ec] px-4 py-3 text-base text-[#172033] outline-none ring-[#1B2B4B] focus:bg-white focus:ring-2 disabled:opacity-70"
            />
          </div>
          <div>
            <label htmlFor="lead-audience" className="block text-base font-semibold text-[#1B2B4B]">
              Who do you want to reach? <span className="font-normal text-[#5c564e]">Optional</span>
            </label>
            <input
              id="lead-audience"
              name="audience"
              maxLength={180}
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              autoComplete="off"
              disabled={status === "loading"}
              className="mt-2 w-full rounded-xl border border-[#d7dde6] bg-[#f6f3ec] px-4 py-3 text-base text-[#172033] outline-none ring-[#1B2B4B] focus:bg-white focus:ring-2 disabled:opacity-70"
            />
          </div>
          <p className="text-base leading-relaxed text-[#3d4556]">
            Please don’t enter confidential information. Nothing you type here is saved.
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#1B2B4B] bg-white px-6 text-base font-semibold text-[#1B2B4B] disabled:cursor-wait disabled:opacity-70"
          >
            {status === "loading" ? "Writing an example…" : "Generate an example"}
          </button>
        </form>

        <div className="mt-5 min-w-0" aria-live="polite">
          {status === "loading" ? (
            <p className="text-base leading-relaxed text-[#3d4556]">Writing an example…</p>
          ) : null}

          {status === "error" ? (
            <div className="rounded-2xl border border-[#e4dccb] bg-[#fff6ea] p-4" role="alert">
              <p className="text-base leading-relaxed text-[#172033]">{error}</p>
              <button
                type="button"
                onClick={() => void generate()}
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#1B2B4B] bg-white px-6 text-base font-semibold text-[#1B2B4B]"
              >
                Try again
              </button>
            </div>
          ) : null}

          {status === "ready" && example ? (
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a6232]">
                AI-generated starting point
              </p>
              <p className="mt-2 text-base leading-relaxed text-[#3d4556]">
                Check that the details are accurate. This does not mean Meta will approve the ads,
                and it does not promise leads, customers, or profit.
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[#f6f3ec] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1B2B4B]">
                    One offer sentence
                  </h3>
                  <p className="mt-2 break-words text-base leading-relaxed text-[#172033]">{example.offer}</p>
                </div>
                <div className="rounded-xl bg-[#f6f3ec] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1B2B4B]">
                    Two ad openings
                  </h3>
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-base leading-relaxed text-[#172033]">
                    <li className="break-words">{example.openingA}</li>
                    <li className="break-words">{example.openingB}</li>
                  </ol>
                </div>
                <div className="rounded-xl bg-[#f6f3ec] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1B2B4B]">
                    One Instant Form question
                  </h3>
                  <p className="mt-2 break-words text-base leading-relaxed text-[#172033]">{example.question}</p>
                </div>
              </div>
              <div className="mt-6">
                <PurchaseCta checkoutUrl={checkoutUrl} className="w-full" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
