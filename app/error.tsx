"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
      <AlertCircle className="h-16 w-16 text-destructive" />
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        An Unexpected Error Occurred
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Something went wrong on our end. Please try again. If the problem persists, contact support.
      </p>
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-4 rounded-md bg-secondary p-4 text-left text-sm text-destructive">{error.message}</pre>
      )}
      <Button onClick={() => reset()} size="lg" variant="destructive" className="mt-10">
        Try Again
      </Button>
    </div>
  )
}
