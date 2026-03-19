"use client";

import { ReactNode } from "react";

export default function MobileContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-[320px] max-w-[520px] mx-auto w-full min-h-screen bg-bg print:max-w-none print:w-full print:mx-0">
      {children}
    </div>
  );
}
