"use server";

import axios from 'axios';
import { redirect } from 'next/navigation';

export const submitForm = async (formData) => {
  try {
    console.log("data received: ", formData);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const mobile = formData.get('mobile');
    const budget = formData.get('budget');

    await axios.post('https://hook.us1.make.com/gjym3sebgrpaabmxldhn9yszsuetu2fz', {
      name,
      email,
      message,
      mobile,
      budget,
    })
    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit the form. Please try again later.');
  }
  redirect('/thank-you');
}