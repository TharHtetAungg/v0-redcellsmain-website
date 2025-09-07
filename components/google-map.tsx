"use client"

import { MapPin, ExternalLink } from "lucide-react"

interface GoogleMapProps {
  className?: string
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border/40 bg-card ${className}`}>
      <div className="flex h-full min-h-[300px] flex-col items-center justify-center p-8 text-center">
        <MapPin className="mb-4 h-12 w-12 text-[#e00c33]" />
        <h3 className="mb-2 text-lg font-semibold text-foreground">Bangkok Office</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          30th Floor, Bhiraj Tower at EmQuartier
          <br />
          Sukhumvit Road, Khlong Tan Nuea
          <br />
          Watthana, Bangkok 10110
        </p>
        <a
          href="https://maps.google.com/?q=13.732614348993758,100.56990206139267"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-[#e00c33] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c00a2d]"
        >
          <ExternalLink className="h-4 w-4" />
          Open in Google Maps
        </a>
      </div>
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
        Click the marker for detailed address information
      </p>
    </div>
  )
}
