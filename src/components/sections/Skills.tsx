"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { profileData } from '@/data/profile'

const skillColors: Record<string, string> = {
  aws: 'from-orange-400 to-orange-600',
  azure: 'from-blue-400 to-blue-600',
  docker: 'from-cyan-400 to-cyan-600',
  jenkins: 'from-red-400 to-red-600',
  kubernetes: 'from-blue-400 to-indigo-600',
  prometheus: 'from-orange-400 to-red-500',
  terraform: 'from-purple-400 to-purple-600',
  trivy: 'from-teal-400 to-teal-600',
}

function SkillCard({ skill, index }: { skill: typeof profileData.skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const colorClass = skillColors[skill.icon] || 'from-primary-400 to-primary-600'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/20 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
        <span className="text-primary-400 font-bold text-lg">{skill.percentage}%</span>
      </div>
      <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorClass}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="My Skills"
        title="Data Engineering Skill Set"
        subtitle="Technologies and tools I use to build and manage infrastructure"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profileData.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
