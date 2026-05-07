import ContactFormSection from "@/components/contact/contact-form";
import VisitUsSection from "@/components/contact/visit-us";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Visit Us Section */}
      <VisitUsSection />
    </main>
  );
}
