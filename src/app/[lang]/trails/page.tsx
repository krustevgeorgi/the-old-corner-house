import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import MapEmbed from "@/components/MapEmbed";
import { TreePine, Route, Mountain, Clock, Droplets, Map } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

const difficultyLabels: Record<string, Record<string, string>> = {
  en: { label: "Difficulty" },
  bg: { label: "Трудност" },
  ru: { label: "Сложность" },
};

const distanceLabels: Record<string, Record<string, string>> = {
  en: { label: "Distance" },
  bg: { label: "Разстояние" },
  ru: { label: "Расстояние" },
};

const durationLabels: Record<string, Record<string, string>> = {
  en: { label: "Duration" },
  bg: { label: "Продължителност" },
  ru: { label: "Длительность" },
};

const waterLabels: Record<string, Record<string, string>> = {
  en: { label: "Drinking Water" },
  bg: { label: "Питейна вода" },
  ru: { label: "Питьевая вода" },
};

const routeLabels: Record<string, Record<string, string>> = {
  en: { label: "Route" },
  bg: { label: "Маршрут" },
  ru: { label: "Маршрут" },
};

const trailMapLabels: Record<string, string> = {
  en: "Open in Trail Maps",
  bg: "Отвори в карти за пътеки",
  ru: "Открыть в картах троп",
};

export default async function TrailsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.trails ?? guidebookContent.en.trails;
  const l = lang as string;

  // Trail coordinates for off-road map links
  const trailCoords = [
    { lat: 42.0275, lng: 23.9866, name: "Stariyat Chark" },
    { lat: 42.0146, lng: 23.9821, name: "Ostrets Peak" },
  ];

  return (
    <div className="pt-14">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={content.title} icon={<TreePine size={20} />} />

      <div className="px-6 py-5 space-y-5">
        <div className="p-3.5 bg-warm/50 border border-border rounded-2xl text-xs leading-relaxed text-text-muted font-light print:bg-white print:border-gray-300 print:text-black">
          {content.note}
        </div>

        {content.items.map((trail, i) => {
          const coords = trailCoords[i];
          const osmandLink = coords
            ? `https://osmand.net/map/?pin=${coords.lat},${coords.lng}#15/${coords.lat}/${coords.lng}`
            : null;

          return (
            <div
              key={i}
              className="rounded-2xl border border-border overflow-hidden print:break-inside-avoid print:border-gray-300"
            >
              <div className="bg-warm px-5 py-4 print:bg-gray-100">
                <h2 className="font-medium text-sm text-text">{trail.name}</h2>
              </div>

              <div className="p-5 space-y-4 bg-white">
                <div className="grid grid-cols-3 gap-2">
                  <StatBadge
                    icon={<Route size={14} />}
                    label={distanceLabels[l]?.label ?? "Distance"}
                    value={trail.distance}
                  />
                  <StatBadge
                    icon={<Mountain size={14} />}
                    label={difficultyLabels[l]?.label ?? "Difficulty"}
                    value={trail.difficulty}
                  />
                  <StatBadge
                    icon={<Clock size={14} />}
                    label={durationLabels[l]?.label ?? "Duration"}
                    value={trail.duration}
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-warm-light border border-border print:bg-white">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-accent mb-1">
                    <Droplets size={14} />
                    {waterLabels[l]?.label ?? "Drinking Water"}
                  </p>
                  <p className="text-xs text-text-muted font-light">
                    {trail.water}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-text-muted mb-1.5 uppercase tracking-wider print:text-black">
                    {routeLabels[l]?.label ?? "Route"}
                  </p>
                  <p className="text-xs leading-relaxed text-text-muted font-light print:text-black">
                    {trail.route}
                  </p>
                </div>

                <MapEmbed mapUrl={trail.mapUrl} name={trail.name} />

                {osmandLink && (
                  <a
                    href={osmandLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors print:hidden"
                  >
                    <Map size={14} />
                    {trailMapLabels[l] ?? trailMapLabels.en}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatBadge({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-warm-light print:bg-white print:border print:border-gray-200">
      <span className="text-accent mb-0.5">{icon}</span>
      <span className="text-[10px] text-text-muted tracking-wide">
        {label}
      </span>
      <span className="text-xs font-medium text-text">{value}</span>
    </div>
  );
}
