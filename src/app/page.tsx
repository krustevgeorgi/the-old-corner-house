"use client";

import { useRouter } from "next/navigation";
import { supportedLanguages, languageNames, type Lang } from "@/data/content";
import { Globe } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  function selectLang(lang: Lang) {
    router.push(`/${lang}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-primary-light p-6">
      <div className="min-w-[320px] max-w-[380px] w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Welcome / Добре дошли / Добро пожаловать
          </h1>
          <p className="text-white/80 text-sm">
            Select your language to continue
          </p>
        </div>

        <div className="space-y-3">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => selectLang(lang)}
              className="w-full py-3.5 px-6 bg-white text-primary font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all text-lg"
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
