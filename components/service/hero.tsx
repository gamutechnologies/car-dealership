import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-10 bg-linear-to-b from-black from-15% via-gray-400/30 via-50% to-black to-110%">
      <h1 className="absolute top-0 font-extrabold text-[270px] z-0">
        OUR SERVICE
      </h1>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center mt-20">
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src="/service-hero.png"
            width={3600}
            height={1800}
            alt="Car Image"
            className="w-full h-auto"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center text-center mt-16">
          <h1 className="text-7xl font-semibold text-white mb-6 drop-shadow-lg">
            LuxAuto Service
          </h1>
          <p className="max-w-3xl text-zinc-300 text-base font-light mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis esse, odio similique obcaecati illum vitae quam sequi
            excepturi, dolores neque delectus aliquam harum fuga, officia porro
            corrupti ea facilis temporibus.
          </p>
          <ArrowDownIcon
            size={32}
            className="text-yellow-400 mt-2 font-light"
          />
        </div>
      </div>
    </section>
  );
}
