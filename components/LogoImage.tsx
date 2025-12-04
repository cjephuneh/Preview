'use client'

import { useState } from 'react'

interface LogoImageProps {
  src: string
  alt: string
  fallbackText: string
  className?: string
  fallbackTextSize?: 'xs' | 'small'
}

export default function LogoImage({ 
  src, 
  alt, 
  fallbackText, 
  className = "w-full h-full object-contain",
  fallbackTextSize = 'xs'
}: LogoImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    const textSizeClass = fallbackTextSize === 'small' ? 'text-[8px]' : 'text-xs'
    return (
      <div className="absolute inset-0 w-full h-full bg-[#00595E] rounded flex items-center justify-center">
        <span className={`text-white ${textSizeClass} font-bold`}>{fallbackText}</span>
      </div>
    )
  }

  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  )
}

