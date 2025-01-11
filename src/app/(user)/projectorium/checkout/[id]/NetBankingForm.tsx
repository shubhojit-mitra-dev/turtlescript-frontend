import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NetBankingForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="bank" className="text-gray-300">Select Bank</Label>
        <Select>
          <SelectTrigger id="bank" className="bg-gray-800 border-gray-700 text-gray-100">
            <SelectValue placeholder="Choose your bank" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="sbi" className="text-gray-100">State Bank of India</SelectItem>
            <SelectItem value="hdfc" className="text-gray-100">HDFC Bank</SelectItem>
            <SelectItem value="icici" className="text-gray-100">ICICI Bank</SelectItem>
            <SelectItem value="axis" className="text-gray-100">Axis Bank</SelectItem>
            <SelectItem value="pnb" className="text-gray-100">Punjab National Bank</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  )
}

