import Image from "next/image";
import { ArrowUpRightIcon, ArrowUpLeftIcon } from "lucide-react";

export default function Experts() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="min-w-7xl flex flex-row justify-between items-end">
        <div className="flex flex-col">
          <div className="flex flex-row gap-10 mb-10">
            <div className="w-80 rounded-2xl bg-linear-to-b from-zinc-300/20 to-black backdrop-blur-md border border-zinc-300/10 p-4">
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/expert1.jpg"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-zinc-300 mb-3">Sales Director</p>

              <h3 className="text-3xl text-white font-semibold mb-2">
                Michael Chen
              </h3>

              <p className="text-sm text-zinc-300">
                Specialist in client relations
              </p>
            </div>

            <div className="w-80 rounded-2xl bg-linear-to-b from-zinc-300/20 to-black backdrop-blur-md border border-zinc-300/10 p-4">
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/expert2.jpg"
                  alt="Sara Ahmed"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-zinc-300 mb-3">Marketing Director</p>

              <h3 className="text-3xl text-white font-semibold mb-2">
                Sara Ahmed
              </h3>

              <p className="text-sm text-zinc-300">
                Expert in premium brand strategy
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-5xl font-semibold text-white leading-tight mb-8">
              The Experts Behind
              <br />
              Luxury Excellence
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-lg mb-10">
              Meet the passionate experts behind our brand, dedicated to
              delivering exceptional service, deep industry insight, and
              world-class luxury automotive experiences.
            </p>
          </div>
        </div>

        <div className="w-md rounded-2xl bg-linear-to-b from-zinc-300/20 to-black backdrop-blur-md border border-zinc-300/10 p-4 ml-1">
          <p className="text-xs text-zinc-300 mb-3">CEO & Founder</p>

          <h3 className="text-4xl text-white font-semibold mb-2">
            Adam Sheikh
          </h3>

          <p className="text-sm text-zinc-300 mb-6">
            20+ years in luxury automotive
          </p>

          <div className="relative w-full h-125 rounded-xl overflow-hidden">
            <Image
              src="/images/expert1.jpg"
              alt="Adam Sheikh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
