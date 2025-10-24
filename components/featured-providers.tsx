import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"

const featuredProviders = [
  {
    id: 1,
    name: "Salon Elegance",
    category: "Hairdressing",
    rating: 4.9,
    reviews: 127,
    location: "Casablanca",
    image: "/elegant-hair-salon.png",
    initials: "SE",
  },
  {
    id: 2,
    name: "Barber House",
    category: "Barbering",
    rating: 4.8,
    reviews: 98,
    location: "Rabat",
    image: "/modern-barber-shop.png",
    initials: "BH",
  },
  {
    id: 3,
    name: "Glam Studio",
    category: "Makeup",
    rating: 5.0,
    reviews: 156,
    location: "Marrakech",
    image: "/makeup-studio.jpg",
    initials: "GS",
  },
  {
    id: 4,
    name: "Nail Art Pro",
    category: "Nails",
    rating: 4.7,
    reviews: 89,
    location: "Tangier",
    image: "/nail-salon-interior.png",
    initials: "NA",
  },
]

export function FeaturedProviders() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Featured Providers</h2>
            <p className="mt-2 text-lg text-muted-foreground">Top-rated beauty professionals in Morocco</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex bg-transparent">
            <Link href="/providers">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProviders.map((provider) => (
            <Link key={provider.id} href={`/providers/${provider.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                      <AvatarFallback className="text-lg">{provider.initials}</AvatarFallback>
                    </Avatar>

                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {provider.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">{provider.category}</p>

                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{provider.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/providers">View All Providers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
