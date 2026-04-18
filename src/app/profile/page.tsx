'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <p className="text-sm text-gray-500">Loading profile...</p>
      </div>
    )
  }

  // 👇 This will rarely show now (because we redirect on logout),
  // but we keep it as a fallback
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md text-center space-y-4 w-full max-w-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            👋 You have signed out
          </h2>

          <p className="text-sm text-gray-500">
            Please sign in again to access your profile
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-4 py-2 text-sm rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition w-full sm:w-auto text-center"
            >
              Go to Home
            </Link>

            <Link
              href="/signin"
              className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const user = session.user as any

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 text-center sm:text-left">
        <img
          src={user.image || '/avatar.png'}
          alt="avatar"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border"
        />

        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            {user.name || 'Unnamed User'}
          </h1>
          <p className="text-sm text-gray-500 break-all">
            {user.email}
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-6 space-y-6">

        {/* Info */}
        <div>
          <h2 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
            Account Info
          </h2>

          <div className="space-y-3 text-sm">
            
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-gray-500">Name</span>
              <span className="text-gray-800">{user.name || '-'}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-800 break-all">{user.email}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-gray-500">Role</span>
              <span className="text-saffron-600 font-medium">
                {user.role || 'READER'}
              </span>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Link
              href="/"
              className="text-sm px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition text-center w-full sm:w-auto"
            >
              Home
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: '/auth/signin' })}
              className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition w-full sm:w-auto"
            >
              Sign out
            </button>
          </div>

          <span className="text-xs text-gray-400 text-center sm:text-right">
            More features coming soon
          </span>
        </div>
      </div>
    </div>
  )
}