"use client";

import { useState } from "react";
import { ImageIcon, ExternalLink, MapPin } from "lucide-react";
import type { Category } from "@/data/content";

export default function CityGuideClient({ categories }: { categories: Category[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = categories[activeIdx];

  return (
    <div className="py-5">
      <div className="px-6 mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2.5 min-w-max">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                i === activeIdx
                  ? "bg-primary text-white shadow-sm"
                  : "bg-warm-light text-text-muted border border-border hover:bg-warm"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-5">
        {activeCategory.places.map((place, pi) => (
          <div
            key={pi}
            className="rounded-2xl bg-white border border-border overflow-hidden"
          >
            {/* Cover photo placeholder */}
            <div className="relative aspect-[16/9] bg-warm/40 flex flex-col items-center justify-center gap-2">
              <ImageIcon size={32} className="text-text-muted/25" strokeWidth={1.5} />
              <span className="text-xs text-text-muted/35 font-light">Cover photo</span>
              {/* Place name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-5 pb-4 pt-8">
                <h3 className="font-medium text-sm text-white drop-shadow-sm">{place.name}</h3>
              </div>
            </div>

            <div className="p-5">
              {place.details && (
                <div className="flex items-start gap-2 mb-4">
                  <MapPin size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    {place.details}
                  </p>
                </div>
              )}

              {/* Map preview */}
              {place.mapUrl && (
                <div className="rounded-xl overflow-hidden border border-border mb-4">
                  <iframe
                    src={place.mapUrl}
                    width="100%"
                    height="160"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map: ${place.name}`}
                  />
                </div>
              )}

              {place.mapsLink && (
                <a
                  href={place.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors"
                >
                  <ExternalLink size={14} />
                  Open in Google Maps
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
