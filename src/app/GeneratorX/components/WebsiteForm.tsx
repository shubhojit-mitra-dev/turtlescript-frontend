"use client";

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function WebsiteForm({ onSubmit }: { onSubmit: () => void }) {
  const [formType, setFormType] = useState<'Commercial' | 'Personal'>('Commercial')
  const [tag, setTag] = useState('')

  return (
    <form className="space-y-4" onSubmit={(e) => {
      e.preventDefault()
      onSubmit()
    }}>
      <RadioGroup defaultValue="Commercial" onValueChange={(value) => setFormType(value as 'Commercial' | 'Personal')}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Commercial" id="commercial" />
          <Label htmlFor="commercial">Commercial</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Personal" id="personal" />
          <Label htmlFor="personal">Personal</Label>
        </div>
      </RadioGroup>

      {formType === 'Commercial' && (
        <>
          <Input placeholder="Your firm's name" />
          <Input placeholder="Project type" />
        </>
      )}

      {formType === 'Personal' && (
        <>
          <Input placeholder="Name of the person" />
          <Input placeholder="Name of the website/app" />
          <Input placeholder="Project type" />
        </>
      )}

      <Select onValueChange={setTag}>
        <SelectTrigger>
          <SelectValue placeholder="Tags" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eCommerce">eCommerce</SelectItem>
          <SelectItem value="school">School</SelectItem>
          <SelectItem value="cafe">Cafe</SelectItem>
          <SelectItem value="shops">Shops</SelectItem>
          <SelectItem value="others">Others</SelectItem>
        </SelectContent>
      </Select>

      {tag === 'others' && (
        <Textarea placeholder="Short message" />
      )}

      <Textarea placeholder="Describe your website or app in 100 words or less" />
      <Input placeholder="Your full name" />
      <Input placeholder="Phone number" />
      <Input placeholder="Email address" />

      <Button type="submit">Submit</Button>
    </form>
  )
}

