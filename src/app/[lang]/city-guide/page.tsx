import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import MapEmbed from "@/components/MapEmbed";
import { MapPin } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function CityGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.cityGuide ?? guidebookContent.en.cityGuide;

  return (
    <div>
      <PageHeader title={content.title} icon={<MapPin size={22} />} />

      <div className="px-5 py-5 space-y-6">
        {content.categories.map((category, ci) => (
          <section key={ci} className="print:break-inside-avoid">
            <h2 className="text-base font-bold text-primary print:text-black mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-accent rounded-full print:bg-black" />
              {category.title}
            </h2>

            <div className="space-y-3">
              {category.places.map((place, pi) => (
                <div
                  key={pi}
                  className="p-3.5 rounded-xl border border-border bg-gray-50 print:bg-white print:border-gray-300 print:break-inside-avoid"
                >
                  <h3 className="font-semibold text-sm mb-1">{place.name}</h3>
                  {place.details && (
                    <p className="text-xs text-text-muted print:text-gray-600 mb-2">
                      {place.details}
                    </p>
                  )}
                  <MapEmbed mapUrl={place.mapUrl} name={place.name} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
