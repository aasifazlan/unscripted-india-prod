import Link from 'next/link'
import { CATEGORY_LABELS } from '@/presentation/components/CategoryFilter'

interface Props {
  articleId: string
}

export async function RelatedArticles({ articleId }: Props) {
  let related: any[] = []

  try {
    const { PrismaArticleRepository } = await import('../../infrastructure/repositories/PrismaArticleRepository')
    const { prisma } = await import('../../infrastructure/db/prisma/client')
    const repo = new PrismaArticleRepository(prisma)
    related = await repo.findRelated(articleId, 5)
  } catch {
    return null
  }

  if (!related.length) return null

  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-100">

      {/* Header */}
      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
          Continue reading
        </p>
        <h3 className="text-base font-semibold text-gray-900">
          Related articles
        </h3>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {related.map((a) => (
          <Link
            key={a.id}
            href={`/articles/${a.slug}`}
            className="group relative block p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all overflow-hidden"
          >
            {/* Accent bar */}
            <span className="absolute left-0 top-0 h-full w-1 bg-saffron-500 opacity-0 group-hover:opacity-100 transition" />

            {/* Category */}
            <p className="text-[10px] uppercase tracking-wide text-saffron-600 mb-1">
              {CATEGORY_LABELS[a.category as keyof typeof CATEGORY_LABELS]}
            </p>

            {/* Title */}
            <h4 className="text-sm font-medium text-gray-900 leading-snug group-hover:text-saffron-700 transition line-clamp-2">
              {a.title}
            </h4>

            {/* Optional summary */}
            {a.summary && (
              <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                {a.summary}
              </p>
            )}

            {/* Meta */}
            <div className="mt-2 text-[11px] text-gray-400">
              {a.publishedAt
                ? new Date(a.publishedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                  })
                : '3 min read'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}