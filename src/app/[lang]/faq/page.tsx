import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import { HelpCircle, Clock, Car } from "lucide-react";

const faqIcons = [Clock, Car];

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.faq ?? guidebookContent.en.faq;

  return (
    <div className="pt-14 pb-28">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.title} icon={<HelpCircle size={20} />} />

      <div className="px-6 py-6 space-y-4">
        {content.items.map((item, i) => {
          const Icon = faqIcons[i] || HelpCircle;
          return (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-border print:break-inside-avoid"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-warm flex items-center justify-center print:bg-gray-100">
                  <Icon size={17} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-text pt-2">{item.question}</h3>
              </div>
              <p className="text-sm font-light text-text-muted leading-relaxed pl-[52px]">
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
