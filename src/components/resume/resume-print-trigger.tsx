"use client";

import { useEffect } from "react";

export function ResumePrintTrigger() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "1") {
      const timer = setTimeout(() => window.print(), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
