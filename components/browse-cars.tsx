import { MoveUpRightIcon } from "lucide-react";

export default function BrowseCarsSection() {
  return (
    <section className="min-h-screen flex items-start justify-center relative overflow-hidden bg-black bg-[url(/images/browse-cars-bg.png)] bg-cover bg-center">
      <div className="mt-28">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-zinc-300 font-bold mb-4">Drive Beyond Expectations.</h2>
          <div className="max-w-2xl items-center justify-center text-center mb-4">
            <p className="text-md text-zinc-400 font-medium">
              Embrace the art of refined peformance lot LuxeAuto guide you to
              your perfect car - with world-class service and unmatched
              sophistication.
            </p>
          </div>
          <div>
            <button className="bg-yellow-500 border border-black rounded-full text-black text-md font-semibold px-6 py-3 align-middle flex items-center gap-2">
              Browse Cars <MoveUpRightIcon width={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
