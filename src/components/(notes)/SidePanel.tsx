'use client'

import { useState, useEffect } from 'react'
import { X, ChevronRight, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useTheme } from '@/app/(user)/notes/contexts/ThemeContext' 

interface BoughtNote {
  id: string;
  title: string;
  content: string;
  purchaseDate: number;
  subject: string;
}

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data for bought notes
const mockBoughtNotes: BoughtNote[] = [
  {
    id: '1',
    title: 'Introduction to Psychology',
    content: 'Psychology is the scientific study of the mind and behavior...',
    purchaseDate: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
    subject: 'Psychology'
  },
  {
    id: '2',
    title: 'Advanced Calculus Concepts',
    content: 'This note covers advanced topics in calculus including...',
    purchaseDate: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    subject: 'Mathematics'
  },
  {
    id: '3',
    title: 'World War II: Key Events',
    content: 'A comprehensive timeline of major events during World War II...',
    purchaseDate: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
    subject: 'History'
  }
]

export default function SidePanel({ isOpen, onClose }: SidePanelProps) {
  const { theme } = useTheme()
  const [boughtNotes, setBoughtNotes] = useState<BoughtNote[]>([])
  const [selectedNote, setSelectedNote] = useState<BoughtNote | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the bought notes from an API or local storage
    setBoughtNotes(mockBoughtNotes)
  }, [])

  const handleNoteClick = (note: BoughtNote) => {
    setSelectedNote(selectedNote?.id === note.id ? null : note)
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed inset-y-0 right-0 w-80 bg-background/80 backdrop-blur-md shadow-lg p-4 border-l border-border ${
            theme === 'dark' ? 'dark' : ''
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-foreground">Your Notes</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <ScrollArea className="flex-grow">
              {boughtNotes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">You haven't bought any notes yet.</p>
                  <Button variant="outline" className="mt-4">Browse Notes</Button>
                </div>
              ) : (
                boughtNotes.map((note) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 bg-card rounded-lg shadow-sm overflow-hidden border border-border"
                  >
                    <div className="p-3 flex items-center justify-between">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left p-0 hover:bg-transparent"
                        onClick={() => handleNoteClick(note)}
                      >
                        <div className="flex items-center w-full">
                          <BookOpen className="h-5 w-5 mr-2 text-primary" />
                          <div className="flex-grow">
                            <h3 className="font-semibold truncate">{note.title}</h3>
                            <p className="text-sm text-muted-foreground truncate">{note.subject}</p>
                          </div>
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${
                              selectedNote?.id === note.id ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                      </Button>
                    </div>
                    <AnimatePresence>
                      {selectedNote?.id === note.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-muted p-3 border-t border-border"
                        >
                          <p className="text-sm mb-2">{note.content}</p>
                          <p className="text-xs text-muted-foreground">
                            Purchased on: {formatDate(note.purchaseDate)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              )}
            </ScrollArea>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

