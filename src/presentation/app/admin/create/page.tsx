'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArticleCategory } from '../../../../domain/entities/Article'
import { CATEGORY_LABELS } from '../../../components/CategoryFilter'

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
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
          Create article
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Add a new article with structured content and tags.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Title */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Title
          </label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200"
            placeholder="Right to Information Act, 2005"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Category
          </label>
          <select
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value as ArticleCategory })
            }
            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200 bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
        </div>

        {/* Body */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Body{' '}
            <span className="text-gray-400 font-normal">
              (Markdown supported)
            </span>
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

        {/* Tags */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Tags{' '}
            <span className="text-gray-400 font-normal">
              (comma-separated)
            </span>
          </label>
          <input
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200"
            placeholder="transparency, governance, accountability"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-5 py-2 bg-saffron-600 text-white text-sm font-medium rounded-lg hover:bg-saffron-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating & summarising…' : 'Create article'}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="w-full sm:w-auto px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}