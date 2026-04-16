import { notFound } from 'next/navigation'
import { getArticle } from '../../../../infrastructure/container'
import { SimplifyButton } from '../../../components/SimplifyButton'
import { RelatedArticles } from '../../../components/RelatedArticles'
import { CATEGORY_LABELS } from '../../../components/CategoryFilter'

export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const article = await getArticle.executeBySlug(params.slug)

  if (!article) {
    return { title: 'Not found' }
  }

  return {
    title: `${article.title} — Unscripted India`,
    description: article.summary ?? '',
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle.executeBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const badgeClass = `badge badge-${article.category.toLowerCase()}`

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
      
      {/* Main content */}
      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-3xl">
        
        {/* Breadcrumb */}
        <p className="text-xs text-gray-400 mb-4">
          <a href="/" className="hover:text-gray-600">Articles</a>
          <span className="mx-1">/</span>
          <span className="text-saffron-600 line-clamp-1">{article.title}</span>
        </p>

        {/* Category */}
        <span className={badgeClass}>
          {CATEGORY_LABELS[article.category] ?? article.category}
        </span>

        {/* Title */}
        <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mt-3 text-xs sm:text-sm text-gray-400">
          {article.publishedAt && (
            <span>
              {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}

          {article.tags?.slice(0, 3).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        {/* AI Summary */}
        {article.summary && (
          <div className="mt-6 p-4 sm:p-5 bg-white rounded-xl border border-gray-100">
            <p className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              AI summary
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {article.summary}
            </p>
          </div>
        )}

        {/* Simplify */}
        <div className="mt-4">
          <SimplifyButton articleId={article.id} />
        </div>

        {/* Body */}
        <div
          className="mt-8 prose prose-gray prose-sm sm:prose-base max-w-none"
          dangerouslySetInnerHTML={{
            __html: article.body.replace(/\n/g, '<br/>'),
          }}
        />

        {/* Impact analysis */}
        {article.impactAnalysis && (
          <div className="mt-10 p-4 sm:p-5 bg-saffron-50 border-l-4 border-saffron-600 rounded-r-xl">
            <p className="text-[10px] sm:text-xs font-medium text-saffron-600 uppercase tracking-wider mb-2">
              Impact analysis
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {article.impactAnalysis}
            </p>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block w-72 xl:w-80 shrink-0 border-l border-gray-100 px-6 py-8">
        <div className="sticky top-20">
          <RelatedArticles articleId={article.id} />
        </div>
      </aside>
    </div>
  )
}