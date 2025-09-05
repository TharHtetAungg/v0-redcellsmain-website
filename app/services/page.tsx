import { Button } from "@/components/ui/button"
import { Eye, Search, ShieldCheck, Briefcase, type LucideIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our suite of intelligence services, from rapid reconnaissance to strategic due diligence and asset reclamation operations.",
}

const services: {
  Icon: LucideIcon
  name: string
  description: string
  deliverable: string
}[] = [
  {
    Icon: Eye,
    name: "Recon Snapshot",
    description:
      "A fast, essential overview of a potential counterparty. We conduct surface-level checks on corporate registration, domain ownership, and basic digital footprint analysis. This service is designed to quickly identify major red flags before you invest significant time or resources.",
    deliverable: "A concise 2-3 page PDF report summarizing initial findings, delivered within 48 hours.",
  },
  {
    Icon: Search,
    name: "Tactical Probe",
    description:
      "A deep dive into a subject's network and history. This service includes everything in the Recon Snapshot, plus a detailed mapping of directors, shareholders, and connected entities. We conduct adverse media searches across multiple languages and analyze the subject's operational patterns.",
    deliverable:
      "A comprehensive 10-page report with network maps and risk analysis, including a 1-hour analyst consultation.",
  },
  {
    Icon: ShieldCheck,
    name: "Strategic Due Diligence",
    description:
      "Our most exhaustive investigative service for high-stakes decisions. We deploy on-ground resources to verify physical assets and operations, conduct source inquiries, and perform full financial and liability tracing. This is a complete, 360-degree intelligence picture for major investments or acquisitions.",
    deliverable: "A detailed dossier with sworn affidavits, source commentary, and a full risk mitigation playbook.",
  },
  {
    Icon: Briefcase,
    name: "Reclamation Ops",
    description:
      "When fraud has already occurred, our focus shifts to recovery. This service is a dedicated operation to trace, freeze, and reclaim misappropriated assets. We coordinate with financial institutions, law enforcement, and legal counsel across multiple jurisdictions to maximize the chances of recovery.",
    deliverable:
      "Ongoing operational management of the asset recovery case, including regular progress reports and direct liaison with all involved parties.",
  },
]

export default function ServicesPage() {
  return (
    <div className="text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border/40 bg-secondary/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Intelligence Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            From rapid vetting to comprehensive deep dives and asset recovery, our services provide the clarity needed
            to operate with confidence in high-risk environments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col rounded-lg border border-border bg-secondary/30 p-8">
                <div className="mb-6 flex items-center gap-4">
                  <service.Icon className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold text-primary">{service.name}</h2>
                </div>
                <p className="flex-grow text-muted-foreground">{service.description}</p>
                <div className="mt-6 border-t border-border/40 pt-6">
                  <h4 className="font-semibold text-white">Key Deliverable:</h4>
                  <p className="text-muted-foreground">{service.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Secure Your Transaction?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Submit your case details, and our team will begin the intelligence-gathering process immediately.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/start-investigation">Initiate a Check</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
