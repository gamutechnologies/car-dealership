import Image from "next/image";
import { GlobeIcon, BadgeCheckIcon } from "lucide-react";

export default function OurStory() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black bg-[url(/images/our-story-bg.jpg)] bg-cover bg-center overflow-hidden">
      <div className="min-w-7xl flex flex-col relative">
        <div className="flex flex-row justify-between items-start mb-16">
          <div className="max-w-4xl flex flex-col">
            <h2 className="text-5xl font-semibold text-white mb-10">
              Crafting the Future
              <br />
              of Luxury
            </h2>

            <div className="flex flex-row justify-between items-start">
              <div className="w-xs">
                <p className="text-sm text-zinc-300">
                  Redefining the art of luxury automotive ownership through
                  trust, craftsmanship, and global excellence.
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold text-white">Our Story</h3>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-sm text-zinc-300 mb-6">
              Founded in 2022, LuxeAuto was born from a passion for exceptional
              automobiles and a vision to create the world’s most trusted luxury
              car marketplace. We reimagined the need for a platform that
              connects discerning buyers with verified dealers offering the
              finest vehicles.
            </p>

            <p className="text-sm text-zinc-300">
              Today, we’re proud to serve clients across 15 countries,
              facilitating transactions worth over $200 million and building
              lasting relationships within the luxury automotive community.
            </p>
          </div>
        </div>

        <div className="relative w-full h-125">
          <div className="absolute bottom-12 left-0 right-0 flex flex-row justify-center items-end">
            <div className="w-40 h-50 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center relative -top-15">
              <GlobeIcon
                size={36}
                strokeWidth={1}
                className="text-white mb-8"
              />
              <h4 className="text-2xl font-semibold text-white mb-4">15+</h4>
              <p className="text-xs text-zinc-200">
                Our Presence Across
                <br />
                Global Markets
              </p>
            </div>

            <div className="w-40 h-50 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
              <BadgeCheckIcon
                size={36}
                strokeWidth={1}
                className="text-white mb-8"
              />
              <h4 className="text-2xl font-semibold text-white mb-4">120+</h4>
              <p className="text-xs text-zinc-200">
                Trusted Network of
                <br />
                Verified Dealers
              </p>
            </div>

            <div className="w-50" />

            <div className="w-40 h-50 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center mr-8">
              <BadgeCheckIcon
                size={36}
                strokeWidth={1}
                className="text-white mb-8"
              />
              <h4 className="text-2xl font-semibold text-white mb-4">500+</h4>
              <p className="text-xs text-zinc-200">
                Luxury Cars Successfully
                <br />
                Sold Worldwide
              </p>
            </div>

            <div className="w-40 h-50 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center relative -top-15">
              <BadgeCheckIcon
                size={36}
                strokeWidth={1}
                className="text-white mb-8"
              />
              <h4 className="text-2xl font-semibold text-white mb-4">$200M+</h4>
              <p className="text-xs text-zinc-200">
                Seamless Luxury Car
                <br />
                Transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
