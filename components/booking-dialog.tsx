"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, User, Mail, Phone, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"

interface Service {
  name: string
  price: number
  duration: number
}

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  providerName: string
  services: Service[]
  preselectedService?: Service
}

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
]

export function BookingDialog({ open, onOpenChange, providerName, services, preselectedService }: BookingDialogProps) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<Service | undefined>(preselectedService)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsConfirmed(true)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after dialog closes
    setTimeout(() => {
      setStep(1)
      setSelectedService(preselectedService)
      setSelectedDate(undefined)
      setSelectedTime(undefined)
      setCustomerName("")
      setCustomerEmail("")
      setCustomerPhone("")
      setNotes("")
      setIsConfirmed(false)
    }, 300)
  }

  const canProceedStep1 = selectedService && selectedDate && selectedTime
  const canProceedStep2 = customerName && customerEmail && customerPhone

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isConfirmed ? (
          <>
            <DialogHeader>
              <DialogTitle>Book Appointment with {providerName}</DialogTitle>
              <DialogDescription>
                Step {step} of 3: {step === 1 ? "Select Service & Time" : step === 2 ? "Your Information" : "Review"}
              </DialogDescription>
            </DialogHeader>

            {/* Step 1: Service & Time Selection */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Service Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Select Service</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedService(service)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedService?.name === service.name
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{service.name}</p>
                            <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {service.duration} min
                              </span>
                              <span className="font-semibold text-foreground">{service.price} MAD</span>
                            </div>
                          </div>
                          {selectedService?.name === service.name && <CheckCircle2 className="h-5 w-5 text-primary" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-md border"
                  />
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Select Time</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Customer Information */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+212 6XX-XXXXXX"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or information..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2 min-h-[100px]"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Confirm */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-secondary/30 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Provider</p>
                    <p className="font-semibold text-lg">{providerName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Service</p>
                    <p className="font-semibold">{selectedService?.name}</p>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {selectedService?.duration} min
                      </span>
                      <span className="font-semibold text-foreground">{selectedService?.price} MAD</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <p className="font-semibold">
                        {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Contact Information</p>
                    <div className="space-y-1">
                      <p className="font-semibold">{customerName}</p>
                      <p className="text-sm">{customerEmail}</p>
                      <p className="text-sm">{customerPhone}</p>
                    </div>
                  </div>

                  {notes && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Notes</p>
                      <p className="text-sm">{notes}</p>
                    </div>
                  )}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">{selectedService?.price} MAD</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="outline" onClick={handleBack} disabled={step === 1 || isSubmitting}>
                Back
              </Button>

              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)}
                >
                  Continue
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Confirming..." : "Confirm Booking"}
                </Button>
              )}
            </div>
          </>
        ) : (
          // Confirmation Screen
          <div className="py-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
              <p className="text-muted-foreground">Your appointment has been successfully booked.</p>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6 mb-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Confirmation Number</span>
                  <Badge variant="secondary" className="font-mono">
                    BK-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Provider</span>
                  <span className="font-semibold">{providerName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Service</span>
                  <span className="font-semibold">{selectedService?.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Date & Time</span>
                  <span className="font-semibold">
                    {selectedDate && format(selectedDate, "MMM d")} at {selectedTime}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              A confirmation email has been sent to <strong>{customerEmail}</strong>
            </p>

            <Button onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
