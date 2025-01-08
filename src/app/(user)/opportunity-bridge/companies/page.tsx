'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building, Search, MapPin, Users, LinkIcon, Briefcase, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

// This would typically come from an API or database
const companies = [
  {
    id: 1,
    name: 'TechCorp',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Technology',
    location: 'San Francisco, CA',
    size: '1000-5000 employees',
    description: 'Leading innovator in AI and machine learning technologies.',
    website: 'https://techcorp.example.com',
    openPositions: 15,
  },
  {
    id: 2,
    name: 'GreenEnergy',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Renewable Energy',
    location: 'Austin, TX',
    size: '500-1000 employees',
    description: 'Pioneering sustainable energy solutions for a greener future.',
    website: 'https://greenenergy.example.com',
    openPositions: 8,
  },
  {
    id: 3,
    name: 'HealthPlus',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Healthcare',
    location: 'Boston, MA',
    size: '5000-10000 employees',
    description: 'Innovative healthcare provider focused on patient-centered care.',
    website: 'https://healthplus.example.com',
    openPositions: 20,
  },
  {
    id: 4,
    name: 'FinTech Solutions',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Finance',
    location: 'New York, NY',
    size: '1000-5000 employees',
    description: 'Revolutionizing financial services with cutting-edge technology.',
    website: 'https://fintechsolutions.example.com',
    openPositions: 12,
  },
  {
    id: 5,
    name: 'EcoFoods',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Food & Beverage',
    location: 'Portland, OR',
    size: '100-500 employees',
    description: 'Organic and sustainable food products for conscious consumers.',
    website: 'https://ecofoods.example.com',
    openPositions: 5,
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
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.5
    }
  }
}

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFeaturedCompany, setShowFeaturedCompany] = useState(true)

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
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
            <Building className="mr-2 h-8 w-8 text-blue-600" />
            Explore Companies
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-8" variants={itemVariants}>
            Discover top companies hiring now and learn about their culture, benefits, and open positions.
          </motion.p>

          <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" variants={itemVariants}>
            <div className="relative w-full max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>

          <motion.div className="my-8" variants={itemVariants}>
            <Card className="bg-gray-100 dark:bg-gray-700 h-32 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
            </Card>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
            {filteredCompanies.map((company) => (
              <motion.div key={company.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-0">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle>{company.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {company.industry}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{company.description}</p>
                    <div className="flex flex-col space-y-2 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{company.size}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{company.openPositions} open positions</span>
                      </div>
                      <div className="flex items-center">
                        <LinkIcon className="h-4 w-4 mr-2 text-gray-400" />
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          Company Website
                        </a>
                      </div>
                    </div>
                    <Button className="w-full mt-4">View Open Positions</Button>
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

          {filteredCompanies.length === 0 && (
            <motion.div className="text-center py-8" variants={itemVariants}>
              <p className="text-xl text-gray-600 dark:text-gray-400">No companies found matching your search criteria.</p>
            </motion.div>
          )}

          {showFeaturedCompany && (
            <motion.div
              className="fixed bottom-4 right-4 w-64 h-64 bg-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center p-4"
              variants={boxVariants}
              initial="hidden"
              animate="visible"
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-200"
                onClick={() => setShowFeaturedCompany(false)}
                aria-label="Close featured company box"
              >
                <X className="h-4 w-4" />
              </button>
              <div>
                <h3 className="text-xl font-bold mb-2">Featured Company</h3>
                <p>Discover our top-rated employer of the month!</p>
                <Button className="mt-4" variant="secondary">Learn More</Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

