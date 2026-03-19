import { supportedLanguages, type Lang } from "@/data/content";
import MobileContainer from "@/components/MobileContainer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <MobileContainer>
      <div className="fixed top-0 left-0 right-0 z-50 print:hidden">
        <div className="min-w-[320px] max-w-[520px] mx-auto flex justify-end p-4">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="print:pb-0">{children}</div>
    </MobileContainer>
  );
}
