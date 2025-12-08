'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              {/* Kenyan Coat of Arms + eCitizen Logo */}
              <div className="flex items-center space-x-2">
                {/* Coat of Arms */}
                <div className="flex-shrink-0">
                  <svg width="50" height="60" viewBox="0 0 50 60" className="w-10 h-12 lg:w-12 lg:h-14">
                    {/* Shield */}
                    <path d="M25 5 L35 15 L35 25 L30 30 L30 40 L25 45 L20 40 L20 30 L15 25 L15 15 Z" fill="#000000" stroke="#FFD700" strokeWidth="0.5"/>
                    {/* Cross pattern on shield */}
                    <line x1="25" y1="15" x2="25" y2="40" stroke="#FFD700" strokeWidth="1"/>
                    <line x1="15" y1="25" x2="35" y2="25" stroke="#FFD700" strokeWidth="1"/>
                    {/* Lions */}
                    <circle cx="12" cy="48" r="3" fill="#000000"/>
                    <circle cx="38" cy="48" r="3" fill="#000000"/>
                    {/* Base */}
                    <rect x="20" y="50" width="10" height="8" fill="#000000"/>
                    <text x="25" y="58" fontSize="4" fill="#FFD700" textAnchor="middle">KENYA</text>
              </svg>
            </div>
                
                {/* eCitizen Text Logo */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#00A651] rounded-full">
                      <span className="text-white font-bold text-lg lg:text-xl">e</span>
                    </div>
                    <span className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">Citizen</span>
                  </div>
                  <span className="text-[10px] lg:text-xs text-gray-600 font-medium -mt-1">Government of Kenya</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              Admin
            </Link>
            <Link href="/national" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              National
            </Link>
            <Link href="/agencies" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              Agencies
            </Link>
            <Link href="/counties" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              Counties
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              Help & Support
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Search button */}
            <button 
              className="p-2 text-gray-600 hover:text-[#00595E] transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign in link */}
            <Link 
              href="/login" 
              className="hidden sm:inline-block text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium px-2"
            >
              Sign in
            </Link>

            {/* Register button */}
            <Link 
              href="/register" 
              className="bg-[#00595E] text-white px-4 py-2 rounded-lg hover:bg-[#004a4f] transition-colors text-sm font-medium whitespace-nowrap shadow-sm"
            >
              Register
            </Link>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-[#00595E] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
