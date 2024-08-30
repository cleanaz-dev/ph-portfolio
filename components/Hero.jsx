"use client";

import React from "react";

import { Spade, Heart, Diamond, Club, MoonStar } from "lucide-react";
import Image from "next/image";
import profilePicture from "../public/profile.jpg";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Hero() {
 return (
  <>
   <section id="home" className="min-h-screen max-w-7xl mx-auto">
    <div className="text-center p-10 py-10">
        <div className="flex-col md:flex">
     <h2 className="text-3xl md:text-5xl py-2 text-teal-500 font-bold dark:text-teal-400 ">
      Paul Hendricks
     </h2>
     <h3 className="flex text-center justify-center text-sm py-2 dark:text-white md:text-4xl">
      <span className="mr-2">Web Developer & </span>
      <Typewriter
       options={{
        strings: ["Entrepreneur", "Creator", "Designer", "Innovator"],
        autoStart: true,
        loop: true,
       }}
      />
     </h3>
     </div>
     <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 w-full md:max-w-2xl mx-auto md:text-xl">
      Freelance <span className="text-teal-500 font-semibold">coder</span> and{" "}
      <span className="text-teal-500 font-semibold">designer</span>, ready to
      bring your ideas to life. Let&#39;s collaborate and create something
      amazing together—reach out below and{" "}
      <span className="text-teal-500 font-semibold">
       let&#39;s get started!
      </span>
     </p>
     <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <Club className="animate-spin hover:animate-none " />
      <Spade className="animate-spin hover:animate-none" />
      <Diamond className="animate-spin hover:animate-none" />
      <Heart className="animate-spin hover:animate-none" />

      {/* <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube /> */}
     </div>
     <div className="flex justify-center items-center mt-20">
      <div className="bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden md:h-96 md:w-96">
       <Image
        src={profilePicture}
        className="object-cover w-full h-full"
        alt="bio-image"
        priority
       />
      </div>
     </div>
     <div className="flex justify-center mt-20">
      <div className="scroll-downs">
       <div className="mousey">
        <div className="scroller"></div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
