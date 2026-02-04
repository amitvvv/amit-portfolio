"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:gap-12 min-h-[70vh] py-20 mx-auto w-full">
      
      {/* Left Column: Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[300px] md:max-w-[350px] aspect-square mx-auto md:mx-0 mb-8 md:mb-0 flex-shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-3xl -rotate-6 opacity-20 blur-lg"></div>
        <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
          <Image
            src="/amit-profile.jpeg" // Using a slightly different seed for variety, or keep same.
            alt="Amit Wizel"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </motion.div>

      {/* Right Column: Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left w-full">
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
            Amit Wizel
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
            Software Engineer | Full-Stack & AI Solutions
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-muted-foreground">
             <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> Tel Aviv, Israel</span>
             <span className="flex items-center gap-1"><Phone className="w-4 h-4"/> 054-6449492</span>
             <span className="flex items-center gap-1"><Mail className="w-4 h-4"/> amitvvv@gmail.com</span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0"
        >
          B.Sc. Computer Science graduate and Full-Stack Software Engineer specialized in building <span className="text-foreground font-medium">AI-driven SaaS platforms</span> and scalable cloud architectures. 
          Deeply focused on Agentic Workflows, RAG implementations, and complex backend integrations. 
          Bridging the gap between robust infrastructure, cybersecurity, and modern AI solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
        >
          <Link
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View Projects
          </Link>
          <Link
            href="mailto:amitvvv@gmail.com"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
           <Link
            href="/Amit_Wizel_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Resume <FileText className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}