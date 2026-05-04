'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
}

export default function Hero({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = 'Explore',
  ctaLink = '#' 
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neo-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-neo-white md:text-7xl lg:text-8xl neo-border inline-block bg-neo-purple px-8 py-4"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-xl font-bold text-neo-yellow md:text-2xl lg:text-3xl"
          >
            {subtitle}
          </motion.p>

          {ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href={ctaLink}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "2px 2px 0px 0px rgba(0, 0, 0, 1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="neo-button bg-neo-yellow text-lg md:text-xl"
                >
                  {ctaText}
                </motion.button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 z-20 h-20 w-20 rounded-full border-4 border-neo-pink bg-neo-green"
      />
      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-10 z-20 h-16 w-16 border-4 border-neo-blue bg-neo-orange"
      />
    </section>
  )
}
