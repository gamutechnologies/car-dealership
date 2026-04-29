import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", link: "/" },
  { label: "Inventory", link: "/inventory" },
  { label: "About", link: "/about" },
  { label: "Service", link: "/service" },
  { label: "Contact", link: "/contact" },
];

const policies = [
  { label: "Terms of Service", link: "/terms-of-service" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Cookie Policy", link: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-7xl mx-auto py-12 px-12 flex flex-row justify-between items-start text-zinc-500">
        <div className="flex flex-col gap-2 w-1/4">
          <div className="mb-24">
            <Link href="/" className="transition duration-300 hover:scale-110">
              <Image
                src="/logo-header.svg"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="text-md text-zinc-400">
              Crafting luxury automotive experiences since 2052.
            </p>
          </div>
          <div>
            <p className="text-zinc-400 font-medium mb-4">Connect</p>
            <div className="flex gap-6">
              <Link
                href="/facebook"
                className="text-zinc-400 hover:text-white transition duration-300"
              >
                <FaFacebook className="text-zinc-500 text-lg" />
              </Link>
              <Link
                href="/twitter"
                className="text-zinc-400 hover:text-white transition duration-300"
              >
                <FaXTwitter className="text-zinc-600 text-lg" />
              </Link>
              <Link
                href="/instagram"
                className="text-zinc-400 hover:text-white transition duration-300"
              >
                <FaInstagram className="text-zinc-500 text-lg" />
              </Link>
              <Link
                href="/tiktok"
                className="text-zinc-400 hover:text-white transition duration-300"
              >
                <FaTiktok className="text-zinc-600 text-lg" />
              </Link>
              <Link
                href="/whatsapp"
                className="text-zinc-400 hover:text-white transition duration-300"
              >
                <FaWhatsapp className="text-zinc-500 text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-24 w-1/3 justify-end">
          <div className="flex flex-col gap-1">
            <p className="text-zinc-300 text-base font-medium mb-2">
              Quick Links
            </p>
            <ul className="flex flex-col gap-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-zinc-400 text-sm hover:text-white transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-zinc-300 text-base font-medium mb-2">Policies</p>
            <ul className="flex flex-col gap-1">
              {policies.map((policy, index) => (
                <li key={index}>
                  <Link
                    href={policy.link}
                    className="text-zinc-400 text-sm hover:text-white transition duration-300"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-700 mt-8 p-8 text-center text-zinc-400 text-base font-semibold">
        &copy; {new Date().getFullYear()} LuxAuto Motors. All rights reserved.
      </div>
    </footer>
  );
}
