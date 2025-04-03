import About from "@/modules/About";
import BlogsModule from "@/modules/Blogs";
import Hero from "@/modules/Hero";
import Services from "@/modules/Services";
import Testimonial from "@/modules/Testimonial";
import TrainersModule from "@/modules/Trainers";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <TrainersModule />
      <BlogsModule />
    </>
  );
}

export default Home;
