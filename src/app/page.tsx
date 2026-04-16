import HeroSection       from "@/components/organisms/HeroSection";
import AboutSection      from "@/components/organisms/AboutSection";
import PromoVideoSection from "@/components/organisms/PromoVideoSection";
import CollectionSection from "@/components/organisms/CollectionSection";

/**
 * Homepage — Server Component.
 * Navbar and Footer are rendered in layout.tsx.
 */
export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <PromoVideoSection />
      <CollectionSection />
    </main>
  );
}
