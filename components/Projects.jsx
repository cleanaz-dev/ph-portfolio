import React from "react";
import { motion } from 'framer-motion'
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Portfolio from "./Portfolio";

const dancingScript = Dancing_Script({ subsets: ["latin"] });


export default function Projects() {
 return (
  <>
   <section id="projects" className="mt-10 py-10 max-w-6xl mx-auto ">
        <h1
          style={{ fontFamily: dancingScript.style.fontFamily }} 
          className="text-6xl text-rose-300 text-center font-bold tracking-widest mb-4 drop-shadow-lg">Projects</h1>
          <p className="max-w-3xl text-center mx-auto pb-4">Each project is a journey of creativity and problem-solving. Explore my work and see how I've turned challenges into real-life solutions!</p>
          <Portfolio />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative p-4 overflow-hidden rounded-md "
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="relative hover:scale-105 transition-all duration-700">
                  <Image
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-1000 transform hover:scale-110"
                    height={200}
                    width={200}
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm font-medium text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> */}
      </section>
  </>
 );
}
