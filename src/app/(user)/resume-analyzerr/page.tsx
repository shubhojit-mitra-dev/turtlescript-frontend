'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FileText, Sun, Moon, ArrowRight } from 'lucide-react'

export default function IntroPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex flex-col">
      <header className="p-4 sm:p-6 flex justify-between items-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            ResumeAI
          </span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" /> : <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />}
        </motion.button>
      </header>
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center px-4 sm:px-6 backdrop-blur-md bg-white/40 dark:bg-gray-800/40 rounded-2xl shadow-xl p-8 sm:p-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 leading-tight">
            Unlock Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Career Potential</span> with Resume Analysis
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed">
            Elevate your job search by showcasing your skills, accomplishments, and potential in perfect alignment with your dream roles.
          </p>
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {[
              { text: "Maximize Your Compatibility", color: "blue" },
              { text: "Stand Out to Recruiters", color: "green" },
              { text: "Empower Your Job Search", color: "purple" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                className={`flex items-center justify-center space-x-3 text-${item.color}-600 dark:text-${item.color}-400 bg-${item.color}-100 dark:bg-${item.color}-900/30 p-3 rounded-lg`}
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <Link href="/resume-analyzerr/resume-analyzer" passHref>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 sm:px-10 sm:py-5
                  text-lg sm:text-xl font-bold
                  text-white bg-gradient-to-r from-blue-600 to-purple-600
                  rounded-full shadow-lg
                  transition-all duration-300
                  hover:from-blue-700 hover:to-purple-700
                  hover:shadow-xl hover:text-white
                  focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                  dark:focus:ring-blue-400 dark:focus:ring-opacity-50
                "
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="mr-2"
                >
                  Analyze Your Resume
                </motion.span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  initial={{ x: 0, opacity: 0.5 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

