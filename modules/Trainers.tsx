"use client";

import { useEffect, useState } from "react";
import type React from "react";
import { Award, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Title from "@/components/shared/Title";

interface TrainerProps {
  image: string;
  name: string;
  level: string;
  experience?: string;
  clients?: string;
  index: number;
}

const Trainer: React.FC<TrainerProps> = ({
  image,
  name,
  level,
  experience = "5+ лет",
  clients = "200+",
}) => {
  return (
    <div
      className={`group bg-white overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full`}
    >
      <div className="relative overflow-hidden h-full">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
            <div className="flex flex-col items-center">
              <Clock size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Tajriba</span>
              <span className="text-sm font-semibold">{experience}</span>
            </div>
            <div className="flex flex-col items-center">
              <Award size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Darajasi</span>
              <span className="text-sm font-semibold">{level}</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Shogirtlar soni</span>
              <span className="text-sm font-semibold">{clients}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Trainers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const teamMembers = [
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Джон Сансаев",
      position: "Силовой тренер",
      experience: "7+ лет",
      level: "Qora",
      clients: "250+",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Алекс Петров",
      position: "Фитнес инструктор",
      experience: "5+ лет",
      level: "Jigarrang",
      clients: "180+",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Максим Волков",
      position: "Креативный директор",
      experience: "10+ лет",
      level: "Qora",
      clients: "300+",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Иван Смирнов",
      position: "Тренер по йоге",
      experience: "8+ лет",
      level: "Qora",
      clients: "220+",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Сергей Иванов",
      position: "Тренер по боксу",
      experience: "12+ лет",
      level: "Jigarrang",
      clients: "350+",
    },
  ];

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
              Batafsil ma'lumotlar
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
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-2"
              >
                <Trainer
                  index={index}
                  image={member.image}
                  name={member.name}
                  experience={member.experience}
                  level={member.level}
                  clients={member.clients}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
