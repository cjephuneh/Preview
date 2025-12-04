'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10 lg:w-12 lg:h-12">
                  <circle cx="50" cy="50" r="45" fill="#00A651" />
                  <text x="50" y="68" fontSize="40" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">e</text>
                </svg>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-900">eCitizen</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium">
              Home
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
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-[#00595E] transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign in link */}
            <Link 
              href="/login" 
              className="hidden sm:inline-block text-gray-700 hover:text-[#00595E] transition-colors text-sm font-medium"
            >
              Sign in
            </Link>

            {/* Register button */}
            <Link 
              href="/register" 
              className="bg-[#00595E] text-white px-4 py-2 rounded-lg hover:bg-[#007a82] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Register
            </Link>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-[#00595E] transition-colors"
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
