export default function SpecificationsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black bg-[url(/images/specification-bg.webp)] bg-cover bg-center">
      <div className="min-w-7xl flex flex-col justify-between h-screen py-8">
        <div className="w-1/3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Key Specifications
          </h2>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 text-white">
            <div>
              <p className="text-lg mb-3">↗ Engine</p>
              <p className="text-xs text-zinc-300">
                3.0L Twin-Turbo V6 + Electric Motor
              </p>
            </div>
            <div>
              <p className="text-lg mb-3">↗ Torque</p>
              <p className="text-xs text-zinc-300">740 Nm</p>
            </div>
            <div>
              <p className="text-lg mb-3">↗ Power</p>
              <p className="text-xs text-zinc-300">830 hp (combined)</p>
            </div>
            <div>
              <p className="text-lg mb-3">↗ Transmission</p>
              <p className="text-xs text-zinc-300">8-Speed DCT</p>
            </div>
            <div>
              <p className="text-lg mb-3">↗ 0-100 km/h</p>
              <p className="text-xs text-zinc-300">~2.9 sec</p>
            </div>
            <div>
              <p className="text-lg mb-3">↗ Top Speed</p>
              <p className="text-xs text-zinc-300">~330 km/h</p>
            </div>
          </div>
        </div>
        <div className="w-6xl rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 pt-10 px-8 ">
          <div className="flex flex-row items-start">
            <div className="w-25">
              <p className="text-base text-white">Overview</p>
            </div>

            <div className="flex-1">
              <p className="text-4xl leading-tight text-white font-light">
                The 2024 Ferrari 296 GTB is a hybrid V6 supercar delivering 830
                hp of breathtaking performance. With its sharp aerodynamics,
                electric boost,{" "}
                <span className="text-zinc-400">
                  and iconic Ferrari handling, it blends pure speed with modern
                  efficiency in a compact, beautifully engineered package.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
