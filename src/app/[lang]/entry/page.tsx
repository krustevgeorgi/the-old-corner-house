import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import { KeyRound, ImageIcon } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.welcome ?? guidebookContent.en.welcome;

  return (
    <div className="pt-14 pb-28">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.entryTitle} icon={<KeyRound size={20} />} />

      <div className="px-6 pt-6 space-y-5">
        {content.entrySteps.map((step, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-white border border-border"
          >
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="text-base font-semibold text-accent">{i + 1}</span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-medium text-sm text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  {step.instruction}
                </p>
              </div>
            </div>
            {/* Image placeholder for each step */}
            <div className="mt-4 aspect-[16/9] rounded-xl bg-warm/50 border-2 border-dashed border-border/60 flex flex-col items-center justify-center gap-1.5">
              <ImageIcon size={24} className="text-text-muted/30" strokeWidth={1.5} />
              <span className="text-[11px] text-text-muted/40 font-light">Photo placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
