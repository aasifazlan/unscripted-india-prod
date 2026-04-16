import Link from 'next/link'
import { Article } from '@/domain/entities/Article'
import { CATEGORY_LABELS } from '@/presentation/components/CategoryFilter'

interface Props {
  article: Article
  featured?: boolean
}

export function ArticleCard({ article, featured }: Props) {
  const badgeClass = `badge badge-${article.category.toLowerCase()}`

  if (featured) {
    return (
      <Link
        href={`/articles/${article.slug}`}
        className="col-span-full flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-xl border border-gray-100 p-4 sm:p-5 hover:border-gray-200 transition-colors"
      >
        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className={badgeClass}>
            {CATEGORY_LABELS[article.category]}
          </span>

          <h2 className="mt-2 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-snug">
            {article.title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed line-clamp-2">
            {article.summary}
          </p>

          <div className="mt-3 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-400">
            {article.publishedAt && (
              <span>
                {new Date(article.publishedAt).getFullYear()}
              </span>
            )}

            {article.tags.slice(0, 2).map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 bg-saffron-50 rounded-xl flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="6" width="24" height="28" rx="3" stroke="#C84B1E" strokeWidth="1.5"/>
            <line x1="13" y1="14" x2="27" y2="14" stroke="#C84B1E" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="19" x2="27" y2="19" stroke="#C84B1E" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="24" x2="21" y2="24" stroke="#C84B1E" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 hover:border-gray-200 transition-colors flex flex-col"
    >
      {/* Category */}
      <span className={badgeClass}>
        {CATEGORY_LABELS[article.category]}
      </span>

      {/* Title */}
      <h2 className="mt-2 text-sm sm:text-base font-medium text-gray-900 leading-snug line-clamp-2">
        {article.title}
      </h2>

      {/* Summary */}
      <p className="mt-1.5 text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
        {article.summary}
      </p>

      {/* Meta */}
      <div className="mt-3 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-400">
        {article.publishedAt && (
          <span>
            {new Date(article.publishedAt).getFullYear()}
          </span>
        )}
      </div>
    </Link>
  )
}