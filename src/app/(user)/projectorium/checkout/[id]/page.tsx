"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="container max-w-md py-8">
      <Card>
        <CardHeader>
          <CardTitle>Confirm Purchase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!confirmed ? (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="1234 1234 1234 1234" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Purchase Confirmed!
              </h3>
              <p className="text-muted-foreground">
                Thank you for your purchase. You will receive a confirmation email shortly.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {!confirmed ? (
            <Button 
              className="w-full" 
              onClick={() => setConfirmed(true)}
            >
              Confirm Purchase
            </Button>
          ) : (
            <Button 
              className="w-full" 
              variant="outline" 
              onClick={() => window.location.href = '/my-projects'}
            >
              View My Projects
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

