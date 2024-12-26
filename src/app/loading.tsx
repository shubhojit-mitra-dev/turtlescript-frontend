import { getAssets } from '@/data/data'
import Image from 'next/image'

export default function Loading() {
  const assets = getAssets()

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-32 h-32 mb-8">
          <Image
            src={assets.logo}
            alt="Loading..."
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
