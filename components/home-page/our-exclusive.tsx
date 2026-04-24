import { MoveUpRightIcon } from "lucide-react";


export default function OurExclusiveSection() {
  return (
    <section className="min-h-screen bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center gap-2 mb-10">
        <div className="text-center">
          <h2 className="text-5xl text-zinc-300 font-semibold mb-2">
            Explore Our <br/>Exclusive Collections
          </h2>
        </div>
        <div className="text-center">
          <p className="text-[15px] text-zinc-400 font-bold">Handpicked excellence from our premium inventory</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        Car Cards
      </div>
      <div className="flex items-end justify-center mt-10">
            <button className="bg-transparent border border-yellow-500 rounded-full text-white px-5 py-2 align-middle flex items-center gap-2">
              View All Cars
              <MoveUpRightIcon color="#eab308" size={16} />
            </button>
      </div>
    </section>
  );
}


