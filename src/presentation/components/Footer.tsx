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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="text-center lg:text-left">
            <Link href="/" className="text-lg font-semibold text-gray-900">
              Unscripted <span className="text-saffron-600">India</span>
            </Link>

            <p className="mt-3 text-sm text-gray-500 max-w-xs mx-auto lg:mx-0">
              Indian laws, policies, and civic life — explained clearly.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">

              {/* Twitter */}
              <a href="https://x.com/UnscriptedInd" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border rounded-lg text-gray-400 hover:text-blue-500 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1A4.1 4.1 0 0016 4c-2.3 0-4.1 1.9-4.1 4.2 0 .3 0 .7.1 1C8 9 5.1 7.4 3.1 5c-.3.6-.5 1.2-.5 2 0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 3.9 2.9A8.3 8.3 0 012 19.5 11.7 11.7 0 008.3 21c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.6 1.4-1.3 1.9-2.1z"/>
                </svg>
              </a>

              {/* GitHub */}
              {/* <a href="https://github.com" target="_blank"
                className="w-9 h-9 flex items-center justify-center border rounded-lg text-gray-400 hover:text-gray-800 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2 .8 2 .9 1.5 2.5 1.1 3.1.9.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.7 1.1 1.6 1.1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5A10.2 10.2 0 0022 12.2C22 6.6 17.5 2 12 2z"/>
                </svg>
              </a> */}

              {/* Instagram */}
              <a href="https://www.instagram.com/unscripted.india/?hl=en" className="w-9 h-9 flex items-center justify-center border rounded-lg text-gray-400 hover:text-pink-500 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.5-.9a1 1 0 11-1-1 1 1 0 011 1z"/>
                </svg>
              </a>

              {/* YouTube */}
              {/* <a href="#" className="w-9 h-9 flex items-center justify-center border rounded-lg text-gray-400 hover:text-red-500 transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C15.9 4.5 12 4.5 12 4.5h0s-3.9 0-6 .3c-.4.1-1.3.1-2.1 1C3.3 6.5 3.2 8 3.2 8S3 9.8 3 11.6v.8c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 5.6.3 5.6.3s3.9 0 6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-.8c0-1.8-.2-3.6-.2-3.6zM9.8 14.5V9.5l4.8 2.5-4.8 2.5z"/>
                </svg>
              </a> */}

            </div>
          </div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex flex-col items-center">

  {/* Explore + Platform (centered group) */}
  <div className="grid grid-cols-2 gap-10 w-full max-w-md text-center sm:text-left">
    
    {/* Explore */}
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Explore
      </p>
      <ul className="space-y-2">
        {FOOTER_LINKS.Explore.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Platform */}
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Platform
      </p>
      <ul className="space-y-2">
        {FOOTER_LINKS.Platform.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </div>

  {/* States (centered properly) */}
  {/* <div className="mt-10 w-full text-center">
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
      States
    </p>

    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-md mx-auto">
      {FOOTER_LINKS.States.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div> */}

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-gray-400 max-w-lg">
            © {new Date().getFullYear()} Unscripted India. Content is for informational purposes only.
          </p>
          <p className="text-xs text-gray-400">Made in India 🇮🇳</p>
        </div>

      </div>
    </footer>
  )
}