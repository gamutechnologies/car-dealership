import * as React from "react";
import Image from "next/image";
import { MoveUpRightIcon, MoveUpLeftIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const logoCard = [
  {
    id: 1,
    name: "Mercedes",
    image: "/images/mercedes-logo.svg",
  },
  {
    id: 2,
    name: "Rolls-Royce",
    image: "/images/rolls-royce-logo.svg",
  },
  {
    id: 3,
    name: "BMW",
    image: "/images/bmw-logo.svg",
  },
  {
    id: 4,
    name: "Lamborghini",
    image: "/images/lamborghini-logo.svg",
  },
  {
    id: 5,
    name: "Ferrari",
    image: "/images/ferrari-logo.svg",
  },
  {
    id: 6,
    name: "Bently",
    image: "/images/bently-logo.svg",
  },
  {
    id: 7,
    name: "Porsche",
    image: "/images/porsche-logo.svg",
  },
];

const avatarCard = [
  {
    id: 1,
    name: "Joseph Vijay",
    image: "/images/joseph-vijay.png",
  },
  {
    id: 2,
    name: "Samantha Ruth",
    image: "/images/samantha-ruth.png",
  },
  {
    id: 3,
    name: "Mohammed Nizamdeen",
    image: "/images/mohammed-nizamdeen.png",
  },
  {
    id: 4,
    name: "Namitha Vankawala",
    image: "/images/namitha-vankawala.png",
  },
  {
    id: 5,
    name: "Osama Bin Laden",
    image: "/images/osama-bin-laden.png",
  },
  {
    id: 6,
    name: "Adolf Hitler",
    image: "/images/adolf-hitler.png",
  },
  {
    id: 7,
    name: "Pooja Hegde",
    image: "/images/pooja-hegde.png",
  },
  {
    id: 8,
    name: "Ajith Kumar",
    image: "/images/ajith-kumar.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="min-h-screen flex items-start justify-center overflow-hidden bg-black relative">
      <div className="w-full absolute top-10">
        <Carousel className="w-full min-w-full sm:max-w-xs md:max-w-sm">
          <CarouselContent className="-ml-1">
            {logoCard.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="basis-1/2 pl-1 lg:basis-1/7"
              >
                <div className="p-1">
                  <Card
                    key={logo.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 p-6 min-h-70"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-cover object-center p-14"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="min-w-7xl absolute items-center justify-center text-center flex flex-col top-1/3 ">
        <h3 className="text-white text-lg mb-5">What Our Clients Say</h3>
        <p className="text-white text-4xl font-light w-6xl">
          "From personalized recommendations to effortless delivery, <br/> LuxeAuto
          made every step simple, transparent, and <br/> luxurious - {" "}
          <span className="text-white/50">
            redefining how premium car buying should feel <br/> for discerning drivers
            worldwide."
          </span>
        </p>
      </div>
      <div className="w-full absolute bottom-10">
        <Carousel className="w-full min-w-full sm:max-w-xs md:max-w-sm">
          <CarouselContent className="-ml-1">
            {avatarCard.map((avatar) => (
              <CarouselItem
                key={avatar.id}
                className="basis-1/2 pl-1 lg:basis-1/7"
              >
                <div className="p-1">
                  <Card
                    key={avatar.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-full border border-white/20 bg-zinc-900 p-6 min-h-60"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        fill
                        className="object-fill object-center"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
