"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import Modal from '@/components/ui/Modal'
import { profileData } from '@/data/profile'

const projectColors = [
  'from-blue-600/20 to-cyan-600/20',
  'from-purple-600/20 to-pink-600/20',
  'from-green-600/20 to-teal-600/20',
  'from-orange-600/20 to-red-600/20',
]

const projectIcons = [
  <svg key="1" className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="2" className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  <svg key="3" className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="4" className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <SectionWrapper id="projects" dark>
      <SectionHeading
        label="Latest Works"
        title="Real-World Projects I've Designed and Delivered"
        subtitle="Infrastructure solutions that solve real business challenges"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {profileData.projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelectedProject(i)}
            data-cursor="card"
            data-cursor-text="View"
            className="group cursor-pointer bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all hover:shadow-lg hover:shadow-primary-500/5"
          >
            <div className={`h-48 bg-gradient-to-br ${projectColors[i]} flex items-center justify-center`}>
              {projectIcons[i]}
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-md">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-md">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <Modal
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
            title={profileData.projects[selectedProject].title}
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full">
                {profileData.projects[selectedProject].category}
              </span>
              <p className="text-dark-300 leading-relaxed">
                {profileData.projects[selectedProject].description}
              </p>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.projects[selectedProject].tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-dark-700 text-primary-400 text-xs font-medium rounded-lg border border-dark-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
