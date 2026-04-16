import Link from 'next/link'
import { CATEGORY_LABELS } from '../../components/CategoryFilter'

interface Props {
  searchParams: { q?: string }
}

export const dynamic = 'force-dynamic'

async function fetchResults(query: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/search?q=${encodeURIComponent(query)}`, {
    cache: 'no-store',
  })
  if (!res.ok) return []
  return res.json()
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q ?? ''
  const results = query.length > 1 ? await fetchResults(query) : []

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
          {query ? `Results for "${query}"` : 'Search'}
        </h1>

        <p className="text-xs sm:text-sm text-gray-400">
          {results.length > 0
            ? `${results.length} articles found`
            : query
            ? 'No results found'
            : 'Enter a query to search'}
        </p>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {results.map(({ article, snippet }: any) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 hover:border-gray-200 transition-colors"
          >
            {/* Category */}
            <span className={`badge badge-${article.category.toLowerCase()}`}>
              {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
            </span>

            {/* Title */}
            <h2 className="mt-2 text-sm sm:text-base font-medium text-gray-900">
              {article.title}
            </h2>

            {/* Snippet */}
            {snippet && (
              <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                {snippet}
              </p>
            )}
          </Link>
        ))}
      </div>

      {/* Empty state spacing */}
      {results.length === 0 && query && (
        <div className="mt-10 text-center text-gray-400 text-sm">
          Try different keywords or check spelling.
        </div>
      )}
    </div>
  )
}