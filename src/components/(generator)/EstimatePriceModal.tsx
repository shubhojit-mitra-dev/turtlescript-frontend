'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { WebsiteForm } from './WebsiteForm'
import { ThankYouPage } from './ThankYouPage'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  keepDesign: z.enum(['yes', 'no']),
  hostType: z.enum(['local', 'browse']).optional(),
})

export function EstimatedPriceModal() {
  const [showForm, setShowForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keepDesign: 'yes',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.keepDesign === 'no') {
      setShowForm(true)
    } else {
      setShowThankYou(true)
    }
  }

  if (showThankYou) {
    return <ThankYouPage />
  }

  if (showForm) {
    return <WebsiteForm onSubmit={() => setShowThankYou(true)} />
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="keepDesign"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Do you want to keep the design and create the same website with your data?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      No
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch('keepDesign') === 'yes' && (
          <FormField
            control={form.control}
            name="hostType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>On which type of host do you want to host the website?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="local" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Local Host
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="browse" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Browse
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

