import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Battery, Sun, Zap, Shield } from "lucide-react"

export function ProductSpecs() {
  const specs = [
    {
      icon: Zap,
      title: "30KVA Capacity",
      description: "High-capacity inverter for large commercial applications",
      value: "30,000 Watts",
    },
    {
      icon: Battery,
      title: "40KWH Lithium Battery",
      description: "Long-lasting lithium-ion battery storage",
      value: "40,000 Wh",
    },
    {
      icon: Sun,
      title: "Solar Panels",
      description: "40 pieces of 550W high-efficiency solar panels",
      value: "22,000W Total",
    },
    {
      icon: Shield,
      title: "Commercial Grade",
      description: "Built for continuous industrial operation",
      value: "24/7 Operation",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            System Specifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Complete Solar Power Solution</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for reliable, sustainable power generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
