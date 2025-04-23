"use client";

import Link from "next/link";
import { Instagram, Send, ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { label: "Bosh sahifa", url: "/" },
    { label: "Biz haqimizda", url: "/about" },
    { label: "Xizmatlar", url: "/services" },
    { label: "Bloglar", url: "/blogs" },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-gray-300 uppercase text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center hover:bg-red-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Send size={18} />
              </Link>
            </div>
            <Link href="tel:+998886801144" className="hover:text-gray-300">
              +998 88 680 11 44
            </Link>
          </div>
          <div className="flex items-center gap-2 bg-[#222222] rounded-lg px-4 py-2">
            <MapPin size={18} className="text-gray-400" />
            <span className="text-sm text-gray-300">
              Namangan, “Pahlavon” sport majmuasi
            </span>
            <Link
              href="https://maps.app.goo.gl/CdDtEmMaiktgjwT29"
              target="_blank"
              className="ml-2 bg-[#333333] px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
            >
              xarita
            </Link>
          </div>
        </div>

        <div className="border-t border-[#333] my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © Seven Sport Center {new Date().getFullYear()} Barcha huquqlar
            himoyalangan
          </div>
          <div className="text-gray-400 text-sm">
            Sayt Texnokarvon tomonidan ishlab chiqilgan
          </div>
        </div>
      </div>
    </footer>
  );
}
