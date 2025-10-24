import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Discover Beauty Services in Morocco
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl text-pretty">
            Book appointments with top-rated beauty professionals for barbering, hairdressing, makeup, nails, and more
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search services or providers..." className="pl-10 h-12 bg-card" />
            </div>
            <Button size="lg" className="w-full sm:w-auto h-12">
              Search
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Haircut", "Makeup", "Manicure", "Beard Trim"].map((tag) => (
              <Button key={tag} variant="secondary" size="sm">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
