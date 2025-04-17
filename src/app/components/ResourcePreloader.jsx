'use client'

import { useEffect } from 'react'

/**
 * ResourcePreloader component - handles preloading critical assets
 * Does not accept any props to avoid potential DOM attribute issues
 */
export default function ResourcePreloader() {
  useEffect(() => {
    // Function to preload images
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/images/logo-tecnologia-plus.jpg',
        // Add other critical images here
      ]
      
      criticalImages.forEach(src => {
        const imgLoader = new Image()
        imgLoader.src = src
      })
    }

    // Function to preload scripts
    const preloadCriticalScripts = () => {
      const criticalScripts = []
      
      if (criticalScripts.length === 0) return
      
      criticalScripts.forEach(src => {
        const linkElem = document.createElement('link')
        linkElem.rel = 'preload'
        linkElem.as = 'script'
        linkElem.href = src
        document.head.appendChild(linkElem)
      })
    }

    // Execute preloaders
    preloadCriticalImages()
    preloadCriticalScripts()
  }, [])

  // Component doesn't render anything visible
  return null
} 