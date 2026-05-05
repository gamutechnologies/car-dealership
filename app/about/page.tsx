import HeroSection from "@/components/about/hero";
import OurStory from "@/components/about/our-story";
import OurMission from "@/components/about/our-mission";
import OurFuture from "@/components/about/our-future";
import Experts from "@/components/about/experts";
import BrowseCarsSection from "@/components/about/browse-cars";

export default function About() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/* Our Story Section */}
      <OurStory />

      {/* Our Mission Section */}
      <OurMission />

      {/* Our Future Section */}
      <OurFuture />

      {/* Experts Section */}
      <Experts />

      {/* Browse Cars Section */}
      <BrowseCarsSection />
    </main>
  );
}
