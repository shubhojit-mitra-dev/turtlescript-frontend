'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import { WebsiteFormData } from "@/types/types"

const formSchema = z.object({
  formType: z.enum(['Commercial', 'Personal']),
  firmName: z.string().optional(),
  personName: z.string().optional(),
  websiteName: z.string().min(1, 'Website name is required').max(30, 'Website name must not exceed 30 characters'),
  projectType: z.string().min(1, 'Project type is required'),
  tag: z.enum(['eCommerce', 'school', 'cafe', 'shops', 'others']),
  shortMessage: z.string().optional(),
  description: z.string().min(10, 'Description must be at least 10 characters').max(100, 'Description must not exceed 100 characters'),
  phoneNumber: z.string().min(1, 'Phone number is required').max(10, 'Phone number must not exceed 10 characters').regex(/^[0-9]+$/, "Phone number must be a number"),
})

export function WebsiteForm({ onSubmit }: { onSubmit: () => void }) {
    const form = useForm<WebsiteFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          formType: 'Commercial',
          firmName: '',
          personName: '',
          websiteName: '',
          projectType: '',
          tag: 'eCommerce',
          shortMessage: '',
          description: '',
          phoneNumber: '',
        },
      })

      const { mutate, isPending } = useMutation({
        mutationFn: async (data: WebsiteFormData) => {
          console.log('Submitting data:', data)
          return await axios.post('/api/website', data)
        },
        onSuccess: () => {
          toast.success("Website form submitted!")
          setTimeout(() => window.location.reload(), 2000)
        },
        onError: (error) => {
          console.error('Submission error:', error)
          toast.error("Failed to submit form")
        }
      })

      const handleSubmit = async (values: WebsiteFormData) => {
        console.log('Form values:', values)
        mutate(values)
        onSubmit()
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3 text-xs">
        <FormField
          control={form.control}
          name="formType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Form Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-5"
                >
                  <FormItem className="flex space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Commercial" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Commercial
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Personal" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Personal
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch('formType') === 'Commercial' && (
          <FormField
            control={form.control}
            name="firmName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your firm&apos;s name</FormLabel>
                <FormControl>
                  <Input placeholder="Firm name" {...field} value={field.value ?? ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {form.watch('formType') === 'Personal' && (
          <>
            <FormField
              control={form.control}
              name="personName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the person</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of the person" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="websiteName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the website/app</FormLabel>
                  <FormControl>
                    <Input placeholder="Website/app name" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project type</FormLabel>
              <FormControl>
                <Input placeholder="Project type" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tag" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="eCommerce">eCommerce</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                  <SelectItem value="cafe">Cafe</SelectItem>
                  <SelectItem value="shops">Shops</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch('tag') === 'others' && (
          <FormField
            control={form.control}
            name="shortMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Short message" {...field} value={field.value ?? ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe your website or app in 100 words or less</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sticky bottom-0 pt-4 bg-background z-50 border-t">
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit Website Form"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
