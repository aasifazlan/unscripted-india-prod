'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function SignInPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/profile')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-sm text-gray-500">Checking session...</p>
      </div>
    )
  }

  if (status === 'authenticated') return null

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => signIn('google', { callbackUrl: '/profile' })}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          disabled
          className="w-full py-3 text-sm rounded-xl border border-dashed border-gray-300 text-gray-400 cursor-not-allowed"
        >
          Email sign-in coming soon
        </button>

        <div className="text-center space-y-2">
         <p className="text-xs text-center text-gray-400">
  By continuing, you agree to our{' '}
  <Link
    href="/terms"
    className="underline hover:text-gray-600 transition"
  >
    Terms
  </Link>{' '}
  &{' '}
  <Link
    href="/privacy-policy"
    className="underline hover:text-gray-600 transition"
  >
    Privacy Policy
  </Link>
         </p>

          <Link
            href="/"
            className="text-xs text-gray-500 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}