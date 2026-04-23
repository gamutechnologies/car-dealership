import HeroSection from "@/components/hero";
import WhyChooseSection from "@/components/why-choose";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/* Why Choose Section */}
      <WhyChooseSection />
    </main>
  );
}
