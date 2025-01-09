import React, { useState, useEffect } from 'react'
import { X, ChevronRight, CheckCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll'
import { Progress } from '@/components/ui/progress'

interface RoadmapPanelProps {
  title: string
  onClose: () => void
  isPurchased?: boolean
  roadmapId?: string; // Added roadmapId prop
}

// TODO: Replace this static data with an API call to fetch roadmap details
// const fetchRoadmapDetails = async (roadmapId) => {
//   const response = await fetch(`/api/roadmaps/${roadmapId}`);
//   const data = await response.json();
//   return data;
// }
// 
// useEffect(() => {
//   if (roadmapId) {
//     fetchRoadmapDetails(roadmapId).then(setRoadmapDetails);
//   }
// }, [roadmapId]);

const roadmapSteps = [
  { title: 'Introduction', description: 'Overview of the course and basic concepts', color: 'bg-blue-100 dark:bg-blue-800 border-blue-300 dark:border-blue-600' },
  { title: 'Fundamentals', description: 'Core principles and essential skills', color: 'bg-green-100 dark:bg-green-800 border-green-300 dark:border-green-600' },
  { title: 'Advanced Topics', description: 'In-depth exploration of complex subjects', color: 'bg-yellow-100 dark:bg-yellow-800 border-yellow-300 dark:border-yellow-600' },
  { title: 'Practical Projects', description: 'Hands-on application of learned concepts', color: 'bg-red-100 dark:bg-red-800 border-red-300 dark:border-red-600' },
  { title: 'Final Assessment', description: 'Comprehensive evaluation of skills acquired', color: 'bg-purple-100 dark:bg-purple-800 border-purple-300 dark:border-purple-600' },
]

export function RoadmapPanel({ title, onClose, isPurchased = false, roadmapId }: RoadmapPanelProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setProgress((index / (roadmapSteps.length - 1)) * 100)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col"
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <Progress value={progress} className="w-full" />
          </div>
          <div id="roadmap-content" className="flex-grow p-6 overflow-y-auto" style={{ height: 'calc(90vh - 200px)' }}>
            <div className="space-y-6">
              {roadmapSteps.map((step, index) => (
                <Element name={`step-${index}`} key={index}>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${step.color} p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-2 ${
                      activeStep === index ? 'border-blue-500 dark:border-blue-400' : 'border-transparent'
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <span className="mr-2">{index + 1}.</span>
                      {step.title}
                      {index <= activeStep && (
                        <CheckCircle className="ml-2 h-5 w-5 text-green-500" />
                      )}
                      {index < roadmapSteps.length - 1 && (
                        <ScrollLink
                          to={`step-${index + 1}`}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-20}
                          className="ml-auto cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleStepClick(index + 1)
                          }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </ScrollLink>
                      )}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                    {activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-md shadow"
                      >
                        <h4 className="font-semibold mb-2">Key Topics:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Topic 1</li>
                          <li>Topic 2</li>
                          <li>Topic 3</li>
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </Element>
              ))}
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            {isPurchased ? (
              <Button className="w-full mb-4" size="lg">
                <BookOpen className="mr-2 h-4 w-4" /> Continue Learning
              </Button>
            ) : (
              <Button className="w-full mb-4" size="lg">
                Enroll Now
              </Button>
            )}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => scroll.scrollToTop({ containerId: 'roadmap-content', smooth: true, duration: 500 })}
            >
              Scroll to Top
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

