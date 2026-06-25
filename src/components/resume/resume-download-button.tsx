"use client";

import { Download } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

export function ResumeDownloadButton() {
  return (
    <LinkButton href="/hire-me/resume?print=1" variant="outline" size="lg">
      <Download className="h-4 w-4" />
      Download Resume
    </LinkButton>
  );
}
