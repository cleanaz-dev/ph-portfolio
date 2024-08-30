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
     Web development isn't just my job—it's my passion. I love diving into complex projects and bringing ideas to life through code. React and Next.js are my go-to tools for creating slick, responsive frontends, while Prisma and MongoDB help me build rock-solid backends. My goal? Crafting web apps that not only look great but feel intuitive and seamless to use. I'm always pushing my boundaries, whether it's mastering AWS deployment or exploring the exciting world of AI integration. JavaScript is my trusty sidekick throughout it all. Want to see what's in my developer toolbox? Take a spin through the carousel—it'll give you a peek at the tech that gets me excited to code every day.
     </p>
    
    </div>
    <Carousel
     className="w-full max-w-3xl"
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
         <Card className="h">
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
