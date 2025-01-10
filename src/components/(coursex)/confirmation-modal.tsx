import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConfirmationModal({ isOpen, onClose }: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            Payment Successful
          </DialogTitle>
          <DialogDescription>
            Your payment has been processed successfully. You will be redirected to your courses page.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onClose}>Continue to My Courses</Button>
      </DialogContent>
    </Dialog>
  )
}

