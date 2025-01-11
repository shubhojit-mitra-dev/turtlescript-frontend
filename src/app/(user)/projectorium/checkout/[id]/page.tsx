"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Smartphone, Building } from 'lucide-react'
import { motion } from "framer-motion"
import { CardPaymentForm } from "./CardPaymentForm"
import { UPIPaymentForm } from "./UpiPaymentForm"
import { NetBankingForm } from "./NetBankingForm"
import { CheckIcon } from "./CheckIcon"

export default function CheckoutPage({ }: { params: { id: string } }) {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Card className="backdrop-blur-sm bg-gray-900/50 shadow-2xl border-gray-800">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Complete Your Purchase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!confirmed ? (
              <Tabs defaultValue="card" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="card" className="flex items-center justify-center text-gray-400 data-[state=active]:text-white">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Card
                  </TabsTrigger>
                  <TabsTrigger value="upi" className="flex items-center justify-center text-gray-400 data-[state=active]:text-white">
                    <Smartphone className="w-4 h-4 mr-2" />
                    UPI
                  </TabsTrigger>
                  <TabsTrigger value="netbanking" className="flex items-center justify-center text-gray-400 data-[state=active]:text-white">
                    <Building className="w-4 h-4 mr-2" />
                    Net Banking
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="card">
                  <CardPaymentForm />
                </TabsContent>
                <TabsContent value="upi">
                  <UPIPaymentForm />
                </TabsContent>
                <TabsContent value="netbanking">
                  <NetBankingForm />
                </TabsContent>
              </Tabs>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                >
                  <CheckIcon className="w-16 h-16 mx-auto text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-green-400 mt-4 mb-2">
                  Purchase Confirmed!
                </h3>
                <p className="text-gray-300">
                  Thank you for your purchase. You will receive a confirmation email shortly.
                </p>
              </motion.div>
            )}
          </CardContent>
          <CardFooter>
            {!confirmed ? (
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
                onClick={() => setConfirmed(true)}
              >
                Confirm Purchase
              </Button>
            ) : (
              <Button 
                className="w-full bg-gray-800 text-gray-200 font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700" 
                onClick={() => window.location.href = '/my-projects'}
              >
                View My Projects
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

