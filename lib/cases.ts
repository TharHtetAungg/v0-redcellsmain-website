import { Shield, Landmark, FileSearch, AlertTriangle, Workflow, CheckCircle, type LucideIcon } from "lucide-react"

export interface CaseStudy {
  title: string
  subtitle: string
  problem: string
  action: string
  impact: string
  badge: string
  icon: LucideIcon // Changed from string to LucideIcon type
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Faster freezes & disclosures",
    subtitle: "Insider misappropriation in Thailand",
    problem: "Foreign corporate clients paid. No delivery.",
    action:
      "Four synchronized tracks: bank/payment-rail reversals, criminal complaints (home and TH), civil/arbitral interim relief in TH, AML/regulatory escalations. Built a bilingual Claims Hub with templates and checklists.",
    impact: "Maximum leverage without dissolving the company. Evidence preserved. Faster freezes and disclosures.",
    badge: "Recovery",
    icon: Shield, // Replaced emoji with Shield icon
  },
  {
    title: "Go/No-Go decision with safer deal terms",
    subtitle: "Reality check of a 'national' Hong Kong company",
    problem: "Verify who the counterparty really is.",
    action:
      "Confirmed a private HK firm (not PRC SOE). Logged 01-Apr-2021 capital reduction, minimal HK presence, GlobalCOAL membership, diversified trading; flagged misleading name and indirect sanctions exposure via DPRK coal trade by affiliates; delivered payment guardrails and UBO steps.",
    impact: "Informed go/no-go decision with protective deal terms.",
    badge: "Verification",
    icon: Landmark, // Replaced emoji with Landmark icon
  },
  {
    title: "Lower T/T risk; pilot lot greenlit",
    subtitle: "Supplier DD for a Shanghai chemicals vendor",
    problem: "Test legality, export history, and prepayment risk.",
    action:
      "Verified registration, hazardous-chemicals license, export accreditation, IP/trademarks, office/warehouse links; mapped exports to 20+ countries; recommended 20–30% deposit or L/C.",
    impact: "Lower T/T risk. Greenlight for a pilot lot with QC and paperwork control.",
    badge: "Due Diligence",
    icon: FileSearch, // Replaced emoji with FileSearch icon
  },
  {
    title: "Loss contained; prosecutable evidence trail",
    subtitle: "Antifraud on a Thai 'fertilizer' supplier network",
    problem: "Check a seller and 'logistics' that demand 100% T/T.",
    action:
      "DBD shows a fresh retail microcompany at a shared-address cluster; 'logistics Inc' not in Thai registries; new domains, cloned content, mobile-only contacts; issued response plan: SWIFT recall, bank escalations, ECD/TCSD filings, DBD alerts, evidence pack, public warning.",
    impact: "Loss containment and a prosecutable evidence trail for freezes and blocks.",
    badge: "Fraud Intel",
    icon: AlertTriangle, // Replaced emoji with AlertTriangle icon
  },
  {
    title: "Faster action across banks, lawyers, police",
    subtitle: "Claims Hub and process hygiene",
    problem: "Align lawyers, banks, and police across jurisdictions.",
    action:
      "One bilingual dossier with standardized exhibits, timeline, version control, hash integrity; ready-to-file templates for interim relief and regulator notices.",
    impact: "Faster action, lower coordination loss, higher freeze & recovery odds.",
    badge: "Process",
    icon: Workflow, // Replaced emoji with Workflow icon
  },
  {
    title: "Trust by design; reports double as negotiation tools",
    subtitle: "Report quality standard",
    problem: "Make key findings verifiable in one click.",
    action:
      "Rule set: direct registry link under every key figure; explicit Registered vs Paid-up Capital split; footnotes to primary sources.",
    impact: "Clients verify instantly; reports used in negotiations without extra research.",
    badge: "Quality",
    icon: CheckCircle, // Replaced emoji with CheckCircle icon
  },
]
