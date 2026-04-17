'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { ArticleCategory } from '@/domain/entities/Article'

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  LAW: 'Law',
  AMENDMENT: 'Amendment',
  POLICY: 'Policy',
  CULTURE: 'Culture',
  HISTORY: 'History',
  DIVERSITY: 'Diversity',
  STATE_INSIGHT: 'State insight',
}

interface Props {
  active?: string
}

export function CategoryFilter({ active }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleClick = (category?: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }

    // Navigate WITHOUT hash
    router.push(`${pathname}?${params.toString()}`)

    // Scroll AFTER render
    setTimeout(() => {
      const el = document.getElementById('articles')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-2 min-w-max pb-1">

        {/* All */}
        <button
          onClick={() => handleClick()}
          className={`whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors ${
            !active
              ? 'bg-saffron-50 border-saffron-300 text-saffron-700'
              : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
          }`}
        >
          All
        </button>

        {/* Categories */}
        {(Object.entries(CATEGORY_LABELS) as [ArticleCategory, string][]).map(
          ([value, label]) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className={`whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors ${
                active === value
                  ? 'bg-saffron-50 border-saffron-300 text-saffron-700'
                  : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  )
}