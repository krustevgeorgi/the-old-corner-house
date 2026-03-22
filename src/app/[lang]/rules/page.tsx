import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import {
  ScrollText,
  CigaretteOff,
  Footprints,
  Lock,
  UtensilsCrossed,
  UserX,
  ShowerHead,
  Volume2,
  PartyPopper,
  Trash2,
  Power,
} from "lucide-react";

const ruleIcons = [
  CigaretteOff,
  Footprints,
  Lock,
  UtensilsCrossed,
  UserX,
  ShowerHead,
  Volume2,
  PartyPopper,
  Trash2,
  Power,
];

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function RulesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.rules ?? guidebookContent.en.rules;

  return (
    <div className="pt-14 pb-28">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.title} icon={<ScrollText size={20} />} />

      <div className="px-6 py-6 space-y-4">
        {content.items.map((rule, i) => {
          const Icon = ruleIcons[i] || ScrollText;
          return (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-border print:break-inside-avoid"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-warm flex items-center justify-center print:bg-gray-100">
                <Icon size={17} className="text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-light text-text leading-relaxed pt-1.5">{rule}</p>
            </div>
          );
        })}

        <div className="mt-4 p-5 bg-warm/40 border border-border rounded-2xl text-sm leading-relaxed font-light print:bg-white print:border-gray-300 print:break-inside-avoid">
          {content.closing}
        </div>
      </div>
    </div>
  );
}
