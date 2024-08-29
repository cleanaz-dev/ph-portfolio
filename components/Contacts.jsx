import React from "react";

import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "./ui/select";

import { submitForm } from "@/lib/actions";
import { Input } from "./ui/input";
import { SubmitButton } from "./SubmitButton";

export default function Contacts() {
 return (
  <div className="min-h-[1000px] flex flex-col justify-center items-center ">
    <h2 className="text-4xl font-bold mb-6 text-center text-white bg-rose-300/30 p-4 rounded-md hover:bg-teal-300/30 transition-colors duration-300">Let's Connect</h2>
    <p className="max-w-3xl text-center pb-4">I'm always excited to discuss new projects and opportunities. Let's chat about how we can bring your web ideas to life!</p>
   <section id="contacts" className="w-full max-w-3xl mx-auto pt-6 px-6 pb-10 bg-white/30 rounded-lg shadow-lg hover:bg-white/60 transition-colors duration-500">
    <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
    <form action={submitForm} className="space-y-4">
     <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
       <Label htmlFor="name">Name</Label>
       <Input 
         id="name" 
         type="text"
         placeholder="Your name" 
         name="name"
         autocomplete="name" 
         required 
        />
      </div>
      <div className="space-y-2">
       <Label htmlFor="email">Email</Label>
       <Input
        id="email"
        type="email"
        name="email"
        autocomplete="email" 
        placeholder="your.email@example.com"
        required
       />
      </div>
      <div className="space-y-2">
       <Label htmlFor="mobile">Mobile Number</Label>
       <Input
        id="mobile"
        name="mobile"
        type="tel"
        autocomplete="tel" 
        placeholder="Your mobile number"
        required
       />
      </div>
      <div className="space-y-2">
       <Label htmlFor="budget">Budget</Label>
       <Select name="budget">
        <SelectTrigger id="budget">
         <SelectValue placeholder="Select your budget range" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="less-than-5k">Less than $5,000</SelectItem>
         <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
         <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
         <SelectItem value="more-than-20k">More than $20,000</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
     <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
       id="message"
       name="message"
       placeholder="Your message"
       required
       className="min-h-[100px]"
      />
     </div>
     <SubmitButton />
    </form>
   </section>
  </div>
 );
}
