"use client";

import React from "react";
import Image from "next/image";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

const skills = [
 { name: "React", logo: "/react-native.svg" },
 { name: "Next.js", logo: "/nextjs.svg" },
 { name: "Prisma", logo: "/prisma-orm.svg" },
 { name: "MongoDB", logo: "/mongodb.svg" },
 { name: "AWS", logo: "/aws.svg" },
 { name: "OpenAI", logo: "/chatgpt.svg" },
 { name: "Anthropic", logo: "/claude.svg" },
 { name: "JavaScript", logo: "/javascript.svg" },
];
export default function Skills() {
 return (
  <>
   <section id="skills" className="flex flex-col items-center justify-center text-center py-10 bg-white/30 max-w-6xl mx-auto">
    <div>
     <h1 className="text-teal-500  text-5xl font-bold mb-4 tracking-widest">Skills</h1>
     <p className="max-w-3xl mb-6 leading-relaxed  p-6 text-slate-500 rounded-md">
     Web development is my true passion. I thrive on building dynamic, user-friendly apps using a diverse tech stack. React and Next.js power my frontends, while Prisma and MongoDB handle the backend heavy lifting. I'm all about creating seamless experiences, from intuitive interfaces to robust server-side logic. My toolkit includes cloud deployment solutions and AI integration, with JavaScript as my primary language. Curious about my go-to tools? Check out the carousel for a quick tour of the tech that fuels my coding adventures.
     </p>
    
    </div>
    <Carousel
     className="md:w-full max-w-3xl w-2/3"
     plugins={[
      Autoplay({
       delay: 2000,
      }),
     ]}
    >
     <CarouselContent className="flex">
      {skills.map((skill, index) => (
       <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
        <div className="">
         <Card className="mx-2">
          <CardContent className="flex flex-col items-center justify-center p-6">
           <Image
            src={skill.logo}
            alt={skill.name}
            className="object-cover "
            height={100}
            width={100}
           />
           <span className="text-xl font-semibold">{skill.name}</span>
          </CardContent>
         </Card>
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </section>
  </>
 );
}
