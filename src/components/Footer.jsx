import { ArrowUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between">
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Mukul Sharma All rights reserved.</p>
        <a href="#hero" className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUp size={20}/></a>
        </footer>

  )
}
