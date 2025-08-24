"use client";

import { useState } from "react";
import { Input, Button, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { getAiResponse } from "@/lib/actions";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = input.trim();

      // Add user message immediately
      setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
      setInput("");

      // Get AI response
      const aiResponse = await getAiResponse(userMessage);

      // Add AI response
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <Card className="flex flex-col h-full m-4">
        <CardHeader>
          <h1 className="text-2xl font-bold">Makers Tech Assistant</h1>
        </CardHeader>
        <CardContent className="flex-grow overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our products..."
              className="flex-grow"
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
