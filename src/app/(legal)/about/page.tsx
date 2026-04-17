'use client'

import { motion, Transition } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  } satisfies Transition,
})

const PILLARS = [
  {
    icon: '⚖️',
    title: 'Laws & Policies',
    desc: "Complex legislation translated into plain language everyone can act on.",
  },
  {
    icon: '🏛️',
    title: 'Governance',
    desc: 'From Parliament to Panchayat — understand how decisions get made.',
  },
  {
    icon: '🗺️',
    title: 'State Insights',
    desc: 'Hyperlocal coverage of policies that matter in your region.',
  },
  {
    icon: '📜',
    title: 'Constitutional History',
    desc: "The story of India's founding documents and how they've evolved.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white via-gray-50 to-amber-50/40">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/8 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
          <motion.span
            {...fadeUp(0.05)}
            className="mb-5 inline-block rounded-full border border-gray-200 bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-500 shadow-sm"
          >
            About Us
          </motion.span>

          <motion.h1
            {...fadeUp(0.15)}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
          >
            Built to make India's systems{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-amber-600">legible</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded bg-amber-100" />
            </span>{' '}
            for everyone.
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg"
          >
            <span className="font-semibold text-gray-800">Unscripted India</span> is a
            modern civic think space that simplifies India's history, culture, laws,
            policies, and constitutional changes — so you don’t just read the news, you
            understand the system behind it.
          </motion.p>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-amber-600">
              The problem
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Important decisions, inaccessible language.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every day, policies, laws, and constitutional decisions are made that affect
              millions of Indians — yet most people struggle to understand them due to
              complex legal jargon, fragmented sources, or flat-out sensational reporting.
            </p>
          </div>

          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-blue-500">
              Our answer
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              One platform. Zero jargon.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We bridge that gap by breaking down complex topics into simple, structured,
              and easy-to-read content — without political bias, noise, or manipulation.
              Information that empowers rather than overwhelms.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Pillars ────────────────────────────────────────────────── */}
      <section className="bg-gray-50/70 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400"
          >
            What we cover
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-2xl font-bold text-gray-900"
          >
            Four pillars of civic understanding
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-3 inline-block text-2xl">{p.icon}</span>
                <h3 className="mb-1 font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 p-10 text-white md:p-14"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-amber-400">
            Our vision
          </p>

          <p className="relative max-w-2xl text-xl font-medium leading-relaxed text-gray-100 md:text-2xl">
            To become India's most trusted platform for understanding public policy,
            governance, and legal frameworks — in a way that is accessible to everyone,
            not just experts.
          </p>
        </motion.div>
      </section>
    </main>
  )
}