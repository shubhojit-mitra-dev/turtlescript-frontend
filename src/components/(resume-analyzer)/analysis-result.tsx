'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

interface AnalysisResultProps {
  result: {
    score: number
    compatibility: string
    missingKeywords: string[]
    strengths: string[]
  }
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6 shadow-inner border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-gold-400 mb-4">Analysis Result</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Resume Score</h3>
          <div className="text-4xl font-bold text-gold-400">{result.score}%</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Compatibility</h3>
          <div className="text-4xl font-bold text-gold-400">{result.compatibility}</div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Missing Keywords</h3>
          <ul className="list-disc list-inside">
            {result.missingKeywords.map((keyword, index) => (
              <li key={index} className="text-red-400 flex items-center">
                <XCircle className="w-4 h-4 mr-2" />
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Strengths</h3>
          <ul className="list-disc list-inside">
            {result.strengths.map((strength, index) => (
              <li key={index} className="text-green-400 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

