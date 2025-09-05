"use client"

import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import type { IntakeFormData } from "@/lib/validation/intake"

const tiers = [
  {
    id: "technical",
    name: "Technical Analysis",
    price: "USD 200",
    turnaround: "2–4 hours",
    description: "Quick technical assessment and red-flag identification",
    features: ["Domain & IP analysis", "Basic OSINT screening", "Technical red flags", "Preliminary risk assessment"],
  },
  {
    id: "tactical",
    name: "Tactical Probe",
    price: "from USD 2,000",
    turnaround: "1–2 days",
    description: "Comprehensive counterparty investigation",
    features: [
      "Deep entity verification",
      "Financial background check",
      "Regulatory compliance review",
      "Network analysis",
      "Actionable recommendations",
    ],
    popular: true,
  },
  {
    id: "strategic",
    name: "Strategic Due Diligence",
    price: "from USD 10,000",
    turnaround: "1–2 weeks",
    description: "Full-spectrum intelligence and risk assessment",
    features: [
      "Complete corporate structure",
      "Beneficial ownership mapping",
      "Sanctions & PEP screening",
      "Litigation & adverse media",
      "Strategic risk mitigation plan",
    ],
  },
  {
    id: "reclamation",
    name: "Reclamation Ops",
    price: "Custom Quote",
    turnaround: "Variable",
    description: "Active recovery and asset tracing operations",
    features: [
      "Asset tracing & recovery",
      "Legal pathway analysis",
      "Enforcement coordination",
      "Cross-border litigation support",
      "Recovery strategy execution",
    ],
  },
]

export function StepTier() {
  const form = useFormContext<IntakeFormData>()
  const selectedTier = form.watch("tier.selectedTier")

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="tier.selectedTier"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium text-lg">Select Intelligence Tier</FormLabel>
            <FormControl>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {tiers.map((tier) => (
                  <Card
                    key={tier.id}
                    className={`
                      cursor-pointer transition-all duration-300 relative
                      ${
                        selectedTier === tier.id
                          ? "ring-2 ring-[#E21E2C]/60 border-[#E21E2C]/40 bg-zinc-900/80 shadow-lg shadow-[#E21E2C]/10"
                          : "border-zinc-800/60 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900/80"
                      }
                      backdrop-blur-md hover:shadow-lg hover:-translate-y-1
                    `}
                    onClick={() => field.onChange(tier.id)}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-[#E21E2C] text-white px-3 py-1 text-xs font-medium">Most Popular</Badge>
                      </div>
                    )}

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-white">{tier.name}</CardTitle>
                        {selectedTier === tier.id && (
                          <div className="w-6 h-6 rounded-full bg-[#E21E2C] flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-[#E21E2C]">{tier.price}</div>
                        <div className="text-sm text-zinc-400">{tier.turnaround}</div>
                      </div>
                      <p className="text-sm text-zinc-300">{tier.description}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-zinc-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E21E2C] mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
