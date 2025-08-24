# Makers Tech - AI Inventory Assistant

This repository contains the source code for the "Makers Tech AI Inventory Assistant," a proof-of-concept chatbot designed to provide real-time, natural language answers to customer queries about product inventory.

This project was built to demonstrate how a modern AI-powered solution can enhance customer experience and provide instant, accurate information, directly driven by the company's live inventory database. Here is the 5-minute video demo showcasing this application.

https://github.com/user-attachments/assets/178f5fe6-463e-4f65-b5da-bff7216ef56a

## ✨ Core Features

*   **Real-Time Inventory Awareness:** The chatbot connects directly to a Supabase PostgreSQL database, ensuring all its answers are based on the latest stock levels, prices, and product details.
*   **Natural Language Understanding:** Users can ask questions in a conversational way (e.g., "How many HPs do you have?" or "Tell me more about the Dell laptop").
*   **Lightning-Fast Responses:** Powered by the Groq LPU Inference Engine, the AI provides answers with exceptionally low latency for a smooth user experience.
*   **Clean, Modern Interface:** The user interface is built with Next.js and Tailwind CSS, providing a responsive and intuitive chat experience.

## 🛠️ Technology Stack

*   **Framework:** Next.js (React)
*   **Database:** Supabase (PostgreSQL)
*   **AI/LLM:** Groq API with Llama 3
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui

## 🚀 Getting Started

To run this project locally, please follow these steps:

### 1. Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/makers-tech-chatbot.git
cd makers-tech-chatbot
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Environment Variables

This project requires API keys for Supabase and Groq.

1.  Create a new file in the root of the project named `.env.local`.
2.  Copy the contents of `.env.example` (or the block below) into it:

    ```
    # Supabase Project URL and Public Anon Key
    # Found in your Supabase Project Settings > API
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

    # Groq API Key
    # Found in your Groq Console > API Keys
    GROQ_API_KEY=YOUR_GROQ_API_KEY
    ```

3.  Replace the placeholder values with your actual keys.

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
