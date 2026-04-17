'use client'

import { motion } from 'framer-motion'

const SECTIONS = [
  {
    title: 'Information We Collect',
    icon: '📋',
    items: [
      'Basic user profile data when you choose to sign in (name, email, avatar).',
      'Usage analytics to improve platform performance and content relevance.',
      'Search queries to help us understand what topics our readers need most.',
    ],
  },
  {
    title: 'How We Use Your Data',
    icon: '🔍',
    items: [
      'To personalise your reading experience and surface relevant content.',
      'To monitor and improve platform health, speed, and reliability.',
      'To understand editorial gaps and invest in underserved civic topics.',
    ],
  },
  {
    title: 'Data Protection',
    icon: '🔒',
    items: [
      'We implement industry-standard encryption and access controls.',
      'Data is never sold to advertisers or third-party data brokers.',
      'You may request deletion of your personal data at any time.',
    ],
  },
  {
    title: 'Third-Party Services',
    icon: '🔗',
    items: [
      'We use trusted analytics and infrastructure providers with their own privacy policies.',
      'Authentication is handled by secure OAuth providers (e.g. Google).',
      'We do not allow third-party ad tracking scripts on this platform.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-5 inline-block rounded-full border border-gray-200 bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-500 shadow-sm"
          >
            Legal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-2xl text-base leading-relaxed text-gray-500"
          >
            We believe in transparency. This page explains exactly what data we collect,
            why we collect it, and how we keep it safe. Last updated:{' '}
            <span className="font-medium text-gray-700">April 2025</span>.
          </motion.p>
        </div>
      </section>

      {/* ── Sections ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        {SECTIONS.map((sec, i) => (
          <motion.div
            key={sec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-xl border border-gray-100">
                {sec.icon}
              </span>
              <h2 className="text-lg font-bold text-gray-900">{sec.title}</h2>
            </div>

            <ul className="space-y-3">
              {sec.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      {/* <section className="mx-auto max-w-4xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
        >
          <h2 className="mb-2 font-bold text-gray-900">Questions about your privacy?</h2>
          <p className="mb-4 text-sm text-gray-500">
            Reach out to our privacy team — we aim to respond within 72 hours.
          </p>
          <a
            href="mailto:privacy@unscriptedindia.in"
            className="text-sm font-semibold text-amber-600 hover:underline"
          >
            privacy@unscriptedindia.in →
          </a>
        </motion.div>
      </section> */}

    </main>
  )
}