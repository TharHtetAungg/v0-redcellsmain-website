export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    // Google Analytics 4 event tracking
    if (window.gtag) {
      window.gtag("event", eventName, {
        event_category: "CTA",
        event_label: eventName,
        ...properties,
      })
    }

    // Console log for development
    console.log("[Analytics] Event tracked:", eventName, properties)
  }
}

export const trackCTAClick = (ctaName: string, location?: string) => {
  trackEvent("cta_click", {
    cta_name: ctaName,
    page_location: location || window.location.pathname,
  })
}

// Specific CTA tracking functions
export const trackRunCheck = () => trackCTAClick("run_check")
export const trackTalkToSales = () => trackCTAClick("talk_to_sales")
export const trackIntakePortal = () => trackCTAClick("intake_portal")
export const trackProcurementDownload = () => trackCTAClick("procurement_pack_download")

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
