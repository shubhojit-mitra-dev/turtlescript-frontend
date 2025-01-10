"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, CreditCard, Smartphone, Building } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { PaymentSummary } from '@/components/(coursex)/payment-summary'
import { ConfirmationModal } from '@/components/(coursex)/confirmation-modal'

export default function CheckoutPage({ params }: { params: { courseId: string } }) {
  const [courseData, setCourseData] = useState<{ id: string; title: string; price: number } | null>(null)
  const [paymentType, setPaymentType] = useState<'full' | 'part'>('full')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card')
  const [partPaymentAmount, setPartPaymentAmount] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // TODO: Replace this with an API call to fetch course data
    // const fetchCourseData = async () => {
    //   const data = await fetchCourseDetails(params.courseId);
    //   setCourseData(data);
    // };
    // fetchCourseData();

    // Temporary mock data
    setCourseData({
      id: params.courseId,
      title: 'Advanced Web Development',
      price: 99.99,
    })
  }, [params.courseId])

  const handlePayment = () => {
    // TODO: Implement payment processing logic here
    console.log('Processing payment...')
    setShowConfirmation(true)
  }

  const handleConfirmation = () => {
    setShowConfirmation(false)
    router.push('/my-courses')
  }

  if (!courseData) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payment Options</CardTitle>
            <CardDescription>Choose your payment type and method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup defaultValue="full" onValueChange={(value) => setPaymentType(value as 'full' | 'part')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full" id="full" />
                <Label htmlFor="full">Full Payment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="part" id="part" />
                <Label htmlFor="part">Part Payment</Label>
              </div>
            </RadioGroup>
            {paymentType === 'part' && (
              <div className="space-y-2">
                <Label htmlFor="partAmount">Part Payment Amount</Label>
                <Input
                  id="partAmount"
                  placeholder="Enter amount"
                  value={partPaymentAmount}
                  onChange={(e) => setPartPaymentAmount(e.target.value)}
                />
              </div>
            )}
            <Tabs defaultValue="card" onValueChange={(value) => setPaymentMethod(value as 'card' | 'upi' | 'netbanking')}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="upi">UPI</TabsTrigger>
                <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
              </TabsList>
              <TabsContent value="card">
                <Card>
                  <CardHeader>
                    <CardTitle>Credit/Debit Card</CardTitle>
                    <CardDescription>Enter your card details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Input placeholder="Card Number" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </div>
                    <Input placeholder="Cardholder Name" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="upi">
                <Card>
                  <CardHeader>
                    <CardTitle>UPI</CardTitle>
                    <CardDescription>Enter your UPI ID</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Input placeholder="UPI ID" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="netbanking">
                <Card>
                  <CardHeader>
                    <CardTitle>Net Banking</CardTitle>
                    <CardDescription>Select your bank</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <select className="w-full p-2 border rounded">
                      <option>Select Bank</option>
                      <option>Bank 1</option>
                      <option>Bank 2</option>
                      <option>Bank 3</option>
                    </select>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={handlePayment} className="w-full">Pay Now</Button>
          </CardFooter>
        </Card>
        <PaymentSummary 
          course={courseData}
          paymentType={paymentType}
          partPaymentAmount={parseFloat(partPaymentAmount) || 0}
        />
      </div>
      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={handleConfirmation}
      />
    </div>
  )
}

