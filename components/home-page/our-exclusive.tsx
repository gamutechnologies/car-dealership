"use client";

import React from "react";
import Image from "next/image";
import { MoveUpRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const carCard = [
  {
    id: 1,
    name: "Maclaren Artura",
    year: "2024",
    price: "$225,000",
    color: "Sicilian Yellow",
    colorHex: "#fbbf24",
    transmission: "Automatic",
    image: "/images/maclaren-artura.webp",
  },
  {
    id: 2,
    name: "Lamborghini Huracan",
    year: "2024",
    price: "$249,865",
    color: "Daytona Gray",
    colorHex: "#5a5a5a",
    transmission: "Automatic",
    image: "/images/lamborghini-huracan.png",
  },
  {
    id: 3,
    name: "Ferrari 296 GTB",
    year: "2024",
    price: "$370,000",
    color: "Red",
    colorHex: "#ef4444",
    transmission: "Automatic",
    image: "/images/ferrari-296-gtb.jpg",
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    year: "2024",
    price: "$110,000",
    color: "Frozen Silver",
    colorHex: "#e5e7eb",
    transmission: "Automatic",
    image: "/images/mercedes-benz-s-class.jpg",
  },
  {
    id: 5,
    name: "BMW 7 Series M760Li",
    year: "2024",
    price: "$118,500",
    color: "Frozen Black",
    colorHex: "#18181b",
    transmission: "Automatic",
    image: "/images/bmw-7-series-m760li.jpg",
  },
];

export default function OurExclusiveSection() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="min-h-screen bg-black overflow-hidden py-20 flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-2 mb-12">
        <h2 className="text-5xl text-zinc-100 font-semibold mb-2">
          Explore Our <br />
          Exclusive Collections
        </h2>
        <p className="text-sm text-zinc-400 font-medium">
          Handpicked excellence from our premium inventory
        </p>
      </div>
      <div className="w-full mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-20">
            {carCard.map((car, index) => {
              const isActive = current === index;

              return (
                <CarouselItem key={car.id} className="basis-[25%]">
                  <div className="py-12">
                    <div
                      className={`relative transition-transform duration-500 ease-in-out ${
                        isActive ? "-translate-y-20" : "translate-y-0"
                      }`}
                    >
                      <div className="relative w-full aspect-4/5 rounded-4xl overflow-hidden border border-zinc-800 shadow-2xl">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          className="object-cover pointer-events-none"
                          priority={isActive}
                        />
                        <div className="absolute top-5 left-5 right-5 z-20 flex justify-between items-center">
                          <div className="flex items-center gap-2 bg-zinc-800/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                            <div
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: car.colorHex }}
                            />
                            <span className="text-xs font-medium text-zinc-100">
                              {car.color}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-zinc-800/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                            <span className="text-xs font-medium text-zinc-100">
                              {car.transmission}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`absolute bottom-6 left-6 z-20 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="flex items-center gap-2 bg-zinc-800/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                            <span className="text-xs font-medium text-zinc-100">
                              {car.year}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none ${
                            isActive ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <div className="flex items-center gap-2 bg-zinc-800/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 w-max mb-2">
                            <span className="text-xs font-medium text-zinc-100">
                              {car.year}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold text-white mb-3 max-w-2/5">
                            {car.name} {car.year}
                          </h3>

                          <div className="flex items-center justify-between">
                            <p className="text-lg font-medium text-zinc-300">
                              {car.price}
                            </p>
                            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                              <MoveUpRightIcon
                                size={16}
                                className="text-zinc-100 font-bold"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`absolute top-full left-0 w-full pt-5 px-2 transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {car.name} {car.year}
                            </h3>
                            <p className="text-md font-semibold text-zinc-400">
                              {car.price}
                            </p>
                          </div>
                          <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                            <MoveUpRightIcon
                              size={16}
                              className="text-zinc-100 font-extrabold"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 gap-8">
        <div className="flex items-center gap-2">
          {carCard.map((car, index) => (
            <div
              key={index}
              className={`h-0.5 transition-all duration-300 rounded-full ${
                current === index ? "w-8 bg-zinc-200" : "w-4 bg-zinc-700"
              }`}
            />
          ))}
        </div>

        <button className="group border border-yellow-500 hover:bg-yellow-500/10 transition-colors rounded-full text-zinc-200 px-6 py-2.5 flex items-center gap-2 text-sm font-medium">
          View All Cars
          <MoveUpRightIcon color="#eab308" size={16} />
        </button>
      </div>
    </section>
  );
}
