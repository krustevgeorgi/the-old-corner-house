"use client";

import Link from "next/link";
import {
  Home,
  ScrollText,
  Settings,
  Bike,
  MapPin,
  TreePine,
} from "lucide-react";
import { navLabels, type Lang } from "@/data/content";

const navItems = [
  { key: "home", href: "", icon: Home, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop", gradient: "from-amber-800/60" },
  { key: "rules", href: "/rules", icon: ScrollText, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", gradient: "from-stone-800/60" },
  { key: "appliances", href: "/appliances", icon: Settings, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop", gradient: "from-zinc-800/60" },
  { key: "bikes", href: "/bikes", icon: Bike, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop", gradient: "from-emerald-900/60" },
  { key: "city-guide", href: "/city-guide", icon: MapPin, image: "https://images.unsplash.com/photo-1519998056459-e0e82a51ec1e?w=400&h=300&fit=crop", gradient: "from-sky-900/60" },
  { key: "trails", href: "/trails", icon: TreePine, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop", gradient: "from-green-900/60" },
];

export default function NavCards({ lang }: { lang: Lang }) {
  const labels = navLabels[lang] || navLabels.en;

  return (
    <div className="grid grid-cols-2 gap-3 print:hidden">
      {navItems.map(({ key, href, icon: Icon, image, gradient }) => {
        const fullHref = `/${lang}${href}`;

        return (
          <Link
            key={key}
            href={fullHref}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-warm"
          >
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent`} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="flex items-center gap-2">
                <Icon size={16} className="text-white/90" strokeWidth={1.5} />
                <span className="text-white text-sm font-medium tracking-wide">
                  {labels[key]}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
