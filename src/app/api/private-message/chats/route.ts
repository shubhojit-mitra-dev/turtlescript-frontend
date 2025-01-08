import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Replace this URL with your actual API endpoint
    const apiUrl = 'https://api.example.com/chats'
    
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const chats = await response.json()
    
    return NextResponse.json(chats)
  } catch (error) {
    console.error('Failed to fetch chats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chats' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const apiUrl = 'https://api.example.com/chats'

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const newChat = await response.json()
    return NextResponse.json(newChat, { status: 201 })
  } catch (error) {
    console.error('Failed to create chat:', error)
    return NextResponse.json(
      { error: 'Failed to create chat' },
      { status: 500 }
    )
  }
}

