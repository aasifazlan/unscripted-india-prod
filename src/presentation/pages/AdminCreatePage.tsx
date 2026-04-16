'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArticleCategory } from '@/domain/entities/Article'
import { CATEGORY_LABELS } from '@/presentation/components/CategoryFilter'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as ArticleCategory[]

export default function AdminCreatePage() {
  const router = useRouter()

  const [form, setForm] = useState({
    title: '',
    category: 'LAW' as ArticleCategory,
    body: '',
    tags: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        }),
      })

      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.error ?? 'Failed to create')
      }

      const article = await res.json()
      router.push(`/articles/${article.slug}`)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <h1 className="text-xl font-medium text-gray-900 mb-6">Create article</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Title</label>
          <input
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Category</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={form.category}
            onChange={e => setForm(f => ({ ...f, category: e.target.value as ArticleCategory }))}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{CATEGORY_LABELS[cat]}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Body</label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 min-h-[200px]"
            value={form.body}
            onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Tags (comma separated)</label>
          <input
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={form.tags}
            onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
            placeholder="e.g. tax, gst, income"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="self-start bg-gray-900 text-white text-sm px-5 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create'}
        </button>

      </form>
    </div>
  )
}