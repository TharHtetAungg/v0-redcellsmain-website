export default function Loading() {
  return (
    <section className="min-h-[60vh] px-4">
      <div className="mx-auto max-w-3xl pt-20">
        <div className="h-7 w-56 animate-pulse rounded bg-white/10" />
        <div className="mt-3 h-4 w-80 animate-pulse rounded bg-white/10" />
        <div className="mt-8 h-[420px] animate-pulse rounded-xl bg-white/5" />
      </div>
    </section>
  )
}
