import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="w-full xl:max-w-1/2 space-y-6">
          <Title>с лучшими тренерами</Title>
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Создайте идеальную форму тела для хорошей и здоровой жизни.
          </h1>
          <Link href="tel:+998900021462">
            <Button
              variant="default"
              className="bg-[#ff1313] hover:bg-[#ff1313]/90 text-white font-medium px-6"
            >
              Связаться
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
