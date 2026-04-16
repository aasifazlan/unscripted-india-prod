import { listArticles } from '@/infrastructure/container'
import { ArticleCard } from '@/presentation/components/ArticleCard'
import { CategoryFilter } from '@/presentation/components/CategoryFilter'

export const revalidate = 60

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>
}) {
  const params = await searchParams

  const page = Math.max(1, parseInt(params.page ?? '1'))
  const category = params.category as any

  const result = await listArticles.execute(
    { category, published: true },
    { page, limit: 12 },
  )

  return (
    <div className="px-8 py-8 max-w-6xl mx-auto">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Total articles', value: '1,284' },
          { label: 'Laws covered', value: '342' },
          { label: 'States indexed', value: '28' },
        ].map((s) => (
          <div key={s.label} className="bg-gray-100 rounded-lg px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">{s.label}</p>
            <p className="text-2xl font-medium text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <CategoryFilter active={category} />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {result.data.map((article, i) => (
          <ArticleCard key={article.id} article={article} featured={i === 0} />
        ))}
      </div>

      {/* Pagination */}
      {result.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: result.totalPages }, (_, i) => i + 1).map((p) => (
            <a
              key={p}
              href={`?page=${p}${category ? `&category=${category}` : ''}`}
              className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                p === page
                  ? 'bg-saffron-600 text-white border-saffron-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {p}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}