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

  if (!slug) return { title: 'Not found' }

  try {
    const article = await getArticle.executeBySlug(slug)
    if (!article) return { title: 'Not found' }

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

  if (!slug) notFound()

  let article
  try {
    article = await getArticle.executeBySlug(slug)
  } catch {
    notFound()
  }

  if (!article) notFound()

  const badgeClass = `badge badge-${article.category.toLowerCase()}`

  return (
    <div className="flex flex-col lg:flex-row gap-6">

      {/* Main Content */}
      <main className="w-full lg:w-3/4 min-w-0 px-4 sm:px-6 lg:px-8 py-8">

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

        {/* Article Body */}
        <article
          className="
            mt-8 prose prose-sm max-w-none
            prose-headings:text-gray-900
            prose-p:text-gray-700
            prose-strong:text-gray-900
            prose-a:text-blue-600
          "
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

        {/* ✅ Mobile Related Articles */}
        <div className="mt-10 lg:hidden">
          <RelatedArticles articleId={article.id} />
        </div>

      </main>

      {/* ✅ Desktop Sidebar (Scrollable) */}
      <aside className="hidden lg:block w-1/4 border-l px-5 py-8">
        
        <div className="sticky top-20 h-[calc(100vh-5rem)]">
          
          <div className="h-full overflow-y-auto pr-2">
            <RelatedArticles articleId={article.id} />
          </div>

        </div>

      </aside>

    </div>
  )
}