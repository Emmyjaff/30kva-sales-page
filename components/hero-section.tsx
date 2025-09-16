import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Factory, Building2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-card py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              <Zap className="w-4 h-4 mr-2" />
              Commercial Grade Solar Solution
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              30KVA Inverter System
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              Power your large commercial operations with our premium solar inverter system. Designed for factories,
              offices, and multiple units.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm">
                <Factory className="w-5 h-5 text-primary" />
                <span>Factories</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="w-5 h-5 text-primary" />
                <span>Large Offices</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-5 h-5 text-primary" />
                <span>Multiple Units</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₦26,777,800.32</div>
              <p className="text-muted-foreground">Complete system with installation</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Specifications
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/modern-solar-inverter-system-in-industrial-setting.jpg"
                alt="30KVA Inverter System"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
