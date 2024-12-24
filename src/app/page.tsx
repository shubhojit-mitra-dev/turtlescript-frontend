import { LatestFeeds } from '../components/latest-feeds'

export default function Home() {
    return (
        <main className="mt-20 w-screen max-w-8xl">
            <h1 className="text-2xl font-semibold mb-4 ml-6">Latest Featured Content</h1>
            <div className="mx-auto px-4 flex justify-center items-center">
                <LatestFeeds />
            </div>
        </main>
    )
}
