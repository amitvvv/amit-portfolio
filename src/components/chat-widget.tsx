"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  return <ChatWidgetContent />
}

function ChatWidgetContent() {
   const [messages, setMessages] = useState<any[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: "Hey there! I'm Amit's AI agent. Ask me why he's the Full-Stack expert you need.(can do it in Hebrew too!😉)"
        }
   ]);
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   
   const append = async (userMessage: any) => {
       const newMessages = [...messages, userMessage];
       setMessages(newMessages);
       setIsLoading(true);
       
       try {
           const response = await fetch('/api/chat', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ messages: newMessages })
           });
           
           if (!response.ok) {
               const errorData = await response.json().catch(() => ({}));
               throw new Error(errorData.error || "Failed to fetch response");
           }
           
           // Simple text stream handling
           const reader = response.body?.getReader();
           const decoder = new TextDecoder();
           let assistantMessage = { id: Date.now().toString(), role: 'assistant', content: '' };
           setMessages(prev => [...prev, assistantMessage]);
           
           if (reader) {
               while (true) {
                   const { done, value } = await reader.read();
                   if (done) break;
                   const chunk = decoder.decode(value, { stream: true });
                   assistantMessage.content += chunk;
                   // Update the last message with new content
                   setMessages(prev => {
                       const updated = [...prev];
                       updated[updated.length - 1] = { ...assistantMessage };
                       return updated;
                   });
               }
           }
           
       } catch (error: any) {
           console.error(error);
           setMessages(prev => [...prev, { id: 'error', role: 'assistant', content: `Error: ${error.message || "Something went wrong."}` }]);
       } finally {
           setIsLoading(false);
       }
   };
  
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { id: Date.now().toString(), role: "user", content: input }
    setInput("")
    await append(userMessage)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-6 w-[calc(100vw-3rem)] md:w-[400px] h-[600px] max-h-[85vh] border border-white/20 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden backdrop-blur-md bg-background/80"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-indigo-600/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-bold text-base">Amit's Hype Agent</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex w-full",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    dir="auto"
                    className={cn(
                      "max-w-[85%] rounded-2xl px-5 py-3 text-base shadow-sm whitespace-pre-wrap break-words",
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-br-none"
                        : "bg-muted/95 text-foreground rounded-bl-none border border-white/10"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                 <div className="flex justify-start">
                  <div className="bg-muted/80 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-background/50">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Amit..."
                  className="w-full bg-muted/50 border-white/20 border rounded-full py-4 pl-6 pr-14 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-indigo-600 text-white rounded-full disabled:opacity-50 hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-indigo-500/50 transition-shadow ring-2 ring-white/20"
      >
        <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 animate-ping"></span>
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </motion.button>
    </>
  )
}
