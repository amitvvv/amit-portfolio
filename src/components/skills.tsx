"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Languages",
    items: ["Python", "Node.js (JS/TS)", "C++", "Java", "Solidity", "SQL", "PowerShell"]
  },
  {
    category: "AI & GenAI",
    items: ["Agentic RAG", "OpenAI Function Calling", "Prompt Engineering", "LLM Workflows", "Vector Databases"]
  },
  {
    category: "Backend & Cloud",
    items: ["AWS (S3, Lambda, API Gateway)", "Docker", "Git", "Microservices", "NestJS"]
  },
  {
    category: "Web & Frameworks",
    items: ["React.js", "Express.js", "Next.js", "REST APIs", "GraphQL"]
  },
  {
    category: "Databases",
    items: ["MongoDB (Atlas)", "PostgreSQL", "Prisma ORM", "Mongoose"]
  },
  {
    category: "Security",
    items: ["JWT", "RBAC", "Smart Contract Security", "TLS"]
  }
]

export function Skills() {
  return (
    <section className="py-12 border-y border-border/40 bg-muted/20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Technical Skills</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
           <motion.div 
             key={index}
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.4, delay: index * 0.1 }}
           >
             <h3 className="font-semibold text-foreground mb-3">{skillGroup.category}</h3>
             <div className="flex flex-wrap gap-2">
               {skillGroup.items.map((item, idx) => (
                 <span 
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-background border border-border text-muted-foreground"
                 >
                   {item}
                 </span>
               ))}
             </div>
           </motion.div>
        ))}
      </div>
    </section>
  )
}
