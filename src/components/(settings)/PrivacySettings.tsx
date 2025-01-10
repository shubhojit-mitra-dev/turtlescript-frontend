import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function PrivacySettings() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [showCredentialsDialog, setShowCredentialsDialog] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' })

  const handleDeleteAccount = () => {
    setShowDeleteConfirmation(true)
  }

  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(false)
    setShowCredentialsDialog(true)
  }

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the credentials to your backend for verification
    // and then proceed with account deletion if they're correct
    console.log('Account deletion requested with credentials:', credentials)
    setShowCredentialsDialog(false)
    // Show a success message or redirect the user
    alert('Account deletion request submitted. You will be logged out shortly.')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Profile Visibility</h3>
          <RadioGroup defaultValue="public">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="public" id="public" />
              <Label htmlFor="public">Public</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="private" id="private" />
              <Label htmlFor="private">Private</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Custom</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Data Sharing</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="share-courses">Share course enrollment data</Label>
              <Switch id="share-courses" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="share-job-applications">Share job application data</Label>
              <Switch id="share-job-applications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="share-projects">Share project data</Label>
              <Switch id="share-projects" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Account Deletion</h3>
          <p className="text-sm text-muted-foreground">Warning: This action is irreversible and will permanently delete all your data.</p>
          <Button variant="destructive" onClick={handleDeleteAccount}>Delete Account</Button>
        </div>
      </div>
      <Button type="submit">Save Privacy Settings</Button>

      <AlertDialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>Yes, delete my account</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showCredentialsDialog} onOpenChange={setShowCredentialsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Identity</DialogTitle>
            <DialogDescription>
              Please enter your credentials to confirm account deletion.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCredentialsSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit" variant="destructive">Confirm Deletion</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </form>
  )
}

