"use client";

import React from "react";

import { Spade, Heart, Diamond, Club, MoonStar } from "lucide-react";
import Image from "next/image";
import profilePicture from "../public/profile.jpg";
import { ArrowBigDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" }
];
export default function Hero() {
 const [darkMode, setDarkMode] = React.useState(false);

 return (
  <>
   <section className="min-h-screen max-w-6xl mx-auto">
    <nav className="py-10 mb-12 flex justify-between dark:text-white bg-white/30 px-10 rounded-b-md sticky">
     <h1 className="font-burtons text-xl">cleanazcoding</h1>
     <ul className="flex items-center">
      
      {navItems.map((item) => (
          <li key={item.name} className="mx-4">
            <a href={item.href} className="hover:text-teal-500 transition-colors duration-300">
              {item.name}
            </a>
          </li>
        ))}
        <li className="mx-4">
       <MoonStar
        onClick={() => setDarkMode(!darkMode)}
        className=" cursor-pointer text-2xl"
       />
      </li>
      <li>
       <a
        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
        href="#"
       >
        Let's Connect!
       </a>
      </li>
     </ul>
    </nav>
    <div className="text-center p-10 py-10">
     <h2 className="text-5xl py-2 text-teal-500 font-bold dark:text-teal-400 md:text-6xl">
      Paul Hendricks
     </h2>
     <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
      Developer & Entrepeneur
     </h3>
     <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
      Freelance <span className="text-teal-500 font-semibold">coder</span> and{" "}
      <span className="text-teal-500 font-semibold">designer</span>, ready to
      bring your ideas to life. Let&#39;s collaborate and create something
      amazing together—reach out below and{" "}
      <span className="text-teal-500 font-semibold">
       let&#39;s get started!
      </span>
     </p>
     <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <Club className="animate-spin hover:animate-none "/>
      <Spade className="animate-spin hover:animate-none"/>
      <Diamond className="animate-spin hover:animate-none"/>
      <Heart className="animate-spin hover:animate-none"/>

      {/* <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube /> */}
     </div>
     <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
      <Image
       src={profilePicture}
       layout="fill"
       objectFit="cover"
       alt="bio-image"
      />
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
