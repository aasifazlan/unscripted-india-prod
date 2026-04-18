import Link from "next/link";

export function LawLibraryCard() {
  return (
    <section className="mb-12">
      <Link
        href="https://laws.unscriptedindia.org"
        rel="noopener noreferrer"
        className="group block w-full rounded-3xl overflow-hidden border border-gray-200 hover:-translate-y-1 transition-transform duration-200"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#1a0e00] via-[#3b1f00] to-[#5c2e00] p-6 md:p-8 overflow-hidden">
          
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 28px, white 28px, white 29px),
                                repeating-linear-gradient(90deg, transparent, transparent 28px, white 28px, white 29px)`,
            }}
          />

          <div className="relative z-10 max-w-3xl">
            
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-amber-400/15 border border-amber-400/30 rounded-full px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-amber-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Law Library
            </span>

            {/* Title */}
            <h3
              className="text-2xl md:text-4xl font-semibold text-white leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Indian <span className="text-amber-300">Law</span> Library
            </h3>

            <p className="mt-3 text-sm md:text-base text-white/60 max-w-xl">
              Structured legal knowledge for every citizen — from simplified explanations
              to deep legal insights.
            </p>
          </div>

          {/* Seal */}
          <div className="absolute right-6 bottom-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-400 border-[3px] border-[#1a0e00] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="6" width="24" height="28" rx="3" stroke="#1a0e00" strokeWidth="2" />
              <line x1="13" y1="14" x2="27" y2="14" stroke="#1a0e00" strokeWidth="2" strokeLinecap="round" />
              <line x1="13" y1="19" x2="27" y2="19" stroke="#1a0e00" strokeWidth="2" strokeLinecap="round" />
              <line x1="13" y1="24" x2="21" y2="24" stroke="#1a0e00" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white p-6 md:p-8">
          
          {/* Stats */}
          <div className="flex divide-x divide-gray-100 border border-gray-100 rounded-xl overflow-hidden mb-6">
            {[
              { num: "50+", label: "Laws" },
              { num: "3", label: "Categories" },
              { num: "7", label: "Topics" },
            ].map(({ num, label }) => (
              <div key={label} className="flex-1 py-3 text-center">
                <p
                  className="text-xl font-semibold text-amber-700"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {num}
                </p>
                <p className="mt-1 text-xs text-gray-400 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            From plain-language summaries to technical legal analysis — structured,
            interactive legal knowledge built for everyone.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-100 px-6 md:px-8 py-4 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono truncate">
            laws.unscriptedindia.org
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-md px-3 py-1.5 group-hover:bg-amber-100 transition-colors">
            Explore
            <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </span>
        </div>
      </Link>
    </section>
  );
}