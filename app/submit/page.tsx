"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { UploadCloud, ShieldCheck } from "lucide-react"
import { useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" size="lg" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Pay with Stripe"}
    </Button>
  )
}

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSuccess(true)
      formRef.current?.reset()
      toast({
        title: "Case Submitted Successfully",
        description: "Report in progress. You will receive an ETA via email shortly.",
      })
    } catch (error) {
      toast({
        title: "Error Submitting Case",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
        <ShieldCheck className="h-16 w-16 text-green-500" />
        <h1 className="mt-6 text-4xl font-bold">Submission Received</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thank you. Your case is now in our queue.
          <br />
          An analyst will review the details and you will receive an ETA at your provided email address.
        </p>
      </div>
    )
  }

  return (
    <div className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Submit Your Case</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Provide the necessary details to initiate your due diligence check. All information is encrypted and
            confidential.
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john.doe@company.com" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone (Intl)</Label>
              <Input id="phone" name="phone" placeholder="+1 555 123 4567" required />
            </div>
            <div>
              <Label htmlFor="company">Your Company</Label>
              <Input id="company" name="company" placeholder="Acme Inc." required />
            </div>
          </div>
          <div className="space-y-8 border-t border-border pt-8">
            <div>
              <Label htmlFor="counterparty">Counterparty Name</Label>
              <Input id="counterparty" name="counterparty" placeholder="Global Exports Ltd." required />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Label htmlFor="invoiceValue">Invoice Value (USD)</Label>
                <Input id="invoiceValue" name="invoiceValue" type="number" placeholder="15000" required />
              </div>
              <div>
                <Label htmlFor="country">Country of Counterparty</Label>
                <Input id="country" name="country" placeholder="e.g., China" required />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Short Description of Case</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Briefly describe the situation, transaction, and your concerns."
                rows={5}
                required
              />
            </div>
          </div>
          <div className="space-y-8 border-t border-border pt-8">
            <div>
              <Label>Upload Documents (Optional, up to 20MB)</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, PNG, JPG (MAX. 20MB)</p>
                  </div>
                  <input id="dropzone-file" name="files" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex flex-row items-start space-x-3 space-y-0">
              <Checkbox id="terms" name="terms" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept the{" "}
                  <a href="/legal/terms" className="text-primary hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/legal/gdpr" className="text-primary hover:underline">
                    GDPR Policy
                  </a>
                  .
                </label>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <h3 className="text-2xl font-semibold">Finalize & Pay Retainer</h3>
            <p className="text-muted-foreground mt-2">
              Select your preferred payment method to initiate the investigation.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <SubmitButton isSubmitting={isSubmitting} />
              <Button type="button" variant="outline" size="lg" disabled>
                Pay with PayPal
              </Button>
              <Button type="button" variant="outline" size="lg" disabled>
                Pay with Crypto
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
