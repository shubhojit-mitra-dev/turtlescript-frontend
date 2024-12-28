"use client";

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { WebsiteForm } from './WebsiteForm'
import { ThankYouPage } from './ThankYouPage'

export function EstimatedPriceModal() {
  const [keepDesign, setKeepDesign] = useState<'yes' | 'no' | null>(null)
  const [hostType, setHostType] = useState<'local' | 'browse' | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = () => {
    setShowThankYou(true)
  }

  if (showThankYou) {
    return <ThankYouPage />
  }

  if (showForm) {
    return <WebsiteForm onSubmit={handleSubmit} />
  }

  return (
    <div className="space-y-4">
      <RadioGroup onValueChange={(value) => setKeepDesign(value as 'yes' | 'no')}>
        <div className="space-y-2">
          <Label>Do you want to keep the design and create the same website with your data?</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </div>
      </RadioGroup>

      {keepDesign === 'yes' && (
        <RadioGroup onValueChange={(value) => setHostType(value as 'local' | 'browse')}>
          <div className="space-y-2">
            <Label>On which type of host do you want to host the website?</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="local" id="local" />
              <Label htmlFor="local">Local Host</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="browse" id="browse" />
              <Label htmlFor="browse">Browse</Label>
            </div>
          </div>
        </RadioGroup>
      )}

      <Button onClick={() => keepDesign === 'no' ? setShowForm(true) : handleSubmit()}>
        {keepDesign === 'no' ? 'Go to Form' : 'Submit'}
      </Button>
    </div>
  )
}

