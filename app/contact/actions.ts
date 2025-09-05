"use server"

import * as z from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
})

export type ContactFormState = {
  message: string
  errors?: Record<string, string[]>
  success: boolean
}

export async function submitContactAction(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  // Simulate sending an email
  console.log("Received contact message on server:", validatedFields.data)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: "Thank you for contacting us. We will get back to you shortly.",
    success: true,
  }
}
