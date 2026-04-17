'use client'

import { ClientLayout } from '@/presentation/components/ClientLayout'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}