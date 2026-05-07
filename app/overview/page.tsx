import ImageGallerySection from "@/components/overview/image-gallery";
import SpecificationsSection from "@/components/overview/specifications";

export default function OverviewPage() {
  return (
    <main className="bg-black text-white">
      {/* Image Gallery Section */}
      <ImageGallerySection />

      {/* Specifications Section */}
      <SpecificationsSection />
    </main>
  );
}
