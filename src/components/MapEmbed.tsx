"use client";

import { MapPin } from "lucide-react";

export default function MapEmbed({
  mapUrl,
  name,
}: {
  mapUrl: string;
  name: string;
}) {
  if (!mapUrl) {
    return (
      <div className="w-full h-36 bg-warm-light rounded-xl flex flex-col items-center justify-center text-text-muted text-sm border border-dashed border-border print:hidden">
        <MapPin size={20} className="mb-1 text-accent opacity-50" />
        <span className="font-light text-xs">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-full print:hidden">
      <iframe
        src={mapUrl}
        width="100%"
        height="160"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map: ${name}`}
        className="rounded-xl"
      />
    </div>
  );
}
