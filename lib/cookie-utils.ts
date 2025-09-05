interface CookiePreferences {
  essential: boolean
  performance: boolean
  functional: boolean
  marketing: boolean
}

const COOKIE_PREFERENCES_KEY = "redcell-cookie-preferences"

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null

  try {
    const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

export function hasConsentForCookieType(type: keyof CookiePreferences): boolean {
  const preferences = getCookiePreferences()
  if (!preferences) return false

  return preferences[type]
}

export function canUseAnalytics(): boolean {
  return hasConsentForCookieType("performance")
}

export function canUseMarketing(): boolean {
  return hasConsentForCookieType("marketing")
}

export function canUseFunctional(): boolean {
  return hasConsentForCookieType("functional")
}

// Helper to conditionally load analytics
export function initializeAnalytics() {
  if (canUseAnalytics()) {
    // Initialize Google Analytics or other analytics tools
    console.log("[v0] Analytics initialized with user consent")
  }
}

// Helper to conditionally load marketing tools
export function initializeMarketing() {
  if (canUseMarketing()) {
    // Initialize marketing pixels, ads, etc.
    console.log("[v0] Marketing tools initialized with user consent")
  }
}
