import About from "@/modules/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Seven Sport Center haqida",
  description:
    "Namanngan shahridagi dzyudo klubi bolalar uchun sport va tarbiyaning mukammal uyg'unligini taqdim etadi. Bizning malakali murabbiylarimiz har bir yosh sportchiga maxsus yondashuv bilan shug'ullanadi.",
};

function page() {
  return (
    <main className="py-20">
      <About />
    </main>
  );
}

export default page;
