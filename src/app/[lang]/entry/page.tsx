import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import { KeyRound, Lightbulb } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

const leavingTipLabels: Record<Lang, string> = {
  en: "Before you leave, double-check that the yard door latch, house door, and apartment door are all locked, and that the lockbox code is scrambled.",
  bg: "Преди да тръгнете, проверете отново, че ключалката на дворната врата, входната врата и вратата на апартамента са заключени, и че кодът на кутията е разбъркан.",
  ru: "Перед уходом убедитесь, что засов калитки, входная дверь и дверь квартиры заперты, а код ключницы перемешан.",
};

export default async function EntryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
  const content = guidebookContent[l]?.welcome ?? guidebookContent.en.welcome;

  return (
    <div className="pt-14 pb-28">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.entryTitle} icon={<KeyRound size={20} />} />

      <div className="px-6 pt-6 space-y-6">
        {content.entrySteps.map((step, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white border border-border overflow-hidden"
          >
            {/* Step images */}
            {step.images.length === 1 ? (
              <img
                src={step.images[0]}
                alt={step.title}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            ) : (
              <div className="grid grid-cols-2 gap-px bg-border">
                {step.images.map((img, j) => (
                  <img
                    key={j}
                    src={img}
                    alt={`${step.title} ${j + 1}`}
                    className={`w-full aspect-square object-cover bg-white ${
                      step.images.length === 3 && j === 0 ? "col-span-2 aspect-[2/1]" : ""
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            {/* Step content */}
            <div className="p-5">
              <div className="flex gap-3.5 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">{i + 1}</span>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="font-medium text-[15px] text-text mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    {step.instruction}
                  </p>
                </div>
              </div>

              {/* Tip callout */}
              {step.tip && (
                <div className="mt-4 flex gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200/60">
                  <Lightbulb size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800 font-light leading-relaxed">
                    {step.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Final reminder */}
        <div className="p-5 rounded-2xl bg-warm/50 border border-border">
          <div className="flex gap-2.5 items-start">
            <Lightbulb size={18} className="text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-text font-light leading-relaxed">
              {leavingTipLabels[l] ?? leavingTipLabels.en}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
