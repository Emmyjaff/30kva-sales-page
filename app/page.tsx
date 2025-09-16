import { HeroSection } from "@/components/hero-section"
import { ProductFeatures } from "@/components/product-features"
import { PaymentOptions } from "@/components/payment-options"
import { ProductSpecs } from "@/components/product-specs"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductSpecs />
      <ProductFeatures />
      <PaymentOptions />
      <ContactSection />
    </main>
  )
}
