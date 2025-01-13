'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { FilterState } from '@/types/types'
import { Filter, MapPin, Code, X } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState(filters)

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
  }

  const applyFilters = async () => {
    // TODO: Implement API call to fetch filtered hackathons
    // API call should go here
    // Example:
    // try {
    //   const response = await fetch('/api/hackathons/filter', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(localFilters),
    //   });
    //   if (response.ok) {
    //     const filteredHackathons = await response.json();
    //     // Update the hackathons list with the filtered results
    //     // This might involve lifting the state up or using a state management solution
    //   } else {
    //     console.error('Failed to fetch filtered hackathons');
    //   }
    // } catch (error) {
    //   console.error('Error applying filters:', error);
    // }

    onFilterChange(localFilters)
  }

  const resetFilters = () => {
    const resetFilters = {
      type: 'all',
      city: '',
      techStack: [],
    }
    setLocalFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  const techStackOptions = ['React', 'Node.js', 'Python', 'Java', 'AI/ML', 'Blockchain', 'IoT', 'Cloud Computing', 'Mobile Development']

  return (
    <div className="h-full flex flex-col text-foreground">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Filter className="h-6 w-6 mr-2 text-primary" />
          Filters
        </h2>
        <Button variant="ghost" size="sm" onClick={resetFilters} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>
      <ScrollArea className="flex-grow pr-4 max-h-[60vh] md:max-h-none">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-medium mb-2 block">Event Type</Label>
            <RadioGroup
              value={localFilters.type}
              onValueChange={(value) => handleFilterChange('type', value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All Events</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="offline" id="offline" />
                <Label htmlFor="offline">In-Person</Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {localFilters.type === 'offline' && (
            <div>
              <Label htmlFor="city" className="text-lg font-medium mb-2 block flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                City
              </Label>
              <Input
                id="city"
                value={localFilters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                placeholder="Enter city name"
                className="w-full"
              />
            </div>
          )}

          <div>
            <Label className="text-lg font-medium mb-2 block flex items-center">
              <Code className="h-4 w-4 mr-1 text-primary" />
              Tech Stack
            </Label>
            <div className="space-y-2">
              {techStackOptions.map((tech) => (
                <div key={tech} className="flex items-center">
                  <Checkbox
                    id={tech}
                    checked={localFilters.techStack.includes(tech)}
                    onCheckedChange={(checked) => {
                      const newTechStack = checked
                        ? [...localFilters.techStack, tech]
                        : localFilters.techStack.filter((t) => t !== tech)
                      handleFilterChange('techStack', newTechStack)
                    }}
                  />
                  <Label htmlFor={tech} className="ml-2">{tech}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {localFilters.type !== 'all' && (
            <Badge variant="secondary">
              {localFilters.type === 'online' ? 'Online' : 'In-Person'}
            </Badge>
          )}
          {localFilters.city && (
            <Badge variant="secondary">
              {localFilters.city}
            </Badge>
          )}
          {localFilters.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}

