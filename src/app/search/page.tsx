import Link from 'next/link'
import { CATEGORY_LABELS } from '@/presentation/components/CategoryFilter'

export const dynamic = 'force-dynamic'

async function fetchResults(query: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const res = await fetch(
    `${baseUrl}/api/search?q=${encodeURIComponent(query)}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) return []
  return res.json()
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  // ✅ FIX: must await searchParams (Next.js 15+ change)
  const params = await searchParams
  const query = params.q ?? ''

  const results = query.length > 1 ? await fetchResults(query) : []

  return (
    <div className="px-8 py-8 max-w-3xl mx-auto">
      
      {/* Header */}
      <h1 className="text-xl font-medium text-gray-900 mb-1">
        {query ? `Results for "${query}"` : 'Search'}
      </h1>

      <p className="text-sm text-gray-400 mb-6">
        {results.length > 0
          ? `${results.length} articles found`
          : query
            ? 'No results found'
            : 'Enter a query to search'}
      </p>

      {/* Results */}
      <div className="flex flex-col gap-3">
        {results.map(({ article, snippet }: any) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="bg-white rounded-xl border border-gray-100 p-4 hover:border-gray-200 transition-colors"
          >
            <span className={`badge badge-${article.category.toLowerCase()}`}>
              {CATEGORY_LABELS[
                article.category as keyof typeof CATEGORY_LABELS
              ]}
            </span>

            <h2 className="mt-2 text-sm font-medium text-gray-900">
              {article.title}
            </h2>

            {snippet && (
              <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                {snippet}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}