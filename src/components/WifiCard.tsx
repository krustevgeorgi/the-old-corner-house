"use client";

import { useState } from "react";
import { Wifi, Check } from "lucide-react";

export default function WifiCard({
  networkLabel,
  network,
  passLabel,
  password,
  copyButtonLabel,
  copiedLabel,
}: {
  networkLabel: string;
  network: string;
  passLabel: string;
  password: string;
  copyButtonLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = password;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="p-5 rounded-2xl bg-white border border-border print:break-inside-avoid">
      <div className="space-y-3 mb-4">
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{networkLabel}</p>
          <p className="font-medium text-sm text-text">{network}</p>
        </div>
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{passLabel}</p>
          <p className="font-medium text-sm text-text font-mono">{password}</p>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors print:hidden"
      >
        {copied ? <Check size={14} /> : <Wifi size={14} />}
        {copied ? copiedLabel : copyButtonLabel}
      </button>
    </div>
  );
}
