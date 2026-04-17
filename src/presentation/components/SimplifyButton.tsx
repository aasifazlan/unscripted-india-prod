'use client'
import { useState } from 'react'

interface Props {
  articleId: string
}

export function SimplifyButton({ articleId }: Props) {
  const [simplified, setSimplified] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSimplify() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/articles/${articleId}/simplify`, {
        method: 'POST',
      })
      if (!res.ok) throw new Error('Failed to simplify')
      const data = await res.json()
      setSimplified(data.simplified)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-6">
      {!simplified && (
        <button
          onClick={handleSimplify}
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-saffron-50 border border-saffron-200 text-saffron-700 text-sm font-medium hover:bg-saffron-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Spinner */}
          {loading ? (
            <span className="w-4 h-4 border-2 border-saffron-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="6" />
              <path d="M8 7v3M8 5.5v.3" />
            </svg>
          )}

          <span className="whitespace-nowrap">
            {loading ? 'Simplifying…' : 'Explain in simple terms'}
          </span>
        </button>
      )}

      {/* Error */}
      {error && (
        <p className="mt-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Result */}
      {simplified && (
        <div className="mt-5 p-4 sm:p-5 bg-blue-50 border border-blue-100 rounded-xl">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">
            Simple explanation
          </p>
          <div className="space-y-3">
  {simplified.split('\n').map((line, i) => {
    if (!line.trim()) return null

    const [title, ...rest] = line.split(':')
    const description = rest.join(':').trim()

    if (!description) {
      return (
        <p key={i} className="text-sm text-gray-700">
          {line}
        </p>
      )
    }

    return (
      <p key={i} className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
        <span className="font-semibold text-gray-900">{title}:</span>{' '}
        {description}
      </p>
    )
  })}
          </div>
        </div>
      )}
    </div>
  )
}