export type KitDownloads = {
  guide: string;
  workbook: string;
};

const DOWNLOADS_KEY = "flc-kit-downloads";
const LEAD_KEY = "flc-kit-lead";
const LEAD_FIRED_KEY = "flc-kit-lead-fired";

function kitDownloadOnThisSite(value: unknown, file: "guide" | "workbook"): string | null {
  if (typeof value !== "string" || typeof window === "undefined") return null;
  try {
    const url = new URL(value, window.location.origin);
    const token = url.searchParams.get("token");
    if (url.pathname !== "/api/first-lead-campaign/download" || url.searchParams.get("file") !== file || !token) {
      return null;
    }
    const local = new URL("/api/first-lead-campaign/download", window.location.origin);
    local.searchParams.set("file", file);
    local.searchParams.set("token", token);
    return local.toString();
  } catch {
    return null;
  }
}

/** Call only after the signup endpoint confirms both download links. */
export function rememberKitSignup(downloads: KitDownloads) {
  const guide = kitDownloadOnThisSite(downloads.guide, "guide");
  const workbook = kitDownloadOnThisSite(downloads.workbook, "workbook");
  if (!guide || !workbook) throw new Error("Invalid kit download links.");
  sessionStorage.setItem(DOWNLOADS_KEY, JSON.stringify({ guide, workbook }));
  sessionStorage.setItem(LEAD_KEY, "1");
}

export function readKitDownloads(): KitDownloads | null {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(DOWNLOADS_KEY) ?? "") as Partial<KitDownloads>;
    const guide = kitDownloadOnThisSite(parsed.guide, "guide");
    const workbook = kitDownloadOnThisSite(parsed.workbook, "workbook");
    if (!guide || !workbook) return null;
    return { guide, workbook };
  } catch {
    return null;
  }
}

/**
 * Removes the one-time success marker. Returns true only when this page load
 * should fire Lead. A refresh, a direct visit, and a later signup in the same
 * tab do not fire again once markKitLeadFired has run.
 */
export function takeKitLead(): boolean {
  try {
    const pending = sessionStorage.getItem(LEAD_KEY) === "1";
    if (pending) sessionStorage.removeItem(LEAD_KEY);
    if (!pending || sessionStorage.getItem(LEAD_FIRED_KEY) === "1") return false;
    return true;
  } catch {
    return false;
  }
}

export function markKitLeadFired() {
  try {
    sessionStorage.setItem(LEAD_FIRED_KEY, "1");
  } catch {
    // A blocked storage write must not turn into a second Lead on refresh.
  }
}
