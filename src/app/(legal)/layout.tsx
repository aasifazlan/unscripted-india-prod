'use client'

import { Topbar } from '@/presentation/components/Topbar'
import { Footer } from '@/presentation/components/Footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar /> {/* no sidebar toggle */}

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}