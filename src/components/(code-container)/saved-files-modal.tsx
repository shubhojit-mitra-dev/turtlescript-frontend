'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { File, Folder } from 'lucide-react'

interface SavedFile {
  name: string
  type: 'file' | 'folder'
}

interface SavedFilesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SavedFilesModal({ isOpen, onClose }: SavedFilesModalProps) {
  const [savedFiles, setSavedFiles] = useState<SavedFile[]>([])

  // TODO: Add API call to fetch saved files and folders
  useEffect(() => {
    // Fetch saved files and folders when the modal opens
    if (isOpen) {
      // const fetchedFiles = await fetchSavedFiles()
      // setSavedFiles(fetchedFiles)

      // Placeholder implementation
      setSavedFiles([
        { name: 'Project A', type: 'folder' },
        { name: 'main.js', type: 'file' },
        { name: 'styles.css', type: 'file' },
        { name: 'Project B', type: 'folder' },
        { name: 'README.md', type: 'file' },
      ])
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 bg-opacity-95 backdrop-filter backdrop-blur-lg text-gray-100 border border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-400">Saved Files and Folders</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <ul className="space-y-2">
            {savedFiles.map((item, index) => (
              <li key={index} className="flex items-center p-3 rounded-md bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
                {item.type === 'folder' ? (
                  <Folder className="mr-3 h-5 w-5 text-yellow-400" />
                ) : (
                  <File className="mr-3 h-5 w-5 text-blue-400" />
                )}
                <span className="text-gray-200">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

