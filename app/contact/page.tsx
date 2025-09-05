import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the RedCellAdvisory team for inquiries or support.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
