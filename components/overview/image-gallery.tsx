import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";

export default function ImageGallerySection() {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-end relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-2/3">
        <Image
          src="/images/car-black.webp"
          alt="Ferrari 296 GTB"
          fill
          className="object-cover"
        />
      </div>
      <div className="min-w-7xl flex flex-col relative z-10">
        <div className="flex flex-row justify-between gap-4 mb-8">
          <div className="relative w-52 h-28 rounded-2xl overflow-hidden border border-zinc-700">
            <Image
              src="/images/car-blue.webp"
              alt="Blue Car"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-52 h-28 rounded-2xl overflow-hidden border border-zinc-700">
            <Image
              src="/images/car-red.webp"
              alt="Red Car"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-52 h-28 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-lg shadow-yellow-500/20">
            <Image
              src="/images/car-black.webp"
              alt="Black Car"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-52 h-28 rounded-2xl overflow-hidden border border-zinc-700">
            <Image
              src="/images/car-purple.webp"
              alt="Purple Car"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-52 h-28 rounded-2xl overflow-hidden border border-zinc-700">
            <Image
              src="/images/car-white.webp"
              alt="White Car"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-52 h-28 rounded-2xl overflow-hidden border border-zinc-700">
            <Image
              src="/images/car-orange.webp"
              alt="Orange Car"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 px-6 py-4 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-4xl font-heading text-white mb-4">
              Ferrari 296 GTB 2024
            </h2>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black z-30">
                  <Image
                    src="/images/joseph-vijay.webp"
                    alt="Joseph Vijay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black -ml-3 z-20">
                  <Image
                    src="/images/ajith-kumar.webp"
                    alt="Ajith Kumar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black -ml-3 z-10">
                  <Image
                    src="/images/osama-bin-laden.webp"
                    alt="Osama bin Laden"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg font-medium text-white">20+</p>
                <p className="text-sm text-zinc-400">
                  Trusted to use by millions users over 140 countries
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-4xl font-heading text-white mb-4">$620,000</h3>
            <button className="bg-yellow-500 text-black text-base font-medium px-8 py-2 rounded-full flex flex-row items-center gap-2">
              Book Now
              <ArrowUpRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
