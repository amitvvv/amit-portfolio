"use client"

import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50 transition-colors duration-300">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 mx-auto">
        <div className="font-bold text-xl md:text-2xl tracking-tight whitespace-nowrap min-w-fit">
          <span className="text-indigo-600 dark:text-indigo-400">Amit Wizel</span>
        </div>
        
        <div className="flex items-center gap-4">
            <ModeToggle />
        </div>
      </div>
    </header>
  )
}
