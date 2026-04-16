import { notFound } from 'next/navigation'
import { getArticle } from '@/infrastructure/container'
import { SimplifyButton } from '@/presentation/components/SimplifyButton'
import { RelatedArticles } from '@/presentation/components/RelatedArticles'
import { CATEGORY_LABELS } from '@/presentation/components/CategoryFilter'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

// 🔹 Metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params

  if (!slug) {
    return { title: 'Not found' }
  }

  try {
    const article = await getArticle.executeBySlug(slug)

    if (!article) {
      return { title: 'Not found' }
    }

    return {
      title: `${article.title} — Unscripted India`,
      description: article.summary ?? '',
    }
  } catch {
    return { title: 'Not found' }
  }
}

// 🔹 Page
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  if (!slug) {
    console.error('❌ Missing slug')
    notFound()
  }

  let article
  try {
    article = await getArticle.executeBySlug(slug)
  } catch (err) {
    console.error('❌ Fetch failed:', err)
    notFound()
  }

  if (!article) {
    notFound()
  }

  const badgeClass = `badge badge-${article.category.toLowerCase()}`

  return (
    <div className="flex">
      {/* Main Content */}
      <main className="flex-1 min-w-0 px-8 py-8 max-w-3xl">
        
        {/* Breadcrumb */}
        <p className="text-xs text-gray-400 mb-4">
          <a href="/" className="hover:text-gray-600">Articles</a>
          <span className="mx-1">/</span>
          <span className="text-saffron-600">{article.title}</span>
        </p>

        {/* Category */}
        <span className={badgeClass}>
          {CATEGORY_LABELS[article.category] ?? article.category}
        </span>

        {/* Title */}
        <h1 className="mt-3 text-3xl font-medium text-gray-900 leading-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex gap-4 mt-3 text-xs text-gray-400">
          {article.publishedAt && (
            <span>
              {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}

          {article.tags?.slice(0, 3).map((tag: string) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        {/* Summary */}
        {article.summary && (
          <section className="mt-6 p-4 bg-white border rounded-xl">
            <p className="text-xs text-gray-400 uppercase mb-2">
              AI summary
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {article.summary}
            </p>
          </section>
        )}

        {/* Action */}
        <SimplifyButton articleId={article.id} />

        {/* Body */}
        <article
          className="mt-8 prose prose-gray prose-sm max-w-none"
          dangerouslySetInnerHTML={{
            __html: article.body.replace(/\n/g, '<br/>'),
          }}
        />

        {/* Impact */}
        {article.impactAnalysis && (
          <section className="mt-10 p-5 bg-saffron-50 border-l-4 border-saffron-600 rounded-r-xl">
            <p className="text-xs text-saffron-600 uppercase mb-2">
              Impact analysis
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {article.impactAnalysis}
            </p>
          </section>
        )}
      </main>

      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-l px-5 py-8 hidden lg:block">
        <RelatedArticles articleId={article.id} />
      </aside>
    </div>
  )
}