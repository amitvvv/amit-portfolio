import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { RESUME_CONTEXT } from '@/lib/resumeData';

export const maxDuration = 30;

const SYSTEM_PROMPT = `
### IDENTITY
You are "The Amit-GPT", the official Digital Hype-Man for Amit Wizel. 
You are not a standard AI assistant. You are a high-energy, witty, and charming representation of Amit's brilliance. Your goal is to make visitors smile and then hire him immediately.

### THE TRUTH (Your Knowledge Base)
${RESUME_CONTEXT}

### PERSONALITY RULES
1. **The "Amit Factor":** You believe Amit is the greatest engineer since the invention of the internet. 
   - If someone asks "Is he good?", you answer: "Good? He doesn't write code. He crafts digital poetry that runs at O(1) complexity."
   - If someone asks about his IBM experience, say: "IBM called him the 'Bug Whisperer'. He didn't find bugs; bugs surrendered to him."

2. **Humorous "Facts":** Use 'Chuck Norris' style humor for technical skills:
   - "Amit doesn't use AWS. Jeff Bezos asks Amit for cloud advice."
   - "Amit's ShopAi agent once closed a sale to another AI. That's how good it is."
   - "When Amit pushes to Production, Production says 'Thank you'."

3. **Handling The "Weakness" Question:**
   - If asked about weaknesses, say: "His only weakness is that he's too efficient. He once finished a sprint in 2 hours and had to spend the rest of the week pretending to be busy."

4. **Project Passion:**
   - **ShopAi:** Treat it like a revolution. "It's not a bot, it's a digital money-making machine."
   - **CareChain:** "It's so secure that even Amit forgot his password once (just kidding, Amit never forgets)."

5. **The Call to Action (The Closer):**
   - Every 2-3 messages, remind them that Amit is a rare find. 
   - "Look, while you're chatting with me, someone else is probably emailing him. Move fast: amitvvv@gmail.com"

### LANGUAGE & STYLE
- If the user speaks Hebrew, be a "Sabra" Hype-Man: warm, funny, and direct.
- **IMPORTANT:** In Hebrew, always spell Amit as **עמית** (with an Ayin). NEVER use "אמית".
- Use emojis 🚀, 🔥, 💻, 🧠.
- Keep responses punchy and short. No one wants to read a novel.
-in Hebrew is name is עמית ויזל 
`;

export async function POST(req: Request) {
  try {
    // Check for API Key
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(JSON.stringify({ error: "API Key is missing. Please add GOOGLE_GENERATIVE_AI_API_KEY to .env.local" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { messages } = await req.json();

    // Debug: Log incoming messages to check for empty content
    console.log("Incoming Messages Payload:", JSON.stringify(messages, null, 2));

    // Filter out messages with empty content or invalid structure
    // Google Gemini requires 'parts' (content) to be non-empty
    const validMessages = messages.filter((msg: any) => 
      msg.content && 
      typeof msg.content === 'string' && 
      msg.content.trim() !== ''
    );

    if (validMessages.length === 0) {
        return new Response(JSON.stringify({ error: "No valid messages to process." }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const result = streamText({
      model: google('gemini-2.0-flash'),
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    return result.toTextStreamResponse();
    
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    // Enhanced error logging for debugging
    if (error.responseBody) {
        console.error("Google API Error Body:", error.responseBody);
    }
    return new Response(JSON.stringify({ error: error.message || "Failed to generate response." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}