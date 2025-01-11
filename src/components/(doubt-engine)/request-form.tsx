'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import * as z from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RequestFormData } from "@/types/types"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Enter valid phone number"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  callType: z.enum(["video", "voice"])
})

type FormData = z.infer<typeof formSchema>

interface RequestFormProps {
  callType: 'video' | 'voice',
  onSuccess: () => void
}

export function RequestForm({ callType, onSuccess }: RequestFormProps) {
    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        phoneNumber: "",
        description: "",
        callType
      }
    })

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RequestFormData) => {
      const response = await axios.post('/api/doubt-engine/request', data)
      return response.data
    },
    onSuccess: () => {
      onSuccess()
      toast.success("Request submitted successfully!")
      form.reset()
    },
    onError: () => {
      toast.error("Failed to submit request")
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutate(data))} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input id="name" {...field} />
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
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <FormControl>
                <Input id="phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description">Doubt Description</FormLabel>
              <FormControl>
                <Textarea id="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  )
}
