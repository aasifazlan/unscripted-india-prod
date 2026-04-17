import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from '@/presentation/components/SessionProvider'
import { ClientLayout } from '@/presentation/components/ClientLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Unscripted India',
  description: 'Understand Indian laws, policies, and civic life — simplified.',
  openGraph: {
    title: 'Unscripted India',
    description: 'Indian laws, policies, and civic life — explained clearly.',
    siteName: 'Unscripted India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased overflow-x-hidden">
        <SessionProvider>
          <ClientLayout>{children}</ClientLayout>
        </SessionProvider>
      </body>
    </html>
  )
}