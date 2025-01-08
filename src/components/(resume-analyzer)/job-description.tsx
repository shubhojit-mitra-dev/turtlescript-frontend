'use client'

import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'

interface JobDescriptionProps {
  jobDescription: string
  setJobDescription: (description: string) => void
  jobUrl: string
  setJobUrl: (url: string) => void
}

export function JobDescription({ jobDescription, setJobDescription, jobUrl, setJobUrl }: JobDescriptionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gold-400">Job Details</h2>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800 p-1 rounded-lg">
          <TabsTrigger 
            value="description" 
            className="rounded-md py-2 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold-400 data-[state=active]:to-gold-600 data-[state=active]:text-gray-900 transition-all duration-300 ease-in-out"
          >
            Job Description
          </TabsTrigger>
          <TabsTrigger 
            value="url" 
            className="rounded-md py-2 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold-400 data-[state=active]:to-gold-600 data-[state=active]:text-gray-900 transition-all duration-300 ease-in-out"
          >
            Job URL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Textarea
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="min-h-[200px] bg-gray-800 text-gray-100 border-gray-700 focus:border-gold-500 focus:ring-gold-500 rounded-lg"
            />
          </motion.div>
        </TabsContent>
        <TabsContent value="url">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-2">
              <Label htmlFor="job-url" className="text-gray-300">Job Posting URL</Label>
              <Input
                id="job-url"
                placeholder="https://example.com/job-posting"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                className="bg-gray-800 text-gray-100 border-gray-700 focus:border-gold-500 focus:ring-gold-500 rounded-lg"
              />
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
// TODO: Implement job description parsing or job URL scraping API integration

