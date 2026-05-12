import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-black text-white w-full min-h-[75vh] md:min-h-screen flex flex-col relative pt-16 md:pt-0">
      <div className="w-full relative mt-16 md:mt-8">
        <Image
          src="/service-bg.webp"
          alt="Service Hero"
          width={4096}
          height={2048}
          className="w-full h-auto object-contain"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-10 md:h-48 lg:h-64 bg-linear-to-t from-black via-black/80 to-transparent" />
      </div>
      <div className="w-full flex-1 bg-black flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-center text-center pb-16 gap-6 md:gap-8 mt-4 md:-mt-10 lg:-mt-54 z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-2 drop-shadow-lg">
            LuxAuto Service
          </h1>
          <p className="max-w-3xl text-gray-300 text-sm md:text-base font-light mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis esse, odio similique obcaecati illum vitae quam sequi
            excepturi, dolores neque delectus aliquam harum fuga, officia porro
            corrupti ea facilis temporibus.
          </p>
          <ArrowDownIcon size={32} className="text-yellow-400 font-light" />
        </div>
      </div>
    </section>
  );
}
