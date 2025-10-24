import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProviderProfile } from "@/components/provider-profile"
import { notFound } from "next/navigation"

// Sample provider data - in a real app, this would come from an API
const providers = [
  {
    id: 1,
    name: "Salon Elegance",
    category: "Hairdressing",
    rating: 4.9,
    reviews: 127,
    location: "Casablanca",
    address: "123 Boulevard Mohammed V, Casablanca",
    phone: "+212 522-123-456",
    email: "contact@salonelegance.ma",
    image: "/elegant-hair-salon.png",
    initials: "SE",
    verified: true,
    description:
      "Salon Elegance is a premier hairdressing salon in the heart of Casablanca. With over 10 years of experience, our team of expert stylists provides exceptional hair care services using the latest techniques and premium products.",
    services: [
      { name: "Women's Haircut", price: 200, duration: 60 },
      { name: "Men's Haircut", price: 150, duration: 45 },
      { name: "Hair Coloring", price: 400, duration: 120 },
      { name: "Highlights", price: 500, duration: 150 },
      { name: "Keratin Treatment", price: 800, duration: 180 },
      { name: "Hair Styling", price: 150, duration: 45 },
    ],
    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed",
    },
    gallery: ["/elegant-hair-salon.png", "/hair-salon-interior.png", "/modern-salon.jpg", "/elegant-hair-salon.png"],
    testimonials: [
      {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        comment: "Amazing service! The stylist really understood what I wanted and delivered perfectly.",
        date: "2 weeks ago",
      },
      {
        id: 2,
        name: "Fatima K.",
        rating: 5,
        comment: "Best salon in Casablanca. Professional staff and beautiful results every time.",
        date: "1 month ago",
      },
      {
        id: 3,
        name: "Amina B.",
        rating: 4,
        comment: "Great experience overall. The keratin treatment lasted for months!",
        date: "2 months ago",
      },
    ],
  },
  {
    id: 2,
    name: "Barber House",
    category: "Barbering",
    rating: 4.8,
    reviews: 98,
    location: "Rabat",
    address: "45 Avenue Hassan II, Rabat",
    phone: "+212 537-234-567",
    email: "info@barberhouse.ma",
    image: "/modern-barber-shop.png",
    initials: "BH",
    verified: true,
    description:
      "Barber House offers premium barbering services in a modern, comfortable environment. Our skilled barbers specialize in classic and contemporary cuts, beard grooming, and traditional hot towel shaves.",
    services: [
      { name: "Haircut", price: 100, duration: 30 },
      { name: "Beard Trim", price: 50, duration: 20 },
      { name: "Hot Towel Shave", price: 80, duration: 30 },
      { name: "Haircut + Beard", price: 140, duration: 45 },
      { name: "Kids Haircut", price: 80, duration: 25 },
    ],
    hours: {
      monday: "10:00 AM - 8:00 PM",
      tuesday: "10:00 AM - 8:00 PM",
      wednesday: "10:00 AM - 8:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 8:00 PM",
      saturday: "10:00 AM - 8:00 PM",
      sunday: "12:00 PM - 6:00 PM",
    },
    gallery: ["/modern-barber-shop.png", "/barber-shop.png", "/classic-barber.jpg", "/modern-barber-shop.png"],
    testimonials: [
      {
        id: 1,
        name: "Omar A.",
        rating: 5,
        comment: "Best barber in Rabat! Always consistent and professional.",
        date: "1 week ago",
      },
      {
        id: 2,
        name: "Youssef M.",
        rating: 5,
        comment: "Great atmosphere and skilled barbers. Highly recommend!",
        date: "3 weeks ago",
      },
      {
        id: 3,
        name: "Karim L.",
        rating: 4,
        comment: "Good service, but sometimes the wait can be long.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: 3,
    name: "Glam Studio",
    category: "Makeup",
    rating: 5.0,
    reviews: 156,
    location: "Marrakech",
    address: "78 Rue de la Liberté, Marrakech",
    phone: "+212 524-345-678",
    email: "hello@glamstudio.ma",
    image: "/makeup-studio.jpg",
    initials: "GS",
    verified: true,
    description:
      "Glam Studio is Marrakech's premier makeup destination for bridal, special events, and professional photoshoots. Our award-winning makeup artists create stunning looks tailored to your unique style.",
    services: [
      { name: "Bridal Makeup", price: 1500, duration: 120 },
      { name: "Event Makeup", price: 600, duration: 60 },
      { name: "Photoshoot Makeup", price: 800, duration: 90 },
      { name: "Makeup Lesson", price: 500, duration: 90 },
      { name: "Airbrush Makeup", price: 700, duration: 75 },
    ],
    hours: {
      monday: "By Appointment",
      tuesday: "By Appointment",
      wednesday: "By Appointment",
      thursday: "By Appointment",
      friday: "By Appointment",
      saturday: "By Appointment",
      sunday: "By Appointment",
    },
    gallery: [
      "/makeup-studio.jpg",
      "/makeup-artist-applying-lipstick.png",
      "/makeup-studio.jpg",
      "/makeup-artist-applying-lipstick.png",
    ],
    testimonials: [
      {
        id: 1,
        name: "Leila H.",
        rating: 5,
        comment: "My wedding makeup was absolutely perfect! I felt like a princess.",
        date: "2 weeks ago",
      },
      {
        id: 2,
        name: "Nadia R.",
        rating: 5,
        comment: "Incredible talent! The makeup lasted all night and looked flawless in photos.",
        date: "1 month ago",
      },
      {
        id: 3,
        name: "Samira T.",
        rating: 5,
        comment: "Professional, creative, and so talented. Worth every dirham!",
        date: "2 months ago",
      },
    ],
  },
]

export default async function ProviderProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const provider = providers.find((p) => p.id === Number.parseInt(id))

  if (!provider) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProviderProfile provider={provider} />
      </main>
      <Footer />
    </div>
  )
}
