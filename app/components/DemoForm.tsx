"use client"

export default function DemoForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = new FormData(form).get("email") as string
    // Replace with your form endpoint (e.g. Formspree, Loops, etc.)
    console.log("Demo requested:", email)
    form.reset()
    alert("Thanks — we'll be in touch within one business day.")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        placeholder="you@company.com"
        required
        className="flex-1 rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
      >
        Request demo
      </button>
    </form>
  )
}
