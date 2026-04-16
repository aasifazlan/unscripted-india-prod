import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      
      {/* 404 */}
      <p className="text-6xl sm:text-7xl font-semibold text-gray-200 mb-4">
        404
      </p>

      {/* Title */}
      <h1 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
        Article not found
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-400 max-w-md mb-6">
        The article you're looking for doesn't exist or has been removed.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="text-sm sm:text-base text-saffron-600 hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  )
}