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
   <nav className="py-10 mb-12 flex justify-between dark:text-white bg-white/30 px-10 rounded-b-md ">
    <h1 className="font-burtons text-xl">cleanazcoding</h1>
    <ul className="flex items-center">
     {navItems.map((item) => (
      <li key={item.name} className="mx-4">
       <Link
        href={item.href}
        className="hover:text-teal-500 transition-colors duration-300"
       >
        {item.name}
       </Link>
      </li>
     ))}
     <li className="mx-4">
      <MoonStar
       onClick={() => setDarkMode(!darkMode)}
       className=" cursor-pointer text-2xl"
      />
     </li>
     <li>
      <Link
       className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
       href="#contacts"
      >
       Let's Connect!
      </Link>
     </li>
    </ul>
   </nav>
  </>
 );
}
