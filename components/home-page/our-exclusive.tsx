import * as React from "react";
import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carCard = [
  {
    id: 1,
    name: "Lamborghini Revuelto",
    year: "2024",
    price: "$620,000",
    color: "Frozen Silver",
    colorHex: "#e5e7eb",
    transmission: "Automatic",
    image: "/images/lamborghini-revuelto.webp",
  },
  {
    id: 2,
    name: "Ferrari 296 GTB",
    year: "2024",
    price: "$370,000",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/ferrari-296-gtb-black.webp",
  },
  {
    id: 3,
    name: "Rolls-Royce Spectre",
    year: "2024",
    price: "$465,000",
    color: "Frozen Silver",
    colorHex: "#e5e7eb",
    transmission: "Automatic",
    image: "/images/rolls-royce-spectre.webp",
  },
  {
    id: 4,
    name: "McLaren 750S",
    year: "2024",
    price: "$355,000",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/mclaren-750s.webp",
  },
  {
    id: 5,
    name: "Bently Continental GT Speed",
    year: "2024",
    price: "$310,000",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/bently-continental-gt-speed.webp",
  },
  {
    id: 6,
    name: "Porsche 911 Turbo S",
    year: "2024",
    price: "$232,000",
    color: "Python Green",
    colorHex: "#22c55e",
    transmission: "Automatic",
    image: "/images/porsche-911-turbo-s.webp",
  },
];

export default function OurExclusiveSection() {
  return (
    <section className="min-h-screen flex items-start justify-center relative overflow-hidden bg-black">
      <div className="max-w-7xl items-center justify-center flex flex-col gap-6 px-6 py-20">
        <div className="max-w-2xl text-center">
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Explore Our <br /> Exclusive Collections
          </h2>
          <p className="mt-4 text-zinc-300 text-sm">
            Handpicked excellence from our premium inventory
          </p>
        </div>
      </div>
      <div className="absolute justify-center items-center flex w-full h-full top-0 left-0">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full min-w-full sm:max-w-xs md:max-w-sm"
        >
          <CarouselContent>
            {carCard.map((car) => (
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card
                    key={car.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-linear-to-b from-black from-15% via-gray-400/30 via-50% to-black to-110% bg-white/5 p-6 min-h-112"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={400}
                        height={300}
                        className="object-cover object-center mt-20"
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
                      <Link href="/overview">
                        <button
                          type="button"
                          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-colors backdrop-blur-md bg-black/20"
                        >
                          <MoveUpRightIcon className="size-4" />
                        </button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-10 flex items-center justify-center gap-2 pb-6">
          <Link href="/inventory">
            <button className="bg-transparent border border-yellow-500 rounded-full text-white px-4 py-2 align-middle flex items-center gap-2">
              View All Cars <MoveUpRightIcon size={18} color="#eab308" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
