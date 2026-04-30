import Link from "next/link";
import { EqualIcon } from "lucide-react";
import Image from "next/image";

const MenuItems = [
  { label: "Home", link: "/" },
  { label: "Inventory", link: "/inventory" },
  { label: "About", link: "/about" },
  { label: "Service", link: "/service" },
  { label: "Contact", link: "/contact" },
];

export default function Navbar() {
  return (
    <div className="">
      <nav className="fixed top-0 w-full flex items-center justify-around py-4 px-24 bg-black/30 backdrop-blur-md z-50">
        <div className="border-b-2 border-b-zinc-700 w-7xl flex items-center justify-between">
          <Link href="/" className="transition duration-300 hover:scale-110">
            <Image
              src="/logo-header.svg"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-20">
            <ul className="flex gap-10 text-lg">
              {MenuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className="text-zinc-500 hover:text-white transition duration-300 hover:scale-110"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
            <Link href="/" className="transition duration-300 hover:scale-110">
              <EqualIcon
                width="48"
                height="48"
                className="text-zinc-400 hover:text-white font-extralight transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
