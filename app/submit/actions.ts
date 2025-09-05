"use server"

import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Company name is required." }),
  counterparty: z.string().min(2, { message: "Counterparty name is required." }),
  invoiceValue: z.coerce.number().min(1, { message: "Invoice value is required." }),
  country: z.string().min(2, { message: "Country is required." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  terms: z.literal("on", { errorMap: () => ({ message: "You must accept the terms." }) }),
})

export type FormState = {
  message: string
  errors?: Record<string, string[]>
  success: boolean
}

export async function submitCaseAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = formSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  // Simulate API call and backend processing
  console.log("Received case submission on server:", validatedFields.data)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Here you would integrate with Stripe, send emails, etc.

  return {
    message: "Case Submitted Successfully. Report in progress. You will receive an ETA via email shortly.",
    success: true,
  }
}
