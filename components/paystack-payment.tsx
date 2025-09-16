"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader2, Shield } from "lucide-react"

export function PaystackPayment() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Initialize Paystack payment
      const handler = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_your_key_here",
        email: "customer@example.com",
        amount: 2677780032, // Amount in kobo (₦26,777,800.32)
        currency: "NGN",
        ref: `inv_${Date.now()}`,
        metadata: {
          product: "30KVA Inverter System",
          custom_fields: [
            {
              display_name: "Product",
              variable_name: "product",
              value: "30KVA Inverter System",
            },
          ],
        },
        callback: (response: any) => {
          // Payment successful
          console.log("Payment successful:", response)
          alert("Payment successful! We will contact you shortly to schedule installation.")
        },
        onClose: () => {
          setIsLoading(false)
        },
      })

      handler.openIframe()
    } catch (error) {
      console.error("Payment error:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={handlePayment} disabled={isLoading} size="lg" className="w-full text-lg">
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Shield className="w-5 h-5 mr-2" />
            Pay Securely with Paystack
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Secure payment powered by Paystack. Your payment information is encrypted and protected.
      </p>

      {/* Paystack Script */}
      <script src="https://js.paystack.co/v1/inline.js" async />
    </div>
  )
}
