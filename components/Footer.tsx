import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                {/* Coat of Arms */}
                <div className="flex-shrink-0">
                  <svg width="40" height="48" viewBox="0 0 40 48" className="w-8 h-10">
                    <path d="M20 4 L28 12 L28 20 L24 24 L24 32 L20 36 L16 32 L16 24 L12 20 L12 12 Z" fill="#000000" stroke="#FFD700" strokeWidth="0.4"/>
                    <line x1="20" y1="12" x2="20" y2="32" stroke="#FFD700" strokeWidth="0.8"/>
                    <line x1="12" y1="20" x2="28" y2="20" stroke="#FFD700" strokeWidth="0.8"/>
                    <circle cx="10" cy="38" r="2.5" fill="#000000"/>
                    <circle cx="30" cy="38" r="2.5" fill="#000000"/>
                    <rect x="16" y="40" width="8" height="6" fill="#000000"/>
                </svg>
                </div>
                {/* eCitizen Logo */}
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#00A651] rounded-full">
                    <span className="text-white font-bold text-base">e</span>
                  </div>
                  <span className="text-lg font-bold">Citizen</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The single point of access for all government services in Kenya. Simplifying how citizens interact with government.
            </p>
            <p className="text-gray-500 text-xs">
              Government of Kenya
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/national" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  National Ministries
                </Link>
              </li>
              <li>
                <Link href="/agencies" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Agencies
                </Link>
              </li>
              <li>
                <Link href="/counties" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Counties
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="tel:+2540200000000" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Call: +254 020 000 0000
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  Accessibility
                </Link>
              </li>
              <li>
                <a href="mailto:support@ecitizen.go.ke" className="text-gray-400 hover:text-white transition-colors text-sm inline-block">
                  support@ecitizen.go.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} eCitizen. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Powered by Government of Kenya
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-xs">Follow us:</span>
              <a 
                href="https://www.facebook.com/ecitizenkenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/ecitizenkenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
