import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { Home, Wifi, Phone, ShieldAlert } from "lucide-react";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function WelcomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = guidebookContent[lang as Lang]?.welcome ?? guidebookContent.en.welcome;

  return (
    <div>
      <PageHeader title={content.title} icon={<Home size={22} />} />

      <div className="px-5 py-5 space-y-4">
        <p className="text-sm leading-relaxed text-text-muted print:text-black">
          {content.intro}
        </p>

        <div className="space-y-3">
          <InfoCard
            icon={<Wifi size={18} className="text-primary" />}
            label={content.wifiLabel}
            value={content.wifiValue}
          />
          <InfoCard
            icon={<Wifi size={18} className="text-primary" />}
            label={content.passLabel}
            value={content.passValue}
          />
          <InfoCard
            icon={<Phone size={18} className="text-primary" />}
            label={content.phoneLabel}
            value={content.phoneValue}
          />
          <InfoCard
            icon={<ShieldAlert size={18} className="text-red-600" />}
            label={content.emergencyLabel}
            value={content.emergencyValue}
            highlight
          />
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 p-3.5 rounded-xl border print:break-inside-avoid print:border-gray-300 ${
        highlight
          ? "border-red-200 bg-red-50 print:bg-white"
          : "border-border bg-gray-50 print:bg-white"
      }`}
    >
      <span className="print:hidden">{icon}</span>
      <div>
        <p className="text-xs text-text-muted print:text-gray-600">{label}</p>
        <p className="font-semibold text-sm">{value}</p>
      </div>
    </div>
  );
}
