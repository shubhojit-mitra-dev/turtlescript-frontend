'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function CourseFilter() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-900 p-6 rounded-lg">
      <Input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3"
      />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full md:w-1/4">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="web">Web Development</SelectItem>
          <SelectItem value="mobile">Mobile Development</SelectItem>
          <SelectItem value="data">Data Science</SelectItem>
        </SelectContent>
      </Select>
      <Button className="w-full md:w-auto">Apply Filters</Button>
    </div>
  )
}

