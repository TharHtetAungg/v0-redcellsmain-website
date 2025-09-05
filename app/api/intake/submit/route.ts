import { type NextRequest, NextResponse } from "next/server"
import { intakeSchema } from "@/lib/validation/intake"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the incoming data
    const validatedData = intakeSchema.parse(body)

    // Generate a mock case ID
    const caseId = `RC-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    // In a real implementation, you would:
    // 1. Save the case data to a database
    // 2. Process file uploads to cloud storage
    // 3. Send notifications to the team
    // 4. Create case tracking records

    console.log("Case submitted:", {
      id: caseId,
      scenario: validatedData.basics.scenario,
      tier: validatedData.tier.selectedTier,
      urgency: validatedData.basics.urgency,
      fileCount: validatedData.counterparty.files.length,
    })

    // Return success response with case ID
    return NextResponse.json({
      ok: true,
      id: caseId,
      message: "Case submitted successfully",
    })
  } catch (error) {
    console.error("Case submission error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed",
          details: error.message,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 },
    )
  }
}
