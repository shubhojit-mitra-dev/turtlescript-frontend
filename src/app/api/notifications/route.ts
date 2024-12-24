import { NextResponse } from 'next/server'
import { Notification } from '@/types/types'

const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Comment',
    description: 'John Doe commented on your post "Getting Started with Next.js"',
    timestamp: new Date(Date.now() - 120000).toISOString(), // 2 minutes ago
    isRead: false,
    type: 'comment'
  },
  {
    id: '2',
    title: 'Course Update',
    description: 'New content available in React Fundamentals course',
    timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    isRead: false,
    type: 'system'
  },
  {
    id: '3',
    title: 'New Like',
    description: 'Sarah liked your comment in TypeScript tutorial',
    timestamp: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    isRead: true,
    type: 'like'
  },
  {
    id: '4',
    title: 'New Follower',
    description: 'Mike started following you',
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    isRead: true,
    type: 'follow'
  }
]

export async function GET() {
  try {
    return NextResponse.json(notifications)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    )
  }
}
