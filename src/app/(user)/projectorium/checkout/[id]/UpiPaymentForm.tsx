import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AtSign } from 'lucide-react'

export function UPIPaymentForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="upi" className="text-gray-300">UPI ID</Label>
        <div className="relative">
          <Input 
            id="upi" 
            placeholder="yourname@upi" 
            required 
            className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
          />
          <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>
    </form>
  )
}

