"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { UploadCloud, ShieldCheck } from "lucide-react"
import { submitCaseAction, type FormState } from "./actions"
import { useEffect, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? "Submitting..." : "Pay with Stripe"}
    </Button>
  )
}

export default function SubmitPage() {
  const initialState: FormState = { message: "", success: false, errors: undefined }
  const [state, formAction] = useActionState(submitCaseAction, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
      toast({
        title: "Case Submitted Successfully",
        description: "Report in progress. You will receive an ETA via email shortly.",
      })
    } else if (state.message && state.errors) {
      toast({
        title: "Error Submitting Case",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  if (state.success) {
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
        <form ref={formRef} action={formAction} className="mt-12 space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
              {state.errors?.name && <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john.doe@company.com" required />
              {state.errors?.email && <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone (Intl)</Label>
              <Input id="phone" name="phone" placeholder="+1 555 123 4567" required />
              {state.errors?.phone && <p className="mt-1 text-sm text-destructive">{state.errors.phone[0]}</p>}
            </div>
            <div>
              <Label htmlFor="company">Your Company</Label>
              <Input id="company" name="company" placeholder="Acme Inc." required />
              {state.errors?.company && <p className="mt-1 text-sm text-destructive">{state.errors.company[0]}</p>}
            </div>
          </div>
          <div className="space-y-8 border-t border-border pt-8">
            <div>
              <Label htmlFor="counterparty">Counterparty Name</Label>
              <Input id="counterparty" name="counterparty" placeholder="Global Exports Ltd." required />
              {state.errors?.counterparty && (
                <p className="mt-1 text-sm text-destructive">{state.errors.counterparty[0]}</p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Label htmlFor="invoiceValue">Invoice Value (USD)</Label>
                <Input id="invoiceValue" name="invoiceValue" type="number" placeholder="15000" required />
                {state.errors?.invoiceValue && (
                  <p className="mt-1 text-sm text-destructive">{state.errors.invoiceValue[0]}</p>
                )}
              </div>
              <div>
                <Label htmlFor="country">Country of Counterparty</Label>
                <Input id="country" name="country" placeholder="e.g., China" required />
                {state.errors?.country && <p className="mt-1 text-sm text-destructive">{state.errors.country[0]}</p>}
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
              {state.errors?.description && (
                <p className="mt-1 text-sm text-destructive">{state.errors.description[0]}</p>
              )}
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
                {state.errors?.terms && <p className="text-sm text-destructive">{state.errors.terms[0]}</p>}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <h3 className="text-2xl font-semibold">Finalize & Pay Retainer</h3>
            <p className="text-muted-foreground mt-2">
              Select your preferred payment method to initiate the investigation.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <SubmitButton />
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
