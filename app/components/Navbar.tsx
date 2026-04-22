import Link from "next/link";
import { MenuIcon } from "lucide-react";
import Image from "next/image";


export default function Page() {
  return (
    <div className="">
      <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 bg-black z-10">
        <div className="border-b-2 border-b-gray-700 w-[80%] flex items-center justify-between">
        <Link href="/" className="transition duration-300 hover:scale-110">
          <Image
            src="/logo-header.svg"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        <ul className="flex gap-10 text-lg">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/inventory"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Inventory
          </Link>
          <Link
            href="/service"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Service
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </ul>
        <Link href="/" className="transition duration-300 hover:scale-110">
          <MenuIcon className="text-gray-300 hover:text-white" />
        </Link>
        </div>
      </nav>
    </div>
  );
}

const MenuItems = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "About",
    link: "/about"
  },
  {
    label: "Inventory",
    link: "/inventory"
  },
  {
    label: "Service",
    link: "/service"
  },
  {
    label: "Contact",
    link: "/contact"
  },
]