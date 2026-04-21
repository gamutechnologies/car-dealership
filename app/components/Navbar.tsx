import Link from "next/link";
import { Gauge } from "lucide-react";

export default function Page() {
  return (
    <div className="">
      <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black z-10">
        <Link href="/" className="transition duration-300 hover:scale-110">
          <Gauge color="#FFFFFF" />
          Dealership
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
      </nav>
    </div>
  );
}
