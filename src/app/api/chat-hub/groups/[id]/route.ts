import { NextResponse } from 'next/server'

// Using the same mock database from the previous file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const groups: any[]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const group = groups.find(g => g.id === params.id)
  if (group) {
    return NextResponse.json(group)
  } else {
    return NextResponse.json({ error: 'Group not found' }, { status: 404 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()
  const index = groups.findIndex(g => g.id === params.id)
  if (index !== -1) {
    groups[index] = { ...groups[index], ...body }
    return NextResponse.json(groups[index])
  } else {
    return NextResponse.json({ error: 'Group not found' }, { status: 404 })
  }
}

