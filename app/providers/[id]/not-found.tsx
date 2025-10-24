import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <SearchX className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Provider Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">Sorry, we couldn't find the provider you're looking for.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/providers">Browse All Providers</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
