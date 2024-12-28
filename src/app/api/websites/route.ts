import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log('Website Form Data:', data)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    )
  }
}
