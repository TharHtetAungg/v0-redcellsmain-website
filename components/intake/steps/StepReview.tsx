"use client"

import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, User, Target } from "lucide-react"
import type { IntakeFormData } from "@/lib/validation/intake"

const scenarioLabels = {
  "pre-payment": "Pre-payment vetting",
  "post-payment": "Post-payment review",
  "frozen-funds": "Frozen funds & OFAC",
  other: "Other",
}

const urgencyLabels = {
  "24h": "Within 24 hours",
  "1-2-days": "1–2 business days",
  "2-plus-days": "More than 2 business days",
}

const entityLabels = {
  company: "Company",
  individual: "Individual",
  unknown: "Unknown",
}

const tierLabels = {
  technical: "Technical Analysis (USD 200, 2–4h)",
  tactical: "Tactical Probe (from USD 2,000, 1–2 days)",
  strategic: "Strategic Due Diligence (from USD 10,000, 1–2 weeks)",
  reclamation: "Reclamation Ops (Custom Quote)",
}

export function StepReview() {
  const form = useFormContext<IntakeFormData>()
  const formData = form.getValues()

  return (
    <div className="space-y-6">
      <div className="text-zinc-300 mb-6">
        Please review your information before submitting. You can go back to make changes if needed.
      </div>

      {/* Basics Summary */}
      <Card className="border-zinc-800/60 bg-zinc-900/40">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white text-lg">
            <FileText className="w-5 h-5 text-[#E21E2C]" />
            Case Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-zinc-400">Scenario:</span>
              <div className="text-white font-medium">
                {scenarioLabels[formData.basics?.scenario as keyof typeof scenarioLabels]}
              </div>
            </div>
            <div>
              <span className="text-zinc-400">Geography:</span>
              <div className="text-white font-medium">{formData.basics?.geography}</div>
            </div>
            <div>
              <span className="text-zinc-400">Amount at Risk:</span>
              <div className="text-white font-medium">{formData.basics?.amountAtRisk}</div>
            </div>
            <div>
              <span className="text-zinc-400">Urgency:</span>
              <div className="text-white font-medium">
                {urgencyLabels[formData.basics?.urgency as keyof typeof urgencyLabels]}
              </div>
            </div>
          </div>
          <div>
            <span className="text-zinc-400 text-sm">Case Summary:</span>
            <div className="text-white text-sm mt-1 p-3 bg-zinc-800/50 rounded border border-zinc-700">
              {formData.basics?.caseSummary}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Counterparty Summary */}
      <Card className="border-zinc-800/60 bg-zinc-900/40">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white text-lg">
            <User className="w-5 h-5 text-[#E21E2C]" />
            Counterparty & Evidence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-zinc-400">Entity Type:</span>
              <div className="text-white font-medium">
                {entityLabels[formData.counterparty?.entityType as keyof typeof entityLabels]}
              </div>
            </div>
            <div>
              <span className="text-zinc-400">Name/Handle:</span>
              <div className="text-white font-medium">{formData.counterparty?.nameOrHandle}</div>
            </div>
            {formData.counterparty?.website && (
              <div>
                <span className="text-zinc-400">Website:</span>
                <div className="text-white font-medium">{formData.counterparty.website}</div>
              </div>
            )}
            <div>
              <span className="text-zinc-400">Contacted Before:</span>
              <div className="text-white font-medium">{formData.counterparty?.contactedBefore ? "Yes" : "No"}</div>
            </div>
          </div>
          {formData.counterparty?.files && formData.counterparty.files.length > 0 && (
            <div>
              <span className="text-zinc-400 text-sm">Evidence Files ({formData.counterparty.files.length}):</span>
              <div className="mt-2 space-y-1">
                {formData.counterparty.files.map((file, index) => (
                  <div
                    key={index}
                    className="text-sm text-white bg-zinc-800/50 rounded px-3 py-2 border border-zinc-700"
                  >
                    {file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tier Summary */}
      <Card className="border-zinc-800/60 bg-zinc-900/40">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white text-lg">
            <Target className="w-5 h-5 text-[#E21E2C]" />
            Intelligence Tier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-white font-medium">
            {tierLabels[formData.tier?.selectedTier as keyof typeof tierLabels]}
          </div>
        </CardContent>
      </Card>

      {/* Confirmation */}
      <FormField
        control={form.control}
        name="review.confirmAccuracy"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="border-zinc-600 data-[state=checked]:bg-[#E21E2C] data-[state=checked]:border-[#E21E2C]"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-white font-medium cursor-pointer">
                I confirm the information provided is accurate
              </FormLabel>
              <div className="text-sm text-zinc-400">
                By checking this box, you confirm that all information provided is accurate and complete.
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          asChild
          className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 bg-transparent"
        >
          <a href="/contact?from=intake">Save & Contact Me Instead</a>
        </Button>
      </div>
    </div>
  )
}
