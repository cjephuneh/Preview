'use client'

import { useState, useEffect } from 'react'

export function usePreviewMode() {
  const [previewMode, setPreviewMode] = useState(false)

  useEffect(() => {
    // Check localStorage for preview mode
    const checkPreviewMode = () => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('ecitizen-preview-mode')
        setPreviewMode(saved === 'true')
      }
    }

    checkPreviewMode()

    // Listen for changes
    const handleStorageChange = () => {
      checkPreviewMode()
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)
      window.addEventListener('ecitizen-preview-mode-changed', handleStorageChange)

      // Poll for changes (for same-tab updates)
      const interval = setInterval(checkPreviewMode, 500)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('ecitizen-preview-mode-changed', handleStorageChange)
        clearInterval(interval)
      }
    }
  }, [])

  return previewMode
}

