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
  const [error, setError]     = useState<string | null>(null)

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
          tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
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
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="w-full h-9 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200"
            placeholder="Right to Information Act, 2005"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as ArticleCategory })}
            className="w-full h-9 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200 bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Body <span className="text-gray-400 font-normal">(Markdown supported)</span>
          </label>
          <textarea
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            required
            rows={14}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200 font-mono resize-y"
            placeholder="## Overview&#10;&#10;Write article content here in Markdown…"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Tags <span className="text-gray-400 font-normal">(comma-separated)</span>
          </label>
          <input
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full h-9 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200"
            placeholder="transparency, governance, accountability"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-saffron-600 text-white text-sm font-medium rounded-lg hover:bg-saffron-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating & summarising…' : 'Create article'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
