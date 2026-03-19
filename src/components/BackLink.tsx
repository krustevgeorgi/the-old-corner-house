"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ href, label }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors print:hidden"
    >
      <ArrowLeft size={16} strokeWidth={1.5} />
      <span className="font-light">{label || "Back"}</span>
    </Link>
  );
}
