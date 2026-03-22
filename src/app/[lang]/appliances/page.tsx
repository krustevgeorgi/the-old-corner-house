import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import { Settings, Snowflake, Tv, Flame, ImageIcon } from "lucide-react";

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
    <div className="pt-14 pb-28">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.title} icon={<Settings size={20} />} />

      <div className="px-6 py-6 space-y-5">
        {content.items.map((item, i) => {
          const Icon = applianceIcons[i] || Settings;
          return (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-border print:bg-white print:border-gray-300 print:break-inside-avoid"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-warm flex items-center justify-center">
                  <Icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <h3 className="font-medium text-sm text-text mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    {item.instruction}
                  </p>
                </div>
              </div>
              {/* Image placeholder for appliance photo/diagram */}
              <div className="mt-4 aspect-[16/9] rounded-xl bg-warm/50 border-2 border-dashed border-border/60 flex flex-col items-center justify-center gap-1.5">
                <ImageIcon size={24} className="text-text-muted/30" strokeWidth={1.5} />
                <span className="text-[11px] text-text-muted/40 font-light">Photo placeholder</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
