const useCases = [
  {
    title: "Counterparty Vetting Before You Pay",
    description: "Find hidden shell networks & director fraud in 24 h.",
  },
  {
    title: "Red-Flag Review After Funds Sent",
    description: "Diagnose anomalies & decide next tactical move.",
  },
  {
    title: "Frozen Funds & OFAC Holds",
    description: "Map the fastest release path from banks or crypto exchanges.",
  },
]

export function UseCasesStrip() {
  return (
    <div className="mt-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-2xl border border-border/60 bg-[rgba(21,26,34,.82)] backdrop-blur p-8 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(226,30,44,.12)] hover:-translate-y-0.5 transition h-full flex flex-col animate-fade-up"
            >
              <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">{useCase.description}</p>
              <div className="mt-auto pt-4">
                <button className="text-primary hover:text-primary/80 text-sm font-medium transition">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
