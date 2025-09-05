"use server"

export async function getGoogleMapsConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    hasApiKey: !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  }
}
