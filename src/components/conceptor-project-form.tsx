'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import LoadingStates from "@/components/loading-states"
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form'

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    topicName: z.string().min(3, "Topic name must be at least 3 characters"),
    topicDomain: z.string().min(3, "Domain must be at least 3 characters"),
    topicDescription: z.string().min(10, "Description must be at least 10 characters"),
    discussionType: z.enum(["individual", "group"]),
    groupSize: z.number().min(2).max(10).optional(),
    members: z.array(
      z.object({
        name: z.string().min(2, "Member name must be at least 2 characters")
      })
    ).optional(),
  })

type FormData = z.infer<typeof formSchema>


export default function ConceptorProjectForm() {
  const [showLoading, setShowLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      topicName: "",
      topicDomain: "",
      topicDescription: "",
      discussionType: "individual",
      groupSize: 2,
      members: [],
    },
  })

  const { mutate } = useMutation({
    mutationFn: async (values: FormData) => {
      return await axios.post('/api/conceptor', values)
    },
    onSuccess: () => {
      setShowLoading(true)
      form.reset()
    },
  })

  function onSubmit(values: FormData) {
    mutate(values)
  }

  const discussionType = form.watch("discussionType")
  const groupSize = form.watch("groupSize")

  if (showLoading) {
    return <LoadingStates onClose={() => setShowLoading(false)} />
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topicName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topicDomain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Domain</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topicDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="discussionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discussion Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="individual" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Individual
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="group" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Group
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        {discussionType === "group" && (
          <>
            <FormField
              control={form.control}
              name="groupSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Size</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={2}
                      max={10}
                      {...field}
                      onChange={e => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {discussionType === "group" && groupSize && groupSize > 1 && (
            Array.from({ length: groupSize - 1 }).map((_, i) => (
                <FormField
                key={i}
                control={form.control}
                name={`members.${i}.name`}
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Member {i + 2} Name</FormLabel>
                    <FormControl>
                        <Input
                        placeholder={`Enter member ${i + 2} name`}
                        {...field}
                        value={field.value ?? ""}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            ))
            )}
          </>
        )}

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
