'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t-4 border-neo-black bg-neo-yellow py-8"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-lg font-bold text-neo-black">
          © {new Date().getFullYear()} Neo-Brutalism Portfolio. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a 
            href="#" 
            className="neo-button bg-neo-blue text-neo-white text-sm"
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="neo-button bg-neo-pink text-neo-white text-sm"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="neo-button bg-neo-green text-neo-black text-sm"
          >
            Twitter
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
