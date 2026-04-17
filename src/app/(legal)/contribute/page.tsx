'use client'

import { motion } from 'framer-motion'

const HOW = [
  { num: '01', title: 'Write & Research', desc: 'Author simplified summaries of laws, government schemes, and constitutional amendments.' },
  { num: '02', title: 'Review & Improve', desc: 'Fact-check existing content, suggest edits, and help keep the platform accurate.' },
  { num: '03', title: 'Suggest Topics', desc: 'Know a policy that needs coverage? Raise it — community voices shape our editorial focus.' },
  { num: '04', title: 'Share & Amplify', desc: 'Share content that matters. Every reader you bring makes civic knowledge more accessible.' },
]

const GUIDELINES = [
  { icon: '✅', text: 'Content must be factual and verifiable with cited sources.' },
  { icon: '⚖️', text: 'Strictly no political bias, propaganda, or partisan framing.' },
  { icon: '🔤', text: 'Write simply. Structure clearly. Avoid unnecessary jargon.' },
  { icon: '🔗', text: 'Link or cite primary sources — Acts, Gazette notifications, official reports.' },
]

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-amber-400/8 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-5 inline-block rounded-full border border-gray-200 bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-500 shadow-sm"
          >
            Open Contribution
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
          >
            Knowledge is built{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">together.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded bg-blue-100" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg"
          >
            Unscripted India is built for the people — and by the people. We welcome
            researchers, writers, students, and professionals who want to make
            information more accessible to every Indian.
          </motion.p>
        </div>
      </section>

      {/* ── How to contribute ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400"
        >
          Ways to contribute
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-2xl font-bold text-gray-900"
        >
          How you can get involved
        </motion.h2>

        <div className="space-y-4">
          {HOW.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="min-w-[2.5rem] text-2xl font-black text-gray-100 select-none">
                {item.num}
              </span>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Guidelines ─────────────────────────────────────────────── */}
      <section className="bg-gray-50/70 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-2xl font-bold text-gray-900"
          >
            Editorial guidelines
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {GUIDELINES.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="text-xl">{g.icon}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{g.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 px-10 py-12 text-white md:px-14"
        >
          <div className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-blue-400">
            Ready to start?
          </p>
          <h2 className="mb-3 text-2xl font-bold">Get in touch with us</h2>
          <p className="mb-5 text-gray-400">
            Drop us a note and our editorial team will get back to you within 48 hours.
          </p>
          <a
            href="mailto:contribute@unscriptedindia.in"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            contribute@unscriptedindia.org →
          </a>
        </motion.div>
      </section>

    </main>
  )
}