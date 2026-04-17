'use client'

import { motion } from 'framer-motion'

const SECTIONS = [
  {
    title: 'Use of Content',
    icon: '📄',
    body: "All content on Unscripted India is provided for informational and civic education purposes only. It does not constitute legal, financial, or professional advice. Always consult a qualified professional for decisions that may have legal consequences.",
  },
  {
    title: 'User Responsibilities',
    icon: '👤',
    items: [
      'Use the platform only for lawful, non-harmful purposes.',
      'Do not post, submit, or distribute misleading, defamatory, or harmful content.',
      'Respect the intellectual property rights of authors and sources cited on the platform.',
      "Do not attempt to disrupt, hack, or manipulate the platform's systems or data.",
    ],
  },
  {
    title: 'Content Accuracy',
    icon: '🎯',
    body: "We make every effort to ensure the accuracy and currency of our content. However, laws and policies evolve rapidly — we do not guarantee completeness or correctness at all times. Always cross-reference with official government sources for critical decisions.",
  },
  {
    title: 'Intellectual Property',
    icon: '©️',
    body: "All original content, branding, and editorial work on this platform is the intellectual property of Unscripted India. You may share links and short excerpts with attribution. Reproduction of full articles or substantial portions without written permission is not permitted.",
  },
  {
    title: 'Limitation of Liability',
    icon: '⚠️',
    body: "Unscripted India and its contributors shall not be liable for any decisions, losses, or consequences arising from the use of information on this platform. Use of this platform is at your own discretion.",
  },
  {
    title: 'Changes to These Terms',
    icon: '🔄',
    body: "We may update these Terms of Service from time to time to reflect changes in our platform or applicable law. Continued use of the platform after updates constitutes your acceptance of the revised terms.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white via-gray-50 to-slate-50/50">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-slate-400/8 blur-3xl" />

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
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-2xl text-base leading-relaxed text-gray-500"
          >
            By accessing or using Unscripted India, you agree to the following terms.
            Please read them carefully. Last updated:{' '}
            <span className="font-medium text-gray-700">April 2025</span>.
          </motion.p>
        </div>
      </section>

      {/* ── Terms sections ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-5">
        {SECTIONS.map((sec, i) => (
          <motion.div
            key={sec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-xl border border-gray-100">
                {sec.icon}
              </span>
              <h2 className="text-lg font-bold text-gray-900">{sec.title}</h2>
            </div>

            {sec.body && (
              <p className="text-sm text-gray-500 leading-relaxed">{sec.body}</p>
            )}

            {sec.items && (
              <ul className="space-y-3">
                {sec.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
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
          <h2 className="mb-2 font-bold text-gray-900">Legal enquiries</h2>
          <p className="mb-4 text-sm text-gray-500">
            For questions regarding these terms or any legal matter, contact our team.
          </p>
          <a
            href="mailto:legal@unscriptedindia.in"
            className="text-sm font-semibold text-amber-600 hover:underline"
          >
            legal@unscriptedindia.in →
          </a>
        </motion.div>
      </section> */}

    </main>
  )
}