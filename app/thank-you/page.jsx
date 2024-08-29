import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ThankYouPage() {
 return (
  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-200 to-yellow-200">
   <div className="gap-4 flex flex-col items-center">
    <ThumbsUp size={50}/>
    <h1 className="text-xl">Thanks for reaching out I'll be contact very soon!</h1>
    <Button><Link href="/">Go back to homepage</Link></Button>
   </div>
  </div>
 );
}
