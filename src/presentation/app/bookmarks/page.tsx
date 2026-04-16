export const dynamic = 'force-dynamic'

export default function BookmarksPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
          Bookmarks
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Articles you've saved for later.
        </p>
      </div>

      {/* Empty / Auth State */}
      <div className="mt-12 flex flex-col items-center justify-center text-center">
        
        <p className="text-sm sm:text-base text-gray-500 italic mb-4">
          Sign in to see your bookmarks.
        </p>

        {/* Optional CTA */}
        <button className="text-sm sm:text-base px-4 py-2 rounded-md bg-saffron-600 text-white hover:bg-saffron-700 transition-colors">
          Sign in
        </button>
      </div>
    </div>
  )
}