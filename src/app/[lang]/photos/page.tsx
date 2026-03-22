import { supportedLanguages, navLabels, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import BackLink from "@/components/BackLink";
import { Camera, ImageIcon } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

const photoLabels: Record<Lang, { coming: string; description: string }> = {
  en: {
    coming: "Photos coming soon",
    description: "We are preparing beautiful photos of the property for you. Check back soon!",
  },
  bg: {
    coming: "Снимките идват скоро",
    description: "Подготвяме красиви снимки на имота за вас. Проверете отново скоро!",
  },
  ru: {
    coming: "Фотографии скоро появятся",
    description: "Мы готовим красивые фотографии объекта для вас. Загляните позже!",
  },
};

// Placeholder slots for future photos
const photoSlots = [
  { id: 1, label: "Living Room" },
  { id: 2, label: "Bedroom" },
  { id: 3, label: "Kitchen" },
  { id: 4, label: "Bathroom" },
  { id: 5, label: "Garden" },
  { id: 6, label: "Exterior" },
];

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const labels = navLabels[lang as Lang] || navLabels.en;
  const photo = photoLabels[lang as Lang] || photoLabels.en;

  return (
    <div className="pt-14 pb-28">
      <div className="px-6 mb-2">
        <BackLink href={`/${lang}`} />
      </div>
      <PageHeader title={labels.photos} icon={<Camera size={20} />} />

      <div className="px-6 pt-6">
        <p className="text-sm text-text-muted font-light mb-6 leading-relaxed">
          {photo.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {photoSlots.map((slot) => (
            <div
              key={slot.id}
              className="aspect-[4/3] rounded-2xl bg-warm/60 border-2 border-dashed border-border flex flex-col items-center justify-center gap-2"
            >
              <ImageIcon size={28} className="text-text-muted/40" strokeWidth={1.5} />
              <span className="text-xs text-text-muted/60 font-light">{slot.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
