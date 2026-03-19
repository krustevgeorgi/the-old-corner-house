import { ReactNode } from "react";

export default function PageHeader({
  title,
  icon,
}: {
  title: string;
  icon?: ReactNode;
}) {
  return (
    <div className="px-6 pt-6 pb-4 print:px-0 print:border-b print:border-black">
      <div className="flex items-center gap-3">
        {icon && <span className="text-accent print:hidden">{icon}</span>}
        <h1 className="text-xl font-light tracking-tight text-text">{title}</h1>
      </div>
      <div className="w-8 h-px bg-accent mt-3" />
    </div>
  );
}
