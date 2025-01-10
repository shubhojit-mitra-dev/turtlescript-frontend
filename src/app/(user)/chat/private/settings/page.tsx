// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import { Switch } from '@/components/ui/switch'
// import { Label } from '@/components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { toast } from '@/components/ui/sonner'
// import Header from '@/app/components/Header'
// import { ThemeProvider, useTheme } from '@/app/components/ThemeProvider'

// function SettingsPageContent() {
//   const router = useRouter()
//   const { theme, setTheme } = useTheme()
//   const [settings, setSettings] = useState({
//     lastSeen: true,
//     profilePicture: true,
//     status: true,
//     language: 'en',
//     twoFactor: false,
//     chatTheme: theme,
//     messageBackup: true,
//   })

//   useEffect(() => {
//     setSettings(prev => ({ ...prev, chatTheme: theme }))
//   }, [theme])

//   const handleToggle = (setting: string) => {
//     setSettings(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }))
//   }

//   const handleSelectChange = (value: string, setting: string) => {
//     if (setting === 'chatTheme') {
//       setTheme(value as 'light' | 'dark')
//     }
//     setSettings(prev => ({ ...prev, [setting]: value }))
//   }

//   const handleSave = () => {
//     console.log('Saving settings:', settings)
//     toast({
//       title: "Settings saved",
//       description: "Your settings have been successfully updated.",
//     })
//   }

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8 text-foreground">Settings</h1>
//         <div className="space-y-8 max-w-2xl">
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 text-foreground">Privacy</h2>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="lastSeen" className="text-foreground">Last Seen</Label>
//                 <Switch
//                   id="lastSeen"
//                   checked={settings.lastSeen}
//                   onCheckedChange={() => handleToggle('lastSeen')}
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="profilePicture" className="text-foreground">Profile Picture</Label>
//                 <Switch
//                   id="profilePicture"
//                   checked={settings.profilePicture}
//                   onCheckedChange={() => handleToggle('profilePicture')}
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="status" className="text-foreground">Status</Label>
//                 <Switch
//                   id="status"
//                   checked={settings.status}
//                   onCheckedChange={() => handleToggle('status')}
//                 />
//               </div>
//             </div>
//           </section>
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 text-foreground">Language</h2>
//             <Select onValueChange={(value) => handleSelectChange(value, 'language')} value={settings.language}>
//               <SelectTrigger className="text-foreground">
//                 <SelectValue placeholder="Select Language" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="en">English</SelectItem>
//                 <SelectItem value="es">Español</SelectItem>
//                 <SelectItem value="fr">Français</SelectItem>
//               </SelectContent>
//             </Select>
//           </section>
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 text-foreground">Security</h2>
//             <div className="flex items-center justify-between">
//               <Label htmlFor="twoFactor" className="text-foreground">Two-Factor Authentication</Label>
//               <Switch
//                 id="twoFactor"
//                 checked={settings.twoFactor}
//                 onCheckedChange={() => handleToggle('twoFactor')}
//               />
//             </div>
//           </section>
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 text-foreground">Chat Settings</h2>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="chatTheme" className="text-foreground">Chat Theme</Label>
//                 <Select onValueChange={(value) => handleSelectChange(value, 'chatTheme')} value={settings.chatTheme}>
//                   <SelectTrigger className="text-foreground">
//                     <SelectValue placeholder="Select Theme" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="light">Light</SelectItem>
//                     <SelectItem value="dark">Dark</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="messageBackup" className="text-foreground">Message Backup</Label>
//                 <Switch
//                   id="messageBackup"
//                   checked={settings.messageBackup}
//                   onCheckedChange={() => handleToggle('messageBackup')}
//                 />
//               </div>
//             </div>
//           </section>
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 text-foreground">Help and Support</h2>
//             <Button variant="outline" onClick={() => router.push('/help')}>Visit Help Center</Button>
//           </section>
//           <Button onClick={handleSave}>Save Settings</Button>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default function SettingsPage() {
//   return (
//     <ThemeProvider>
//       <SettingsPageContent />
//     </ThemeProvider>
//   )
// }
