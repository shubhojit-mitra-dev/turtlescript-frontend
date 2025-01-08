import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Replace this URL with your actual API endpoint
    const apiUrl = 'https://api.example.com/notifications'
    
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const notifications = await response.json()
    
    return NextResponse.json(notifications)
  } catch (error) {
    console.error('Failed to fetch notifications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const apiUrl = 'https://api.example.com/notifications'

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

    const newNotification = await response.json()
    return NextResponse.json(newNotification, { status: 201 })
  } catch (error) {
    console.error('Failed to create notification:', error)
    return NextResponse.json(
      { error: 'Failed to create notification' },
      { status: 500 }
    )
  }
}

