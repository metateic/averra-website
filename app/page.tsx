import DemoForm from "./components/DemoForm"

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
]

const PAIN_POINTS = [
  {
    title: "SOA PDFs aren't spreadsheets",
    body: "CARM statements arrive as unstructured PDFs. Manually copying figures into a reconciliation sheet takes hours and invites transcription errors.",
  },
  {
    title: "Matching transactions is tedious",
    body: "Mapping hundreds of B3 entries, amendments, and interest charges to broker invoices line by line is time-consuming work that adds no analytical value.",
  },
  {
    title: "Exceptions hide in the noise",
    body: "Duplicate charges, unexplained credits, and post-statement transactions are easy to miss in a spreadsheet — and costly when they slip through.",
  },
]

const STEPS = [
  {
    number: "01",
    title: "Upload your SOA and transaction CSV",
    body: "Export your Statement of Account PDF and transaction CSV directly from the CARM portal and upload them to Averra.",
  },
  {
    number: "02",
    title: "Averra matches and flags automatically",
    body: "Our engine parses your documents, reconciles transactions against your broker invoices, and surfaces every exception that needs attention.",
  },
  {
    number: "03",
    title: "Review, approve, and export",
    body: "Triage exceptions in a structured queue, approve the reconciliation, and export a journal entry CSV ready for your ERP.",
  },
]

const FEATURES = [
  {
    title: "AI-assisted PDF parsing",
    body: "Extracts key figures from CARM SOA PDFs even when formatting changes between periods — no manual re-keying.",
  },
  {
    title: "Automatic transaction matching",
    body: "Matches CARM CSV lines to broker invoices by entry number, amount, and date with configurable tolerance rules.",
  },
  {
    title: "Structured exception queue",
    body: "Every mismatch, duplicate, unexplained credit, and post-statement charge surfaces in a prioritised review queue with context.",
  },
  {
    title: "Multi-RM support",
    body: "Manage multiple CARM importer accounts under one organisation — each with its own statement history and GL mapping.",
  },
  {
    title: "Journal entry export",
    body: "Export a reconciled CSV mapped to your chart of accounts, ready to import directly into your ERP or accounting system.",
  },
  {
    title: "Full audit trail",
    body: "Every match, exception resolution, and approval is logged with a timestamp and user — no more wondering what changed.",
  },
]

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Averra
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#request-demo"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Request demo
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center md:pt-32">
      <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
        Built for Canadian importers on CARM
      </div>
      <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight">
        Stop reconciling CARM
        <br />
        <span className="text-primary">by hand.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Averra automates your monthly CARM statement reconciliation — parsing
        your SOA, matching transactions against broker invoices, and flagging
        every exception that needs review. What used to take days takes minutes.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#request-demo"
          className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark sm:w-auto"
        >
          Request a demo
        </a>
        <a
          href="#how-it-works"
          className="w-full rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:w-auto"
        >
          See how it works
        </a>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          The problem
        </p>
        <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Manual CARM reconciliation doesn&apos;t scale
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        How it works
      </p>
      <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Three steps to a closed period
      </h2>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.number} className="flex flex-col gap-4">
            <span className="text-4xl font-bold text-primary opacity-30">
              {step.number}
            </span>
            <h3 className="text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="border-y border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Features
        </p>
        <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Everything you need for CARM reconciliation
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RequestDemo() {
  return (
    <section id="request-demo" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-border bg-card px-8 py-16 text-center md:px-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          See Averra in action
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          We&apos;re working with a small group of Canadian importers in early
          access. Request a demo and we&apos;ll be in touch within one business
          day.
        </p>
        <DemoForm />
        <p className="mt-4 text-xs text-muted-foreground">
          No spam. No commitment.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Averra</span>
        <span>&copy; {new Date().getFullYear()} Metateic Inc.</span>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <RequestDemo />
      </main>
      <Footer />
    </>
  )
}
