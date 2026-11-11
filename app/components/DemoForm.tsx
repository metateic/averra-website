"use client"

import { Button, FormStatus, TextField, useSubmit } from "@metateic/ui"

// Any endpoint that accepts a form POST and answers 2xx (Formspree, Loops, a serverless function).
const endpoint = process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT

export default function DemoForm() {
  const { status, onSubmit } = useSubmit(async (form) => {
    if (!endpoint) throw new Error("NEXT_PUBLIC_DEMO_FORM_ENDPOINT is not set")
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
    if (!response.ok) throw new Error(`Demo request failed with status ${response.status}`)
  })

  return (
    <div className="mx-auto mt-8 max-w-md">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <TextField
          className="flex-1"
          tone="inverse"
          label="Work email"
          hideLabel
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
        <Button type="submit" variant="inverse" disabled={status === "sending"} className="py-2.5">
          {status === "sending" ? "Sending…" : "Request a demo"}
        </Button>
      </form>
      <FormStatus
        status={status}
        tone="inverse"
        className="mt-3"
        success="Request received. We'll reply within one business day."
        error="Your request didn't send. Try again in a moment."
      />
    </div>
  )
}
