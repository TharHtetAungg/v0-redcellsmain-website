import type { Metadata } from "next"
import LegalClientPage from "./LegalClientPage"

export const metadata: Metadata = {
  title: "Legal | Burakorn Partners Co., Ltd.",
  description: "Terms, Privacy, and Data Processing & GDPR for redcells.vercel.app.",
  canonical: "/legal",
  openGraph: {
    title: "Legal | Burakorn Partners Co., Ltd.",
    description: "Terms, Privacy, and Data Processing & GDPR for redcells.vercel.app.",
    url: "/legal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Legal | Burakorn Partners Co., Ltd.",
    description: "Terms, Privacy, and Data Processing & GDPR for redcells.vercel.app.",
  },
}

export default function LegalPage() {
  return <LegalClientPage />
}
