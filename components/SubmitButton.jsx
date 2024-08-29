"use client"

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
     {pending ? (
        <Button disabled className="">
          <Loader2Icon className="w-4 h-4 animate-spin" />
        </Button>
      ) : (
        <Button 
          type="submit" 
          className="bg-white text-black flex w-full hover:text-teal-500 hover:bg-slate-50">
          <span>Submit Form </span>
        </Button>
      )}
    </>
  )
}


