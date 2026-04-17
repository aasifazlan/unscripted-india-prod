import { listArticles } from '@/infrastructure/container'
import { ArticleCard } from '@/presentation/components/ArticleCard'
import { CategoryFilter } from '@/presentation/components/CategoryFilter'
import HeroSection from '@/presentation/components/HeroSection'

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
    <div className="px-6 md:px-8 py-8 max-w-6xl mx-auto">
      
      {/* 🔥 Hero Section */}
      <HeroSection />

      {/* Filters */}
      <div id="articles">
        <CategoryFilter active={category} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {result.data.map((article, i) => (
          <ArticleCard
            key={article.id}
            article={article}
            featured={i === 0}
          />
        ))}
      </div>

      {/* Pagination */}
      {result.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12 flex-wrap">
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