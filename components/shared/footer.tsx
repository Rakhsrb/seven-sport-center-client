"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Send, ArrowUp, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 uppercase text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-300 uppercase text-sm font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-gray-300 uppercase text-sm font-medium"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-gray-300 uppercase text-sm font-medium"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-300 uppercase text-sm font-medium"
                >
                  Blog
                </Link>
              </li>
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

        <div className="flex flex-col sm:flex-row gap-4 items-center">
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
            <Link href="tel:+998712007007" className="hover:text-gray-300">
              +998 71 200 70 07
            </Link>
          </div>
        </div>

        <div className="border-t border-[#333] my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © Seven Sport Center {new Date().getFullYear()} все права защищены
          </div>

          <div className="flex justify-center"></div>

          <div className="flex items-center gap-2 bg-[#222222] rounded-lg px-4 py-2">
            <MapPin size={18} className="text-gray-400" />
            <span className="text-sm text-gray-300">
              Наманган, Спортивный комплекс «Пахлавон»
            </span>
            <Link
              href="#"
              className="ml-2 bg-[#333333] px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
            >
              Карта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
