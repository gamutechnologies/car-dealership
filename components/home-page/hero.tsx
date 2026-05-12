import Image from "next/image";
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-black text-white w-full min-h-[75vh] md:min-h-screen flex flex-col relative pt-16 md:pt-0">
      <div className="w-full relative mt-16 md:mt-0">
        <Image
          src="/home-bg.webp"
          alt="Luxury Car"
          width={4096}
          height={2048}
          className="w-full h-auto object-contain"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-10 md:h-48 lg:h-64 bg-linear-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="w-full flex-1 bg-black flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-start md:items-end pb-16 gap-8 md:gap-8 mt-4 md:-mt-10 lg:-mt-24 z-10 relative">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Drive the Legacy
              <br />
              of Luxury
            </h2>
          </div>

          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <p className="text-gray-300 font-light text-sm md:text-base">
              Discover the world's most prestigous automobiles, crafted for
              those who demand elegance, performance, and distinction in every
              drive.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/inventory">
                <button className="bg-yellow-500 border border-yellow-500 rounded-full text-black px-4 md:px-6 py-2.5 md:py-3 align-middle flex items-center gap-2 font-medium whitespace-nowrap text-sm md:text-base">
                  Browse Collection <MoveUpRightIcon size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent border border-yellow-500 rounded-full text-white px-4 md:px-6 py-2.5 md:py-3 align-middle flex items-center gap-2 font-medium whitespace-nowrap text-sm md:text-base">
                  Book Test Drive
                  <MoveUpRightIcon color="#eab308" size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
