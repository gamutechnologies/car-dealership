import Image from "next/image";
import { MoveUpRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-b from-black from-15% via-gray-400/60 via-50% to-black to-110%">
      <div className="w-full flex flex-col flex-1 items-center justify-center text-center gap-10 relative">
        <h1 className="absolute -top-[18%] font-extrabold text-[242px] mt-10">
          LUXURY CAR
        </h1>
        <div className="z-10 relative top-6">
          <Image
            src="/hero-image.png"
            width={4096}
            height={2048}
            alt="Car Image"
          />
        </div>
        <div className="text-7xl font-bold absolute -bottom-[20%] left-[5%] w-[35%] text-left">
          Drive the Legacy of Luxury
        </div>
        <div className="text-lg absolute -bottom-[20%] right-[5%] w-[26%] text-left">
          <p className="font-light">
            Discover the world's most prestigous automobiles, crafted for those
            who demand elegance, performance, and distinction in every drive.
          </p>
          <div className="flex grid-cols-2 gap-4 mt-6">
          <button className="bg-yellow-500 border border-black rounded-full text-black px-3 py-2 align-middle flex items-center gap-2">
            Browse Collection <MoveUpRightIcon />
          </button>
            <button className="bg-transparent border border-yellow-500 rounded-full text-white px-3 py-2 align-middle flex items-center gap-2">
            Book Test Drive
            <MoveUpRightIcon color="#eab308"/>
          </button></div>
        </div>
      </div>
    </section>
  );
}
