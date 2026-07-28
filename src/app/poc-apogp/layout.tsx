import type { ReactNode } from "react";

/**
 * Keep document chrome gold so dark portfolio body styles
 * do not flash or show on overscroll behind the POC.
 */
export default function PocApogpLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        html, body {
          background: #efcc72 !important;
          color: #4c0b7f;
        }
      `}</style>
      {children}
    </>
  );
}
