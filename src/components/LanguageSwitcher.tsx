"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useState } from "react";
import { supportedLanguages, languageNames, languageFlags, type Lang } from "@/data/content";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const currentLang = pathname.split("/")[1] as Lang;

  function switchLang(lang: Lang) {
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${lang}/${rest}`);
    setOpen(false);
  }

  return (
    <div className="print:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-sm text-text text-sm font-light shadow-sm border border-border"
        aria-label="Switch language"
      >
        <span className="text-base">{languageFlags[currentLang] || "🌐"}</span>
        {languageNames[currentLang] || "Language"}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-white rounded-xl shadow-lg border border-border overflow-hidden z-50 min-w-[140px]">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => switchLang(lang)}
              className={`flex items-center gap-2.5 w-full text-left px-4 py-3 text-sm font-light hover:bg-warm-light transition-colors ${
                lang === currentLang ? "bg-warm text-text font-normal" : "text-text-muted"
              }`}
            >
              <span className="text-base">{languageFlags[lang]}</span>
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
