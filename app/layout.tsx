import type { Metadata, Viewport } from "next"
import { SkipLink, ThemeScript } from "@metateic/ui"
import "./globals.css"

const title = "Averra — CARM Reconciliation Automation"
const summary =
  "Stop reconciling CARM by hand. Averra matches transactions, flags exceptions, and exports journal entries automatically."

export const metadata: Metadata = {
  metadataBase: new URL("https://averra.metateic.io"),
  title,
  description:
    "Averra automates monthly CARM statement reconciliation for Canadian importers. Upload your SOA and transaction CSV, and get a matched, exception-flagged reconciliation in minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: summary,
    url: "/",
    siteName: "Averra",
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary", title, description: summary },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1411" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // data-theme is set by ThemeScript before hydration
    <html lang="en-CA" className="h-full" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
