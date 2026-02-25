"use client"

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function SectionWrapper({ id, children, className = '', dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${dark ? 'bg-dark-900/50' : 'bg-dark-950'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}
