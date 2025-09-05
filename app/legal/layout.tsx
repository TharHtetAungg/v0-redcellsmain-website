import type React from "react"

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-20">{children}</div>
    </div>
  )
}
