'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeftCircleIcon } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import * as z from "zod"
import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const MAX_FILE_SIZE = 5000000 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]
const ACCEPTED_DOCUMENT_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]

const formSchema = z.object({
    phone: z.string().min(10, "Phone number must be at least 10 digits")
      .regex(/^[0-9]+$/, "Must be only digits"),
    position: z.string().min(2, "Current position is required"),
    idProof: z.instanceof(File)
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png files are accepted"
      )
      .optional(),
    resume: z.instanceof(File)
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
      .refine(
        (file) => ACCEPTED_DOCUMENT_TYPES.includes(file?.type),
        "Only .pdf and .docx files are accepted"
      )
      .optional(),
  })

export default function ConceptorHeader() {
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        phone: "",
        position: "",
      },
    })

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: FormData) => {
          const response = await axios.post('/api/conceptor/mentor', data)
          return response.data
        },
        onSuccess: () => {
          setOpen(false)
          setTimeout(() => {
            toast.success("Your mentor application has been submitted!", {
              duration: 3000,
            })
          }, 100)
          form.reset()
        },
        onError: () => {
          toast.error("Failed to submit application. Please try again.", {
            duration: 3000,
          })
        },
      })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })
    mutate(formData)
  }

    return (
      <header className="relative flex items-center justify-between border-b px-6 py-4">
        <Link href="/" className="text-foreground hover:text-primary">
          <ArrowLeftCircleIcon className="h-5 w-5" />
        </Link>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold">
          ConceptorX
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Be a Mentor</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Become a Mentor</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Position</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Senior Developer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="idProof"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>ID Proof</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) onChange(file)
                        }}
                        {...field}
                        value={undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="resume"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Resume</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) onChange(file)
                        }}
                        {...{ ...field, value: undefined }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </header>
    )
  }
