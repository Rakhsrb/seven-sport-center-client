import BlogsModule from "@/modules/Blogs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bloglar",
  description: "Sport yangiliklar.",
};

function page() {
  return (
    <>
      <div className="h-[30vh] flex items-center justify-center flex-col bg-black">
        <h1 className="text-white font-bold text-4xl">BLOGLAR</h1>
      </div>
      <BlogsModule />
    </>
  );
}

export default page;
