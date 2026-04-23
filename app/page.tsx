import HeroSection from "@/components/hero";
import WhyChooseSection from "@/components/why-choose";
import BrowseCarsSection from "@/components/browse-cars";
import FAQSection from "@/components/faq";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/*Our Exclusive Section */}

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Browse Cars Section */}
      <BrowseCarsSection />

      {/* Testimonials Section */}

      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
}
