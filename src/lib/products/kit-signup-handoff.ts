export type KitDownloads = {
  guide: string;
  workbook: string;
};

const DOWNLOADS_KEY = "flc-kit-downloads";
const LEAD_KEY = "flc-kit-lead";
const LEAD_FIRED_KEY = "flc-kit-lead-fired";

function isKitDownloadUrl(value: unknown, file: "guide" | "workbook"): value is string {
  if (typeof value !== "string" || typeof window === "undefined") return false;
  try {
    const url = new URL(value);
    return (
      url.origin === window.location.origin &&
      url.pathname === "/api/first-lead-campaign/download" &&
      url.searchParams.get("file") === file &&
      Boolean(url.searchParams.get("token"))
    );
  } catch {
    return false;
  }
}

/** Call only after the signup endpoint confirms both download links. */
export function rememberKitSignup(downloads: KitDownloads) {
  if (!isKitDownloadUrl(downloads.guide, "guide") || !isKitDownloadUrl(downloads.workbook, "workbook")) {
    throw new Error("Invalid kit download links.");
  }
  sessionStorage.setItem(DOWNLOADS_KEY, JSON.stringify(downloads));
  sessionStorage.setItem(LEAD_KEY, "1");
}

export function readKitDownloads(): KitDownloads | null {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(DOWNLOADS_KEY) ?? "") as Partial<KitDownloads>;
    if (!isKitDownloadUrl(parsed.guide, "guide") || !isKitDownloadUrl(parsed.workbook, "workbook")) {
      return null;
    }
    return { guide: parsed.guide, workbook: parsed.workbook };
  } catch {
    return null;
  }
}

/**
 * Removes the one-time success marker. Returns true only the first time this
 * browser tab should fire Lead. A refresh, a direct visit, and a later signup
 * in the same tab do not fire again.
 */
export function takeKitLead(): boolean {
  try {
    const pending = sessionStorage.getItem(LEAD_KEY) === "1";
    if (pending) sessionStorage.removeItem(LEAD_KEY);
    if (!pending || sessionStorage.getItem(LEAD_FIRED_KEY) === "1") return false;
    sessionStorage.setItem(LEAD_FIRED_KEY, "1");
    return true;
  } catch {
    return false;
  }
}
