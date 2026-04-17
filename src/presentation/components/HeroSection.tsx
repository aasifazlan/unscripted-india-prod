'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="mb-12">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 md:p-12">
        
        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-saffron-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-3xl">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs tracking-wide uppercase bg-gray-900 text-white px-3 py-1 rounded-full mb-4"
          >
            Independent Civic Platform
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6"
          >
            Decode India — Beyond Headlines
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
          >
            <span className="font-medium text-gray-800">Unscripted India</span> is a modern civic think space that simplifies 
            India’s history, culture, laws, policies, and constitutional changes —
            so you don’t just read the news, you understand the system behind it.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              'History & Context',
              'Policy Breakdown',
              'Legal Simplified',
              'Civic Awareness',
              'Deep Explanations',
            ].map((item) => (
              <motion.span
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="#articles"
              className="px-5 py-2.5 rounded-lg bg-saffron-600 text-white text-sm font-medium hover:bg-saffron-700 transition"
            >
              Start Exploring
            </a>

            {/* <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              Learn more →
            </a> */}
          </motion.div>

        </div>
      </div>
    </section>
  )
}