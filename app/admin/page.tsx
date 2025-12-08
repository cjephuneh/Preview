'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface AdContainer {
  id: string
  name: string
  type: 'vertical' | 'horizontal' | 'small'
  position: string
  images: string[]
  rotationInterval: number // in seconds
  sponsor?: string
  sponsorType?: string
}

export default function AdminDashboard() {
  const [adContainers, setAdContainers] = useState<AdContainer[]>([])
  const [selectedContainer, setSelectedContainer] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ecitizen-preview-mode') === 'true'
    }
    return false
  })

  // Load saved ads from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ecitizen-ads')
    if (saved) {
      try {
        setAdContainers(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading saved ads:', e)
      }
    } else {
      // Initialize with default containers
      const defaultContainers: AdContainer[] = [
        { id: 'side-left-1', name: 'Left Side Ad (Top)', type: 'vertical', position: 'Hero Section - Left', images: [], rotationInterval: 30, sponsor: 'University of Nairobi', sponsorType: 'Higher Education Institution' },
        { id: 'side-right-1', name: 'Right Side Ad (Top)', type: 'vertical', position: 'Hero Section - Right', images: [], rotationInterval: 30, sponsor: 'Ministry of Education', sponsorType: 'Government Department' },
        { id: 'horizontal-1', name: 'Horizontal Ad (After Ministries)', type: 'horizontal', position: 'After Ministries Section', images: [], rotationInterval: 30, sponsor: 'Kenya Commercial Bank', sponsorType: 'Financial Institution' },
        { id: 'horizontal-2', name: 'Horizontal Ad (In Agencies Grid)', type: 'horizontal', position: 'Agencies Grid - After 6th Item', images: [], rotationInterval: 30, sponsor: 'Cooperative Bank of Kenya', sponsorType: 'Banking Services' },
        { id: 'horizontal-3a', name: 'Horizontal Ad (After Agencies - Left)', type: 'horizontal', position: 'After Agencies Section - Left', images: [], rotationInterval: 30, sponsor: 'Safaricom PLC', sponsorType: 'Telecommunications Company' },
        { id: 'horizontal-3b', name: 'Horizontal Ad (After Agencies - Right)', type: 'horizontal', position: 'After Agencies Section - Right', images: [], rotationInterval: 30, sponsor: 'Equity Bank', sponsorType: 'Financial Services' },
        { id: 'horizontal-4', name: 'Horizontal Ad (After Counties)', type: 'horizontal', position: 'After Counties Section', images: [], rotationInterval: 30, sponsor: 'Kenya Power & Lighting Company', sponsorType: 'Energy Provider' },
        { id: 'horizontal-5', name: 'Horizontal Ad (In Features)', type: 'horizontal', position: 'Features Section', images: [], rotationInterval: 30, sponsor: 'Kenya Airways', sponsorType: 'National Airline' },
        { id: 'horizontal-6a', name: 'Horizontal Ad (After How It Works - 1)', type: 'horizontal', position: 'After How It Works Section - 1', images: [], rotationInterval: 30, sponsor: 'Airtel Kenya', sponsorType: 'Telecommunications' },
        { id: 'horizontal-6b', name: 'Horizontal Ad (After How It Works - 2)', type: 'horizontal', position: 'After How It Works Section - 2', images: [], rotationInterval: 30, sponsor: 'National Bank of Kenya', sponsorType: 'Banking Services' },
        { id: 'horizontal-6c', name: 'Horizontal Ad (After How It Works - 3)', type: 'horizontal', position: 'After How It Works Section - 3', images: [], rotationInterval: 30, sponsor: 'Kenya Railways', sponsorType: 'Transport Services' },
      ]
      setAdContainers(defaultContainers)
      localStorage.setItem('ecitizen-ads', JSON.stringify(defaultContainers))
    }
  }, [])

  // Save to localStorage whenever adContainers changes
  useEffect(() => {
    if (adContainers.length > 0) {
      localStorage.setItem('ecitizen-ads', JSON.stringify(adContainers))
      // Dispatch custom event for same-tab updates
      window.dispatchEvent(new Event('ecitizen-ads-updated'))
    }
  }, [adContainers])

  const handleImageUpload = (containerId: string, files: FileList | null) => {
    if (!files || files.length === 0) return

    const container = adContainers.find(c => c.id === containerId)
    if (!container) return

    const newImages: string[] = []
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          newImages.push(result)
          
          if (newImages.length === files.length) {
            setAdContainers(prev => prev.map(c => 
              c.id === containerId 
                ? { ...c, images: [...c.images, ...newImages] }
                : c
            ))
          }
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const handleRemoveImage = (containerId: string, imageIndex: number) => {
    setAdContainers(prev => prev.map(c => 
      c.id === containerId 
        ? { ...c, images: c.images.filter((_, i) => i !== imageIndex) }
        : c
    ))
  }

  const handleUpdateInterval = (containerId: string, interval: number) => {
    setAdContainers(prev => prev.map(c => 
      c.id === containerId 
        ? { ...c, rotationInterval: interval }
        : c
    ))
  }

  const handleUpdateSponsor = (containerId: string, sponsor: string, sponsorType: string) => {
    setAdContainers(prev => prev.map(c => 
      c.id === containerId 
        ? { ...c, sponsor, sponsorType }
        : c
    ))
  }

  const selectedContainerData = adContainers.find(c => c.id === selectedContainer)
  
  // Calculate stats
  const totalContainers = adContainers.length
  const containersWithAds = adContainers.filter(c => c.images.length > 0).length
  const totalImages = adContainers.reduce((sum, c) => sum + c.images.length, 0)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Ad Management Dashboard</h1>
                    <p className="text-gray-600 mt-1">Manage advertisement placements across your site</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Site
                </Link>
                <button
                  onClick={() => {
                    const newMode = !previewMode
                    setPreviewMode(newMode)
                    localStorage.setItem('ecitizen-preview-mode', String(newMode))
                    window.dispatchEvent(new Event('ecitizen-preview-mode-changed'))
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all shadow-lg font-medium ${
                    previewMode 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                  }`}
                >
                  {previewMode ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Exit Preview
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview Mode
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Containers</p>
                    <p className="text-3xl font-bold text-gray-900">{totalContainers}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Active Ads</p>
                    <p className="text-3xl font-bold text-green-600">{containersWithAds}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Images</p>
                    <p className="text-3xl font-bold text-purple-600">{totalImages}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Mode Banner */}
            {previewMode && (
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold mb-1">Preview Mode Active</p>
                    <p className="text-blue-700 text-sm">
                      Ad containers are now marked on the main page. Visit the homepage to see visual markers on each ad placement.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Container List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Ad Containers
                  </h2>
                  <p className="text-gray-300 text-sm mt-1">{totalContainers} containers available</p>
                </div>
                <div className="p-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                  <div className="space-y-3">
                    {adContainers.map((container) => (
                      <button
                        key={container.id}
                        onClick={() => setSelectedContainer(container.id)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all transform hover:scale-[1.02] ${
                          selectedContainer === container.id
                            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm text-gray-900">{container.name}</span>
                              {container.images.length > 0 && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Active
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mb-2">{container.position}</p>
                          </div>
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                            container.type === 'vertical' 
                              ? 'bg-purple-100 text-purple-700 border border-purple-200'
                              : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          }`}>
                            {container.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {container.images.length} image{container.images.length !== 1 ? 's' : ''}
                          </span>
                          {container.images.length > 0 && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {container.rotationInterval}s
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Container Editor */}
            <div className="lg:col-span-2">
              {selectedContainerData ? (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedContainerData.name}</h2>
                        <p className="text-gray-600 text-sm flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {selectedContainerData.position}
                        </p>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg font-semibold text-sm ${
                        selectedContainerData.type === 'vertical' 
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {selectedContainerData.type}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Sponsor Info */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Sponsor Information</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Sponsor Name
                          </label>
                          <input
                            type="text"
                            value={selectedContainerData.sponsor || ''}
                            onChange={(e) => handleUpdateSponsor(
                              selectedContainerData.id,
                              e.target.value,
                              selectedContainerData.sponsorType || ''
                            )}
                            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                            placeholder="e.g., University of Nairobi"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Sponsor Type
                          </label>
                          <input
                            type="text"
                            value={selectedContainerData.sponsorType || ''}
                            onChange={(e) => handleUpdateSponsor(
                              selectedContainerData.id,
                              selectedContainerData.sponsor || '',
                              e.target.value
                            )}
                            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                            placeholder="e.g., Higher Education Institution"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Rotation Settings */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Rotation Settings</h3>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-sm font-semibold text-gray-700">
                            Rotation Interval
                          </label>
                          <span className="text-2xl font-bold text-purple-600">{selectedContainerData.rotationInterval}s</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="120"
                          step="5"
                          value={selectedContainerData.rotationInterval}
                          onChange={(e) => handleUpdateInterval(selectedContainerData.id, parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>5 seconds</span>
                          <span>60 seconds</span>
                          <span>120 seconds</span>
                        </div>
                      </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-emerald-500 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Upload Images</h3>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                        <input
                          type="file"
                          accept="image/gif,image/png,image/jpeg,image/webp"
                          multiple
                          onChange={(e) => handleImageUpload(selectedContainerData.id, e.target.files)}
                          className="hidden"
                          id={`upload-${selectedContainerData.id}`}
                        />
                        <label
                          htmlFor={`upload-${selectedContainerData.id}`}
                          className="cursor-pointer inline-flex flex-col items-center"
                        >
                          <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-semibold shadow-md">
                            Upload GIFs/Images
                          </span>
                          <p className="mt-3 text-sm text-gray-500">
                            Select multiple images to rotate through (GIF, PNG, JPEG, WebP)
                          </p>
                        </label>
                      </div>
                    </div>

                    {/* Image Gallery */}
                    {selectedContainerData.images.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-green-500 rounded-lg">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                              Uploaded Images
                            </h3>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                            {selectedContainerData.images.length} image{selectedContainerData.images.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {selectedContainerData.images.map((image, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <img
                                  src={image}
                                  alt={`Ad ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <button
                                onClick={() => handleRemoveImage(selectedContainerData.id, index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600 shadow-lg"
                                title="Remove image"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-semibold">
                                #{index + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Live Preview */}
                    {selectedContainerData.images.length > 0 && (
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-5 border border-indigo-100">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 bg-indigo-500 rounded-lg">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">Live Preview</h3>
                        </div>
                        <div className={`${
                          selectedContainerData.type === 'vertical' 
                            ? 'w-32 h-96 mx-auto' 
                            : 'w-full h-48'
                        } bg-white rounded-lg overflow-hidden border-2 border-indigo-300 shadow-lg relative`}>
                          <img
                            src={selectedContainerData.images[0]}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          {selectedContainerData.sponsor && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 text-white p-3 text-center">
                              <p className="text-xs text-gray-300 mb-1">Proudly sponsored by</p>
                              <p className="text-sm font-bold">{selectedContainerData.sponsor}</p>
                              {selectedContainerData.sponsorType && (
                                <p className="text-xs text-gray-400 mt-0.5">{selectedContainerData.sponsorType}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Select an Ad Container</h3>
                    <p className="text-gray-500 mb-6">Choose a container from the list on the left to start managing ads</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tip: Click on any container to edit
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  )
}
