"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload } from 'lucide-react'

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        console.log("File uploaded successfully")
        setFile(null)
      } else {
        console.error("File upload failed")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
    }
  }

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">File Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input type="file" onChange={handleFileChange} className="bg-gray-800 text-white border-gray-700" />
          <Button onClick={handleUpload} disabled={!file} className="w-full bg-gray-800 hover:bg-gray-700">
            <Upload className="mr-2 h-4 w-4" /> Upload File
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

