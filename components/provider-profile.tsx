"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { BookingDialog } from "@/components/booking-dialog"
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Calendar,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Service {
  name: string
  price: number
  duration: number
}

interface Testimonial {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

interface Provider {
  id: number
  name: string
  category: string
  rating: number
  reviews: number
  location: string
  address: string
  phone: string
  email: string
  image: string
  initials: string
  verified: boolean
  description: string
  services: Service[]
  hours: Record<string, string>
  gallery: string[]
  testimonials: Testimonial[]
}

export function ProviderProfile({ provider }: { provider: Provider }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false)
  const [bookingService, setBookingService] = useState<Service | undefined>(undefined)

  const handleBookNow = (service?: Service) => {
    setBookingService(service)
    setBookingDialogOpen(true)
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/providers"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Providers
        </Link>

        {/* Provider Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Provider Info */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                      <AvatarFallback className="text-2xl">{provider.initials}</AvatarFallback>
                    </Avatar>
                    {provider.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">{provider.name}</h1>
                        <Badge variant="secondary" className="mb-3">
                          {provider.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                            <span className="font-semibold">{provider.rating}</span>
                            <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                          </div>
                          {provider.verified && (
                            <Badge variant="outline" className="gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{provider.description}</p>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{provider.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href={`tel:${provider.phone}`} className="hover:text-primary">
                          {provider.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${provider.email}`} className="hover:text-primary">
                          {provider.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg" onClick={() => handleBookNow()}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Hours</span>
                  </div>
                  <div className="space-y-1 ml-6">
                    {Object.entries(provider.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}:</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {provider.services.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {service.duration} min
                            </span>
                            <span className="font-semibold text-foreground">{service.price} MAD</span>
                          </div>
                        </div>
                        <Button
                          variant={selectedService?.name === service.name ? "default" : "outline"}
                          onClick={() => {
                            setSelectedService(service)
                            handleBookNow(service)
                          }}
                        >
                          Book
                        </Button>
                      </div>
                      {index < provider.services.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>

                {selectedService && (
                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Selected Service</p>
                        <p className="font-semibold">{selectedService.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-xl font-bold text-primary">{selectedService.price} MAD</p>
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => handleBookNow(selectedService)}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book {selectedService.name}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {provider.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${provider.name} gallery ${index + 1}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Customer Reviews</CardTitle>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-bold">{provider.rating}</span>
                    <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {provider.testimonials.map((testimonial, index) => (
                    <div key={testimonial.id}>
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{testimonial.comment}</p>
                        </div>
                      </div>
                      {index < provider.testimonials.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full bg-transparent">
                    Load More Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Booking Dialog Component */}
      <BookingDialog
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
        providerName={provider.name}
        services={provider.services}
        preselectedService={bookingService}
      />
    </div>
  )
}
