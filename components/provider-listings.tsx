"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, Search, SlidersHorizontal, X } from "lucide-react"
import Link from "next/link"

// Sample provider data - in a real app, this would come from an API
const allProviders = [
  {
    id: 1,
    name: "Salon Elegance",
    category: "Hairdressing",
    rating: 4.9,
    reviews: 127,
    location: "Casablanca",
    image: "/elegant-hair-salon.png",
    initials: "SE",
    priceRange: "$$$",
    verified: true,
    services: ["Haircut", "Coloring", "Styling"],
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
    priceRange: "$$",
    verified: true,
    services: ["Haircut", "Beard Trim", "Shave"],
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
    priceRange: "$$$$",
    verified: true,
    services: ["Bridal Makeup", "Event Makeup", "Lessons"],
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
    priceRange: "$$",
    verified: false,
    services: ["Manicure", "Pedicure", "Nail Art"],
  },
  {
    id: 5,
    name: "Royal Cuts",
    category: "Barbering",
    rating: 4.6,
    reviews: 73,
    location: "Casablanca",
    image: "/barber-shop.png",
    initials: "RC",
    priceRange: "$",
    verified: true,
    services: ["Haircut", "Beard Trim"],
  },
  {
    id: 6,
    name: "Beauty Lounge",
    category: "Hairdressing",
    rating: 4.9,
    reviews: 142,
    location: "Rabat",
    image: "/hair-salon-interior.png",
    initials: "BL",
    priceRange: "$$$",
    verified: true,
    services: ["Haircut", "Coloring", "Keratin Treatment"],
  },
  {
    id: 7,
    name: "Smooth Skin",
    category: "Waxing",
    rating: 4.5,
    reviews: 64,
    location: "Marrakech",
    image: "/relaxing-spa-scene.png",
    initials: "SS",
    priceRange: "$$",
    verified: false,
    services: ["Full Body Wax", "Brazilian Wax", "Facial Wax"],
  },
  {
    id: 8,
    name: "Zen Spa",
    category: "Treatments",
    rating: 4.8,
    reviews: 118,
    location: "Casablanca",
    image: "/spa-treatment.png",
    initials: "ZS",
    priceRange: "$$$$",
    verified: true,
    services: ["Facial", "Massage", "Body Treatment"],
  },
  {
    id: 9,
    name: "Perfect Nails",
    category: "Nails",
    rating: 4.4,
    reviews: 56,
    location: "Tangier",
    image: "/nail-salon-interior.png",
    initials: "PN",
    priceRange: "$",
    verified: false,
    services: ["Manicure", "Pedicure", "Gel Nails"],
  },
  {
    id: 10,
    name: "Makeup Magic",
    category: "Makeup",
    rating: 4.7,
    reviews: 91,
    location: "Rabat",
    image: "/makeup-artist-applying-lipstick.png",
    initials: "MM",
    priceRange: "$$$",
    verified: true,
    services: ["Bridal Makeup", "Party Makeup", "Photoshoot"],
  },
  {
    id: 11,
    name: "Classic Barber",
    category: "Barbering",
    rating: 4.3,
    reviews: 45,
    location: "Marrakech",
    image: "/classic-barber.jpg",
    initials: "CB",
    priceRange: "$",
    verified: false,
    services: ["Haircut", "Shave"],
  },
  {
    id: 12,
    name: "Hair Studio 360",
    category: "Hairdressing",
    rating: 4.9,
    reviews: 167,
    location: "Casablanca",
    image: "/modern-salon.jpg",
    initials: "HS",
    priceRange: "$$$$",
    verified: true,
    services: ["Haircut", "Coloring", "Extensions", "Styling"],
  },
]

const categories = ["All", "Barbering", "Hairdressing", "Makeup", "Nails", "Waxing", "Treatments"]
const cities = ["All Cities", "Casablanca", "Rabat", "Marrakech", "Tangier"]

export function ProviderListings() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [minRating, setMinRating] = useState([0])

  // Filter and sort providers
  const filteredProviders = allProviders
    .filter((provider) => {
      const matchesSearch =
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || provider.category === selectedCategory
      const matchesCity = selectedCity === "All Cities" || provider.location === selectedCity
      const matchesVerified = !verifiedOnly || provider.verified
      const matchesRating = provider.rating >= minRating[0]

      return matchesSearch && matchesCategory && matchesCity && matchesVerified && matchesRating
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Find Your Perfect Provider</h1>
          <p className="text-lg text-muted-foreground">
            Browse {allProviders.length} beauty professionals across Morocco
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Select */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* City Select */}
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Filters Toggle Button */}
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full md:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Sort By */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Highest Rating</SelectItem>
                        <SelectItem value="reviews">Most Reviews</SelectItem>
                        <SelectItem value="name">Name (A-Z)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Minimum Rating */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Minimum Rating: {minRating[0].toFixed(1)}
                    </label>
                    <Slider
                      value={minRating}
                      onValueChange={setMinRating}
                      min={0}
                      max={5}
                      step={0.5}
                      className="mt-2"
                    />
                  </div>

                  {/* Verified Only */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="verified"
                      checked={verifiedOnly}
                      onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                    />
                    <label
                      htmlFor="verified"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Verified providers only
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                      setSelectedCity("All Cities")
                      setSortBy("rating")
                      setVerifiedOnly(false)
                      setMinRating([0])
                    }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProviders.length} {filteredProviders.length === 1 ? "provider" : "providers"}
          </p>
        </div>

        {/* Provider Grid */}
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProviders.map((provider) => (
              <Link key={provider.id} href={`/providers/${provider.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                          <AvatarFallback className="text-lg">{provider.initials}</AvatarFallback>
                        </Avatar>
                        {provider.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                            <Star className="h-3 w-3 fill-current" />
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {provider.name}
                      </h3>

                      <Badge variant="secondary" className="mb-3">
                        {provider.category}
                      </Badge>

                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium">{provider.rating}</span>
                        <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{provider.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 justify-center mb-3">
                        {provider.services.slice(0, 2).map((service) => (
                          <Badge key={service} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {provider.services.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{provider.services.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm font-medium text-muted-foreground">{provider.priceRange}</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="p-12">
            <div className="text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No providers found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedCity("All Cities")
                  setSortBy("rating")
                  setVerifiedOnly(false)
                  setMinRating([0])
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
