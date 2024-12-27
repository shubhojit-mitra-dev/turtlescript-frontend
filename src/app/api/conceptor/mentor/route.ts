import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()
  console.log('Mentor Form Data:', data)
  return NextResponse.json({ success: true, message: 'Mentor application received' })
}
