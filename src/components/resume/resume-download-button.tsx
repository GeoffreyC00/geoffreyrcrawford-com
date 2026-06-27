"use client";

import { Download } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

export function ResumeDownloadButton() {
  return (
    <LinkButton href="/geoffrey-crawford-resume.pdf" variant="outline" size="lg" download>
      <Download className="h-4 w-4" />
      Download Resume
    </LinkButton>
  );
}
