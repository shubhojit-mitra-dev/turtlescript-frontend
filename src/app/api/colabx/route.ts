import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: "Welcome to CoLabX API" })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically process the data, maybe save it to a database
  console.log('Received data:', body)

  return NextResponse.json({ message: "Data received successfully" })
}

