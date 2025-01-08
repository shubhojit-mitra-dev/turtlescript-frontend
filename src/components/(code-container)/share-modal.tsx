'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Copy } from 'lucide-react'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [isPublic, setIsPublic] = useState(true)
  const [shareLink, setShareLink] = useState('')
  const [uniqueKey, setUniqueKey] = useState('')

  const generateLink = async () => {
    // TODO: Add API call to generate share link and unique key
    // const { link, key } = await generateShareLink(isPublic)
    // setShareLink(link)
    // setUniqueKey(key)

    // Placeholder implementation
    const baseUrl = 'https://codecontainer.com/share/'
    if (isPublic) {
      setShareLink(`${baseUrl}${Math.random().toString(36).substr(2, 9)}`)
      setUniqueKey('')
    } else {
      const newUniqueKey = Math.random().toString(36).substr(2, 16)
      setShareLink(`${baseUrl}${newUniqueKey}`)
      setUniqueKey(newUniqueKey)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 bg-opacity-95 backdrop-filter backdrop-blur-lg text-gray-100 border border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-400">Share Code Container</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <RadioGroup defaultValue="public" onValueChange={(value) => setIsPublic(value === 'public')} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="public" id="public" className="border-blue-400 text-blue-400" />
              <Label htmlFor="public" className="text-gray-300">Public</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="private" id="private" className="border-blue-400 text-blue-400" />
              <Label htmlFor="private" className="text-gray-300">Private</Label>
            </div>
          </RadioGroup>
          <Button onClick={generateLink} className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
            Generate Share Link
          </Button>
          {shareLink && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shareLink" className="text-gray-300">Share Link</Label>
                <div className="flex items-center space-x-2">
                  <Input id="shareLink" value={shareLink} readOnly className="flex-grow bg-gray-700 text-gray-200 border-gray-600" />
                  <Button size="icon" variant="outline" onClick={() => navigator.clipboard.writeText(shareLink)} className="text-blue-400 hover:text-blue-300 border-blue-400 hover:border-blue-300">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {!isPublic && uniqueKey && (
                <div className="space-y-2">
                  <Label htmlFor="uniqueKey" className="text-gray-300">Unique Access Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="uniqueKey" value={uniqueKey} readOnly className="flex-grow bg-gray-700 text-gray-200 border-gray-600" />
                    <Button size="icon" variant="outline" onClick={() => navigator.clipboard.writeText(uniqueKey)} className="text-blue-400 hover:text-blue-300 border-blue-400 hover:border-blue-300">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

