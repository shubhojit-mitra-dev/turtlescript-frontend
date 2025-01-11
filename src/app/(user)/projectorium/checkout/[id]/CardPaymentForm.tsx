import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Calendar, Lock } from 'lucide-react'

export function CardPaymentForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300">Email</Label>
        <div className="relative">
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            @
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="card" className="text-gray-300">Card Number</Label>
        <div className="relative">
          <Input 
            id="card" 
            placeholder="1234 5678 9012 3456" 
            required 
            className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
          />
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry" className="text-gray-300">Expiry Date</Label>
          <div className="relative">
            <Input 
              id="expiry" 
              placeholder="MM/YY" 
              required 
              className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc" className="text-gray-300">CVC</Label>
          <div className="relative">
            <Input 
              id="cvc" 
              placeholder="123" 
              required 
              className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
      </div>
    </form>
  )
}

