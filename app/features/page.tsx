import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
};

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    title: "Excel to Tally Voucher Posting",
    bullets: [
      "Import Sales, Purchase, Credit Notes, and Debit Notes",
      "Support for with and without inventory vouchers",
      "Batch posting of 10,000+ rows in a single go",
      "Receipts, Payments, Journals, and Contra vouchers",
      "Auto-mapping of Excel columns to Tally fields",
      "Real-time progress tracking during import",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    ),
    title: "Bank Statement Import",
    bullets: [
      "Support for all major Indian banks (HDFC, SBI, ICICI, Axis, Kotak, and more)",
      "Auto-detect bank statement format from PDF or Excel",
      "Narration-based ledger matching using AI",
      "Automatic bank reconciliation with Tally",
      "Smart voucher type detection (Receipt, Payment, Contra)",
      "Handles multi-format date and amount columns",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    ),
    title: "Master Data Import",
    bullets: [
      "Bulk Ledger Master creation from Excel",
      "Bulk Item Master (Stock Item) creation",
      "Set opening balances, groups, and GST details",
      "Import cost centres, godowns, and units",
      "Validate master data before posting",
      "Skip duplicates automatically",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Smart Matching & Validation",
    bullets: [
      "3-level matching: exact, synonym, and fuzzy",
      "Color-coded match confidence indicators",
      "AI-powered validation before posting to Tally",
      "Detects mismatches in amounts, GST rates, and party names",
      "Highlights errors and warnings in Excel itself",
      "One-click fix suggestions for common issues",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" /></svg>
    ),
    title: "GST Compliance",
    bullets: [
      "GSTIN lookup and validation from government portal",
      "Auto-create GST ledgers (CGST, SGST, IGST, Cess)",
      "Smart IGST vs CGST/SGST calculation based on state codes",
      "HSN/SAC code validation",
      "GST-ready voucher formatting for Tally",
      "Support for reverse charge and composition scheme",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: "E-Invoice IRN Generation",
    bullets: [
      "Generate IRN for bulk invoices directly from Excel",
      "Cancel e-invoices with reason codes",
      "Schema validation before submission to IRP",
      "Auto-fill supplier and buyer details from GSTIN",
      "Download signed JSON and QR code",
      "Support for B2B, B2C, SEZ, and export invoices",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
    ),
    title: "Multi DR/CR Vouchers",
    bullets: [
      "Create vouchers with up to 30 ledger lines",
      "Support for complex journal entries",
      "Multi-debit and multi-credit in a single voucher",
      "Ideal for salary posting, expense allocation, and fund transfers",
      "Automatic balancing validation",
      "Preview before posting to Tally",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),
    title: "E-Commerce Integration",
    bullets: [
      "Import orders from Amazon, Flipkart, Meesho, and Myntra",
      "Auto-map marketplace data to Tally voucher format",
      "Handle TCS, TDS, and marketplace commissions",
      "Reconcile settlement reports with Tally entries",
      "Support for returns, refunds, and adjustments",
      "Bulk import thousands of e-commerce transactions",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: "PDF to Tally",
    bullets: [
      "Upload any PDF invoice or bank statement",
      "AI extracts structured data from unstructured PDFs",
      "Supports scanned and digital PDFs",
      "Auto-detect invoice fields (party, amount, GST, items)",
      "Review extracted data in Excel before posting",
      "Token cost: Rs 0.25 per record",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Features</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to automate your Tally data entry, right from Excel.
          </p>
        </div>
      </section>

      {features.map((feature, i) => (
        <section
          key={i}
          className={i % 2 === 0 ? "bg-white py-16" : "bg-gray-50 py-16"}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-start gap-4 mb-6">
              {feature.icon}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {feature.title}
              </h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-3 ml-14">
              {feature.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Tally?</h2>
          <p className="text-lg text-white/80 mb-8">Download TallyConnects and start importing data in minutes.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
