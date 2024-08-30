"use client"

import React from "react";
import { MoonStar } from "lucide-react";
import Link from "next/link";

const navItems = [
 { name: "Home", href: "#home" },
 { name: "Skills", href: "#skills" },
 { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(false);
 return (
  <>
   <nav className="py-10 mb-12 flex justify-between dark:text-white bg-white/30 px-4 md:px-10 rounded-b-md ">
    <h1 className="flex text-sm lg:text-xl">cleanazcoding</h1>
    <ul className="flex items-center">
     {navItems.map((item) => (
      <li key={item.name} className="mx-4 hidden lg:block">
       <Link
        href={item.href}
        className="hover:text-teal-500 transition-colors duration-300"
       >
        {item.name}
       </Link>
      </li>
     ))}
     {/* <li className="mx-4">
      <MoonStar
       onClick={() => setDarkMode(!darkMode)}
       className=" cursor-pointer text-2xl"
      />
     </li> */}
     <li>
      <Link
       className="text-xs md:text-lg lg:text-xl"
       href="#contacts"
      >
       <span className="md:bg-teal-500 md:text-white md:px-4 md:py-2 border-none rounded-md ml-8 hover:bg-cyan-500/50 transition-colors duration-300 underline md:no-underline">
       Let's Connect!
       </span>
      </Link>
     </li>
    </ul>
   </nav>
  </>
 );
}
