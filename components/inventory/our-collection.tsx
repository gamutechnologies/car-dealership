import Image from "next/image";
import { ChevronDownIcon, SearchIcon, MoveUpRightIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const carCard = [
  {
    id: 1,
    name: "Lamborghini Revuelto",
    year: "2024",
    price: "$620,000",
    color: "Frozen Silver",
    colorHex: "#e5e7eb",
    transmission: "Automatic",
    image: "/images/lamborghini-revuelto.png",
  },
  {
    id: 2,
    name: "Ferrari 296 GTB",
    year: "2024",
    price: "$370,000",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/ferrari-296-gtb-black.png",
  },
  {
    id: 3,
    name: "Rolls-Royce Spectre",
    year: "2024",
    price: "$465,000",
    color: "Frozen Silver",
    colorHex: "#e5e7eb",
    transmission: "Automatic",
    image: "/images/rolls-royce-spectre.jpg",
  },
  {
    id: 4,
    name: "McLaren 750S",
    year: "2024",
    price: "$355,000",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/mclaren-750s.jpg",
  },
  {
    id: 5,
    name: "Bently Continental GT Speed",
    year: "2024",
    price: "$310,000",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/bently-continental-gt-speed.jpg",
  },
  {
    id: 6,
    name: "Porsche 911 Turbo S",
    year: "2024",
    price: "$232,000",
    color: "Python Green",
    colorHex: "#22c55e",
    transmission: "Automatic",
    image: "/images/porsche-911-turbo-s.jpg",
  },
];

export default function OurCollection() {
  return (
    <section className="min-h-screen bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex gap-6 flex-row items-start justify-between">
          <h2 className="text-6xl font-bold text-white">Our Collection</h2>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2">
            <div className="relative">
              <select className="h-9 appearance-none rounded-full border border-white/10 bg-transparent pl-4 pr-10 text-sm text-zinc-400 outline-none">
                <option value="all" className="text-black">
                  Filter By Brands
                </option>
                <option value="Lamborghini" className="text-black">
                  Lamborghini
                </option>
                <option value="Ferrari" className="text-black">
                  Ferrari
                </option>
                <option value="Rolls-Royce" className="text-black">
                  Rolls-Royce
                </option>
                <option value="McLaren" className="text-black">
                  McLaren
                </option>
                <option value="Bentley" className="text-black">
                  Bentley
                </option>
                <option value="Porsche" className="text-black">
                  Porsche
                </option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-300" />
            </div>
            <div className="relative">
              <select className="h-9 appearance-none rounded-full border border-white/10 bg-transparent pl-4 pr-10 text-sm text-zinc-400 outline-none">
                <option value="default" className="text-black">
                  Sort By Price
                </option>
                <option value="asc" className="text-black">
                  Low to High
                </option>
                <option value="desc" className="text-black">
                  High to Low
                </option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-300" />
            </div>

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-200"
            >
              <SearchIcon className="size-4" />
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-3">
          {carCard.map((car) => (
            <Card
              key={car.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-linear-to-b from-black from-15% via-gray-400/30 via-50% to-black to-110% bg-white/5 p-6 min-h-112"
            >
              <div className="absolute inset-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative z-10 mb-4 flex items-center justify-between text-xs">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-zinc-300 backdrop-blur-md">
                  <span
                    className="size-3 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: car.colorHex }}
                  />
                  {car.color}
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-zinc-300 backdrop-blur-md">
                  {car.transmission}
                </div>
              </div>
              <div className="relative z-10 mt-auto flex items-end justify-between">
                <div>
                  <div className="mb-2 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 backdrop-blur-md bg-black/20">
                    {car.year}
                  </div>
                  <h3 className="mb-1 font-medium tracking-tight text-white text-2xl w-2/3 drop-shadow-md">
                    {car.name} {car.year}
                  </h3>
                  <p className="font-light text-zinc-200 drop-shadow-md">
                    {car.price}
                  </p>
                </div>
                <button
                  type="button"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-colors backdrop-blur-md bg-black/20"
                >
                  <MoveUpRightIcon className="size-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
