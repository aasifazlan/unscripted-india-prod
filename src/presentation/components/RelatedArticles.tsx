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
    <div>
      {/* Heading */}
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
        Related articles
      </p>

      {/* List */}
      <div className="flex flex-col divide-y divide-gray-100">
        {related.map((a) => (
          <Link
            key={a.id}
            href={`/articles/${a.slug}`}
            className="py-3 group transition-colors"
          >
            {/* Category */}
            <span className={`badge badge-${a.category.toLowerCase()} text-[11px]`}>
              {CATEGORY_LABELS[a.category as keyof typeof CATEGORY_LABELS]}
            </span>

            {/* Title */}
            <p className="mt-1 text-sm text-gray-700 leading-snug group-hover:text-saffron-600 transition-colors line-clamp-2">
              {a.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}