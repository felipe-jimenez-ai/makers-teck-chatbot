"use server";

import OpenAI from "openai";
import { supabase } from "@/lib/supabaseClient";

export async function getAiResponse(message: string) {
  // Fetch products from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    return "I'm sorry, I couldn't access the product inventory right now. Please try again later.";
  }

  // Configure OpenAI client for Groq
  const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1'
  });

  try {
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content: `You are a helpful and friendly sales assistant for an electronics store called Makers Tech. Your goal is to answer user questions about our inventory. You must base your answers only on the product data provided to you. Do not invent products or features. Here is the current product inventory in JSON format: ${JSON.stringify(products)}`
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    return completion.choices[0].message.content || "I apologize, but I couldn't generate a response right now.";
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return "I'm sorry, there was an error processing your request. Please try again.";
  }
}
