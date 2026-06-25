"use client";

export function ResumePrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
    >
      Save as PDF
    </button>
  );
}
