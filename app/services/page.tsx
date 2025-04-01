import Services from "@/modules/Services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "XIZMATLAR",
  description: "BIZ SIZGA NIMALARNI TAKLIF ETAMIZ.",
};

function page() {
  return (
    <main className="py-20">
      <Services />
    </main>
  );
}

export default page;
