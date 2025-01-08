'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

interface NotificationPreferencesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NotificationPreferencesModal({ isOpen, onClose }: NotificationPreferencesModalProps) {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [soundNotifications, setSoundNotifications] = useState(true)
  const [messagePreview, setMessagePreview] = useState(true)

  const handleSave = () => {
    // Implement save logic here
    console.log('Saving notification preferences:', { emailNotifications, soundNotifications, messagePreview })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notification Preferences</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sound-notifications">Sound Notifications</Label>
            <Switch
              id="sound-notifications"
              checked={soundNotifications}
              onCheckedChange={setSoundNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="message-preview">Message Preview</Label>
            <Switch
              id="message-preview"
              checked={messagePreview}
              onCheckedChange={setMessagePreview}
            />
          </div>
          <Button onClick={handleSave}>Save Preferences</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

