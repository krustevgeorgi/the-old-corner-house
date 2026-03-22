"use client";

import { useRouter } from "next/navigation";
import { supportedLanguages, languageNames, languageFlags, type Lang } from "@/data/content";

export default function LandingPage() {
  const router = useRouter();

  function selectLang(lang: Lang) {
    router.push(`/${lang}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-light p-6">
      <div className="min-w-[320px] max-w-[420px] w-full text-center">
        <div className="mb-10">
          <h1 className="text-3xl font-light tracking-tight text-text mb-2">
            The Old Corner House
          </h1>
          <div className="w-12 h-px bg-accent mx-auto mb-4" />
          <p className="text-text-muted text-sm font-light tracking-wide">
            Velingrad Guest Guide
          </p>
        </div>

        <div className="space-y-4">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => selectLang(lang)}
              className="w-full py-5 px-6 bg-white text-text font-light rounded-2xl border border-border hover:border-accent hover:shadow-sm transition-all text-lg tracking-wide flex items-center justify-center gap-3"
            >
              <span className="text-2xl">{languageFlags[lang]}</span>
              {languageNames[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
