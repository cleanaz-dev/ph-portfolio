"use server";

import axios from 'axios';

export const submitForm = async (formData) => {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const mobile = formData.get('mobile');

    await axios.post('https://your-api-endpoint.com/submit', {
      name,
      email,
      message,
      mobile,
    })
    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit the form. Please try again later.');
  }
}