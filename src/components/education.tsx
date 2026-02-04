"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 border-t border-border/40">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
        <p className="text-muted-foreground text-lg">
          Academic background and degrees.
        </p>
      </div>

      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative pl-8 border-l-2 border-primary/20"
        >
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary shadow-sm" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">Bachelor of Science: Computer Science</h3>
            <div className="flex items-center gap-2 text-sm font-medium text-primary mt-1 sm:mt-0 bg-primary/10 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              2021 - 2025
            </div>
          </div>
          
          <div className="text-lg font-medium text-muted-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Holon Institute of Technology (HIT)
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Specialized in software engineering, algorithms, and artificial intelligence. 
            Demonstrated strong problem-solving abilities and technical proficiency throughout the degree.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
