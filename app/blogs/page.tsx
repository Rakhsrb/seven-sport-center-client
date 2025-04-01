import BlogsModule from "@/modules/Blogs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "BLOGLAR",
  description: "Sport yangiliklar.",
};

function page() {
  return (
    <main className="py-20">
      <BlogsModule />
    </main>
  );
}

export default page;
