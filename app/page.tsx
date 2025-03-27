import About from "@/modules/About";
import Blogs from "@/modules/Blogs";
import Hero from "@/modules/Hero";
import Services from "@/modules/Services";
import Trainers from "@/modules/Trainers";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Blogs/>
    </>
  );
}

export default Home;
