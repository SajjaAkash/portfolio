"use client"

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { profileData } from '@/data/profile'

interface TimelineItem {
  dateRange: string
  role?: string
  degree?: string
  company?: string
  university?: string
  description: string
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-primary-400 z-10" />
      <div className="absolute left-[5px] top-4 bottom-0 w-0.5 bg-dark-700 last:hidden" />

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 hover:border-primary-500/30 transition-colors" data-cursor="card">
        <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full mb-3">
          {item.dateRange}
        </span>
        <h3 className="text-lg font-semibold text-white">
          {item.role || item.degree}
        </h3>
        <p className="text-primary-400 text-sm font-medium mt-1">
          {item.company || item.university}
        </p>
        <p className="text-dark-400 text-sm mt-3 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <SectionHeading
        label="My Resume"
        title="Real Problem Solutions Experience"
        subtitle="A timeline of my professional journey and educational background"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            Work Experience
          </h3>
          {profileData.experience.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            Education & Certifications
          </h3>
          {profileData.education.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
