import Image from "next/image";

export default function OurMission() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="min-w-7xl flex flex-col relative">
        <div className="relative z-20 flex flex-col items-center mt-30">
          <h2 className="text-6xl font-semibold text-white text-left mb-0 gap-5">
            Our Mission
            <br />
            Deliver Unmatched Luxury
          </h2>
        </div>

        <div className="flex flex-row items-start justify-between relative -top-30 z-10">
          <div className="relative w-150 h-120">
            <Image
              src="/images/our-mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col pt-28 max-w-lg relative right-30 top-5">
            <h2 className="text-6xl font-semibold text-white">Performance</h2>

            <p className="text-2xl text-zinc-200 mb-6">
              and Exceptional Experiences
            </p>

            <p className="text-sm text-zinc-300">
              To deliver a premium, transparent car trading experience that
              exceeds expectations. We believe luxury is not an option - it’s a
              standard. Every interaction, every vehicle, and every transaction
              reflects our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
