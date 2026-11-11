import type { Metadata, Viewport } from "next"
import { Analytics, SkipLink, ThemeScript } from "@metateic/ui"
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
  twitter: { card: "summary_large_image", title, description: summary },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#080c22" },
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
        <Analytics
          src={process.env.NEXT_PUBLIC_ANALYTICS_SRC}
          domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN}
          websiteId={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
