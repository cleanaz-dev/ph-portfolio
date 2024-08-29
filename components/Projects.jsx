import React from "react";
import { motion } from 'framer-motion'
import Link from "next/link";
import Image from "next/image";

const projects = [
 {
  title: "Ticket Genie",
  description:
   "A standard ticketing app enhanced with Anthropic AI for generating responses based on issue.",
  url: "https://ticket-genie.vercel.app/",
  image: "/ticket-genie.png",
 },
 {
  title: "Barber AZ",
  description: "Allows users to book appointments via a VoiceFlow chatbot, with email confirmations and AI-driven customer service. Includes an admin dashboard.",
  url: "https://barber-az.vercel.app/",
  image: "/barber-az.png",
 },
 {
  title: "Budget Buddy",
  description: "Enables users to set budgets, upload receipts, and receive AI analysis of their spending.",
  url: "https://budget-buddy-gamma.vercel.app/",
  image: "/budget-az.png",
 },
 {
  title: "Call AZ",
  description: "Manages inbound calls with AI, producing call transcripts, audio URLs, and corresponding tickets, all accessible through a dashboard.",
  url: "https://call-az.vercel.app/",
  image: "/Call-az.png",
 },
];

export default function Projects() {
 return (
  <>
   <section className="mt-10 py-10 max-w-6xl mx-auto">
        <h1 className="text-5xl text-rose-300 text-center font-bold tracking-widest mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
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
        </div>
      </section>
  </>
 );
}
