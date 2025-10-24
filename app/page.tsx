import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServiceCategories } from "@/components/service-categories"
import { FeaturedProviders } from "@/components/featured-providers"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServiceCategories />
        <FeaturedProviders />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
