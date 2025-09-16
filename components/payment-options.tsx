import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PaystackPayment } from "@/components/paystack-payment"
import { InstallmentForm } from "@/components/installment-form"
import { CreditCard, Calendar, CheckCircle } from "lucide-react"

export function PaymentOptions() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Flexible Payment Options
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Choose Your Payment Plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer flexible payment solutions to make solar power accessible for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Outright Payment */}
          <Card className="relative">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Outright Payment</CardTitle>
                  <p className="text-muted-foreground">Pay once, own immediately</p>
                </div>
              </div>

              <div className="text-3xl font-bold text-primary mb-2">₦26,777,800.32</div>
              <p className="text-muted-foreground mb-6">Complete system with installation included</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Immediate ownership</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No interest charges</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Full warranty coverage</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <PaystackPayment />
            </CardContent>
          </Card>

          {/* Installment Payment */}
          <Card className="relative">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Installment Plan</CardTitle>
                  <p className="text-muted-foreground">Flexible monthly payments</p>
                </div>
              </div>

              <Badge variant="secondary" className="mb-4">
                Partnership with CreditCorp & Fidelity Bank
              </Badge>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Flexible payment terms</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Quick approval process</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Start saving immediately</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <InstallmentForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
