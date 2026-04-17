'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

type TopbarProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function Topbar({ setOpen }: TopbarProps) {
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const router = useRouter()
  const { data: session } = useSession()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim().length > 1) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setShowSearch(false)
    }
  }

  return (
    <header className="flex items-center justify-between gap-3 px-4 sm:px-5 border-b border-gray-100 bg-white h-14 shrink-0">

      {/* LEFT */}
      <div className="flex items-center gap-2">

        {/* ✅ Sidebar toggle (only if exists) */}
        {setOpen && (
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -ml-1 text-gray-600"
          >
            ☰
          </button>
        )}

        <Link href="/" className="text-sm sm:text-[15px] font-medium">
          Unscripted <span className="text-saffron-600">India</span>
        </Link>
      </div>

      {/* RIGHT (optional future space) */}
      <div className="flex items-center gap-3">
        {/* You can later add search / profile / etc */}
      </div>

    </header>
  )
}