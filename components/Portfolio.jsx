import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Badge } from './ui/badge';
import { Link2 } from 'lucide-react';

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
  <div className="flex flex-col sm:flex-col md:flex-row bg-white/30 rounded-lg shadow-md overflow-hidden mb-8 min-h-64
  md:max-h-64 hover:bg-gradient-to-tr hover:from-teal-400/20 hover:to-rose-500/20 hover:shadow-2xl transition-all duration-300">
    {/* Image section */}
    <div className="w-full h-72 md:h-auto md:w-1/3 p-4">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    
    {/* Content section */}
    <div className="flex flex-col justify-between p-6 md:w-2/3">
      <h2 className="text-2xl font-bold mb-2 text-slate-600">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-sm text-purple-400 border-purple-400">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex space-x-4 hover:text-white">
        <Link href={liveLink} className="text-purple-600  font-semibold">
          <span className='font-bold flex gap-2 hover:font-bold'>Live <Link2 /></span>
        </Link>
      </div>
    </div>
  </div>
);
const Portfolio = () => (
  <div className="">
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