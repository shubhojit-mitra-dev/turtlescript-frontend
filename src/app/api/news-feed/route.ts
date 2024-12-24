import { NextResponse } from 'next/server'
import { NewsItem } from '@/types/types'

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript in this comprehensive guide for beginners.',
    image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
    date: '2024-03-15',
    time: '10:30 AM',
    author: 'John Doe',
    url: '/blog/intro-web-dev'
  },
  {
    id: '2',
    title: 'React Best Practices 2024',
    description: 'Discover the latest React patterns and practices that will improve your development workflow.',
    image: 'https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-4699.jpg',
    date: '2024-03-14',
    time: '2:45 PM',
    author: 'Jane Smith',
    url: '/blog/react-practices'
  },
  {
    id: '3',
    title: 'TypeScript Advanced Topics',
    description: 'Deep dive into TypeScript generics, utility types, and advanced type manipulation.',
    image: 'https://img.freepik.com/free-vector/typescript-concept-illustration_114360-5172.jpg',
    date: '2024-03-13',
    time: '4:15 PM',
    author: 'Mike Johnson',
    url: '/blog/typescript-advanced'
  }
]

export async function GET() {
  try {
    return NextResponse.json(newsItems)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch news feed' },
      { status: 500 }
    )
  }
}
