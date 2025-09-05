"use client"

import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { UploadZone } from "../UploadZone"
import type { IntakeFormData } from "@/lib/validation/intake"

export function StepCounterparty() {
  const form = useFormContext<IntakeFormData>()

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="counterparty.entityType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Entity Type</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white">
                  <SelectValue placeholder="Select entity type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="company" className="text-white hover:bg-zinc-700">
                  Company
                </SelectItem>
                <SelectItem value="individual" className="text-white hover:bg-zinc-700">
                  Individual
                </SelectItem>
                <SelectItem value="unknown" className="text-white hover:bg-zinc-700">
                  Unknown
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="counterparty.nameOrHandle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Name / Organization / Handle</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., ABC Trading Ltd, John Smith, @username"
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
        name="counterparty.website"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Website / Domain (Optional)</FormLabel>
            <FormControl>
              <Input
                placeholder="https://example.com"
                type="url"
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
        name="counterparty.contactedBefore"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Have you contacted them before?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(value) => field.onChange(value === "true")}
                value={field.value ? "true" : "false"}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="contacted-yes" className="border-zinc-600 text-[#E21E2C]" />
                  <Label htmlFor="contacted-yes" className="text-zinc-300 cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="contacted-no" className="border-zinc-600 text-[#E21E2C]" />
                  <Label htmlFor="contacted-no" className="text-zinc-300 cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="counterparty.files"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white font-medium">Evidence Upload</FormLabel>
            <FormControl>
              <UploadZone
                files={field.value}
                onFilesChange={field.onChange}
                maxFiles={10}
                maxFileSize={20 * 1024 * 1024} // 20MB
                acceptedTypes={["application/pdf", "image/png", "image/jpeg", "image/jpg"]}
              />
            </FormControl>
            <div className="text-xs text-zinc-500 mt-1">Accept: PDF, PNG, JPG • Up to 10 files • Max 20MB per file</div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
