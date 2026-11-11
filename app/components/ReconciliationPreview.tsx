const LINES = [
  { item: "B3 entry", ref: "14522-00871-3", amount: "4,218.40", state: "matched" },
  { item: "B3 entry", ref: "14522-00874-9", amount: "1,936.12", state: "matched" },
  { item: "Amendment", ref: "14522-00871-3", amount: "−312.00", state: "matched" },
  { item: "B3 entry", ref: "14522-00880-1", amount: "2,750.00", state: "review", note: "Duplicate charge" },
  { item: "Interest", ref: "No broker invoice", amount: "18.67", state: "review", note: "Unexplained" },
] as const

/** Static picture of what a reconciled statement looks like. Figures are made up. */
export default function ReconciliationPreview() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_hsl(222_47%_11%/0.35)]">
      <div className="flex items-baseline justify-between gap-4 border-b border-border px-5 py-4">
        <p className="text-sm font-semibold text-foreground">Statement of account</p>
        <p className="text-xs text-muted-foreground">3 matched, 2 to review</p>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-muted-foreground">
          <tr>
            <th scope="col" className="px-3 pt-3 pb-2 font-medium sm:px-5">
              Transaction
            </th>
            <th scope="col" className="px-2 pt-3 pb-2 text-right font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 pt-3 pb-2 text-right font-medium sm:px-5">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {LINES.map((line) => {
            const review = line.state === "review"
            return (
              <tr key={line.item + line.ref + line.amount} className={`border-t border-border ${review ? "bg-primary/[0.06]" : ""}`}>
                <td className="py-3 pr-1 pl-3 sm:pl-5">
                  <span className="font-medium text-foreground">{line.item}</span>
                  <span className="hidden text-xs whitespace-nowrap text-muted-foreground tabular-nums min-[25rem]:block">{line.ref}</span>
                </td>
                <td className="px-2 py-3 text-right text-foreground tabular-nums">{line.amount}</td>
                <td className="py-3 pr-3 pl-1 text-right sm:pr-5">
                  {review ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary px-2 py-0.5 text-xs font-medium whitespace-nowrap text-foreground">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {line.note}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap text-muted-foreground">
                      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5l3.2 3L13 4.5" />
                      </svg>
                      Matched
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <figcaption className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
        Example with made-up figures.
      </figcaption>
    </figure>
  )
}
