'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Search } from 'lucide-react'

interface Note {
  id: string;
  title: string;
  preview: string;
  price: number;
  subject: string;
}

const dummyNotes: Note[] = [
  { id: '1', title: 'Introduction to Psychology', preview: 'Comprehensive notes covering the basics of psychology...', price: 9.99, subject: 'Psychology' },
  { id: '2', title: 'Advanced Calculus', preview: 'Detailed explanations and examples of advanced calculus concepts...', price: 14.99, subject: 'Mathematics' },
  { id: '3', title: 'World History: 20th Century', preview: 'A timeline of major events and their impacts on global politics...', price: 12.99, subject: 'History' },
  { id: '4', title: 'Organic Chemistry Fundamentals', preview: 'Essential concepts and reactions in organic chemistry...', price: 11.99, subject: 'Chemistry' },
  { id: '5', title: 'Introduction to Machine Learning', preview: 'Basic algorithms and concepts in machine learning...', price: 15.99, subject: 'Computer Science' },
  { id: '6', title: 'Shakespeare\'s Major Plays', preview: 'Analysis of key themes and characters in Shakespeare\'s works...', price: 10.99, subject: 'Literature' },
]

export default function BrowsePage() {
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNotes = dummyNotes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <main className="container mx-auto px-4 py-8 bg-background">
        <h1 className="text-4xl font-bold mb-6 text-center text-foreground">Browse Notes</h1>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <Input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-primary" />
                        {note.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">{note.preview}</p>
                      <p className="text-sm font-medium text-primary">{note.subject}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-lg font-semibold">${note.price.toFixed(2)}</span>
                      <Button>Buy Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-4">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Google Ad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted h-60 flex items-center justify-center text-muted-foreground">
                    Ad Space (300x250)
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Google Ad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted h-96 flex items-center justify-center text-muted-foreground">
                    Ad Space (300x600)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

