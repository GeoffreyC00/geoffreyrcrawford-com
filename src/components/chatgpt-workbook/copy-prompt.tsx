"use client";

import { useState } from "react";

type CopyPromptProps = {
  text: string;
  label: string;
};

export function CopyPrompt({ text, label }: CopyPromptProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function onCopy() {
    const copied = await Promise.race([
      navigator.clipboard
        .writeText(text)
        .then(() => true)
        .catch(() => false),
      new Promise<boolean>((resolve) => {
        window.setTimeout(() => resolve(false), 700);
      }),
    ]);
    setState(copied ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 4000);
  }

  const buttonLabel = state === "copied" ? "Copied" : state === "failed" ? "Copy didn't work" : label;
  const status =
    state === "copied"
      ? "Copied to your clipboard."
      : state === "failed"
        ? "Select the example text and copy it from your browser."
        : "";

  return (
    <div>
      <button
        type="button"
        onClick={onCopy}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#1B2B4B] px-6 text-lg font-semibold text-white transition-colors hover:bg-[#243656] sm:w-auto sm:min-w-52"
      >
        {buttonLabel}
      </button>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-[#172033]" aria-live="polite">
        {status || "\u00a0"}
      </p>
    </div>
  );
}
