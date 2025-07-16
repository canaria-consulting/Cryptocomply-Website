"use client"

import { useState, useEffect } from "react"

interface RotatingTickerProps {
  words: string[]
  interval?: number
}

export default function RotatingTicker({ words, interval = 2000 }: RotatingTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsTransitioning(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className="inline-flex items-center min-w-[100px] xs:min-w-[140px] sm:min-w-[180px]">
      <span
        className={`text-[#bed903] font-bold transition-opacity duration-500 text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.1] ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        aria-live="polite"
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
