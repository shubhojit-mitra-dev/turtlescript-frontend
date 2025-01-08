'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Search, FileText, Video, Lightbulb, ExternalLink, TrendingUp, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from an API or database
const resources = [
  {
    id: 1,
    title: 'How to Write a Winning Resume',
    type: 'Article',
    category: 'Job Search',
    description: 'Learn the key elements of a strong resume and how to make yours stand out.',
    link: '#',
    author: 'Jane Doe',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Mastering the Art of the Interview',
    type: 'Video',
    category: 'Interview Tips',
    description: 'Expert tips on how to ace your next job interview and make a lasting impression.',
    link: '#',
    author: 'John Smith',
    duration: '15 min',
  },
  {
    id: 3,
    title: 'Negotiating Your Salary: Do\'s and Don\'ts',
    type: 'Article',
    category: 'Career Advice',
    description: 'Strategies for negotiating your salary and benefits package effectively.',
    link: '#',
    author: 'Emily Johnson',
    readTime: '8 min read',
  },
  {
    id: 4,
    title: 'Building Your Personal Brand on LinkedIn',
    type: 'Video',
    category: 'Networking',
    description: 'Learn how to optimize your LinkedIn profile and expand your professional network.',
    link: '#',
    author: 'Michael Brown',
    duration: '20 min',
  },
  {
    id: 5,
    title: 'Transitioning to a New Career: A Step-by-Step Guide',
    type: 'Article',
    category: 'Career Advice',
    description: 'Practical advice for successfully changing careers and industries.',
    link: '#',
    author: 'Sarah Williams',
    readTime: '10 min read',
  },
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
  hidden: { x: '100%', opacity: 0 },
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

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [showTrendingResource, setShowTrendingResource] = useState(true)

  const filteredResources = resources.filter(resource => 
    (activeTab === 'all' || resource.type.toLowerCase() === activeTab) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-4xl font-bold mb-4 flex items-center" variants={itemVariants}>
            <BookOpen className="mr-2 h-8 w-8 text-blue-600" />
            Career Resources
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-8" variants={itemVariants}>
            Access valuable resources, tips, and guides to help you succeed in your job search and career.
          </motion.p>

          <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" variants={itemVariants}>
            <div className="relative w-full max-w-md mx-auto mb-4">
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="article">Articles</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div className="my-8" variants={itemVariants}>
            <Card className="bg-gray-100 dark:bg-gray-700 h-32 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
            </Card>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
            {filteredResources.map((resource) => (
              <motion.div key={resource.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{resource.title}</span>
                      <Badge variant="secondary">
                        {resource.type === 'Article' ? <FileText className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">{resource.category}</Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{resource.author}</span>
                      <span>{resource.readTime || resource.duration}</span>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        {resource.type === 'Article' ? 'Read Article' : 'Watch Video'}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="my-8" variants={itemVariants}>
            <Card className="bg-gray-100 dark:bg-gray-700 h-32 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
            </Card>
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.div className="text-center py-8" variants={itemVariants}>
              <p className="text-xl text-gray-600 dark:text-gray-400">No resources found matching your search criteria.</p>
            </motion.div>
          )}

          <motion.div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-lg p-6" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lightbulb className="mr-2 h-6 w-6 text-yellow-400" />
              Career Tip of the Day
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Networking isnt about just connecting people. Its about connecting people with people, people with ideas, and people with opportunities.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">- Michele Jennae</p>
          </motion.div>

          {showTrendingResource && (
            <motion.div
              className="fixed top-20 right-4 w-64 bg-green-500 rounded-lg shadow-lg text-white p-4"
              variants={boxVariants}
              initial="hidden"
              animate="visible"
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-200"
                onClick={() => setShowTrendingResource(false)}
                aria-label="Close trending resource box"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Trending Resource
              </h3>
              <p className="mb-4">Master the art of remote work with our latest guide!</p>
              <Button variant="secondary" className="w-full">
                Read Now
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

