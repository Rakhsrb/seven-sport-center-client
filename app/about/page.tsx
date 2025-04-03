import About from "@/modules/About";
import Testimonial from "@/modules/Testimonial";
import TrainersModule from "@/modules/Trainers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "BIZ HAQIMIZDA",
  description:
    "Namanngan shahridagi dzyudo klubi bolalar uchun sport va tarbiyaning mukammal uyg'unligini taqdim etadi. Bizning malakali murabbiylarimiz har bir yosh sportchiga maxsus yondashuv bilan shug'ullanadi.",
};

function page() {
  return (
    <main className="py-20">
      <About />
      <Testimonial />
      <TrainersModule />
    </main>
  );
}

export default page;
