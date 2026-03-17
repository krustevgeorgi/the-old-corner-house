import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velingrad Guest Guide",
  description: "Your digital guidebook for a comfortable stay in Velingrad, the spa capital of the Balkans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
