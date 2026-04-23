import HeroSection from "@/components/hero";
import WhyChooseSection from "@/components/why-choose";
import FAQSection from "@/components/faq";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
}
