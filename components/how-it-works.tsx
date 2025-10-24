import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find a Service",
    description: "Browse through our curated list of beauty professionals and services",
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Choose your preferred time slot and book instantly online",
  },
  {
    icon: CheckCircle,
    title: "Get Beautiful",
    description: "Show up and enjoy your professional beauty service",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Book your beauty service in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
