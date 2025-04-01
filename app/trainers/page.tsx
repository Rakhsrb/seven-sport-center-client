import TrainersModule from "@/modules/Trainers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "MURABBIYLAR",
  description: "Seven sport center murabbiylar jamoasi.",
};

function page() {
  return (
    <main className="py-20">
      <TrainersModule />
    </main>
  );
}

export default page;
