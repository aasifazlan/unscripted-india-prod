'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  // 🔒 Lock scroll ONLY on mobile when drawer is open
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    if (open && isMobile) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  // 💡 Auto-close drawer when switching to desktop
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const handler = () => {
      if (media.matches) setOpen(false)
    }

    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">

      {/* Topbar */}
      <div className="relative z-40">
        <Topbar setOpen={setOpen} />
      </div>

      {/* Main layout */}
      <div className="flex flex-1 min-h-0">

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 border-r bg-white h-screen overflow-y-auto">
          <Sidebar setOpen={setOpen} />
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>

      {/* ✅ Full-width Footer */}
      <Footer />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 bottom-0 top-14 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 240, damping: 26 }}
              className="fixed top-14 left-0 h-[calc(100%-56px)] w-64 bg-white shadow-xl z-50 md:hidden overflow-y-auto overscroll-contain"
            >
              <Sidebar setOpen={setOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}