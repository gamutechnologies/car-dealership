import { BadgeCheckIcon } from "lucide-react";

const features = [
  {
    id: 1,
    title:
      "Experience the Confidence of Our Fully Certified Pre-Owned Vehicles",
    highlight: "with Unmatched Quality, Reliability, and Luxury Assurance",
    desc: "Every luxury vehicle is thoroughly inspected and verified to ensure exceptional quality, premium performance, and total peace of mind.",
  },
  {
    id: 2,
    title: "Experience Seamless Worldwide Delivery, ",
    highlight:
      "Bringing Your Dream Luxury Vehicle Directly to Your Doorstep Anywhere Globally",
    desc: "From city streets to global destinations, we deliver your luxury vehicle securely and efficiently wherever you are.",
  },
  {
    id: 3,
    title: "Experience Our Exclusive Concierge Service, ",
    highlight:
      "Offering Personalized Luxury Assistance Tailored To Every Client’s Unique Needs",
    desc: "From sourcing to support, every detail is handled with precision to create a world-class ownership journey.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/why-choose-bg.webp')] bg-cover bg-center bg-no-repeat" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-start">
          <div className="flex flex-col justify-start text-left pt-4 lg:pt-0">
            <div className="max-w-xl">
              <h2 className="text-white font-bold leading-none">
                <span className="block text-4xl sm:text-6xl">Why Choose</span>
                <span className="block text-4xl sm:text-6xl mt-2 sm:mt-3 lg:mt-2 pl-8 sm:pl-48">
                  LuxeAuto for
                </span>
                <span className="block text-4xl sm:text-6xl mt-2 sm:mt-3 lg:mt-2">
                  Ultimate Luxury
                </span>
              </h2>
              <div className="mt-2 max-w-xs sm:max-w-xl pl-10 sm:pl-48">
                <p className="text-xs sm:text-sm text-zinc-300/80 leading-relaxed font-light">
                  Experience elite craftsmanship, powerful prestige, and
                  cutting-edge performance - redefining luxury car ownership
                  with unmatched excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-6 shadow-lg"
              >
                <BadgeCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-6" />
                <h3 className="text-white text-lg sm:text-[1.3rem] font-semibold leading-snug">
                  {feature.title}{" "}
                  <span className="font-light text-zinc-300">
                    {feature.highlight}
                  </span>
                </h3>
                <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
