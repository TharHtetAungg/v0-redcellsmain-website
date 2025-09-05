"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Send, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { submitContactAction, type ContactFormState } from "./actions"
import { useEffect, useRef } from "react"

function ContactSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPageClient() {
  const { toast } = useToast()
  const initialState: ContactFormState = { message: "", success: false }
  const [state, formAction] = useActionState(submitContactAction, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
      toast({
        title: "Message Sent",
        description: state.message,
      })
    } else if (state.message && state.errors) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border/40 bg-secondary/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Whether you have a question about our services, a press inquiry, or need to discuss a sensitive matter,
            we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Left Side: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                  Use the contact details below for specific inquiries. For case submissions, please use our secure
                  portal.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">General Inquiries</h3>
                    <p className="text-muted-foreground">For questions about our services, partnerships, or press.</p>
                    <a href="mailto:hello@redcell-advisory.com" className="mt-1 block text-primary hover:underline">
                      info@redcelladvisory.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Secure Case Submission</h3>
                    <p className="text-muted-foreground">
                      To submit a new case with encrypted file uploads, please use our dedicated portal.
                    </p>
                    <Link href="/submit" className="mt-1 block text-primary hover:underline">
                      Go to Secure Submission Page
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Secure Messaging</h3>
                    <p className="text-muted-foreground">For sensitive, end-to-end encrypted communication.</p>
                    <p className="mt-1 font-mono text-primary">Telegram: @RedCellIntel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" className="mt-1" />
                  {state.errors?.name && <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" placeholder="you@company.com" className="mt-1" />
                  {state.errors?.email && <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Inquiry about Tactical Probes" className="mt-1" />
                  {state.errors?.subject && <p className="mt-1 text-sm text-destructive">{state.errors.subject[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your inquiry in detail..."
                    rows={6}
                    className="mt-1"
                  />
                  {state.errors?.message && <p className="mt-1 text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <ContactSubmitButton />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
