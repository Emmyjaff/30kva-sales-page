import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Wrench, TrendingUp, Shield, Leaf } from "lucide-react"

export function ProductFeatures() {
  const features = [
    {
      icon: CheckCircle,
      title: "Reliable Performance",
      description: "99.9% uptime with advanced monitoring and automatic failover systems",
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Continuous power supply designed for round-the-clock industrial operations",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Complete installation and setup by certified technicians included",
    },
    {
      icon: TrendingUp,
      title: "Energy Savings",
      description: "Reduce electricity costs by up to 80% with solar power generation",
    },
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Comprehensive warranty coverage on all system components",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Clean, renewable energy solution that reduces carbon footprint",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Our 30KVA System?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Built for commercial excellence with features that matter for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
