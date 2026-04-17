'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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

const ROLES = [
  'Researcher',
  'Writer / Editor',
  'Student',
  'Legal / Policy Professional',
  'Journalist',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContributePage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [fields, setFields] = useState({ name: '', email: '', role: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof fields>>({})

  function validate() {
    const e: Partial<typeof fields> = {}
    if (!fields.name.trim()) e.name = 'Name is required.'
    if (!fields.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Enter a valid email.'
    if (!fields.message.trim()) e.message = 'Please tell us how you want to contribute.'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setFormState('submitting')

    try {
      const res = await fetch('/api/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Server error')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  function handleChange(key: keyof typeof fields, value: string) {
    setFields(f => ({ ...f, [key]: value }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }))
  }

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

      {/* ── CTA / Contact Form ─────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-12 text-white md:px-12"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-blue-400">
              Ready to start?
            </p>
            <h2 className="mb-1 text-2xl font-bold">Get in touch with us</h2>
            <p className="mb-8 text-sm text-gray-400">
              Our editorial team will get back to you within 48 hours.
            </p>

            {/* ── Error banner ── */}
            {formState === 'error' && (
              <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <span>⚠️</span>
                <span>Something went wrong. Please try again or email <a href="mailto:contribute@unscriptedindia.in" className="underline">contribute@unscriptedindia.in</a></span>
              </div>
            )}

            {/* ── Success state ── */}
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-8"
              >
                <span className="text-3xl">🎉</span>
                <h3 className="text-lg font-semibold text-white">Thanks for reaching out!</h3>
                <p className="text-sm text-gray-400">
                  We've received your message and will be in touch within 48 hours.
                </p>
              </motion.div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Priya Sharma"
                    value={fields.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:ring-2 focus:ring-blue-500/60 ${
                      errors.name ? 'border-red-500/70' : 'border-white/10 focus:border-blue-500/50'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="priya@example.com"
                    value={fields.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:ring-2 focus:ring-blue-500/60 ${
                      errors.email ? 'border-red-500/70' : 'border-white/10 focus:border-blue-500/50'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    I am a…
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ROLES.map(role => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => handleChange('role', role)}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                          fields.role === role
                            ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    How do you want to contribute? <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what topics you're interested in, your background, or ideas you'd like to work on…"
                    value={fields.message}
                    onChange={e => handleChange('message', e.target.value)}
                    className={`resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:ring-2 focus:ring-blue-500/60 ${
                      errors.message ? 'border-red-500/70' : 'border-white/10 focus:border-blue-500/50'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 disabled:opacity-60"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>Send message →</>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </section>

    </main>
  )
}