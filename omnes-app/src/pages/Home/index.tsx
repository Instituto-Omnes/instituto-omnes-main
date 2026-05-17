import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020B2D] flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}
