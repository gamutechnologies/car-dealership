import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-b from-black from-15% via-gray-400/60 via-50% to-black to-110%">
      <div className="w-full flex flex-col flex-1 items-center justify-center text-center gap-10 relative">
        <h1 className="absolute -top-[15%] font-extrabold text-[242px] mt-10">
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
        <div className="text-7xl font-bold flex items-start">
          Drive the Legacy of Luxury
        </div>
      </div>
    </section>
  );
}
