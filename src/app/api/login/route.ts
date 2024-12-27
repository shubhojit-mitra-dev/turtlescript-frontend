import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  if (data.username === 'turtle') {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  )
}
