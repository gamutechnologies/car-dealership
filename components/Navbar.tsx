"use client";

import Link from "next/link";
import { EqualIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const MenuItems = [
    { label: "Home", link: "/" },
    { label: "Inventory", link: "/inventory" },
    { label: "About", link: "/about" },
    { label: "Service", link: "/service" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center border-b-2 border-b-zinc-700">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 transition duration-300 hover:scale-110"
            >
              <Image
                src="/logo-header.svg"
                alt="Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 mt-4">
            {MenuItems.map((item) => (
              <Link
                href={item.link}
                key={item.label}
                className="text-zinc-500 hover:text-white transition duration-300 hover:scale-110"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="ml-12 inline-block transition duration-300 hover:scale-110"
            >
              <EqualIcon
                width="36"
                height="36"
                className="text-zinc-400 hover:text-white font-extralight transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="text-zinc-400 hover:text-white transition duration-300 p-2 rounded-md focus:ring-2 focus:ring-zinc-400 focus:outline-none"
            >
              {open ? (
                <XIcon width="36" height="36" />
              ) : (
                <EqualIcon width="36" height="36" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${open ? "max-h-screen" : "max-h-0"} overflow-hidden transition-[max-height] duration-600 bg-black/50 border-t border-zinc-600`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 ">
            {MenuItems.map((item) => (
              <Link
                href={item.link}
                key={item.label}
                className="text-zinc-500 hover:text-white transition duration-300 hover:scale-110 block px-3 py-2 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
