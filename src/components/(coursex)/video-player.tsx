"use client"

import { useState, useRef, useEffect } from 'react'

interface VideoPlayerProps {
  videoUrl: string
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full aspect-video"
        onClick={togglePlay}
      />
      <button
        className="absolute bottom-4 left-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-black px-4 py-2 rounded"
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

