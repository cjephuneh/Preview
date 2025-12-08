'use client'

import { useState, useEffect } from 'react'
import AdBanner from './AdBanner'

interface AdBannerWithStorageProps {
  containerId: string
  defaultImages?: string[]
  defaultSponsor?: string
  defaultSponsorType?: string
  size?: 'small' | 'medium' | 'large' | 'horizontal' | 'vertical'
  className?: string
  showMarker?: boolean
  markerLabel?: string
}

export default function AdBannerWithStorage({
  containerId,
  defaultImages = [],
  defaultSponsor,
  defaultSponsorType,
  size = 'medium',
  className = '',
  showMarker = false,
  markerLabel
}: AdBannerWithStorageProps) {
  const [images, setImages] = useState<string[]>(defaultImages)
  const [sponsor, setSponsor] = useState<string | undefined>(defaultSponsor)
  const [sponsorType, setSponsorType] = useState<string | undefined>(defaultSponsorType)
  const [rotationInterval, setRotationInterval] = useState(30000)

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ecitizen-ads')
    if (saved) {
      try {
        const containers = JSON.parse(saved)
        const container = containers.find((c: any) => c.id === containerId)
        if (container) {
          if (container.images && container.images.length > 0) {
            setImages(container.images)
          }
          if (container.sponsor) setSponsor(container.sponsor)
          if (container.sponsorType) setSponsorType(container.sponsorType)
          if (container.rotationInterval) {
            setRotationInterval(container.rotationInterval * 1000) // Convert seconds to milliseconds
          }
        }
      } catch (e) {
        console.error('Error loading ad data:', e)
      }
    }

    // Listen for storage changes (when admin updates)
    const handleStorageChange = () => {
      const saved = localStorage.getItem('ecitizen-ads')
      if (saved) {
        try {
          const containers = JSON.parse(saved)
          const container = containers.find((c: any) => c.id === containerId)
          if (container) {
            if (container.images && container.images.length > 0) {
              setImages(container.images)
            }
            if (container.sponsor) setSponsor(container.sponsor)
            if (container.sponsorType) setSponsorType(container.sponsorType)
            if (container.rotationInterval) {
              setRotationInterval(container.rotationInterval * 1000)
            }
          }
        } catch (e) {
          console.error('Error loading ad data:', e)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    // Also listen for custom event (same tab updates)
    window.addEventListener('ecitizen-ads-updated', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('ecitizen-ads-updated', handleStorageChange)
    }
  }, [containerId])

  return (
    <div className="relative">
      {showMarker && (
        <div className="absolute -top-8 left-0 z-50 flex items-center gap-2">
          <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-t-lg text-xs font-bold flex items-center gap-2 shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {markerLabel || `Ad Container: ${containerId}`}
          </div>
        </div>
      )}
      <AdBanner
        sponsor={sponsor}
        sponsorType={sponsorType}
        size={size}
        className={className}
        images={images}
        rotationInterval={rotationInterval}
      />
    </div>
  )
}

