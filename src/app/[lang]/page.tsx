import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import NavCards from "@/components/NavCards";
import { Wifi, Phone, ShieldAlert } from "lucide-react";

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
    <div className="px-5 pt-14 pb-8">
      <div className="mb-8">
        <h1 className="text-2xl font-light tracking-tight text-text mb-1">
          {content.title}
        </h1>
        <div className="w-8 h-px bg-accent mt-3 mb-4" />
        <p className="text-sm leading-relaxed text-text-muted font-light">
          {content.intro}
        </p>
      </div>

      <div className="space-y-2.5 mb-8">
        <InfoCard
          icon={<Wifi size={16} className="text-accent" />}
          label={content.wifiLabel}
          value={content.wifiValue}
        />
        <InfoCard
          icon={<Wifi size={16} className="text-accent" />}
          label={content.passLabel}
          value={content.passValue}
        />
        <InfoCard
          icon={<Phone size={16} className="text-accent" />}
          label={content.phoneLabel}
          value={content.phoneValue}
        />
        <InfoCard
          icon={<ShieldAlert size={16} className="text-red-400" />}
          label={content.emergencyLabel}
          value={content.emergencyValue}
          highlight
        />
      </div>

      <NavCards lang={lang as Lang} />
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
      className={`flex items-center gap-3 p-3.5 rounded-2xl print:break-inside-avoid ${
        highlight
          ? "bg-red-50/50 border border-red-100 print:bg-white print:border-gray-300"
          : "bg-white border border-border print:bg-white print:border-gray-300"
      }`}
    >
      <span className="print:hidden">{icon}</span>
      <div>
        <p className="text-[11px] text-text-muted tracking-wide uppercase print:text-gray-600">{label}</p>
        <p className="font-medium text-sm text-text">{value}</p>
      </div>
    </div>
  );
}
