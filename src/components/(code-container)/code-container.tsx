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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 max-w-4xl w-screen mx-auto border border-gray-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent -z-10" />
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-3">
          <Button 
            variant="outline" 
            onClick={() => setIsShareModalOpen(true)}
            className="text-blue-400 hover:text-blue-300 border-blue-400 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsSavedFilesModalOpen(true)}
            className="text-green-400 hover:text-green-300 border-green-400 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
          >
            <FolderOpen className="mr-2 h-4 w-4" />
            Saved Files
          </Button>
        </div>
        <Button 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
          onClick={handleCreateNewFolder}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Folder
        </Button>
      </div>
      <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-xl p-6 shadow-inner border border-gray-700">
        <FileUploader onFilesAdded={handleFilesAdded} />
        <FileList files={files} />
      </div>
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
      <SavedFilesModal isOpen={isSavedFilesModalOpen} onClose={() => setIsSavedFilesModalOpen(false)} />
    </div>
  )
}

