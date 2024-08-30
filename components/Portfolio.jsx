import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Badge } from './ui/badge';

const projects = [
 {
  title: "Ticket Genie",
  description:
   "A standard ticketing app enhanced with Anthropic AI for generating responses based on issue.",
  liveLink: "https://ticket-genie.vercel.app/",
  image: "/ticket-genie.png",
  technologies: ["Next.js", "Prisma", "Clerk", "MongoDB", "Anthropic AI"]
 },
 {
  title: "Barber AZ",
  description: "Allows users to book appointments via a VoiceFlow chatbot, with email confirmations and AI-driven customer service. Includes an admin dashboard.",
  liveLink: "https://barber-az.vercel.app/",
  image: "/barber-az.png",
  technologies: ["Next.js", "Prisma", "Clerk", "MongoDB", "BlandAI", "VoiceFlow"]
 },
 {
  title: "Budget Buddy",
  description: "Enables users to set budgets, upload receipts, and receive AI analysis of their spending.",
  liveLink: "https://budget-buddy-gamma.vercel.app/",
  image: "/budget-az.png",
  technologies: ["Next.js", "Prisma", "Clerk", "MongoDB", "Anthropic AI"]
 },
 {
  title: "Call AZ",
  description: "Manages inbound calls with AI, producing call transcripts, audio URLs, and corresponding tickets, all accessible through a dashboard.",
  liveLink: "https://call-az.vercel.app/",
  image: "/call-az.png",
  technologies: ["Next.js", "Prisma", "MongoDB", "Clerk", "BlandAI"]
 },
];

const ProjectCard = ({ title, technologies, description, image, liveLink }) => (
  <div className="flex flex-col md:flex-row bg-white/30 rounded-lg shadow-md overflow-hidden mb-8 max-h-64 hover:bg-gradient-to-tr hover:from-teal-400/20 hover:to-rose-500/20 hover:shadow-2xl">
    <div className="md:w-1/3 w-full h-48 md:h-auto overflow-hidden p-6">
      {/* Fixed dimensions and object-cover for consistent image sizing */}
      <Image 
        src={image} 
        alt={title} 
        width={300} 
        height={200} 
        className="w-full h-full object-cover rounded-lg" 
      />
    </div>
    <div className="md:w-2/3 p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-2 text-slate-600">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-sm mr-2 mb-2 text-purple-400">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex space-x-4">
        <Link href={liveLink} className="text-purple-600 hover:text-purple-800 font-semibold">
          <span>Live</span>
        </Link>
      </div>
    </div>
  </div>
);
const Portfolio = () => (
  <div className="container mx-auto px-4 py-8">
    {projects.map((project, index) => (
      <ProjectCard 
        key={index}
        title={project.title}
        technologies={project.technologies}
        description={project.description}
        image={project.image}
        liveLink={project.liveLink}
      />
    ))}
  </div>
);

export default Portfolio;