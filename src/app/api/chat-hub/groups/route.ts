import { NextResponse } from 'next/server'

// Mock database
const groups = [
  {
    id: '1',
    name: 'Java Developers',
    description: 'A community for Java enthusiasts to share knowledge and collaborate on projects.',
    members: 2200,
    isPublic: true,
    icon: '☕',
    createdAt: '2023-01-01',
    admin: 'John Doe'
  },
  // Add more mock groups here
]

export async function GET() {
  return NextResponse.json(groups)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newGroup = {
    id: (groups.length + 1).toString(),
    ...body,
    members: 1,
    createdAt: new Date().toISOString().split('T')[0]
  }
  groups.push(newGroup)
  return NextResponse.json(newGroup, { status: 201 })
}

