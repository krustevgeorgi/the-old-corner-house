import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
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
    <div className="pt-14">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.title} icon={<Settings size={20} />} />

      <div className="px-6 py-5 space-y-3">
        {content.items.map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white border border-border print:bg-white print:border-gray-300 print:break-inside-avoid"
          >
            <h3 className="font-medium text-sm text-text mb-1.5">
              {item.name}
            </h3>
            <p className="text-sm text-text-muted font-light leading-relaxed">
              {item.instruction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
