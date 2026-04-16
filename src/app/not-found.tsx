import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24 text-center">
      <p className="text-5xl font-medium text-gray-200 mb-4">404</p>
      <h1 className="text-lg font-medium text-gray-700 mb-2">Article not found</h1>
      <p className="text-sm text-gray-400 mb-6">The article you're looking for doesn't exist or has been removed.</p>
      <Link href="/" className="text-sm text-saffron-600 hover:underline">← Back to home</Link>
    </div>
  )
}
