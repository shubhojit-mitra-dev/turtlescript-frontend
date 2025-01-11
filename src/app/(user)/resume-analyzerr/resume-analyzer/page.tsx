'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { FileUploader } from '@/components/(resume-analyzer)/file-uploader'
import { Sparkles, FileText, Briefcase } from 'lucide-react'

export default function ResumeAnalyzerPage() {
  const [resumeText, setResumeText] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [analysisResult, setAnalysisResult] = useState(null)

  const handleAnalyze = async () => {
    // TODO: Insert API call here
    // const result = await analyzeResume(resumeText, jobDescription)
    // setAnalysisResult(result)
    console.log('Analyze button clicked')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col w-full">
   
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-grow p-4 sm:p-8"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Analyze Your Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get insights and improve your chances of landing your dream job
            </p>
          </motion.div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6">
            <div className="space-y-4">
              <label htmlFor="resume" className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-300">
                <FileText className="mr-2" size={24} />
                Resume Text
              </label>
              <Textarea
                id="resume"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume text here..."
                className="w-full h-40 text-base"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="jobDescription" className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-300">
                <Briefcase className="mr-2" size={24} />
                Job Description
              </label>
              <Textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="w-full h-40 text-base"
              />
            </div>
            <FileUploader onFileUpload={(text) => setResumeText(text)} />
            <Button 
              onClick={handleAnalyze} 
              className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="mr-2" size={24} />
              Analyze Resume
            </Button>
          </div>
          {analysisResult && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Analysis Result</h2>
              {/* TODO: Display analysis result here */}
            </motion.div>
          )}
        </div>
      </motion.main>
    </div>
  )
}
