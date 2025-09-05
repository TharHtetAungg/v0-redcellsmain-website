import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
      <AlertTriangle className="h-16 w-16 text-primary" />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">404 - Endpoint Not Found</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <Button asChild size="lg" className="mt-10">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
