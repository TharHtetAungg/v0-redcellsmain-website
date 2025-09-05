"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { X, Settings, Cookie, Shield, BarChart3, Target } from "lucide-react"
import { cn } from "@/lib/utils"

interface CookiePreferences {
  essential: boolean
  performance: boolean
  functional: boolean
  marketing: boolean
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true, cannot be disabled
  performance: false,
  functional: false,
  marketing: false,
}

const COOKIE_CONSENT_KEY = "redcell-cookie-consent"
const COOKIE_PREFERENCES_KEY = "redcell-cookie-preferences"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!hasConsent) {
      setIsVisible(true)
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true")
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
    setPreferences(prefs)
    setIsVisible(false)

    // Trigger analytics event if performance cookies are accepted
    if (prefs.performance && typeof window !== "undefined") {
      // Initialize analytics here
      console.log("[v0] Performance cookies accepted - analytics can be initialized")
    }
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      performance: true,
      functional: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  const acceptEssentialOnly = () => {
    savePreferences(defaultPreferences)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "essential") return // Essential cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <Card
        className={cn(
          "w-full max-w-md pointer-events-auto transition-all duration-300 ease-out",
          "bg-background/95 backdrop-blur-sm border-border/50 shadow-2xl",
          showDetails ? "max-w-lg" : "",
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-[#e00c33]" />
              <CardTitle className="text-lg">Cookie Settings</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-8 w-8 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-sm text-muted-foreground">
            We use cookies to enhance your experience and analyze our traffic. Choose which cookies you'd like to
            accept.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {showDetails && (
            <div className="space-y-4 border-t pt-4">
              {/* Essential Cookies */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2 flex-1">
                  <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-medium text-sm">Essential</div>
                    <div className="text-xs text-muted-foreground">
                      Required for basic site functionality and security.
                    </div>
                  </div>
                </div>
                <Switch checked={true} disabled={true} className="data-[state=checked]:bg-green-500" />
              </div>

              {/* Performance Cookies */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2 flex-1">
                  <BarChart3 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-medium text-sm">Performance</div>
                    <div className="text-xs text-muted-foreground">
                      Help us analyze site usage and improve performance.
                    </div>
                  </div>
                </div>
                <Switch
                  checked={preferences.performance}
                  onCheckedChange={(checked) => updatePreference("performance", checked)}
                />
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2 flex-1">
                  <Settings className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-medium text-sm">Functional</div>
                    <div className="text-xs text-muted-foreground">
                      Remember your preferences and personalize content.
                    </div>
                  </div>
                </div>
                <Switch
                  checked={preferences.functional}
                  onCheckedChange={(checked) => updatePreference("functional", checked)}
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2 flex-1">
                  <Target className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-medium text-sm">Marketing</div>
                    <div className="text-xs text-muted-foreground">
                      Show relevant ads and measure campaign effectiveness.
                    </div>
                  </div>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => updatePreference("marketing", checked)}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2 border-t">
            {!showDetails ? (
              <>
                <div className="flex gap-2">
                  <Button onClick={acceptAll} className="flex-1 bg-[#e00c33] hover:bg-[#c00a2b] text-white">
                    Accept All
                  </Button>
                  <Button onClick={acceptEssentialOnly} variant="outline" className="flex-1 bg-transparent">
                    Essential Only
                  </Button>
                </div>
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  size="sm"
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Customize Settings
                </Button>
              </>
            ) : (
              <>
                <Button onClick={saveCustomPreferences} className="w-full bg-[#e00c33] hover:bg-[#c00a2b] text-white">
                  Save Preferences
                </Button>
                <div className="flex gap-2">
                  <Button onClick={acceptAll} variant="outline" size="sm" className="flex-1 bg-transparent">
                    Accept All
                  </Button>
                  <Button onClick={() => setShowDetails(false)} variant="ghost" size="sm" className="flex-1">
                    Back
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="text-xs text-muted-foreground text-center">
            Read our{" "}
            <a href="/legal/cookies" className="text-[#e00c33] hover:underline">
              Cookie Policy
            </a>{" "}
            and{" "}
            <a href="/legal/privacy" className="text-[#e00c33] hover:underline">
              Privacy Policy
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
