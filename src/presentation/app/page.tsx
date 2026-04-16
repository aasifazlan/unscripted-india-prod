'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'

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

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const user = session?.user as any

  const [open, setOpen] = useState(false)

  const activeCategory = null

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg p-2 shadow-sm"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-100 z-50
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
          
          lg:static lg:translate-x-0 lg:w-[240px]
          lg:border-r lg:border-l-0
          
          overflow-y-auto py-4
        `}
      >
        {/* Close (mobile) */}
        <div className="lg:hidden flex justify-end px-4 mb-4">
          <button
            onClick={() => setOpen(false)}
            className="text-sm text-gray-500"
          >
            Close ✕
          </button>
        </div>

        {/* ALL ARTICLES */}
        <div className="mb-4">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors ${
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
            className={`flex items-center gap-2.5 px-4 py-2 text-sm rounded-md transition ${
              activeCategory === cat.value
                ? 'text-saffron-600 font-medium bg-saffron-50'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: cat.color }}
            />
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
              className="flex items-center px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md transition"
            >
              {state}
            </Link>
          ))}

          <span className="block px-4 py-2 text-xs text-gray-400">
            + 22 more states
          </span>
        </div>

        {/* My Space */}
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
              {/* Profile */}
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 mb-2 hover:bg-gray-50 rounded-lg"
              >
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

              <Link
                href="/bookmarks"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md"
              >
                Bookmarks
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-md"
              >
                Profile
              </Link>
            </>
          )}
        </div>
      </aside>
    </>
  )
}