import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-xl font-bold text-primary">Beauty</div>
              <div className="text-xl font-light text-foreground">Morocco</div>
            </div>
            <p className="text-sm text-muted-foreground">Your trusted marketplace for beauty services across Morocco</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/barbering"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Barbering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hairdressing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Hairdressing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/makeup"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Makeup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nails"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nails
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  For Providers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Beauty Morocco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
