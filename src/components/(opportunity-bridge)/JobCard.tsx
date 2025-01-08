import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, DollarSign, Clock, Briefcase } from 'lucide-react'
import { ApplicationForm } from './ApplicationForm'

interface JobCardProps {
  title: string
  company: string
  logo: string
  location: string
  salary: string
  type: string
  description: string
  requirements: string[]
  postedDate: string
  view: 'list' | 'grid'
  onApply: () => void
}

export default function JobCard({ 
  title, 
  company, 
  logo, 
  location, 
  salary, 
  type, 
  description, 
  requirements, 
  postedDate, 
  view, 
  onApply 
}: JobCardProps) {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  }

  if (view === 'list') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card className="overflow-hidden transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Image src={logo} alt={company} width={64} height={64} className="rounded-lg" />
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{company}</p>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-sm">{type}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />{location}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />{salary}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />Posted on {new Date(postedDate).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setIsApplicationFormOpen(true)}
              >
                Apply Now
              </Button>
            </div>
          </CardContent>
          <ApplicationForm 
            isOpen={isApplicationFormOpen}
            onClose={() => setIsApplicationFormOpen(false)}
            jobTitle={title}
            company={company}
          />
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Card className="overflow-hidden transition-all duration-300 flex flex-col h-full">
        <CardHeader className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Image src={logo} alt={company} width={48} height={48} className="rounded-lg" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{company}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm mb-2">{type}</Badge>
          <div className="flex flex-col space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />{location}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />{salary}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />Posted on {new Date(postedDate).toLocaleDateString()}
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
              {requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="line-clamp-1">{req}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 dark:bg-gray-700 p-4">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onApply}
          >
            Apply Now
          </Button>
        </CardFooter>
        <ApplicationForm 
          isOpen={isApplicationFormOpen}
          onClose={() => setIsApplicationFormOpen(false)}
          jobTitle={title}
          company={company}
        />
      </Card>
    </motion.div>
  )
}

