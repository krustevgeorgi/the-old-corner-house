import { ReactNode } from "react";

export default function PageHeader({
  title,
  icon,
}: {
  title: string;
  icon?: ReactNode;
}) {
  return (
    <div className="bg-primary text-white px-5 pt-6 pb-4 print:bg-white print:text-black print:border-b-2 print:border-black print:px-0">
      <div className="flex items-center gap-2">
        {icon && <span className="print:hidden">{icon}</span>}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
