import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import { Settings, Snowflake, Tv, Flame } from "lucide-react";

const applianceIcons = [Snowflake, Tv, Flame];

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
        {content.items.map((item, i) => {
          const Icon = applianceIcons[i] || Settings;
          return (
            <div
              key={i}
              className="flex gap-3.5 p-4 rounded-2xl bg-white border border-border print:bg-white print:border-gray-300 print:break-inside-avoid"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-warm flex items-center justify-center">
                <Icon size={17} className="text-primary" strokeWidth={1.5} />
              </div>
              <div className="pt-0.5">
                <h3 className="font-medium text-sm text-text mb-0.5">
                  {item.name}
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  {item.instruction}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
