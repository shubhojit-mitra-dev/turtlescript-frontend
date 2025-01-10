import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SecuritySettings() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Change Password</h3>
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input 
            id="new-password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input 
            id="confirm-password" 
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Change Password</Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
        <div className="flex items-center space-x-2">
          <Switch id="enable-2fa" />
          <Label htmlFor="enable-2fa">Enable Two-Factor Authentication</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Login Activity</h3>
        <ul className="space-y-2">
          <li>Last login: 2023-06-15 14:30 - IP: 192.168.1.1</li>
          <li>Previous login: 2023-06-14 09:15 - IP: 192.168.1.1</li>
        </ul>
        <Button variant="outline">Log out from all devices</Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Account Recovery</h3>
        <div className="space-y-2">
          <Label htmlFor="recovery-email">Recovery Email</Label>
          <Input id="recovery-email" type="email" placeholder="Enter recovery email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recovery-phone">Recovery Phone Number</Label>
          <Input id="recovery-phone" type="tel" placeholder="Enter recovery phone number" />
        </div>
        <Button type="submit">Update Recovery Information</Button>
      </div>
    </form>
  )
}

