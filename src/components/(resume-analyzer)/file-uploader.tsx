'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { motion } from 'framer-motion'

interface FileUploaderProps {
  setResumeFile: (file: File | null) => void
}

export function FileUploader({ setResumeFile }: FileUploaderProps) {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setResumeFile(file)
      setFileName(file.name)
    }
  }

  // TODO: Implement file upload to server/cloud storage if needed

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gold-400">Upload Resume</h2>
      <div className="flex items-center justify-center w-full">
        <label 
          htmlFor="dropzone-file" 
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gold-500 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out group relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-gold-500/20 to-gold-600/20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          />
          <div className="flex flex-col items-center justify-center pt-5 pb-6 relative z-10">
            <Upload className="w-12 h-12 mb-4 text-gold-400 group-hover:text-gold-500 transition-colors duration-300" />
            <p className="mb-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              PDF, DOCX, or TXT (MAX. 5MB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.docx,.txt" />
        </label>
      </div>
      {fileName && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-gold-400 mt-2"
        >
          Uploaded: {fileName}
        </motion.p>
      )}
    </div>
  )
}

