import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { EditProfileModal } from './EditProfileModal'

interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export default function GeneralSettings() {
  const [language, setLanguage] = useState('en')
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [user, setUser] = useState<User>({
    id: '12345',
    username: 'johndoe',
    email: 'john.doe@example.com',
    name: 'John Doe',
    avatar: '/placeholder-avatar.jpg'
  })

  const handleSaveProfile = (updatedUser: User) => {
    setUser(updatedUser);
    // API call: Update user profile
    // Example: await updateUserProfile(updatedUser);
    console.log('Updated user:', updatedUser);
  };

  const handleSaveGeneralSettings = () => {
    // API call: Save general settings
    // Example: await saveGeneralSettings({ language, notifications });
    console.log('Saving general settings');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
          <Button variant="outline" className="mt-2" onClick={() => setIsEditProfileOpen(true)}>
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Language Settings</h3>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Notification Preferences</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="in-app-notifications">In-App Notifications</Label>
            <Switch id="in-app-notifications" />
          </div>
        </div>
      </div>

      <Button className="w-full" onClick={handleSaveGeneralSettings}>Save General Settings</Button>

      <EditProfileModal
        user={user}
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        onSave={handleSaveProfile}
      />
    </div>
  )
}

