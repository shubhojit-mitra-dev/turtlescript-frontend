import { NextResponse } from 'next/server'

// This would typically come from a database
const projects = [
  { id: 1, title: "AI Chatbot", description: "Develop an AI chatbot", status: "ongoing" },
  { id: 2, title: "E-commerce Platform", description: "Build an e-commerce website", status: "completed" },
  { id: 3, title: "Mobile App", description: "Create a mobile app for iOS and Android", status: "ongoing" },
]

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically validate the data and save it to a database
  const newProject = {
    id: projects.length + 1,
    ...body,
    status: "ongoing"
  }
  
  projects.push(newProject)

  return NextResponse.json(newProject)
}

