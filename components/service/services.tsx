import Image from "next/image";
import { WrenchIcon } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="min-w-7xl flex flex-col relative">
        <div className="flex flex-row items-start justify-between relative -top-30 z-10">
          <div className="flex flex-col pt-28 max-w-lg relative right-30 top-5">
            <h2 className="text-6xl font-semibold text-white mb-4">Services</h2>
            <p className="text-sm text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-col gap-7 mt-10">
              <div className="flex flex-row">
                <div className="w-30 h-30 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
                  <WrenchIcon
                    size={36}
                    strokeWidth={1}
                    className="text-white mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">1st</h4>
                  <p className="text-xs text-zinc-200">Service</p>
                </div>
                <div className="w-30 h-30 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
                  <WrenchIcon
                    size={36}
                    strokeWidth={1}
                    className="text-white mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">2nd</h4>
                  <p className="text-xs text-zinc-200">Service</p>
                </div>
                <div className="w-30 h-30 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
                  <WrenchIcon
                    size={36}
                    strokeWidth={1}
                    className="text-white mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">3rd</h4>
                  <p className="text-xs text-zinc-200">Service</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-30 h-30 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
                  <WrenchIcon
                    size={36}
                    strokeWidth={1}
                    className="text-white mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">4th</h4>
                  <p className="text-xs text-zinc-200">Service</p>
                </div>
                <div className="w-30 h-30 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
                  <WrenchIcon
                    size={36}
                    strokeWidth={1}
                    className="text-white mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">5th</h4>
                  <p className="text-xs text-zinc-200">Service</p>
                </div>
                <div className="w-30 h-30 rounded-3xl bg-zinc-300/10 backdrop-blur-sm border border-zinc-300/20 flex flex-col items-center justify-center text-center ml-8">
                  <WrenchIcon
                    size={36}
                    strokeWidth={1}
                    className="text-white mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">6th</h4>
                  <p className="text-xs text-zinc-200">Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-200 h-150">
            <Image
              src="/images/our-service.webp"
              alt="Our Service"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
