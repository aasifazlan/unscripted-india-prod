'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'

type SidebarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NAV_CATEGORIES = [
  { label: 'Laws', value: 'LAW', color: '#E24B4A' },
  { label: 'Policies', value: 'POLICY', color: '#378ADD' },
  { label: 'Amendments', value: 'AMENDMENT', color: '#EF9F27' },
  { label: 'History', value: 'HISTORY', color: '#1D9E75' },
  { label: 'Culture', value: 'CULTURE', color: '#D4537E' },
  { label: 'Diversity', value: 'DIVERSITY', color: '#7F77DD' },
  { label: 'State insights', value: 'STATE_INSIGHT', color: '#1D9E75' },
]

const STATES = [
  'Maharashtra',
  'Delhi',
  'Tamil Nadu',
  'Kerala',
  'Karnataka',
  'West Bengal',
]

export function Sidebar({ setOpen }: SidebarProps) {
  const pathname = usePathname()
  const { data: session } = useSession()
  const user = session?.user as any

  return (
    <aside className="h-full w-full bg-white overflow-y-auto py-4">

      {/* Close button (mobile) */}
      <div className="flex justify-end px-4 mb-4 md:hidden">
        <button onClick={() => setOpen(false)} className="text-sm text-gray-500">
          ✕
        </button>
      </div>

      {/* All articles */}
      <div className="mb-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md ${
            pathname === '/'
              ? 'text-saffron-600 font-medium bg-saffron-50'
              : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          All articles
        </Link>
      </div>

      {/* Categories */}
      <p className="px-4 mb-2 text-xs font-medium text-gray-400 uppercase tracking-widest">
        Categories
      </p>

      {NAV_CATEGORIES.map((cat) => (
        <Link
          key={cat.value}
          href={`/?category=${cat.value}`}
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md"
        >
          <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
          {cat.label}
        </Link>
      ))}

      {/* States */}
      <div className="mt-6">
        <p className="px-4 mb-2 text-xs font-medium text-gray-400 uppercase tracking-widest">
          States
        </p>

        {STATES.map((state) => (
          <Link
            key={state}
            href={`/?state=${encodeURIComponent(state)}`}
            onClick={() => setOpen(false)}
            className="flex items-center px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md"
          >
            {state}
          </Link>
        ))}

        <span className="block px-4 py-2 text-xs text-gray-400">
          + 22 more states
        </span>
      </div>

      {/* My space */}
      <div className="mt-6">
        <p className="px-4 mb-2 text-xs font-medium text-gray-400 uppercase tracking-widest">
          My space
        </p>

        {!session ? (
          <button
            onClick={() => signIn()}
            className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md"
          >
            Sign in
          </button>
        ) : (
          <>
            <Link href="/profile" className="flex items-center gap-2 px-4 py-2 mb-2 hover:bg-gray-50 rounded-lg">
              <img
                src={user?.image || '/avatar.png'}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-800 font-medium">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-400">
                  {user?.role || 'READER'}
                </p>
              </div>
            </Link>

            <Link href="/bookmarks" className="flex px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md">
              Bookmarks
            </Link>

            <Link href="/profile" className="flex px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md">
              Profile
            </Link>
          </>
        )}
      </div>
    </aside>
  )
}