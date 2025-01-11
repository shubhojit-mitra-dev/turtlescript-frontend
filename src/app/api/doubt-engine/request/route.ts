import { NextResponse } from 'next/server'
import { RequestFormData } from '@/types/types'

export async function POST(req: Request) {
  try {
    const data: RequestFormData = await req.json()
    console.log('Call Request Data:', data)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
