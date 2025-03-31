import BlogsModuleSkeleton from "@/components/shared/blogs-module-skeleton";
import About from "@/modules/About";
import BlogsModule from "@/modules/Blogs";
import Hero from "@/modules/Hero";
import Services from "@/modules/Services";
import TrainersModule from "@/modules/Trainers";
import React, { Suspense } from "react";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TrainersModule />
      <Suspense fallback={<BlogsModuleSkeleton />}>
        <BlogsModule />
      </Suspense>
    </>
  );
}

export default Home;
