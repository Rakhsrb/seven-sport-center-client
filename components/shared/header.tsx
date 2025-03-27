"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Bosh sahifa", url: "/" },
  { label: "Biz haqimizda", url: "/about" },
  { label: "Xizmatlar", url: "/services" },
  { label: "Jamoa", url: "/trainer" },
  { label: "Bloglar", url: "/blogs" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.pageYOffset);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrollY(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const headerStyle = {
    top: visible ? "0" : "-100px",
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all ${
        scrollY >= 300 ? "bg-black" : "bg-transparent"
      }`}
      style={headerStyle}
    >
      <div className="container mx-auto h-20 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <span className="font-bold text-white text-lg md:text-xl">
            seven sport center<span className="text-[#ff1313]">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="relative text-white text-md font-medium transition-colors hover:text-[#E94D35] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#E94D35] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="tel:+998900021462"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors uppercase font-medium text-sm"
          >
            Bog&apos;lanish
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu className="text-2xl text-white md:hidden" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black border-l border-[#323232] p-0 h-full w-[80%] md:w-[450px] text-white"
          >
            <div className="flex flex-col">
              <div className="p-6 border-b border-[#323232]">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    <span className="font-bold text-white text-lg md:text-xl">
                      seven sport center
                      <span className="text-[#ff1313]">.</span>
                    </span>
                  </Link>
                </div>
              </div>
              <nav className="flex-1 p-6">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <ul className="flex flex-col gap-6">
                  {links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className="text-white text-lg font-medium hover:text-[#E94D35] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-6 border-t border-[#323232]">
                <Link
                  href="tel:+998900021462"
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors uppercase font-medium text-sm"
                >
                  Bog&apos;lanish
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
