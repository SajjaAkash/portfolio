"use client"

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { profileData } from '@/data/profile'

export default function About() {
  return (
    <SectionWrapper id="about" dark>
      <SectionHeading label="About Me" title="About Me" subtitle={profileData.about.subtitle} />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-3xl p-8 border border-primary-500/10" data-cursor="card">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-800/80 rounded-2xl p-6 text-center border border-dark-700">
                <svg className="w-10 h-10 mx-auto text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <p className="text-white font-semibold">Cloud Data 
                  
                  Platforms</p>
                <p className="text-dark-400 text-sm">Azure & AWS</p>
              </div>
              <div className="bg-dark-800/80 rounded-2xl p-6 text-center border border-dark-700">
                <svg className="w-10 h-10 mx-auto text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p className="text-white font-semibold">Batch & Real-Time Processing</p>
                <p className="text-dark-400 text-sm">Spark & Kafka</p>
              </div>
              <div className="bg-dark-800/80 rounded-2xl p-6 text-center border border-dark-700">
                <svg className="w-10 h-10 mx-auto text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-white font-semibold">Data Modeling</p>
                <p className="text-dark-400 text-sm">Analytics & Architecture</p>
              </div>
              <div className="bg-dark-800/80 rounded-2xl p-6 text-center border border-dark-700">
                <svg className="w-10 h-10 mx-auto text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-white font-semibold">Monitoring & Reliability</p>
                <p className="text-dark-400 text-sm">Observability & Optimization</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {profileData.about.paragraphs.map((p, i) => (
            <p key={i} className="text-dark-300 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          <div className="mt-6 space-y-3">
            {profileData.about.strengths.map((strength, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                <span className="text-dark-200">{strength}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-xl border border-dark-700">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-dark-400 text-xs">Email</p>
                <p className="text-white text-sm font-medium">{profileData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-dark-800/50 rounded-xl border border-dark-700">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-dark-400 text-xs">Phone</p>
                <p className="text-white text-sm font-medium">{profileData.phone}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
