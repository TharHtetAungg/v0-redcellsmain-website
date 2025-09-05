import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    // Log the payload for now. In a real app, this would trigger
    // the AI pipeline, update a database, etc.
    console.log("Received payment webhook:", payload)

    // Example: Trigger AI pipeline
    // await triggerAIPipeline(payload.caseId);

    return NextResponse.json({ status: "success", received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return new NextResponse("Webhook error", { status: 400 })
  }
}
