'use client'
import Link from 'next/link'
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
  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-2 min-w-max pb-1">
        
        {/* All */}
        <Link
          href="/"
          className={`whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors ${
            !active
              ? 'bg-saffron-50 border-saffron-300 text-saffron-700'
              : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
          }`}
        >
          All
        </Link>

        {/* Categories */}
        {(Object.entries(CATEGORY_LABELS) as [ArticleCategory, string][]).map(
          ([value, label]) => (
            <Link
              key={value}
              href={`/?category=${value}`}
              className={`whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors ${
                active === value
                  ? 'bg-saffron-50 border-saffron-300 text-saffron-700'
                  : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  )
}