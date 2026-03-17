import { supportedLanguages, type Lang } from "@/data/content";
import MobileContainer from "@/components/MobileContainer";
import BottomNav from "@/components/BottomNav";
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
        <div className="min-w-[320px] max-w-[480px] mx-auto flex justify-end p-3">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="pb-16 print:pb-0">{children}</div>
      <BottomNav lang={lang as Lang} />
    </MobileContainer>
  );
}
