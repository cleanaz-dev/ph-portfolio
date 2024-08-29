import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

export default function Home() {
 return (
  <div className="relative bg-gradient-to-r from-rose-100 to-teal-100 px-10 md:px-20 lg:px-40 ">
   <div className="absolute inset-0 z-10">
    <img
     src="/animate-bg.svg"
     alt="Animated Background"
     className="object-cover w-full h-full"
    />
   </div>
   <div className="relative z-20">
    <Hero />
    <Skills />
    <Projects />
  </div>
  </div>
 );
}
