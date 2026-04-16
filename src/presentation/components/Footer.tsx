import Link from 'next/link'

const FOOTER_LINKS = {
  Explore: [
    { label: 'All articles', href: '/' },
    { label: 'Laws', href: '/?category=LAW' },
    { label: 'Policies', href: '/?category=POLICY' },
    { label: 'Amendments', href: '/?category=AMENDMENT' },
    { label: 'History', href: '/?category=HISTORY' },
    { label: 'Culture', href: '/?category=CULTURE' },
    { label: 'Diversity', href: '/?category=DIVERSITY' },
    { label: 'State insights', href: '/?category=STATE_INSIGHT' },
  ],
  States: [
    { label: 'Maharashtra', href: '/?state=MH' },
    { label: 'Delhi', href: '/?state=DL' },
    { label: 'Tamil Nadu', href: '/?state=TN' },
    { label: 'Kerala', href: '/?state=KL' },
    { label: 'Karnataka', href: '/?state=KA' },
    { label: 'West Bengal', href: '/?state=WB' },
  ],
  Platform: [
    { label: 'About', href: '/about' },
    { label: 'Contribute', href: '/contribute' },
    { label: 'Admin', href: '/admin/create' },
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900">
              Unscripted <span className="text-saffron-600">India</span>
            </Link>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-sm">
              Indian laws, policies, and civic life — explained clearly and without jargon.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
                {section}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-gray-400 max-w-md">
            © {new Date().getFullYear()} Unscripted India. Content is for informational purposes only and does not constitute legal advice.
          </p>
          <p className="text-xs text-gray-400">
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}