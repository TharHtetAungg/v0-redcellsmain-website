"use client"

import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { IntakeFormData } from "@/lib/validation/intake"

export function StepBasics() {
  const form = useFormContext<IntakeFormData>()

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="basics.scenario"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Scenario</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { value: "pre-payment", label: "Pre-payment vetting" },
                  { value: "post-payment", label: "Post-payment review" },
                  { value: "frozen-funds", label: "Frozen funds & OFAC" },
                  { value: "other", label: "Other" },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} className="border-zinc-600 text-[#E21E2C]" />
                    <Label htmlFor={option.value} className="text-zinc-300 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="basics.geography"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Geography</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., US-China, EU-Singapore, Global"
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="basics.amountAtRisk"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Amount at Risk</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., $50,000 USD, €25,000 EUR"
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="basics.urgency"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Urgency</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="24h" className="text-white hover:bg-zinc-700">
                  Within 24 hours
                </SelectItem>
                <SelectItem value="1-2-days" className="text-white hover:bg-zinc-700">
                  1–2 business days
                </SelectItem>
                <SelectItem value="2-plus-days" className="text-white hover:bg-zinc-700">
                  More than 2 business days
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="basics.caseSummary"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Case Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe your situation in detail (10-600 words)..."
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[120px]"
                {...field}
              />
            </FormControl>
            <div className="text-xs text-zinc-500 mt-1">
              {field.value ? `${field.value.trim().split(/\s+/).length} words` : "0 words"} (10-600 required)
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
