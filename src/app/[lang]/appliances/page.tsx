import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { Settings } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function AppliancesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.appliances ?? guidebookContent.en.appliances;

  return (
    <div>
      <PageHeader title={content.title} icon={<Settings size={22} />} />

      <div className="px-5 py-5 space-y-4">
        {content.items.map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-border bg-gray-50 print:bg-white print:border-gray-300 print:break-inside-avoid"
          >
            <h3 className="font-bold text-sm text-primary print:text-black mb-1.5">
              {item.name}
            </h3>
            <p className="text-sm text-text-muted print:text-black leading-relaxed">
              {item.instruction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
