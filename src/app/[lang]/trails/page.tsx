import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import MapEmbed from "@/components/MapEmbed";
import { TreePine, Route, Mountain, Clock, Droplets } from "lucide-react";

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

export default async function TrailsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.trails ?? guidebookContent.en.trails;
  const l = lang as string;

  return (
    <div>
      <PageHeader title={content.title} icon={<TreePine size={22} />} />

      <div className="px-5 py-5 space-y-5">
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs leading-relaxed text-amber-800 print:bg-white print:border-gray-300 print:text-black">
          {content.note}
        </div>

        {content.items.map((trail, i) => (
          <div
            key={i}
            className="rounded-xl border border-border overflow-hidden print:break-inside-avoid print:border-gray-300"
          >
            <div className="bg-primary text-white px-4 py-3 print:bg-gray-100 print:text-black">
              <h2 className="font-bold text-sm">{trail.name}</h2>
            </div>

            <div className="p-4 space-y-3 bg-white">
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

              <div className="p-3 rounded-lg bg-blue-50 print:bg-white print:border print:border-gray-200">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 print:text-black mb-1">
                  <Droplets size={14} />
                  {waterLabels[l]?.label ?? "Drinking Water"}
                </p>
                <p className="text-xs text-blue-600 print:text-gray-700">
                  {trail.water}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-text-muted mb-1 print:text-black">
                  {routeLabels[l]?.label ?? "Route"}:
                </p>
                <p className="text-xs leading-relaxed text-text-muted print:text-black">
                  {trail.route}
                </p>
              </div>

              <MapEmbed mapUrl={trail.mapUrl} name={trail.name} />
            </div>
          </div>
        ))}
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
    <div className="flex flex-col items-center text-center p-2 rounded-lg bg-gray-50 print:bg-white print:border print:border-gray-200">
      <span className="text-primary print:text-black mb-0.5">{icon}</span>
      <span className="text-[10px] text-text-muted print:text-gray-600">
        {label}
      </span>
      <span className="text-xs font-bold">{value}</span>
    </div>
  );
}
