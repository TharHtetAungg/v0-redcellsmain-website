import { z } from "zod"

export const basicsSchema = z.object({
  scenario: z.enum(["pre-payment", "post-payment", "frozen-funds", "other"], {
    required_error: "Please select a scenario",
  }),
  geography: z.string().min(2, "Geography must be at least 2 characters").max(100, "Geography too long"),
  amountAtRisk: z.string().min(1, "Amount at risk is required"),
  urgency: z.enum(["24h", "1-2-days", "2-plus-days"], {
    required_error: "Please select urgency level",
  }),
  caseSummary: z
    .string()
    .min(10, "Case summary must be at least 10 words")
    .max(3000, "Case summary must be under 3000 characters")
    .refine((val) => val.trim().split(/\s+/).length >= 10, {
      message: "Case summary must be at least 10 words",
    })
    .refine((val) => val.trim().split(/\s+/).length <= 600, {
      message: "Case summary must be under 600 words",
    }),
})

export const counterpartySchema = z.object({
  entityType: z.enum(["company", "individual", "unknown"], {
    required_error: "Please select entity type",
  }),
  nameOrHandle: z.string().min(1, "Name/Organization/Handle is required").max(200, "Name too long"),
  website: z.string().url("Invalid URL format").optional().or(z.literal("")),
  contactedBefore: z.boolean(),
  files: z
    .array(
      z.object({
        name: z.string(),
        size: z.number(),
        type: z.string(),
        lastModified: z.number(),
      }),
    )
    .max(10, "Maximum 10 files allowed")
    .refine((files) => {
      return files.every((file) => file.size <= 20 * 1024 * 1024) // 20MB per file
    }, "Each file must be under 20MB")
    .refine((files) => {
      const allowedTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"]
      return files.every((file) => allowedTypes.includes(file.type))
    }, "Only PDF, PNG, and JPG files are allowed"),
})

export const tierSchema = z.object({
  selectedTier: z.enum(["technical", "tactical", "strategic", "reclamation"], {
    required_error: "Please select an intelligence tier",
  }),
})

export const reviewSchema = z.object({
  confirmAccuracy: z.boolean().refine((val) => val === true, {
    message: "You must confirm the information is accurate",
  }),
})

export const intakeSchema = z.object({
  basics: basicsSchema,
  counterparty: counterpartySchema,
  tier: tierSchema,
  review: reviewSchema,
})

export type BasicsFormData = z.infer<typeof basicsSchema>
export type CounterpartyFormData = z.infer<typeof counterpartySchema>
export type TierFormData = z.infer<typeof tierSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
export type IntakeFormData = z.infer<typeof intakeSchema>
