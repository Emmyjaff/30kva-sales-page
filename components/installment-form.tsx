"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Loader2, Send } from "lucide-react"

export function InstallmentForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    system: "30KVA Inverter System",
    systemPrice: "₦26,777,800.32",
    payment: "",
    workplace: "",
    placeOfWork: "",
    salaryRange: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://stroom-interest-form.onrender.com/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert(
          "Application submitted successfully! We will contact you within 24 hours to discuss your installment plan.",
        )
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          state: "",
          system: "30KVA Inverter System",
          systemPrice: "₦26,777,800.32",
          payment: "",
          workplace: "",
          placeOfWork: "",
          salaryRange: "",
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Failed to submit application. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Akwa Ibom">Akwa Ibom</SelectItem>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                  <SelectItem value="Abuja">Abuja</SelectItem>
                  <SelectItem value="Rivers">Rivers</SelectItem>
                  <SelectItem value="Kano">Kano</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="payment">Payment Period *</Label>
              <Select value={formData.payment} onValueChange={(value) => setFormData({ ...formData, payment: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6 months">6 months</SelectItem>
                  <SelectItem value="12 months">12 months</SelectItem>
                  <SelectItem value="18 months">18 months</SelectItem>
                  <SelectItem value="24 months">24 months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workplace">Workplace Type *</Label>
              <Select
                value={formData.workplace}
                onValueChange={(value) => setFormData({ ...formData, workplace: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select workplace type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Self-employed">Self-employed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="placeOfWork">Place of Work *</Label>
              <Input
                id="placeOfWork"
                value={formData.placeOfWork}
                onChange={(e) => setFormData({ ...formData, placeOfWork: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="salaryRange">Monthly Salary Range *</Label>
              <Select
                value={formData.salaryRange}
                onValueChange={(value) => setFormData({ ...formData, salaryRange: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select salary range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="₦50,000 - ₦100,000">₦50,000 - ₦100,000</SelectItem>
                  <SelectItem value="₦100,000 - ₦200,000">₦100,000 - ₦200,000</SelectItem>
                  <SelectItem value="₦200,000 - ₦500,000">₦200,000 - ₦500,000</SelectItem>
                  <SelectItem value="₦500,000+">₦500,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} size="lg" className="w-full text-lg">
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Installment Application
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
