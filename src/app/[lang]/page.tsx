import Link from "next/link";
import { guidebookContent, supportedLanguages, type Lang } from "@/data/content";
import NavCards from "@/components/NavCards";
import { Wifi, Phone, ShieldAlert, MapPin, KeyRound, ExternalLink, ChevronRight } from "lucide-react";

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
    <div className="px-5 pt-14 pb-28">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-light tracking-tight text-text mb-1">
          {content.title}
        </h1>
        <div className="w-8 h-px bg-accent mt-3 mb-5" />
        <p className="text-sm leading-relaxed text-text-muted font-light">
          {content.intro}
        </p>
      </div>

      {/* Essentials: Wi-Fi, Phone, Emergency, Location, Entry */}
      <div className="mb-10">
        <div className="flex items-center gap-2.5 mb-5">
          <Wifi size={18} className="text-accent" />
          <h2 className="text-base font-medium text-text tracking-wide">
            {content.essentialsTitle}
          </h2>
        </div>

        <div className="space-y-4">
          <WifiCard
            networkLabel={content.wifiLabel}
            network={content.wifiValue}
            passLabel={content.passLabel}
            password={content.passValue}
          />

          <PhoneCard
            icon={<Phone size={16} className="text-accent" />}
            label={content.phoneLabel}
            value={content.phoneValue}
          />

          <EmergencyCard
            label={content.emergencyLabel}
            value={content.emergencyValue}
          />

          <LocationCard
            label={content.locationLabel}
            value={content.locationValue}
            mapUrl={content.locationMapUrl}
          />

          <EntryCard
            label={content.entryButtonLabel}
            href={`/${lang}/entry`}
          />
        </div>
      </div>

      {/* Navigation Cards */}
      <NavCards lang={lang as Lang} />
    </div>
  );
}

function WifiCard({
  networkLabel,
  network,
  passLabel,
  password,
}: {
  networkLabel: string;
  network: string;
  passLabel: string;
  password: string;
}) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-border print:break-inside-avoid">
      <div className="flex items-center gap-2 mb-4">
        <Wifi size={16} className="text-accent" />
        <span className="text-xs font-medium text-text uppercase tracking-wider">Wi-Fi</span>
      </div>
      <div className="space-y-3 mb-4">
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{networkLabel}</p>
          <p className="font-medium text-sm text-text">{network}</p>
        </div>
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{passLabel}</p>
          <p className="font-medium text-sm text-text font-mono">{password}</p>
        </div>
      </div>
      <a
        href={`WIFI:T:WPA;S:${network};P:${password};;`}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors print:hidden"
      >
        <Wifi size={14} />
        Connect to Wi-Fi
      </a>
    </div>
  );
}

function PhoneCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-border print:break-inside-avoid">
      <div className="flex items-center gap-3">
        <span className="print:hidden">{icon}</span>
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{label}</p>
          <p className="font-medium text-sm text-text">{value}</p>
        </div>
      </div>
      <a
        href={`tel:${value.replace(/\s/g, "")}`}
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors print:hidden"
      >
        <Phone size={13} />
        Call
      </a>
    </div>
  );
}

function EmergencyCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-red-50/50 border border-red-100 print:bg-white print:border-gray-300 print:break-inside-avoid">
      <div className="flex items-center gap-3">
        <ShieldAlert size={16} className="text-red-400 print:hidden" />
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{label}</p>
          <p className="font-medium text-sm text-text">{value}</p>
        </div>
      </div>
      <a
        href={`tel:${value}`}
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-100 text-red-600 text-xs font-medium hover:bg-red-200 transition-colors print:hidden"
      >
        <Phone size={13} />
        Call
      </a>
    </div>
  );
}

function LocationCard({
  label,
  value,
  mapUrl,
}: {
  label: string;
  value: string;
  mapUrl: string;
}) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-border print:break-inside-avoid">
      <div className="flex items-center gap-3">
        <MapPin size={16} className="text-accent print:hidden" />
        <div>
          <p className="text-[11px] text-text-muted tracking-wide uppercase mb-0.5">{label}</p>
          <p className="font-medium text-sm text-text">{value}</p>
        </div>
      </div>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors print:hidden"
      >
        <ExternalLink size={13} />
        Map
      </a>
    </div>
  );
}

function EntryCard({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-5 rounded-2xl bg-white border border-border hover:border-accent/40 transition-colors print:break-inside-avoid"
    >
      <div className="flex items-center gap-3">
        <KeyRound size={16} className="text-accent" />
        <p className="font-medium text-sm text-text">{label}</p>
      </div>
      <ChevronRight size={18} className="text-text-muted" />
    </Link>
  );
}
