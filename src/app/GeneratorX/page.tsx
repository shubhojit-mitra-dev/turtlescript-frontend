import { Header } from './components/Header'
import { Card } from './components/Card'
import { FloatingButton } from './components/FloatingButton'

const cards = [
  {
    image: '/placeholder.svg?height=300&width=400',
    title: 'Website 1',
    description: 'This is a description for Website 1.',
  },
  {
    image: '/placeholder.svg?height=300&width=400',
    title: 'Website 2',
    description: 'This is a description for Website 2.',
  },
  {
    image: '/placeholder.svg?height=300&width=400',
    title: 'Website 3',
    description: 'This is a description for Website 3.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </main>
      <FloatingButton />
    </div>
  )
}

