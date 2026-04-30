import Image from "next/image";
import { MoveUpRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-b from-black from-15% via-gray-400/30 via-50% to-black to-110%">
      <div className="w-full flex flex-col flex-1 items-center justify-center text-center gap-10 relative">
        <h1 className="absolute -top-[18%] font-extrabold text-[200px] mt-10">
          OUR COLLECTION
        </h1>
        <div className="z-10 relative top-6">
          <Image
            src="/hero-image.png"
            width={4096}
            height={2048}
            alt="Car Image"
          />
        </div>
        <div className="text-7xl font-bold absolute -bottom-[20%] left-[5%] w-[37.5%] text-left">
          Engineering Luxury Refined
        </div>
        <div className="text-lg absolute -bottom-[20%] right-[5%] w-[26%] text-left">
          <p className="font-light">
            Browse our refined inventory of elite automobiles, each meticulously
            verified for quality, authencity, and unmatched sophestication.
          </p>
        </div>
      </div>
    </section>
  );
}
