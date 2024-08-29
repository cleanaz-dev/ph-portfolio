"use client"

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

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
          className="bg-gradient-to-r from-rose-100 to-teal-100 flex w-full">
          <span>Submit Form </span>
        </Button>
      )}
    </>
  )
}


