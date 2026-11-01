import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const intervalMs = 1500

export function HomeHeroSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [index, setIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (reducedMotion || !hasMultipleImages) return
    const timer = window.setInterval(() => setIndex(current => (current + 1) % images.length), intervalMs)
    return () => window.clearInterval(timer)
  }, [hasMultipleImages, images.length, reducedMotion])

  if (!images.length) return null
  const displayedImages = reducedMotion ? images.slice(0, 1) : images
  return <figure className="hero-photo" aria-live="off">
    {displayedImages.map((src, imageIndex) => <img key={src} src={src} alt={imageIndex === index ? alt : ''}
      className={`hero-photo-slide${imageIndex === index ? ' is-active' : ''}`} loading={imageIndex === 0 ? 'eager' : 'lazy'} decoding="async" draggable={false} />)}
  </figure>
}
