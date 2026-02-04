# 🚀 Project Overview: Amit Wizel AI Portfolio

This is a high-performance, modern personal portfolio website engineered for **Amit Wizel**. It serves as a professional showcase of full-stack capabilities and AI implementation expertise.

## 🛠️ The Tech Stack

### **Core Frameworks**
*   **Next.js 16 (App Router):** Leverages the latest React 19 features, utilizing Server Components for optimized performance and SEO.
*   **React 19:** The cutting-edge library for building interactive user interfaces.
*   **TypeScript:** Full type safety across the entire application to ensure code reliability.

### **Styling & UI/UX**
*   **Tailwind CSS 4.0:** Utilizes the newest utility-first CSS engine, configured via native CSS variables for speed and flexibility.
*   **Framer Motion:** Powers smooth entrance animations, transitions, and the interactive chat widget.
*   **Lucide React:** A comprehensive set of clean, SVG-based icons.
*   **Next-Themes:** Manages seamless Dark/Light mode switching with system preference detection.

### **Artificial Intelligence**
*   **Google Gemini 2.0 Flash:** The core Large Language Model (LLM) providing intelligent, low-latency responses.
*   **Vercel AI SDK:** Handles real-time streaming of AI responses, creating a dynamic, ChatGPT-like user experience.
*   **Edge-Ready API Routes:** Secure backend infrastructure for AI communication and secret management.

---

### 📂 Project Structure

*   **`src/app/`**: Contains the main page layout, global styles, and the `/api/chat` route.
*   **`src/components/`**: Modularized UI components including:
    *   `Hero`: 2-column layout with profile image and professional summary.
    *   `ChatWidget`: Advanced AI chat interface with RTL support and large-scale typography.
    *   `Projects`: Grid-based showcase of selected work (ShopAi, CareChain).
    *   `Education` & `WorkHistory`: Clean, timeline-based career sections.
*   **`src/lib/`**: Contains `resumeData.ts`, which acts as the "Source of Truth" for the AI Agent.
*   **`public/`**: Home for static assets like profile images (`amit-profile.jpeg`).

---

### ✨ Key Features

1.  **"Amit-GPT" Persona:** A specialized AI "Hype-Man" designed to be confident and witty.
2.  **Bilingual Intelligence:** Automatically detects and responds in both Hebrew (Sabra-style) and English.
3.  **Maximum Contrast Design:** Engineered high-visibility typography for both Light and Dark modes.
4.  **RTL/LTR Auto-Detection:** Full support for Hebrew text within the chat window using `dir="auto"`.
5.  **Modern Aesthetic:** A wide, spacious layout (`max-w-7xl`) inspired by top-tier tech sites like Linear and Raycast.

---

### 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file and add your Google AI Key:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
