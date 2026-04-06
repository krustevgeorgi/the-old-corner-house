"use client";

import Link from "next/link";
import {
  ScrollText,
  Settings,
  Bike,
  MapPin,
  TreePine,
  HelpCircle,
} from "lucide-react";
import { navLabels, type Lang } from "@/data/content";

const navItems = [
  { key: "rules", href: "/rules", icon: ScrollText, image: "/images/house-rules.png", gradient: "from-stone-900/70" },
  { key: "city-guide", href: "/city-guide", icon: MapPin, image: "/images/city-guide.jpeg", gradient: "from-sky-900/70" },
  { key: "trails", href: "/trails", icon: TreePine, image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=300&fit=crop&q=80", gradient: "from-green-900/70" },
  { key: "bikes", href: "/bikes", icon: Bike, image: "/images/bicycles.jpeg", gradient: "from-emerald-900/70" },
  { key: "appliances", href: "/appliances", icon: Settings, image: "/images/appliances.jpeg", gradient: "from-zinc-900/70" },
  { key: "faq", href: "/faq", icon: HelpCircle, image: "/images/home.jpeg", gradient: "from-indigo-900/70" },
];

export default function NavCards({ lang }: { lang: Lang }) {
  const labels = navLabels[lang] || navLabels.en;

  return (
    <div className="grid grid-cols-2 gap-3.5 print:hidden">
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
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} via-transparent to-transparent`} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="flex items-center gap-2">
                <Icon size={15} className="text-white/90" strokeWidth={1.5} />
                <span className="text-white text-sm font-medium tracking-wide drop-shadow-sm">
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
