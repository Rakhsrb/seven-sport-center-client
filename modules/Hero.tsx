import { Medal, Star, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="w-full lg:w-3/4 xl:w-2/3 space-y-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full">
            <Medal className="text-yellow-400 w-5 h-5" />
            <span className="text-white text-sm">
              O'zbekiston chempionlari tayyorlaymiz
            </span>
          </div>

          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight uppercase">
            Farzandingiz uchun <br />
            <span className="text-blue-400">professional dzudo</span> <br />
            mashg'ulotlari
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl">
            Bizning malakali murabbiylarimiz bilan farzandingiz nafaqat sport,
            balki intizom, hurmat va maqsadga erishish yo'llarini o'rganadi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="tel:+998900021462"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full transition-colors uppercase font-medium text-sm inline-flex items-center justify-center"
            >
              Hoziroq qo'shiling
            </Link>
            <Link
              href="#about"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-full transition-colors uppercase font-medium text-sm inline-flex items-center justify-center backdrop-blur-sm"
            >
              Batafsil ma'lumot
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Users className="text-blue-400 w-5 h-5" />
              <span className="text-white">500+ o'quvchilar</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 w-5 h-5" />
              <span className="text-white">15+ yillik tajriba</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
