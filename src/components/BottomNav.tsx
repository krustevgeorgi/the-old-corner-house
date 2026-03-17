"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { key: "home", href: "", icon: Home },
  { key: "rules", href: "/rules", icon: ScrollText },
  { key: "appliances", href: "/appliances", icon: Settings },
  { key: "bikes", href: "/bikes", icon: Bike },
  { key: "city-guide", href: "/city-guide", icon: MapPin },
  { key: "trails", href: "/trails", icon: TreePine },
];

export default function BottomNav({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const labels = navLabels[lang] || navLabels.en;

  return (
    <nav className="print:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-40">
      <div className="min-w-[320px] max-w-[480px] mx-auto flex justify-around">
        {navItems.map(({ key, href, icon: Icon }) => {
          const fullHref = `/${lang}${href}`;
          const isActive =
            pathname === fullHref ||
            (href !== "" && pathname.startsWith(fullHref));

          return (
            <Link
              key={key}
              href={fullHref}
              className={`flex flex-col items-center py-2 px-1 text-[10px] flex-1 ${
                isActive
                  ? "text-accent font-semibold"
                  : "text-text-muted"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="mt-0.5 truncate">{labels[key]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
