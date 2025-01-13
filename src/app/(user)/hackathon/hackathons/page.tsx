'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FilterSidebar } from '@/components/(hackathon)/FilterSIdebar'
import { HackathonList } from '@/components/(hackathon)/HackathonList'
import { ThemeToggle } from '@/components/(hackathon)/ThemeToggle'
import { WinnerThought } from '@/components/(hackathon)/WinnerThought'
import { PrizesSection } from '@/components/(hackathon)/PrizesSection'
import { Button } from '@/components/ui/button'
import { Trophy, ArrowLeft, Search, Filter, Lightbulb, Home } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card, CardContent } from '@/components/ui/card'
import { FilterState,Hackathon } from '@/types/types'

export default function HackathonsPage() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([])
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    city: '',
    techStack: [],
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const fetchHackathons = async () => {
      // TODO: Implement API call to fetch hackathons
      // API call should go here
      // Example:
      // const response = await fetch('/api/hackathons');
      // const data = await response.json();
      // setHackathons(data);

      // Simulating an API call with setTimeout
      setTimeout(() => {
        const mockHackathons: Hackathon[] = [
          {
            id: '1',
            name: 'TechCrunch Disrupt',
            description: 'A hackathon for disruptive technologies',
            startDate: '2023-09-01',
            endDate: '2023-09-03',
            location: 'San Francisco, CA',
            type: 'offline',
            techStack: ['React', 'Node.js', 'AI/ML'],
            image: '/placeholder.svg',
          },
          {
            id: '2',
            name: 'Global AI Hackathon',
            description: 'Developing AI solutions for global challenges',
            startDate: '2023-10-15',
            endDate: '2023-10-17',
            location: 'Online',
            type: 'online',
            techStack: ['Python', 'AI/ML'],
            image: '/placeholder.svg',
          },
          {
            id: '3',
            name: 'Blockchain Revolution',
            description: 'Building the future of decentralized applications',
            startDate: '2023-11-05',
            endDate: '2023-11-07',
            location: 'New York, NY',
            type: 'offline',
            techStack: ['Blockchain', 'Web3.js', 'React'],
            image: '/placeholder.svg',
          },
          {
            id: '4',
            name: 'Green Tech Innovation',
            description: 'Hacking for a sustainable future',
            startDate: '2023-12-01',
            endDate: '2023-12-03',
            location: 'Online',
            type: 'online',
            techStack: ['IoT', 'Python', 'Cloud Computing'],
            image: '/placeholder.svg',
          },
        ]
        setHackathons(mockHackathons)
      }, 1000)
    }

    fetchHackathons()
  }, [])

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    // TODO: Implement API call to fetch filtered hackathons
    // API call should go here
    // Example:
    // const response = await fetch('/api/hackathons/filter', {
    //   method: 'POST',
    //   body: JSON.stringify(newFilters),
    // });
    // const filteredHackathons = await response.json();
    // setHackathons(filteredHackathons);

    console.log('Applying filters:', newFilters)
    setIsFilterOpen(false)
  }

  const filteredHackathons = hackathons.filter(hackathon =>
    (hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hackathon.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filters.type === 'all' || hackathon.type === filters.type) &&
    (filters.city === '' || hackathon.location.toLowerCase().includes(filters.city.toLowerCase())) &&
    (filters.techStack.length === 0 || filters.techStack.some(tech => hackathon.techStack.includes(tech)))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center mb-8">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon">
              <Link href="/">
                <ArrowLeft className="h-6 w-6 sm:hidden" />
                <Home className="h-6 w-6 hidden sm:block" />
                <span className="sr-only">Back to Intro</span>
              </Link>
            </Button>
            <h1 className="text-3xl sm:text-4xl font-bold flex items-center">
              <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-foreground">
                Hackathon Hub
              </span>
            </h1>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            <div className="relative flex-grow sm:max-w-xs">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search hackathons..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md">
                  <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
                </SheetContent>
              </Sheet>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <Card className="mb-8 bg-primary/5 border-primary/10">
          <CardContent className="flex items-center space-x-4 py-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <blockquote className="italic text-lg text-foreground">
              "Hackathons are where passion meets innovation, turning ideas into reality in just a matter of hours."
            </blockquote>
          </CardContent>
        </Card>

        <div className="flex flex-col lg:flex-row gap-8">
          <main className="w-full lg:w-2/3">
            <HackathonList hackathons={filteredHackathons} />
          </main>
          <aside className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <PrizesSection />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

