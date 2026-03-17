"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useState } from "react";
import { supportedLanguages, languageNames, type Lang } from "@/data/content";

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
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-sm font-medium shadow-md"
        aria-label="Switch language"
      >
        <Globe size={16} />
        {languageNames[currentLang] || "Language"}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-border overflow-hidden z-50">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => switchLang(lang)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                lang === currentLang ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
