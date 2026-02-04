"use client"

import { motion } from "framer-motion"
import { ShoppingBag, ShieldCheck } from "lucide-react"

const projects = [
  {
    title: "ShopAi | AI SaaS Sales Agent for Shopify",
    role: "Architect & Lead Developer",
    date: "2025 - Present",
    description: "Architected a system enabling real-time synchronization between LLMs and Shopify API for autonomous sales and inventory checks. Implemented complex Function Calling workflows to execute active cart operations (Add-to-Cart, Checkout, Search Items) directly via WhatsApp interface.",
    features: [
      "Multi-tenant Prompt Engine (Brand Personas)",
      "Serverless Backend (Node.js/AWS Lambda)",
      "High-concurrency webhooks handling",
      "Tech Stack: TypeScript, Next.js, PostgreSQL, OpenAI API, Shopify Admin API"
    ],
    icon: ShoppingBag,
    tags: ["TypeScript", "Next.js", "AWS Lambda", "OpenAI", "Shopify API"]
  },
  {
    title: "CareChain | Blockchain-Powered Secure Medical System",
    role: "Full-Stack Developer",
    date: "Final Project Award",
    description: "Designed a secure platform for medical record management using Node.js, React, and Solidity Smart Contracts. Recognized as an Outstanding Final Project for technical complexity and innovation.",
    features: [
      "Role-Based Access Control (RBAC)",
      "Digital certificate-based login (JWT & TLS)",
      "Deployed on Ubuntu with Apache Reverse Proxy",
      "Dockerized environment consistency"
    ],
    icon: ShieldCheck,
    tags: ["Node.js", "React", "Solidity", "Smart Contracts", "Docker", "Security"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Projects</h2>
        <p className="text-muted-foreground text-lg">
          Innovative solutions bridging AI, Security, and Cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border border-border rounded-xl p-8 hover:bg-accent/40 transition-colors flex flex-col h-full bg-card/50 backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <project.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-medium text-muted-foreground border border-border px-2 py-1 rounded bg-background/50">{project.date}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            <div className="text-sm font-semibold text-indigo-600/80 mb-4 uppercase tracking-wide">{project.role}</div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="mb-6 space-y-2">
                {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-sm text-muted-foreground/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium border border-secondary-foreground/10 hover:bg-indigo-100 hover:text-indigo-800 transition-colors cursor-default">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}