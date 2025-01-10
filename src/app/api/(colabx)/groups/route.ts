import { NextResponse } from 'next/server'

export async function GET() {
  const groups = [
    { id: '1', name: 'Frontend', members: 15, image: '/placeholder.svg', isPublic: true },
    { id: '2', name: 'Backend', members: 12, image: '/placeholder.svg', isPublic: false },
    { id: '3', name: 'Design', members: 8, image: '/placeholder.svg', isPublic: true },
    { id: '4', name: 'DevOps', members: 10, image: '/placeholder.svg', isPublic: true },
    { id: '5', name: 'Mobile', members: 7, image: '/placeholder.svg', isPublic: false },
  ]

  return NextResponse.json(groups)
}

