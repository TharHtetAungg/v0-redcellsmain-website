"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, ShieldCheck, Phone, Clock, Key, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import GoogleMap from "@/components/google-map"

function ContactSubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
      {isSubmitting ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPageClient() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      formRef.current?.reset()
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <div className="mt-8 flex justify-center">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              24/7 Support Available
            </Badge>
          </div>
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
                <h3 className="text-xl font-semibold text-white">Dedicated Contacts</h3>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3 rounded-lg border border-border/40 bg-secondary/10 p-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-white">Sales Inquiries</p>
                      <a href="mailto:sales@redcelladvisory.com" className="text-primary hover:underline">
                        sales@redcelladvisory.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border border-border/40 bg-secondary/10 p-4">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-white">Security & Incidents</p>
                      <a href="mailto:security@redcelladvisory.com" className="text-primary hover:underline">
                        security@redcelladvisory.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border border-border/40 bg-secondary/10 p-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-white">Legal & Compliance</p>
                      <a href="mailto:legal@redcelladvisory.com" className="text-primary hover:underline">
                        legal@redcelladvisory.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Regional Contacts</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Americas:</span>
                    <span className="font-mono text-white">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Europe:</span>
                    <span className="font-mono text-white">+44 20 7123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Asia-Pacific:</span>
                    <span className="font-mono text-white">+65 6123 4567</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">General Inquiries</h3>
                    <p className="text-muted-foreground">For questions about our services, partnerships, or press.</p>
                    <a href="mailto:info@redcelladvisory.com" className="mt-1 block text-primary hover:underline">
                      info@redcelladvisory.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-white">Secure Case Submission</h3>
                    <p className="text-muted-foreground">
                      To submit a new case with encrypted file uploads, please use our dedicated portal.
                    </p>
                    <div className="mt-3 flex gap-3">
                      <Link href="/submit">
                        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                          <ExternalLink className="h-4 w-4" />
                          Secure Intake Portal
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">PGP Encrypted Communication</h3>
                    <p className="text-muted-foreground">
                      For maximum security when contacting security@redcelladvisory.com
                    </p>
                    <div className="mt-2 rounded-md bg-secondary/20 p-3">
                      <p className="text-xs text-muted-foreground mb-2">PGP Public Key Fingerprint:</p>
                      <code className="text-xs font-mono text-primary break-all">
                        4A3B 2C1D 5E6F 7890 1234 5678 9ABC DEF0 1234 5678
                      </code>
                      <div className="mt-2">
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-primary hover:underline">
                          Download Public Key
                        </Button>
                      </div>
                    </div>
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" placeholder="you@company.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Inquiry about Tactical Probes" className="mt-1" />
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
                </div>
                <ContactSubmitButton isSubmitting={isSubmitting} />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="border-t border-border/40 bg-secondary/10 py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side: Office Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold text-white">Our Office</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bangkok Headquarters</h3>
                  <div className="mt-2 space-y-1 text-muted-foreground">
                    <p>30th Floor, Bhiraj Tower at EmQuartier</p>
                    <p>Sukhumvit Road, Khlong Tan Nuea</p>
                    <p>Watthana, Bangkok 10110</p>
                    <p>Thailand</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border/40 bg-secondary/20 p-4">
                  <h4 className="font-medium text-white mb-2">Office Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (ICT)</p>
                    <p>Saturday: 10:00 AM - 2:00 PM (ICT)</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/40">
                    <p className="text-sm text-primary">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="space-y-4">
              <GoogleMap className="h-96 w-full" />
              <p className="text-sm text-muted-foreground text-center">
                Click the marker for detailed address information
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
