'use client'

import { useSession, signOut } from 'next-auth/react'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-full p-10">
        <p className="text-sm text-gray-500">Loading profile...</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-full p-10">
        <p className="text-sm text-gray-500">You are not logged in.</p>
      </div>
    )
  }

  const user = session.user as any

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={user.image || '/avatar.png'}
          alt="avatar"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {user.name || 'Unnamed User'}
          </h1>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-6">

        {/* Info */}
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
            Account Info
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Name</span>
              <span className="text-gray-800">{user.name || '-'}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-800">{user.email}</span>
            </div>

            <div className="flex justify-between">
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
        <div className="flex items-center justify-between">
          <button
            onClick={() => signOut()}
            className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
          >
            Sign out
          </button>

          <span className="text-xs text-gray-400">
            More features coming soon
          </span>
        </div>
      </div>
    </div>
  )
}