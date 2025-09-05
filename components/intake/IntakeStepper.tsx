"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { StepBasics } from "./steps/StepBasics"
import { StepCounterparty } from "./steps/StepCounterparty"
import { StepTier } from "./steps/StepTier"
import { StepReview } from "./steps/StepReview"
import {
  basicsSchema,
  counterpartySchema,
  tierSchema,
  reviewSchema,
  type IntakeFormData,
} from "@/lib/validation/intake"

const steps = [
  { id: "basics", title: "Basics", schema: basicsSchema },
  { id: "counterparty", title: "Counterparty", schema: counterpartySchema },
  { id: "tier", title: "Tier", schema: tierSchema },
  { id: "review", title: "Review", schema: reviewSchema },
]

interface IntakeStepperProps {
  onSubmit: (data: IntakeFormData) => Promise<void>
  isSubmitting?: boolean
}

export function IntakeStepper({ onSubmit, isSubmitting = false }: IntakeStepperProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const form = useForm<IntakeFormData>({
    resolver: zodResolver(steps[currentStep].schema),
    mode: "onChange",
    defaultValues: {
      basics: {
        scenario: undefined,
        geography: "",
        amountAtRisk: "",
        urgency: undefined,
        caseSummary: "",
      },
      counterparty: {
        entityType: undefined,
        nameOrHandle: "",
        website: "",
        contactedBefore: false,
        files: [],
      },
      tier: {
        selectedTier: undefined,
      },
      review: {
        confirmAccuracy: false,
      },
    },
  })

  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = async () => {
    const stepKey = currentStepData.id as keyof IntakeFormData
    const stepData = form.getValues(stepKey)

    try {
      await currentStepData.schema.parseAsync(stepData)

      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep])
      }

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
        // Update resolver for next step
        form.clearErrors()
      }
    } catch (error) {
      // Trigger validation to show errors
      form.trigger(stepKey)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      form.clearErrors()
    }
  }

  const handleSubmit = async () => {
    const allData = form.getValues()
    try {
      // Validate all steps before submission
      await basicsSchema.parseAsync(allData.basics)
      await counterpartySchema.parseAsync(allData.counterparty)
      await tierSchema.parseAsync(allData.tier)
      await reviewSchema.parseAsync(allData.review)

      await onSubmit(allData)
    } catch (error) {
      console.error("Validation failed:", error)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepBasics />
      case 1:
        return <StepCounterparty />
      case 2:
        return <StepTier />
      case 3:
        return <StepReview />
      default:
        return null
    }
  }

  return (
    <FormProvider {...form}>
      <div className="max-w-4xl mx-auto">
        <Card className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-md mb-8">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`
                    flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors
                    ${index <= currentStep ? "bg-[#E21E2C] text-white" : "bg-zinc-700 text-zinc-400"}
                    ${completedSteps.includes(index) ? "ring-2 ring-[#E21E2C]/40" : ""}
                  `}
                  >
                    {index + 1}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${index <= currentStep ? "text-white" : "text-zinc-400"}`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && <ChevronRight className="w-4 h-4 mx-4 text-zinc-600" />}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
        </Card>

        <Card className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">{currentStepData.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-6 border-t border-zinc-800">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !completedSteps.includes(currentStep)}
                  className="bg-[#E21E2C] hover:bg-[#c81427] text-white focus:ring-2 focus:ring-[#E21E2C]/40"
                >
                  {isSubmitting ? "Submitting..." : "Submit Case"}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#E21E2C] hover:bg-[#c81427] text-white focus:ring-2 focus:ring-[#E21E2C]/40"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  )
}
