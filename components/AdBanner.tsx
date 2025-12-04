'use client'

interface AdBannerProps {
  sponsor?: string
  sponsorType?: string
  size?: 'small' | 'medium' | 'large' | 'horizontal' | 'vertical'
  className?: string
}

export default function AdBanner({ 
  sponsor, 
  sponsorType = 'Organization',
  size = 'medium',
  className = ''
}: AdBannerProps) {
  const sizeClasses = {
    small: 'h-32',
    medium: 'h-48',
    large: 'h-64',
    horizontal: 'h-32 w-full',
    vertical: 'h-96 w-full'
  }

  return (
    <div className={`bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 ${sizeClasses[size]} ${className}`}>
      <div className="text-center">
        <div className="mb-2">
          <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm font-medium mb-1">Advertisement</p>
        {sponsor && (
          <p className="text-gray-400 text-xs mt-2">
            Proudly sponsored by
          </p>
        )}
        {sponsor && (
          <p className="text-gray-600 text-sm font-semibold mt-1">
            {sponsor}
          </p>
        )}
        {sponsor && sponsorType && (
          <p className="text-gray-400 text-xs mt-1">
            {sponsorType}
          </p>
        )}
      </div>
    </div>
  )
}

