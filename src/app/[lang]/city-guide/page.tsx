import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
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
    <div className="pt-14">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.title} icon={<MapPin size={20} />} />

      <div className="px-6 py-5 space-y-7">
        {content.categories.map((category, ci) => (
          <section key={ci} className="print:break-inside-avoid">
            <h2 className="text-sm font-medium text-text mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-1 h-4 bg-accent rounded-full print:bg-black" />
              {category.title}
            </h2>

            <div className="space-y-2.5">
              {category.places.map((place, pi) => (
                <div
                  key={pi}
                  className="p-4 rounded-2xl bg-white border border-border print:bg-white print:border-gray-300 print:break-inside-avoid"
                >
                  <h3 className="font-medium text-sm mb-1">{place.name}</h3>
                  {place.details && (
                    <p className="text-xs text-text-muted font-light mb-2">
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
