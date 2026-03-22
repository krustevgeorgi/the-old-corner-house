"use client";

import { useState } from "react";
import MapEmbed from "@/components/MapEmbed";
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

      <div className="px-6 space-y-4">
        {activeCategory.places.map((place, pi) => (
          <div
            key={pi}
            className="rounded-2xl bg-white border border-border overflow-hidden"
          >
            {place.mapUrl && (
              <iframe
                src={place.mapUrl}
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map: ${place.name}`}
              />
            )}
            <div className="p-5">
              <h3 className="font-medium text-sm mb-1">{place.name}</h3>
              {place.details && (
                <p className="text-xs text-text-muted font-light mb-4">
                  {place.details}
                </p>
              )}
              {place.mapsLink && (
                <a
                  href={place.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-warm-light border border-border text-xs font-medium text-text hover:bg-warm transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  Open in Maps
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
