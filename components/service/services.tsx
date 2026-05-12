import Image from "next/image";
import { WrenchIcon } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-black overflow-hidden py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Services
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10">
              <div className="aspect-square rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center p-4">
                <WrenchIcon
                  size={32}
                  strokeWidth={1}
                  className="text-white mb-3"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  1st
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200">Service</p>
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center p-4">
                <WrenchIcon
                  size={32}
                  strokeWidth={1}
                  className="text-white mb-3"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  2nd
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200">Service</p>
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center p-4">
                <WrenchIcon
                  size={32}
                  strokeWidth={1}
                  className="text-white mb-3"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  3rd
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200">Service</p>
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center p-4">
                <WrenchIcon
                  size={32}
                  strokeWidth={1}
                  className="text-white mb-3"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  4th
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200">Service</p>
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center p-4">
                <WrenchIcon
                  size={32}
                  strokeWidth={1}
                  className="text-white mb-3"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  5th
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200">Service</p>
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center p-4">
                <WrenchIcon
                  size={32}
                  strokeWidth={1}
                  className="text-white mb-3"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  6th
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200">Service</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-75 sm:h-100 lg:h-150 rounded-3xl overflow-hidden">
              <Image
                src="/images/our-service.webp"
                alt="Our Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
