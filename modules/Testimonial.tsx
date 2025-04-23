"use client";

import { useCallback, useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Abdulaziz Karimov",
    role: "Ota",
    quote:
      "O'g'lim 2 yildan beri bu klubda shug'ullanadi. Jismoniy rivojlanish bilan birga, intizom va hurmat kabi muhim fazilatlarni ham o'rgandi.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg",
  },
  {
    id: 2,
    name: "Dilnoza Ahmedova",
    role: "Ona",
    quote:
      "Murabbiylar juda malakali va bolalarga g'amxo'rlik bilan yondashadi. Qizim bu yerda nafaqat sport, balki hayotiy ko'nikmalarni ham o'rganmoqda.",
    avatar:
      "https://passport-photo.online/_optimized/prepare2.0498e1e2-opt-1920.WEBP",
  },
  {
    id: 3,
    name: "Jahongir Toshmatov",
    role: "Sobiq o'quvchi",
    quote:
      "Bu klubda olgan bilim va tajribam tufayli bugun milliy terma jamoada faoliyat yuritmoqdaman. Eng yaxshi boshlang'ich ta'lim uchun minnatdorman.",
    avatar:
      "https://s3.eu-west-2.amazonaws.com/static-candidates.democracyclub.org.uk/media/cache/29/9e/299e3c6f9f3b4e0278f7d2dc2b9134ef.jpg",
  },
];

function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-[2px] bg-red-600"></div>
            <span className="mx-4 text-red-600 uppercase text-sm font-medium">
              BIZNING MUXLISLAR FIKRI
            </span>
            <div className="w-16 h-[2px] bg-red-600"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight uppercase">
            Ota-onalar va o&apos;quvchilar bizning klubimiz haqida nima
            deyishadi
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-x-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_33.33%]"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full mx-4">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name || "User"}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-full border-2 border-red-500"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#2D2756]">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-100 opacity-50" />
                      <p className="text-gray-700 relative z-10 pl-4">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-[20px] -translate-y-1/2 -translate-x-1/2 rounded-full p-3 shadow-md bg-red-500 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-[20px] -translate-y-1/2 translate-x-1/2 rounded-full p-3 shadow-md bg-red-500 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === selectedIndex ? "bg-red-600 w-6" : "bg-gray-300"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
