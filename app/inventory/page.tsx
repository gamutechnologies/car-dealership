import HeroSection from "@/components/inventory/hero";
import OurCollection from "@/components/inventory/our-collection";

export default function InventoryPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/* Our Collection */}
      <OurCollection />
    </main>
  );
}
