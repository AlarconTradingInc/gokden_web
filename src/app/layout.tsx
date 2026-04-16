import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gökden Modaevi — Luxury Bridal Couture",
    template: "%s · Gökden Modaevi",
  },
  description:
    "1986'dan bu yana Konya'da el yapımı gelinlik koleksiyonları. Tenzile Keskin'in 38 yıllık ustalığıyla en özel gününüzü ebedileştiriyoruz.",
  keywords: [
    "gelinlik",
    "gelinlik konya",
    "gökden modaevi",
    "tenzile keskin",
    "bridal gown",
    "wedding dress",
    "haute couture",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    siteName: "Gökden Modaevi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
