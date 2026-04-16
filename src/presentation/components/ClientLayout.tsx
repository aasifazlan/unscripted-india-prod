'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar setOpen={setOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={open} setOpen={setOpen} />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}