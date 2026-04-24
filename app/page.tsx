import HeroSection from "@/components/home-page/hero";
import OurExclusiveSection from "@/components/home-page/our-exclusive";
import WhyChooseSection from "@/components/home-page/why-choose";
import BrowseCarsSection from "@/components/home-page/browse-cars";
import TestimonialsSection from "@/components/home-page/testimonials";
import FAQSection from "@/components/home-page/faq";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/*Our Exclusive Section */}
      <OurExclusiveSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Browse Cars Section */}
      <BrowseCarsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
}
