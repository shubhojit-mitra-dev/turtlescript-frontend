'use client'

import { useState } from 'react'
import { HackathonCard } from './HackathonCard'
import { ApplyModal } from './ApplyModal'
import { Hackathon,ApplicationFormData } from '@/types/types'

interface HackathonListProps {
  hackathons: Hackathon[];
}

export function HackathonList({ hackathons }: HackathonListProps) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [selectedHackathonId, setSelectedHackathonId] = useState<string | null>(null)

  const handleApply = (id: string) => {
    setSelectedHackathonId(id)
    setIsApplyModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsApplyModalOpen(false)
    setSelectedHackathonId(null)
  }

  const handleSubmitApplication = async (formData: ApplicationFormData) => {
    // TODO: Implement API call to submit application
    // API call should go here
    // Example:
    // try {
    //   const response = await fetch('/api/applications', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       hackathonId: selectedHackathonId,
    //       ...formData
    //     }),
    //   });
    //   if (response.ok) {
    //     // Handle successful submission
    //     console.log('Application submitted successfully');
    //   } else {
    //     // Handle error
    //     console.error('Failed to submit application');
    //   }
    // } catch (error) {
    //   console.error('Error submitting application:', error);
    // }

    console.log('Submitting application:', formData)
    handleCloseModal()
  }

  return (
    <div>
      {hackathons.length === 0 ? (
        <div className="text-center py-12 bg-muted rounded-lg">
          <p className="text-xl text-muted-foreground">No hackathons found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} onApply={handleApply} />
          ))}
        </div>
      )}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitApplication}
      />
    </div>
  )
}

