"use client";

import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { firstLeadCampaign } from "@/lib/products/first-lead-campaign";
import { rememberKitSignup } from "@/lib/products/kit-signup-handoff";

type Status = "idle" | "loading" | "error";

type OpenKit = (trigger: HTMLButtonElement) => void;

type KitOptInValue = {
  openKit: OpenKit;
  isOpen: boolean;
};

const KitOptInContext = createContext<KitOptInValue | null>(null);

const RETRY = "The kit didn’t send. Please try again.";

function visitorMessage(message: string | undefined): string {
  if (
    message === "Please enter a valid email address." ||
    message === "Please wait a few minutes before trying again." ||
    message === "Please try again." ||
    message === "Please shorten your answers."
  ) {
    return message;
  }
  return RETRY;
}

export function GetFreeKitButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const kit = useContext(KitOptInContext);

  return (
    <button type="button" className={className} onClick={(event) => kit?.openKit(event.currentTarget)}>
      {children}
    </button>
  );
}

export function MobileKitBar() {
  const kit = useContext(KitOptInContext);
  if (kit?.isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4dccb] bg-[#f6f3ec]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(23,32,51,0.08)] backdrop-blur sm:hidden">
      <GetFreeKitButton className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#1B2B4B] px-6 text-lg font-semibold text-white">
        Get the free kit
      </GetFreeKitButton>
    </div>
  );
}

export function KitOptInProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openKit(trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setOpen(true);
  }

  function close() {
    setOpen(false);
    const trigger = triggerRef.current;
    requestAnimationFrame(() => trigger?.focus());
  }

  return (
    <KitOptInContext.Provider value={{ openKit, isOpen: open }}>
      {children}
      {open ? <KitOptInDialog onClose={close} /> : null}
    </KitOptInContext.Provider>
  );
}

function KitOptInDialog({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const submitting = useRef(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtml = html.style.overflow;
    const previousBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = previousHtml;
      body.style.overflow = previousBody;
    };
  }, []);

  useEffect(() => {
    if (status === "idle") emailRef.current?.focus();
  }, [status]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = [
        ...dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled])"),
      ].filter((item) => item.tabIndex !== -1 && item.offsetParent !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      emailRef.current?.focus();
      return;
    }

    submitting.current = true;
    setStatus("loading");
    setError("");

    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/first-lead-campaign/opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          firstName,
          website: String(data.get("website") ?? ""),
        }),
      });
      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
        success?: boolean;
        downloads?: { guide?: string; workbook?: string };
      };

      if (!response.ok || body.success !== true) {
        setStatus("error");
        setError(visitorMessage(body.error));
        return;
      }

      if (body.downloads?.guide && body.downloads.workbook) {
        try {
          rememberKitSignup({ guide: body.downloads.guide, workbook: body.downloads.workbook });
        } catch {
          // The signup already succeeded. The email still has the download links.
        }
      }

      window.location.assign(firstLeadCampaign.thanksPath);
    } catch {
      setStatus("error");
      setError(RETRY);
    } finally {
      submitting.current = false;
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#172033]/55 sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[100dvh] w-full overflow-y-auto overscroll-contain bg-[#f6f3ec] px-5 pb-8 pt-6 text-[#172033] shadow-xl sm:max-w-lg sm:rounded-2xl sm:border sm:border-[#e4dccb]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-2xl leading-none text-[#1B2B4B]"
        >
          <span aria-hidden="true">×</span>
        </button>
        <h2
          id={titleId}
          ref={titleRef}
          tabIndex={-1}
          className="pr-12 font-serif text-2xl font-medium tracking-tight text-[#1B2B4B] outline-none"
        >
          Get the free kit
        </h2>
        <p id={descriptionId} className="mt-3 text-base leading-relaxed text-[#3d4556]">
          The PDF field guide and Excel workbook for planning one Meta Leads campaign with an Instant
          Form.
        </p>

        <form onSubmit={submit} className="mt-5 space-y-3" noValidate>
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <label className="block text-sm font-semibold text-[#1B2B4B]">
              Email
              <input
                ref={emailRef}
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                disabled={status === "loading"}
                className="mt-2 w-full rounded-xl border border-[#d7dde6] bg-white px-4 py-3 text-base text-[#172033] outline-none ring-[#1B2B4B] focus:ring-2"
              />
            </label>
            <label className="block text-sm font-semibold text-[#1B2B4B]">
              First name <span className="font-medium text-[#8a6232]">Optional</span>
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                autoComplete="given-name"
                maxLength={80}
                disabled={status === "loading"}
                className="mt-2 w-full rounded-xl border border-[#d7dde6] bg-white px-4 py-3 text-base text-[#172033] outline-none ring-[#1B2B4B] focus:ring-2"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1B2B4B] px-6 text-base font-semibold text-white disabled:cursor-wait disabled:opacity-70"
            >
              {status === "loading" ? "Sending the kit…" : "Send me the free kit"}
            </button>
            <p className="text-sm leading-relaxed text-[#3d4556]">
              Submitting requests the PDF guide and Excel workbook and may include follow-up emails
              with practical campaign guidance.{" "}
              <Link
                href={firstLeadCampaign.policiesPath}
                className="font-semibold underline underline-offset-4"
              >
                Privacy notes
              </Link>
              .
            </p>
            {status === "error" ? (
              <p className="text-sm leading-relaxed text-[#172033]" role="alert">
                {error}
              </p>
            ) : null}
          </form>
      </div>
    </div>
  );
}
