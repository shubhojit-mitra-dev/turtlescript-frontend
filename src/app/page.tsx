import { ImportantUpdates } from '@/components/important-updates'
import { LatestFeeds } from '@/components/latest-feeds'
import { NewsFeed } from '@/components/news-feed'

export default function Home() {
  return (
    <main className='flex justify-center w-screen items-center mx-auto mb-20'>

    <div className="mt-28 w-full max-w-6xl">
      <h1 className="text-3xl font-semibold mb-4 ml-6">Latest Featured Content</h1>
      <div className="mx-auto px-4">
        <LatestFeeds />
        <div className="mt-8 flex gap-6">
          <div className="sm:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">News Feed</h2>
            <NewsFeed />
          </div>
          <div className="hidden sm:block w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Important Updates</h2>
            <ImportantUpdates />
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
