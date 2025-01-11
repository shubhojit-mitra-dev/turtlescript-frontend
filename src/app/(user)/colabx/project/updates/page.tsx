'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'

// TODO: API Integration
// 1. Replace dummyUpdates with a state variable:
//    const [updates, setUpdates] = useState([])
// 2. Create an async function to fetch updates from the API:
//    async function fetchUpdates(page, searchTerm) {
//      try {
//        const response = await fetch(`/api/updates?page=${page}&search=${searchTerm}`);
//        const data = await response.json();
//        setUpdates(data.updates);
//        // Update total pages state if your API returns it
//      } catch (error) {
//        console.error('Error fetching updates:', error);
//        // Handle error state
//      }
//    }
// 3. Use useEffect to call fetchUpdates when the component mounts and when search or pagination changes:
//    useEffect(() => {
//      fetchUpdates(currentPage, searchTerm);
//    }, [currentPage, searchTerm]);
// 4. Implement loading state:
//    const [isLoading, setIsLoading] = useState(true);
//    // Set isLoading to true before fetching and false after
//    // Display a loading spinner or skeleton UI when isLoading is true
// 5. Implement error handling:
//    const [error, setError] = useState(null);
//    // Set error state if the API call fails
//    // Display an error message to the user when error is not null
// 6. Update the pagination logic to use total pages from the API response
// 7. Consider implementing infinite scroll or "Load More" functionality for better UX
// 8. Optimize performance:
//    - Implement debounce for search input to reduce API calls
//    - Use React.memo() for child components to prevent unnecessary re-renders
// 9. Add functionality to clear search and reset to the first page
// 10. Implement sorting options (e.g., by date, category) if supported by the API

const dummyUpdates = [
  {
    id: 1,
    title: "New Feature: Dark Mode",
    description: "We've added a new dark mode feature to improve your viewing experience in low-light environments.",
    date: "2023-04-15",
    category: "Feature"
  },
  {
    id: 2,
    title: "Performance Improvements",
    description: "Our latest update includes significant performance enhancements, resulting in faster load times and smoother interactions.",
    date: "2023-04-10",
    category: "Optimization"
  },
  {
    id: 3,
    title: "Bug Fix: Login Issues Resolved",
    description: "We've fixed a bug that was causing intermittent login problems for some users. Your login experience should now be seamless.",
    date: "2023-04-05",
    category: "Bug Fix"
  },
  {
    id: 4,
    title: "New Integration: Slack",
    description: "You can now integrate your workspace with Slack, enabling real-time notifications and improved team collaboration.",
    date: "2023-03-28",
    category: "Integration"
  },
  {
    id: 5,
    title: "Security Update",
    description: "We've implemented additional security measures to further protect your data and ensure a safe user experience.",
    date: "2023-03-20",
    category: "Security"
  }
]

export default function UpdatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const updatesPerPage = 3

  // Filter updates based on search term
  const filteredUpdates = dummyUpdates.filter(update =>
    update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Calculate pagination
  const indexOfLastUpdate = currentPage * updatesPerPage
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage
  const currentUpdates = filteredUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate)
  const totalPages = Math.ceil(filteredUpdates.length / updatesPerPage)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Updates</h1>
        
        {/* Search bar */}
        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-900 text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Updates list */}
        <div className="space-y-4">
          {currentUpdates.map(update => (
            <Card key={update.id} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold">{update.title}</CardTitle>
                    <CardDescription className="text-gray-400">{update.date}</CardDescription>
                  </div>
                  <Badge variant="secondary">{update.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="text-black"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="text-black"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

