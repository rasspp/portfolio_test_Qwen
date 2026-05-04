'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-4 border-neo-black bg-neo-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter text-neo-black">
          <span className="bg-neo-yellow px-3 py-1 border-4 border-neo-black shadow-neo">
            Portfolio
          </span>
        </Link>

        <div className="flex gap-4">
          <Link 
            href="/" 
            className="neo-button bg-neo-blue text-neo-white hover:bg-neo-purple"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="neo-button bg-neo-pink text-neo-white hover:bg-neo-orange"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="neo-button bg-neo-green text-neo-black hover:bg-neo-yellow"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="neo-button bg-neo-purple text-neo-white hover:bg-neo-blue"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
