import Image from "next/image";

export default function OurFuture() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="min-w-7xl flex flex-col">
        <div className="flex flex-row justify-between items-start mb-12">
          <h2 className="text-5xl font-semibold text-white max-w-3xl">
            Shaping the Future of
            <br />
            Automotive Luxury
          </h2>

          <p className="text-sm text-zinc-300 max-w-md leading-relaxed pt-10">
            To redefine premium car buying in the digital age. We envision a
            future where acquiring a luxury vehicle is as smooth and
            sophisticated as the cars we offer, setting new standards in the
            automotive industry.
          </p>
        </div>

        <div className="relative w-7xl h-120 rounded-2xl overflow-hidden">
          <Image
            src="/images/our-future.avif"
            alt="Our Future"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
