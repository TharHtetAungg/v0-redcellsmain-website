"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, ExternalLink } from "lucide-react"
import { getGoogleMapsConfig } from "@/lib/maps-config"

interface GoogleMapProps {
  className?: string
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [apiKey, setApiKey] = useState<string>("")

  useEffect(() => {
    console.log("[v0] Initializing Google Maps component...")

    const loadGoogleMaps = async (key: string) => {
      try {
        // Проверяем, загружен ли уже Google Maps
        if (window.google && window.google.maps) {
          console.log("[v0] Google Maps already loaded, initializing...")
          initializeMap()
          return
        }

        console.log("[v0] Loading Google Maps API...")
        // Загружаем Google Maps API
        const script = document.createElement("script")
        script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
        script.async = true
        script.defer = true

        script.onload = () => {
          console.log("[v0] Google Maps API loaded successfully")
          initializeMap()
        }

        script.onerror = () => {
          console.error("[v0] Failed to load Google Maps API")
          setHasError(true)
        }

        document.head.appendChild(script)
      } catch (error) {
        console.error("[v0] Error loading Google Maps:", error)
        setHasError(true)
      }
    }

    const initializeMap = () => {
      if (!mapRef.current) {
        console.log("[v0] Map ref not available")
        return
      }

      try {
        console.log("[v0] Initializing map...")
        const officeLocation = { lat: 13.732614348993758, lng: 100.56990206139267 }

        // Темная тема для карты
        const darkMapStyle = [
          { elementType: "geometry", stylers: [{ color: "#212121" }] },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
          { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
          { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
          { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
          { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
          { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
          { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
          { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
          { featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
          { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
          { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
          { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
          { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
          { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
          { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
          { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
          { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] },
        ]

        // Создаем карту
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 16,
          center: officeLocation,
          styles: darkMapStyle,
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        })

        // Создаем кастомный маркер
        const marker = new window.google.maps.Marker({
          position: officeLocation,
          map: map,
          title: "Red Cell Advisory - Bangkok Office",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#e00c33",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        })

        // Информационное окно
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="color: #000; padding: 8px; font-family: system-ui;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Red Cell Advisory</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.4;">
                30th Floor, Bhiraj Tower at EmQuartier<br>
                Sukhumvit Road, Khlong Tan Nuea<br>
                Watthana, Bangkok 10110
              </p>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })

        console.log("[v0] Map initialized successfully")
        setIsLoaded(true)
      } catch (error) {
        console.error("[v0] Error initializing map:", error)
        setHasError(true)
      }
    }

    const initializeComponent = async () => {
      try {
        const config = await getGoogleMapsConfig()
        console.log("[v0] Google Maps config loaded:", { hasApiKey: config.hasApiKey })

        if (!config.hasApiKey || !config.apiKey) {
          console.log("[v0] No Google Maps API key found")
          setHasError(true)
          return
        }

        setApiKey(config.apiKey)
        loadGoogleMaps(config.apiKey)
      } catch (error) {
        console.error("[v0] Error getting maps config:", error)
        setHasError(true)
      }
    }

    initializeComponent()
  }, [])

  if (hasError) {
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

  return (
    <div className={`relative overflow-hidden rounded-lg border border-border/40 bg-card ${className}`}>
      <div ref={mapRef} className="h-full min-h-[300px] w-full" style={{ background: "#212121" }} />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#e00c33] border-t-transparent"></div>
            Loading map...
          </div>
        </div>
      )}
      {isLoaded && (
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
          Click the marker for detailed address information
        </p>
      )}
    </div>
  )
}

declare global {
  interface Window {
    google: any
  }
}
