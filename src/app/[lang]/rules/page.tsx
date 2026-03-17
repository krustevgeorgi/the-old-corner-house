import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { ScrollText } from "lucide-react";

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
    <div>
      <PageHeader title={content.title} icon={<ScrollText size={22} />} />

      <div className="px-5 py-5 space-y-3">
        <ol className="space-y-2.5">
          {content.items.map((rule, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed print:break-inside-avoid"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold print:bg-black">
                {i + 1}
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm leading-relaxed print:bg-white print:border-gray-300 print:break-inside-avoid">
          {content.closing}
        </div>
      </div>
    </div>
  );
}
