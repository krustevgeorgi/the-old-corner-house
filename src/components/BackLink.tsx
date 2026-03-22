"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ href, label }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors print:hidden -ml-2 px-3 py-3 rounded-xl active:bg-warm/50 min-h-[48px] min-w-[48px]"
    >
      <ArrowLeft size={20} strokeWidth={2} />
      <span className="font-light">{label || "Back"}</span>
    </Link>
  );
}
