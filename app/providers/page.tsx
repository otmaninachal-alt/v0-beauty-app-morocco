import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProviderListings } from "@/components/provider-listings"

export default function ProvidersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProviderListings />
      </main>
      <Footer />
    </div>
  )
}
