'use client'

import { useState } from 'react'
import { FileUploader } from './file-uploader'
import { JobDescription } from './job-description'
import { AnalysisResult } from './analysis-result'
import { Button } from '@/components/ui/button'
import { BarChart, FileCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export function ResumeAnalyzer() {
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState('')
  const [jobUrl, setJobUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)

  // TODO: Integrate with resume analysis API
  const handleAnalyze = async () => {
    if (!resumeFile || (!jobDescription && !jobUrl)) {
      alert('Please upload a resume and provide either a job description or job URL.')
      return
    }

    setIsAnalyzing(true)
    
    try {
      // TODO: Implement API call to analyze resume
      // const formData = new FormData();
      // formData.append('resume', resumeFile);
      // formData.append('jobDescription', jobDescription);
      // formData.append('jobUrl', jobUrl);
      // const response = await fetch('/api/analyze-resume', {
      //   method: 'POST',
      //   body: formData
      // });
      // const result = await response.json();

      // Simulating API call for now
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock result
      const result = {
        score: 85,
        compatibility: 'High',
        missingKeywords: ['Docker', 'Kubernetes'],
        strengths: ['React', 'Node.js', 'TypeScript'],
      }

      setAnalysisResult(result)
    } catch (error) {
      console.error('Error analyzing resume:', error)
      alert('An error occurred while analyzing the resume. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="bg-gray-900 shadow-xl rounded-lg p-8 space-y-8 border border-gold-500/20"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <FileUploader setResumeFile={setResumeFile} />
        <JobDescription 
          jobDescription={jobDescription} 
          setJobDescription={setJobDescription}
          jobUrl={jobUrl}
          setJobUrl={setJobUrl}
        />
      </div>
      <div className="flex justify-center">
        <Button 
          onClick={handleAnalyze} 
          disabled={isAnalyzing || !resumeFile || (!jobDescription && !jobUrl)}
          className="text-lg px-10 py-6 bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 text-white hover:from-gold-700 hover:via-gold-800 hover:to-gold-900 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-full relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center">
            {isAnalyzing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <BarChart className="mr-2 h-6 w-6" />
              </motion.div>
            ) : (
              <FileCheck className="mr-2 h-6 w-6" />
            )}
            {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </Button>
      </div>
      {analysisResult && <AnalysisResult result={analysisResult} />}
    </motion.div>
  )
}

