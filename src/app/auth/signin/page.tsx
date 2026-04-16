'use client'

import { signIn, useSession } from 'next-auth/react'

export default function SignInPage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-lg font-medium">
            Logged in as {session.user?.email}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          
          {/* Google */}
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Apple */}
          <button
            onClick={() => signIn('apple')}
            className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.365 1.43c0 1.14-.468 2.22-1.23 3.012-.762.792-1.794 1.356-2.88 1.26-.12-1.116.48-2.22 1.236-3.006.756-.786 1.998-1.344 2.874-1.266zM21.66 17.03c-.588 1.344-.876 1.944-1.62 3.108-1.044 1.632-2.52 3.66-4.332 3.678-1.62.018-2.04-1.056-4.236-1.044-2.196.012-2.652 1.062-4.272 1.062-1.812 0-3.204-1.848-4.248-3.48-2.916-4.596-3.228-9.99-1.44-12.66 1.272-1.89 3.282-2.988 5.172-2.988 1.92 0 3.126 1.056 4.71 1.056 1.548 0 2.496-1.056 4.692-1.056 1.638 0 3.36.894 4.632 2.436-4.074 2.232-3.414 8.004.942 9.888z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}