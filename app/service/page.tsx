import HeroSection from "@/components/service/hero";
import ServicesSection from "@/components/service/services";

export default function ServicePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />
    </main>
  );
}
