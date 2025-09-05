import type { Metadata } from "next"
import CookiesClientPage from "./CookiesClientPage"

export const metadata: Metadata = {
  title: "Cookie Policy | Red Cell Advisory",
  description:
    "Red Cell Advisory's Cookie Policy explaining how we use cookies and similar technologies on our website.",
  canonical: "/legal/cookies",
  openGraph: {
    title: "Cookie Policy | Red Cell Advisory",
    description:
      "Red Cell Advisory's Cookie Policy explaining how we use cookies and similar technologies on our website.",
    url: "/legal/cookies",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | Red Cell Advisory",
    description:
      "Red Cell Advisory's Cookie Policy explaining how we use cookies and similar technologies on our website.",
  },
}

export default function CookiesPage() {
  return <CookiesClientPage />
}
