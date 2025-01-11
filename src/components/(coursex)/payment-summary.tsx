import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PaymentSummaryProps {
  course: {
    id: string
    title: string
    price: number
  }
  paymentType: 'full' | 'part'
  partPaymentAmount: number
}

export function PaymentSummary({ course, paymentType, partPaymentAmount }: PaymentSummaryProps) {
  const totalAmount = paymentType === 'full' ? course.price : partPaymentAmount
  const remainingAmount = paymentType === 'part' ? course.price - partPaymentAmount : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
        <CardDescription>Review your order details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Course:</span>
          <span>{course.title}</span>
        </div>
        <div className="flex justify-between">
          <span>Course Price:</span>
          <span>${course.price.toFixed(2)}</span>
        </div>
        {paymentType === 'part' && (
          <>
            <div className="flex justify-between">
              <span>Part Payment Amount:</span>
              <span>${partPaymentAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining Amount:</span>
              <span>${remainingAmount.toFixed(2)}</span>
            </div>
          </>
        )}
        <div className="flex justify-between font-bold">
          <span>Total Amount Due:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

