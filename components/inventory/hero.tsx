import Image from "next/image";
import { MoveUpRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-b from-black from-15% via-gray-400/30 via-50% to-black to-110%">
      <div className="w-full min-w-7xl mx-auto flex flex-col items-center justify-center relative">
        <h1 className="absolute -top-20 text-[175px] font-extrabold text-white">
          OUR COLLECTION
        </h1>
        <div className="relative z-10 flex justify-center items-center w-full">
          <Image
            src="/hero-image.png"
            width={2100}
            height={1400}
            alt="Car Image"
          />
        </div>
        <div className="absolute -bottom-40 w-full flex flex-row justify-between items-end px-16 pb-12 z-20">
          <div className="text-7xl font-bold text-white leading-tight max-w-[40%]">
            Engineering Luxury Refined
          </div>
          <div className="text-lg text-gray-200 max-w-[28%] text-right">
            <p className="font-light">
              Browse our refined inventory of elite automobiles, each
              meticulously verified for quality, authencity, and unmatched
              sophestication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
