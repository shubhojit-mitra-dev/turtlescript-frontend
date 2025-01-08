'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Star, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function HelpCenter() {
  const [rating, setRating] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Help Center</h1>
        
        <Tabs defaultValue="complaint" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="complaint">Raise Complaint</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="review">Submit Review</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="complaint">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Submit a Complaint</CardTitle>
                <CardDescription>Were here to help. Please fill out the form below.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: Integrate your API here to submit the complaint form data
                      // Example:
                      // const formData = new FormData(e.target as HTMLFormElement);
                      // submitComplaint(formData);
                    }}>
                      <Input placeholder="Your Name" className="bg-gray-800 border-gray-700" />
                      <Input placeholder="Email" type="email" className="bg-gray-800 border-gray-700" />
                      <Input placeholder="Subject" className="bg-gray-800 border-gray-700" />
                      <Textarea placeholder="Describe your issue" className="bg-gray-800 border-gray-700" />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Complaint</Button>
                    </form>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Our Customer Support Excellence</h3>
                    <p className="text-gray-300">
                      At our company, we pride ourselves on providing exceptional customer support. Our dedicated team is committed to ensuring your satisfaction and resolving any issues you may encounter.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-400" />
                        <span>24/7 Support Availability</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-400" />
                        <span>Rapid Response Times</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-400" />
                        <span>Personalized Solutions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-400" />
                        <span>Continuous Improvement</span>
                      </li>
                    </ul>
                    <p className="text-gray-300">
                      We value your feedback and use it to continuously improve our services. Your satisfaction is our top priority.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" >
            <Card className="bg-gray-900 border-gray-800 ">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                      You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions sent to your email.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards, PayPal, and bank transfers for payments.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                    <AccordionContent>
                      Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="review">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Submit a Review</CardTitle>
                <CardDescription>We value your feedback. Please share your experience with us.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`cursor-pointer ${
                          star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  <Input placeholder="Your Name" className="bg-gray-800 border-gray-700" />
                  <Input placeholder="Email" type="email" className="bg-gray-800 border-gray-700" />
                  <Textarea placeholder="Your review" className="bg-gray-800 border-gray-700" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Submit Review</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-400" />
                    <span>support@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-green-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-red-400" />
                    <span>123 Business Street, City, Country, 12345</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

