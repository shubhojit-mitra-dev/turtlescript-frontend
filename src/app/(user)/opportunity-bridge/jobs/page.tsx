'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Search, MapPin, DollarSign, Clock, Filter, TrendingUp, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import JobCard from '@/components/(opportunity-bridge)/JobCard'
import { ApplicationForm } from '@/components/(opportunity-bridge)/ApplicationForm'
import { useRouter } from 'next/navigation'
import { Card } from "@/components/ui/card"

// This would typically come from an API or database
const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    logo: '/placeholder.svg?height=50&width=50',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    description: 'We are seeking an experienced frontend developer to join our team and help build cutting-edge web applications.',
    requirements: ['5+ years of experience with React', 'Strong TypeScript skills', 'Experience with state management (Redux, MobX, etc.)'],
    postedDate: '2023-06-01',
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'AI Innovations',
    logo: '/placeholder.svg?height=50&width=50',
    location: 'New York, NY',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    description: 'Join our data science team to work on exciting machine learning projects and drive business decisions through data analysis.',
    requirements: ['MS or PhD in Computer Science or related field', 'Experience with Python and R', 'Knowledge of machine learning algorithms'],
    postedDate: '2023-05-28',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudSolutions',
    logo: '/placeholder.svg?height=50&width=50',
    location: 'Remote',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    description: 'We\'re looking for a DevOps engineer to help streamline our deployment processes and manage our cloud infrastructure.',
    requirements: ['Experience with AWS or Azure', 'Knowledge of Docker and Kubernetes', 'Familiarity with CI/CD pipelines'],
    postedDate: '2023-05-30',
  },
  // Add more job listings as needed
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

const boxVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.5
    }
  }
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)
  const [showTrendingJob, setShowTrendingJob] = useState(true)
  const router = useRouter()

  const jobTypes = ['All', ...new Set(jobs.map(job => job.type))]
  const locations = ['All', ...new Set(jobs.map(job => job.location))]

  const filteredJobs = jobs.filter(job => 
    (selectedType === 'All' || job.type === selectedType) &&
    (selectedLocation === 'All' || job.location === selectedLocation) &&
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJob(job)
    setIsApplicationFormOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-4xl font-bold mb-4 flex items-center" variants={itemVariants}>
            <Briefcase className="mr-2 h-8 w-8 text-blue-600" />
            Find Your Next Job
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-8" variants={itemVariants}>
            Explore our extensive list of job opportunities across various industries and locations.
          </motion.p>

          <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Select onValueChange={(value) => setSelectedType(value)}>
                <SelectTrigger className="w-full md:w-1/4">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setSelectedLocation(value)}>
                <SelectTrigger className="w-full md:w-1/4">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </motion.div>

          <motion.div className="my-8" variants={itemVariants}>
            <Card className="bg-gray-100 dark:bg-gray-700 h-32 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
            </Card>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {filteredJobs.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <JobCard 
                  {...job} 
                  view="list"
                  onApply={() => handleApply(job)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="my-8" variants={itemVariants}>
            <Card className="bg-gray-100 dark:bg-gray-700 h-32 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
            </Card>
          </motion.div>

          {filteredJobs.length === 0 && (
            <motion.div className="text-center py-8" variants={itemVariants}>
              <p className="text-xl text-gray-600 dark:text-gray-400">No jobs found matching your criteria.</p>
            </motion.div>
          )}

          {selectedJob && (
            <ApplicationForm 
              isOpen={isApplicationFormOpen}
              onClose={() => setIsApplicationFormOpen(false)}
              jobTitle={selectedJob.title}
              company={selectedJob.company}
            />
          )}

          {showTrendingJob && (
            <motion.div
              className="fixed top-20 left-4 w-64 bg-purple-500 rounded-lg shadow-lg text-white p-4"
              variants={boxVariants}
              initial="hidden"
              animate="visible"
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-200"
                onClick={() => setShowTrendingJob(false)}
                aria-label="Close trending job box"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Trending Job
              </h3>
              <p className="mb-4">Hot opportunity: AI Engineer at TechGiant!</p>
              <Button variant="secondary" className="w-full" onClick={() => router.push('/jobs/trending')}>
                View Job
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

