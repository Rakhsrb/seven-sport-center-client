import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="w-full xl:max-w-1/2 space-y-6">
          <Title>eng yaxshi murabbiylar bilan</Title>
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Yaxshi va sog'lom hayot uchun ideal tana shaklini yarating.
          </h1>
          <Link href="tel:+998900021462">
            <Button
              variant="default"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors uppercase font-medium text-sm"
            >
              Bog'lanish
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
