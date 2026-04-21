import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
    {/* Hero Section*/}
    <section className="min-h-full w-full relative bg-linear-to-b from-black from-15% via-gray-400/60 via-50% to-black to-85%">
      <div className="flex flex-col flex-1 items-center justify-center text-center gap-10">
        <h1 className="font-extrabold text-[242px] mt-10">LUXURY CAR</h1>
        <Image
          src="/hero-image.png"
          width={4096}
          height={2048}
          alt="Picture of the author"
          className="z-2 "
        />
      </div>
    </section>
    </main>
  );
}
