'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Save, Hash } from 'lucide-react'
import { useToast } from '@/hooks/use-toast' 

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  updatedAt: number;
}

export default function WritePage() {
  const { theme } = useTheme()
  const { toast } = useToast()
  const [note, setNote] = useState<Note>({
    id: '',
    title: '',
    content: '',
    tags: [],
    updatedAt: Date.now()
  })
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    const savedNote = localStorage.getItem('currentNote')
    if (savedNote) {
      setNote(JSON.parse(savedNote))
    } else {
      setNote({
        id: Date.now().toString(),
        title: '',
        content: '',
        tags: [],
        updatedAt: Date.now()
      })
    }
  }, [])

  const handleSave = () => {
    const updatedNote = { ...note, updatedAt: Date.now() }
    localStorage.setItem('currentNote', JSON.stringify(updatedNote))
    
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]')
    const noteIndex = savedNotes.findIndex((n: Note) => n.id === updatedNote.id)
    
    if (noteIndex > -1) {
      savedNotes[noteIndex] = updatedNote
    } else {
      savedNotes.push(updatedNote)
    }
    
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes))
    
    toast({
      title: "Note saved",
      description: "Your note has been successfully saved.",
    })
  }

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag.trim() !== '') {
      setNote(prevNote => ({
        ...prevNote,
        tags: [...prevNote.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setNote(prevNote => ({
      ...prevNote,
      tags: prevNote.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const wordCount = note.content.trim().split(/\s+/).length

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <main className="container mx-auto px-4 py-8 bg-background">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Write Your Note</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={note.title}
                  onChange={(e) => setNote(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter note title..."
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="note-content">Note</Label>
                <textarea
                  id="note-content"
                  value={note.content}
                  onChange={(e) => setNote(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Start typing your note here..."
                  className="w-full h-64 p-2 text-foreground bg-background border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags</Label>
                <div className="flex items-center space-x-2">
                  <Hash className="text-muted-foreground" />
                  <Input
                    id="tags"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleAddTag}
                    placeholder="Add tags..."
                    className="flex-grow"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {note.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-between items-center py-3">
            <span className="text-sm text-muted-foreground">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Save Note
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

