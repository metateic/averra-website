import {
  CardGrid,
  CtaPanel,
  Hero,
  Section,
  SiteFooter,
  SiteHeader,
  Steps,
  ThemeToggle,
} from "@metateic/ui"
import DemoForm from "./components/DemoForm"
import ReconciliationPreview from "./components/ReconciliationPreview"

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
]

const PAIN_POINTS = [
  {
    title: "SOA PDFs aren't spreadsheets",
    body: "CARM statements arrive as PDFs. Copying the figures into a reconciliation sheet takes hours and invites transcription errors.",
  },
  {
    title: "Matching transactions is tedious",
    body: "Mapping hundreds of B3 entries, amendments, and interest charges to broker invoices line by line is slow work that tells you nothing new.",
  },
  {
    title: "Exceptions hide in the noise",
    body: "Duplicate charges, unexplained credits, and post-statement transactions are easy to miss in a spreadsheet, and costly when they slip through.",
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
    title: "Averra matches and flags",
    body: "Averra reads both files, reconciles each transaction against your broker invoices, and lists every exception that needs attention.",
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
    body: "Extracts the key figures from CARM SOA PDFs, even when the formatting changes between periods. Nothing is re-keyed by hand.",
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
    body: "Manage several CARM importer accounts under one organisation, each with its own statement history and GL mapping.",
  },
  {
    title: "Journal entry export",
    body: "Export a reconciled CSV mapped to your chart of accounts, ready to import directly into your ERP or accounting system.",
  },
  {
    title: "Full audit trail",
    body: "Every match, exception resolution, and approval is logged with a timestamp and the person who made it.",
  },
]

export default function Home() {
  return (
    <>
      <SiteHeader
        wordmark="Averra"
        logo={{ src: "/brand/averra-logo.svg", darkSrc: "/brand/averra-logo-dark.svg", alt: "Averra", className: "h-7" }}
        links={NAV_LINKS}
        cta={{ label: "Request a demo", href: "#request-demo" }}
        extra={<ThemeToggle />}
        mobileNav
      />
      <main id="main" className="flex-1">
        <Hero
          eyebrow="Built for Canadian importers on CARM"
          title="Stop reconciling CARM by hand."
          align="start"
          aside={<ReconciliationPreview />}
          lede="Averra reconciles your monthly CARM statement for you. It reads the SOA, matches each transaction to a broker invoice, and flags the exceptions that need a person. What used to take days takes minutes."
          primary={{ href: "#request-demo", label: "Request a demo" }}
          secondary={{ href: "#how-it-works", label: "See how it works" }}
        />
        <Section title="Manual CARM reconciliation doesn't scale" align="start" muted>
          <CardGrid items={PAIN_POINTS} variant="plain" />
        </Section>
        <Section
          id="how-it-works"
          title="Three steps to a closed period"
          align="start"
        >
          <Steps items={STEPS} />
        </Section>
        <Section
          id="features"
          title="Everything you need for CARM reconciliation"
          align="start"
          muted
        >
          <CardGrid items={FEATURES} variant="plain" />
        </Section>
        <CtaPanel
          id="request-demo"
          title="See Averra in action"
          lede="We're working with a small group of Canadian importers in early access. Request a demo and we'll be in touch within one business day."
          note="No spam. No commitment."
          tone="inverse"
        >
          <DemoForm />
        </CtaPanel>
      </main>
      <SiteFooter
        wordmark="Averra"
        meta={"Copyright " + new Date().getFullYear() + " Metateic Inc."}
      />
    </>
  )
}
