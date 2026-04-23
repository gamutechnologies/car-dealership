import { BadgeCheckIcon } from "lucide-react";

const MenuItems = [{ title: "/", subtitle: "" }];

export default function WhyChooseSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black bg-[url(/images/why-choose-bg.png)] bg-cover bg-center">
      {/* <section className="bg-black bg-[url(/images/why-choose-bg.png)] bg-cover bg-center" "bg-linear-to-r from-black to-blue-300"> */}
      <div className="max-w-10/12 flex flex-col flex-1 grid-cols-2 gap-10 relative">
        <div className="flex absolute top-2 left-40">
          <div className="text-5xl font-bold top-0 left-0 w-full h-full">
            <div className="flex relative">Why Choose</div>
            <div className="flex relative left-44">LuxeAuto for</div>
            <div className="flex relative">Ultimate Luxury</div>
            <div className="max-w-2xs mt-6 flex relative left-72">
              <p className="text-xs font-medium text-zinc-400">
                Experiencing unmatched quality, performance, and luxury - every
                detail is verified to diliver a flawless driving experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end mr-48">
          <div className="bg-transparent backdrop-blur-sm block max-w-lg p-4 border border-default rounded-4xl shadow-xs">
            <BadgeCheckIcon className="w-12 h-12 text-zinc-100 mb-12" />
            <h5 className="mb-2 text-left text-[1.3rem] text-zinc-200 font-semibold">
              Experience the confidence of Our Fully Certified Pre-Owned
              Vehicles
              <span className="font-light text-zinc-300">
                with Unmatched Quality, Reliability, and Luxury Assurance
              </span>
            </h5>
            <p className="mb-3 text-left text-xs text-zinc-400">
              Experiencing unmatched quality, performance, and luxury - every
              detail is verified to diliver a flawless driving experience.
            </p>
          </div>

          <div className="bg-transparent backdrop-blur-sm block max-w-lg p-4 border border-default rounded-4xl shadow-xs">
            <BadgeCheckIcon className="w-12 h-12 text-zinc-100 mb-12" />
            <h5 className="mb-2 text-left text-lg text-zinc-200 font-semibold">
              Experience the confidence of Our Fully Certified Pre-Owned
              Vehicles{" "}
              <span className="font-light text-zinc-300">
                with Unmatched Quality, Reliability, and Luxury Assurance
              </span>
            </h5>
            <p className="mb-3 text-left text-xs text-zinc-400">
              Experiencing unmatched quality, performance, and luxury - every
              detail is verified to diliver a flawless driving experience.
            </p>
          </div>

          <div className="bg-transparent backdrop-blur-sm block max-w-lg p-4 border border-default rounded-4xl shadow-xs">
            <BadgeCheckIcon className="w-12 h-12 text-zinc-100 mb-12" />
            <h5 className="mb-2 text-left text-lg text-zinc-200 font-semibold">
              Experience the confidence of Our Fully Certified Pre-Owned
              Vehicles{" "}
              <span className="font-light text-zinc-300">
                with Unmatched Quality, Reliability, and Luxury Assurance
              </span>
            </h5>
            <p className="mb-3 text-left text-xs text-zinc-400">
              Experiencing unmatched quality, performance, and luxury - every
              detail is verified to diliver a flawless driving experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
