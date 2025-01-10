'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ChatMessageProps {
  message: {
    id: string
    content: string
    sender: {
      name: string
      avatar: string
    }
    timestamp: string
    isCurrentUser?: boolean
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-start gap-3 mb-4 ${
        message.isCurrentUser ? 'flex-row-reverse' : ''
      }`}
    >
      <Avatar className="h-8 w-8 ring-2 ring-indigo-500 transition-all duration-300 hover:ring-indigo-400">
        <AvatarImage src={message.sender.avatar} />
        <AvatarFallback className="bg-indigo-500 text-white">
          {message.sender.name[0]}
        </AvatarFallback>
      </Avatar>
      <div className={`flex-1 ${message.isCurrentUser ? 'text-right' : ''}`}>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-medium text-indigo-400">{message.sender.name}</span>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`inline-block rounded-lg px-4 py-2 max-w-md ${
            message.isCurrentUser
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-700 text-gray-100'
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

