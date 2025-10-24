import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Hand, Droplet, Heart, Star } from "lucide-react"

const categories = [
  {
    id: "barbering",
    name: "Barbering",
    description: "Haircuts, beard trims, and grooming",
    icon: Scissors,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "hairdressing",
    name: "Hairdressing",
    description: "Styling, coloring, and treatments",
    icon: Sparkles,
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "makeup",
    name: "Makeup",
    description: "Professional makeup services",
    icon: Star,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "nails",
    name: "Nails",
    description: "Manicures, pedicures, and nail art",
    icon: Hand,
    color: "bg-rose-50 text-rose-600",
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Hair removal services",
    icon: Droplet,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "treatments",
    name: "Treatments",
    description: "Facials, massages, and spa services",
    icon: Heart,
    color: "bg-emerald-50 text-emerald-600",
  },
]

export function ServiceCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Browse by Service</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Find the perfect beauty service for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={`/services/${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
