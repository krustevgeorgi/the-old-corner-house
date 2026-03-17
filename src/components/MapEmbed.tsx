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
      <div className="w-full h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-text-muted text-sm border border-dashed border-border print:hidden">
        <MapPin size={24} className="mb-1 opacity-50" />
        <span>Google Maps embed for</span>
        <span className="font-medium text-text">{name}</span>
        <span className="text-xs mt-1 opacity-60">
          Replace mapUrl in content.ts
        </span>
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
        className="rounded-lg"
      />
    </div>
  );
}
