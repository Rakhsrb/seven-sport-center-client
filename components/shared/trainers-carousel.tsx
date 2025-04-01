"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Title from "@/components/shared/Title";
import TrainerCard from "./trainer-card";
import type { TrainerMember } from "@/types/RootTypes";

interface TrainersCarouselProps {
  trainers: TrainerMember[];
}

export default function TrainersCarousel({ trainers }: TrainersCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="space-y-6">
            <Title>BIZNING JAMOA</Title>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-2xl">
              ENG TAJRIBALI MURABBIYLARIMIZ
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className={`p-2 rounded-full border border-gray-300 ${
                !canScrollPrev
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              disabled={!canScrollPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className={`p-2 rounded-full border border-gray-300 ${
                !canScrollNext
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              disabled={!canScrollNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
            <Link
              href="/trainers"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors uppercase font-medium text-sm flex items-center group ml-2"
            >
              Batafsil ma&apos;lumotlar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 transform group-hover:translate-x-1 transition-transform"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {trainers.map((member, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-2"
              >
                <TrainerCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
