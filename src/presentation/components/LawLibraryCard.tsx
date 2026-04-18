import Link from "next/link";

const TAGS = [
  "Transparency",
  "Data Privacy",
  "Citizens Rights",
  "Governance",
  "Technology",
];

export function LawLibraryCard() {
  return (
    <Link
      href="https://laws.unscriptedindia.org"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl border border-gray-100 p-4 sm:p-5 hover:border-gray-200 transition-colors flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          Law Library
        </span>

        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <rect
              x="8"
              y="6"
              width="24"
              height="28"
              rx="3"
              stroke="#B45309"
              strokeWidth="1.5"
            />
            <line
              x1="13"
              y1="14"
              x2="27"
              y2="14"
              stroke="#B45309"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="19"
              x2="27"
              y2="19"
              stroke="#B45309"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="24"
              x2="21"
              y2="24"
              stroke="#B45309"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-sm sm:text-base font-semibold text-gray-900 leading-snug">
        Indian Law Library
      </h3>

      {/* Description */}
      <p className="mt-1.5 text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
        Plain-language summaries to technical legal analysis — structured and
        interactive legal knowledge for everyone.
      </p>

      {/* Stats */}
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-400">
        <span>
          <span className="font-medium text-gray-700">50+</span> Laws
        </span>
        <span className="w-px h-3 bg-gray-200" />
        <span>
          <span className="font-medium text-gray-700">3</span> Categories
        </span>
        <span className="w-px h-3 bg-gray-200" />
        <span>
          <span className="font-medium text-gray-700">7</span> Topics
        </span>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded-md px-2 py-0.5"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[11px] text-gray-400">
          laws.unscriptedindia.org
        </span>

        <span className="text-xs font-medium text-amber-700 group-hover:translate-x-0.5 transition-transform">
          Explore →
        </span>
      </div>
    </Link>
  );
}