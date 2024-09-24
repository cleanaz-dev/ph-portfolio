"use server"
import axios from "axios";
import { redirect } from "next/navigation";

export const contactForm = async (formData) => {
  try {
    console.log("data received:", formData)
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = formData.get('subject');
    const budget = formData.get('budget');

    await axios.post('https://hook.us1.make.com/gjym3sebgrpaabmxldhn9yszsuetu2fz', {
      name,
      email,
      message,
      subject,
      budget,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send contact form");
  }
  redirect("/thank-you")
}