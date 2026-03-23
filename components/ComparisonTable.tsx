const rows = [
  { feature: "Pricing Model", tc: "Pay Per Use (Prepaid)", other: "Fixed / Lifetime Cost", otherType: "bad" },
  { feature: "AI Data Validation", tc: "Auto-correct before import", other: "Manual validation required", otherType: "bad" },
  { feature: "PDF to Tally Import", tc: "Direct PDF with AI extraction", other: "Limited / Excel conversion needed", otherType: "warn" },
  { feature: "Excel Integration", tc: "Works inside Excel Add-in", other: "Separate software / templates", otherType: "warn" },
  { feature: "Auto Column Mapping", tc: "Smart auto-mapping", other: "Manual mapping", otherType: "bad" },
  { feature: "Create & Alter Detection", tc: "Automatic mode detection", other: "Manual selection needed", otherType: "warn" },
  { feature: "GST Validation", tc: "GSTIN + Rate validation", other: "Basic GST checks", otherType: "warn" },
  { feature: "Bank Entry Automation", tc: "Auto voucher classification", other: "Manual entry classification", otherType: "bad" },
  { feature: "Scalability", tc: "Flexible, usage-based scaling", other: "License-based limitation", otherType: "bad" },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-[#0e3875] mb-4">
          TallyConnects vs Traditional Solutions
        </h2>
        <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-12">
          See how TallyConnects outperforms traditional Excel to Tally tools across every key feature.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#1a2744]">
              <div className="py-5 px-8 text-white font-bold text-base">Feature</div>
              <div className="py-5 px-8">
                <span className="inline-flex items-center gap-2 text-white font-bold text-base">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  TallyConnects
                </span>
              </div>
              <div className="py-5 px-8 text-white/70 font-bold text-base">Other Excel to Tally Tools</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 items-center border-t border-gray-100 transition-colors hover:bg-primary/[0.02] ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="py-4 px-8 font-semibold text-gray-800 text-[15px]">{row.feature}</div>
                <div className="py-4 px-8">
                  <div className="flex items-center gap-2.5 text-[15px]">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{row.tc}</span>
                  </div>
                </div>
                <div className="py-4 px-8">
                  <div className="flex items-center gap-2.5 text-[15px]">
                    {row.otherType === "bad" ? (
                      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3l9.5 16.5H2.5L12 3z" />
                        </svg>
                      </span>
                    )}
                    <span className="text-gray-500">{row.other}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div key={row.feature} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-[#1a2744] px-5 py-3">
                <span className="font-bold text-white text-sm">{row.feature}</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex items-center gap-3 px-5 py-3">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-primary font-semibold">TallyConnects</p>
                    <p className="text-sm text-gray-700 font-medium">{row.tc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-gray-50/50">
                  {row.otherType === "bad" ? (
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3l9.5 16.5H2.5L12 3z" />
                      </svg>
                    </span>
                  )}
                  <div>
                    <p className="text-xs text-gray-400 font-semibold">Others</p>
                    <p className="text-sm text-gray-500">{row.other}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
