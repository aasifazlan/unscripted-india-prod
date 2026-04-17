'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { Footer } from './Footer'

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col h-full">
      {/* Top Navigation */}
      <Topbar setOpen={setOpen} />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar (independent scroll) */}
        <aside className="hidden md:block h-full w-64 overflow-y-auto border-r bg-white">
          <Sidebar open={open} setOpen={setOpen} />
        </aside>

        {/* Main Content (independent scroll) */}
        <main className="flex-1 h-full overflow-y-auto">
          <div className="min-h-full flex flex-col">
            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>
        </main>

      </div>
    </div>
  )
}