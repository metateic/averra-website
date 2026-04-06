import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Averra — CARM Reconciliation Automation",
  description:
    "Averra automates monthly CARM statement reconciliation for Canadian importers. Upload your SOA and transaction CSV, and get a matched, exception-flagged reconciliation in minutes.",
  openGraph: {
    title: "Averra — CARM Reconciliation Automation",
    description:
      "Stop reconciling CARM by hand. Averra matches transactions, flags exceptions, and exports journal entries automatically.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-geist),system-ui,sans-serif]">
        {children}
      </body>
    </html>
  )
}
