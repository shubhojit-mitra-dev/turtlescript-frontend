import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log('Mentor Application Data:', data)
    return NextResponse.json({
      success: true,
      message: 'Mentor application received successfully'
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to process application' },
      { status: 500 }
    )
  }
}
