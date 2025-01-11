'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence } from 'framer-motion'
import { Plus, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Project description is required'),
  isStipend: z.boolean(),
  stipend: z.string().optional(),
  duration: z.string().min(1, 'Project duration is required'),
  applyForVerification: z.boolean(),
  securityKey: z.string().min(1, 'Security key is required'),
})

type FormData = z.infer<typeof formSchema>

export function PrivateProjectForm() {
  const [isOpen, setIsOpen] = useState(false)
  const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isStipend: false,
      applyForVerification: false,
      securityKey: '',
    },
  })

  const isStipend = watch('isStipend')

  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsOpen(false)
  }

  const generateSecurityKey = () => {
    const key = Math.random().toString(36).substr(2, 10).toUpperCase()
    setValue('securityKey', key)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-full w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800 max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold">Create New Private Project</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name of the project</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="name"
                        placeholder="Enter project name"
                        className="bg-gray-800 border-gray-700 text-white"
                        {...field}
                      />
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description of the project</Label>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        id="description"
                        placeholder="Enter project description"
                        className="bg-gray-800 border-gray-700 text-white"
                        {...field}
                      />
                    )}
                  />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Controller
                    name="isStipend"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        id="isStipend"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="isStipend">Stipend</Label>
                </div>

                {isStipend && (
                  <div className="space-y-2">
                    <Label htmlFor="stipend">Stipend amount</Label>
                    <Controller
                      name="stipend"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="stipend"
                          type="number"
                          placeholder="Enter stipend amount"
                          className="bg-gray-800 border-gray-700 text-white"
                          {...field}
                        />
                      )}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Controller
                    name="duration"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="duration"
                        placeholder="Enter project duration"
                        className="bg-gray-800 border-gray-700 text-white"
                        {...field}
                      />
                    )}
                  />
                  {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Controller
                    name="applyForVerification"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        id="applyForVerification"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="applyForVerification">Apply for project verification</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="securityKey">Security Key</Label>
                  <div className="flex space-x-2">
                    <Controller
                      name="securityKey"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="securityKey"
                          placeholder="Security Key"
                          className="bg-gray-800 border-gray-700 text-white flex-grow"
                          {...field}
                        />
                      )}
                    />
                    <Button
                      type="button"
                      onClick={generateSecurityKey}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  {errors.securityKey && <p className="text-red-500 text-sm">{errors.securityKey.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Create Private Project
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

