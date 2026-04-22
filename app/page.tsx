import React from "react";
import Image from "next/image";
import { MoveUpRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroSection from "@/components/hero";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section*/}
      <HeroSection />

      {/* Exclusive Collections Section*/}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div>
          <div className="text-center m-10">
            <h2 className="text-5xl font-bold">
              Explore our <br />
              Exclusive Collections
            </h2>
            <p className="text-sm font-medium">
              Handpicked excellence from our premium inventory
            </p>
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className="w-[200px] h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
                  <div className="w-full h-full p-1 absolute bg-zinc-800">
                    <div className="w-full h-full">
                      <Image
                        src="/m2.png"
                        width={800}
                        height={1200}
                        alt="BMW M2"
                      />
                    </div>
                  </div>

                  <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                    <div className="w- p-2 pt-3 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
                      <span className="text-xl font-medium">BMW</span>
                      <span className="text-xs text-gray-400">M2</span>
                      <div className="w-full mt-auto flex items-center justify-center">
                        <span className="text-xs text-gray-400">2024</span>
                      </div>
                    </div>
                    <div className="h-full pt-2 flex flex-col items-end text-white/50">
                      <span className="text-[10px] leading-[12px]">
                        2024
                      </span>
                      <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
                        <span className="font-serif text-white/80">
                          <MoveUpRightIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
                  <div className="h-48 bg-gray-700 rounded-xl">
                    <Image
                      src="/m2.png"
                      width={800}
                      height={1200}
                      alt="BMW M2"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold">Long Chair</span>
                        <p className="text-xs text-gray-700">ID: 23432252</p>
                      </div>
                      <span className="font-bold  text-red-600">$25.99</span>
                    </div>
                    <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-[200px] h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
                  <div className="w-full h-full p-1 absolute bg-zinc-400">
                    <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]"></div>
                  </div>

                  <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                    <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
                      <span className="text-xl font-medium">BMW</span>
                      <span className="text-xs text-gray-400">M2</span>
                      <div className="w-full mt-auto flex items-center justify-center">
                        <span className="text-xs text-gray-400">2024</span>
                      </div>
                    </div>
                    <div className="h-full pt-2 flex flex-col items-end text-white/50">
                      <span className="text-[10px] leading-[12px]">
                        2024
                      </span>
                      <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
                        <span className="font-serif text-white/80">
                          <MoveUpRightIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-[200px] h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
                  <div className="w-full h-full p-1 absolute bg-zinc-400">
                    <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]"></div>
                  </div>

                  <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                    <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
                      <span className="text-xl font-medium">BMW</span>
                      <span className="text-xs text-gray-400">M2</span>
                      <div className="w-full mt-auto flex items-center justify-center">
                        <span className="text-xs text-gray-400">2024</span>
                      </div>
                    </div>
                    <div className="h-full pt-2 flex flex-col items-end text-white/50">
                      <span className="text-[10px] leading-[12px]">
                        2024
                      </span>
                      <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
                        <span className="font-serif text-white/80">
                          <MoveUpRightIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-[200px] h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
                  <div className="w-full h-full p-1 absolute bg-zinc-400">
                    <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]"></div>
                  </div>

                  <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                    <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
                      <span className="text-xl font-medium">BMW</span>
                      <span className="text-xs text-gray-400">M2</span>
                      <div className="w-full mt-auto flex items-center justify-center">
                        <span className="text-xs text-gray-400">2024</span>
                      </div>
                    </div>
                    <div className="h-full pt-2 flex flex-col items-end text-white/50">
                      <span className="text-[10px] leading-[12px]">
                        2024
                      </span>
                      <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
                        <span className="font-serif text-white/80">
                          <MoveUpRightIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          
        </div>
      </section>

      {/* Car Inventory Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-[10%] font-extrabold text-9xl mt-10">
          <h2>Our Collection</h2>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3 mt-40">
          <div className="bg-gray-950 p-6 border border-default rounded-2xl shadow-xs">
            <a href="#">
              <img className="rounded-base" src="/m2.png" alt="BMW M2" />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-3 py-0.5 rounded-full">
                  2024
                </span>
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  BMW M2
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-extrabold text-heading">
                  $50,000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-white/10 hover:bg-white/20 box-border border border-transparent font-medium leading-5 rounded-full text-sm p-2"
                >
                  <MoveUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-primary-soft p-6 border border-default rounded-2xl shadow-xs">
            <a href="#">
              <img className="rounded-base" src="/m3.png" alt="BMW M3" />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-3 py-0.5 rounded-full">
                  2024
                </span>
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  BMW M3
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-extrabold text-heading">
                  $55,000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-white/10 hover:bg-white/20 box-border border border-transparent font-medium leading-5 rounded-full text-sm p-2"
                >
                  <MoveUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-primary-soft p-6 border border-default rounded-2xl shadow-xs">
            <a href="#">
              <img className="rounded-base" src="/m4.png" alt="BMW M4" />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-3 py-0.5 rounded-full">
                  2024
                </span>
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  BMW M4
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-extrabold text-heading">
                  $60,000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-white/10 hover:bg-white/20 box-border border border-transparent font-medium leading-5 rounded-full text-sm p-2"
                >
                  <MoveUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-primary-soft p-6 border border-default rounded-2xl shadow-xs">
            <a href="#">
              <img className="rounded-base" src="/m5.png" alt="BMW M5" />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-3 py-0.5 rounded-full">
                  2024
                </span>
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  BMW M5
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-extrabold text-heading">
                  $65,000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-white/10 hover:bg-white/20 box-border border border-transparent font-medium leading-5 rounded-full text-sm p-2"
                >
                  <MoveUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-primary-soft p-6 border border-default rounded-2xl shadow-xs">
            <a href="#">
              <img className="rounded-base" src="/m5.png" alt="BMW M5" />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-3 py-0.5 rounded-full">
                  2024
                </span>
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  BMW M5
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-extrabold text-heading">
                  $65,000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-white/10 hover:bg-white/20 box-border border border-transparent font-medium leading-5 rounded-full text-sm p-2"
                >
                  <MoveUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-primary-soft p-6 border border-default rounded-2xl shadow-xs">
            <a href="#">
              <img className="rounded-base" src="/m5.png" alt="BMW M5" />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-3 py-0.5 rounded-full">
                  2024
                </span>
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  BMW M5
                </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-extrabold text-heading">
                  $65,000
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-white/10 hover:bg-white/20 box-border border border-transparent font-medium leading-5 rounded-full text-sm p-2"
                >
                  <MoveUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
