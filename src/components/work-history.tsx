"use client"

import { motion } from "framer-motion"
import { Briefcase, Shield, Server } from "lucide-react"

const experience = [
  {
    company: "Independent Software Developer",
    role: "Freelance",
    period: "2025 – Present",
    description: "Consulting for businesses to automate workflows and optimize digital presence using AI and Custom Software Solutions.",
    points: [
      "AI Implementation: Architected autonomous AI agents using System Instructions and Skills to automate data categorization and task execution.",
      "Full-Stack Development: Built responsive web applications using React.js and Node.js, integrated with MongoDB and cloud services.",
      "Cloud Operations: Managed deployment processes using Docker and AWS (S3/Lambda) to ensure scalable performance."
    ],
    icon: Server
  },
  {
    company: "IBM",
    role: "SOC/NOC Analyst",
    period: "2019 – 2025",
    description: "Manage complex cybersecurity incidents and conduct full investigations in high-security environments.",
    points: [
      "Automation & Scripting: Developed Python and PowerShell scripts to automate log analysis and incident response playbooks, improving team efficiency.",
      "Utilized advanced SIEM and monitoring tools (QRadar, Splunk) to maintain system integrity and network performance."
    ],
    icon: Shield
  },
  {
    company: "IDF",
    role: "Technology Unit Commander",
    period: "2013 – 2016",
    description: "Led real-time IT operations and managed technical support teams for mission-critical system maintenance.",
    points: [
      "Outstanding Soldier Award (2016).",
      "Managed network infrastructure, Active Directory, and SCCM remote deployments."
    ],
    icon: Briefcase
  }
]

export function WorkHistory() {
  return (
    <section id="work" className="py-20">
       <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
        <p className="text-muted-foreground text-lg">
          Professional journey and key roles.
        </p>
      </div>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative border-l-2 border-border pl-8 pb-2"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{job.period}</span>
            </div>
            <div className="text-lg font-medium text-primary/80 mb-4">{job.role}</div>
            <p className="text-muted-foreground mb-4">{job.description}</p>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm">
                {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
