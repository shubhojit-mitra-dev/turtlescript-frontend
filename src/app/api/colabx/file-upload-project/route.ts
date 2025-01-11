import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  // Here you would typically handle the file upload
  // For this example, we'll just log the file details
  console.log(`File uploaded: ${file.name} (${file.size} bytes)`)

  return NextResponse.json({ message: "File uploaded successfully" }, { status: 200 })
}

