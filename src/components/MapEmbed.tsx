"use client";

import { MapPin, ExternalLink } from "lucide-react";

export default function MapEmbed({
  mapUrl,
  name,
  mapsLink,
}: {
  mapUrl: string;
  name: string;
  mapsLink?: string;
}) {
  if (!mapUrl && !mapsLink) {
    return (
      <div className="w-full h-28 bg-warm-light rounded-xl flex flex-col items-center justify-center text-text-muted text-sm border border-dashed border-border print:hidden">
        <MapPin size={18} className="mb-1 text-accent opacity-50" />
        <span className="font-light text-xs">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-full print:hidden space-y-2">
      {mapUrl && (
        <iframe
          src={mapUrl}
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map: ${name}`}
          className="rounded-xl"
        />
      )}
      {mapsLink && (
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-warm-light border border-border text-xs font-medium text-text hover:bg-warm transition-colors"
        >
          <ExternalLink size={13} className="text-accent" />
          Open in Google Maps
        </a>
      )}
    </div>
  );
}
