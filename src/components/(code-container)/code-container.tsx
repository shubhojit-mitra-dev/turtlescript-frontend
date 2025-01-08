'use client'

import { useState, useEffect } from 'react'
import { FileUploader } from './file-uploader'
import { FileList } from './file-lis'
import { ShareModal } from './share-modal'
import { SavedFilesModal } from './saved-files-modal'
import { Button } from '@/components/ui/button'
import { Plus, Share2, FolderOpen } from 'lucide-react'

export function CodeContainer() {
  const [files, setFiles] = useState<File[]>([])
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [isSavedFilesModalOpen, setIsSavedFilesModalOpen] = useState(false)

  // TODO: Add API call to fetch initial files and folders
  useEffect(() => {
    // API call to fetch initial files and folders
    // setFiles(fetchedFiles)
  }, [])

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles])
    // TODO: Add API call to save new files
    // saveNewFiles(newFiles)
  }

  const handleCreateNewFolder = () => {
    // TODO: Add API call to create a new folder
    // const newFolder = await createNewFolder()
    // setFiles((prevFiles) => [...prevFiles, newFolder])
  }

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-6 max-w-4xl w-screen mx-auto border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-2">
          <Button 
            variant="outline" 
            onClick={() => setIsShareModalOpen(true)}
            className="text-blue-400 hover:text-blue-300 border-blue-400 hover:border-blue-300 transition-colors duration-300"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsSavedFilesModalOpen(true)}
            className="text-green-400 hover:text-green-300 border-green-400 hover:border-green-300 transition-colors duration-300"
          >
            <FolderOpen className="mr-2 h-4 w-4" />
            Saved Files
          </Button>
        </div>
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
          onClick={handleCreateNewFolder}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Folder
        </Button>
      </div>
      <FileUploader onFilesAdded={handleFilesAdded} />
      <FileList files={files} />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
      <SavedFilesModal isOpen={isSavedFilesModalOpen} onClose={() => setIsSavedFilesModalOpen(false)} />
    </div>
  )
}

