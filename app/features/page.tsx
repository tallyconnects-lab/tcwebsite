import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore TallyConnects features: Auto-mapping, smart ledger matching, AI validation, Excel to Tally import, fetch party details, custom columns, and bank statement import.",
};

const features = [
  {
    id: "all-in-one-template",
    title: "All-in-One Template",
    subtitle: "One Template, 20+ Formats — Just Select and Go",
    image: "/images/features/all-in-one-template.png",
    bullets: [
      "Only one Excel template needed — automatically switches between 20+ template types from a dropdown",
      "Voucher Templates: Sales, Purchase, Credit Note, Debit Note — with and without inventory",
      "Transaction Templates: Receipt, Payment, Journal, and Contra vouchers",
      "Bank Statement Templates: Pre-formatted for all major Indian banks",
      "E-Commerce Templates: Amazon, Flipkart, Meesho, and more marketplace formats",
      "Custom Templates with Multi Debit/Credit voucher import mode — supports inventory items",
      "Masters Templates: Bulk create Ledgers, Stock Items, Cost Centers, and more",
    ],
  },
  {
    id: "automapping",
    title: "Auto-Mapping",
    subtitle: "Intelligent Column Matching for Effortless Import",
    image: "/images/features/automapping.png",
    bullets: [
      "Automatically matches your data file headings with template headings — no manual mapping needed",
      "Validates formatting of amount and date columns in real-time as you map",
      "Change mapping on the fly and choose to import only specific columns",
      "Dramatically reduces manual work and eliminates mapping errors",
    ],
  },
  {
    id: "match-ledger",
    title: "Match Party Ledger, Items & Other Ledgers",
    subtitle: "Smart Find & Replace with Tally Data Validation",
    image: "/images/features/match-ledger.png",
    bullets: [
      "Matches your Excel data with Tally data to validate before import — catch mismatches early",
      "Smart Find & Replace lets you correct unmatched entries in bulk with one click",
      "Auto-suggests closest Tally matches for unmatched data to speed up corrections",
      "Works for Party Ledgers, Stock Items, Tax Ledgers, and all other ledger types",
    ],
  },
  {
    id: "ai-validation",
    title: "AI Validation",
    subtitle: "Real-Time Data Validation with Tally for Error-Free Import",
    image: "/images/features/ai-validation.png",
    bullets: [
      "GSTIN Validation — Pattern check (15-char format), auto-uppercase, highlights invalid entries",
      "State & Place of Supply — Normalizes state names, derives from GSTIN, auto-fills for Sales/Credit Notes",
      "Date Correction — Parses multiple formats, converts to Tally format, validates against financial year range",
      "Amount Rounding — Rounds to 2 decimal places for clean import",
      "GST Rate Validation — Validates against known rates (0, 0.25, 3, 5, 12, 18, 28%)",
      "HSN Code Validation — Checks length (4/6/8 digits) and numeric format",
      "GST Registration Type — Normalizes to valid Tally values (Regular, Unregistered, Composition, etc.)",
      "Country & Voucher Type Correction — Normalizes country names and fuzzy-matches voucher types",
      "Color-coded results: Blue = auto-corrected, Orange = warnings, Red = errors requiring attention",
    ],
  },
  {
    id: "excel-to-tally",
    title: "Excel to Tally Import",
    subtitle: "Direct Import with Smart Batch Processing",
    image: "/images/features/excel-to-tally-import.png",
    bullets: [
      "Imports data directly from Excel to Tally — no third-party software or XML import/export needed",
      "Validates data and auto-creates missing ledgers and items with proper details before import",
      "Batch processing for faster imports, optimized to your Tally software's response time",
      "Add round-off ledgers in real-time during import",
      "Multi-currency import support for international transactions",
      "Switch voucher mode on the fly during import",
      "One-click Undo — reverse imported records instantly if something looks wrong",
      "Smart Import Dashboard shows real-time progress, success count, and error log",
    ],
  },
  {
    id: "fetch-party",
    title: "Fetch Party Details",
    subtitle: "Auto-Fill Party Information from Tally & GST Portal",
    image: "/images/features/fetch-party-details.png",
    bullets: [
      "Fetches party details from Tally to ensure voucher imports have matching information",
      "If details are missing in Tally, fetch them directly from the GST Portal using GSTIN number",
      "Auto-fills State, PinCode, Country, GST Registration Type, and more",
      "Ensures complete and accurate party master data for every voucher",
    ],
  },
  {
    id: "auto-create-gst",
    title: "Auto Create GST Ledgers",
    subtitle: "One-Click GST Ledger Setup Based on Company & Party State",
    image: "/images/features/auto-create-gst-ledger.png",
    bullets: [
      "Automatically detects your company state and matches it with party place of supply",
      "Creates the correct tax ledgers (CGST, SGST, or IGST) with proper naming and rates",
      "Configurable ledger string format — customize naming like \"CGST @%\", \"SGST @%\"",
      "Supports GST calculations before or after discount",
      "Option to create other ledgers (Sales, Purchase, etc.) alongside tax ledgers",
      "Eliminates manual GST ledger creation — no more spelling mistakes or missing rates",
    ],
  },
  {
    id: "custom-columns",
    title: "Custom Columns",
    subtitle: "Unlimited Bill References & Cost Centers Per Ledger",
    image: "/images/features/custom-columns.png",
    bullets: [
      "Add as many Bill Reference and Cost Center columns as needed for any ledger — in real-time",
      "Select the ledger type and detail type (Bill Reference, Cost Center, etc.)",
      "Columns are added automatically to the Excel template as you specify",
      "The biggest advantage of Excel templates — complete flexibility without any fixed column limits",
    ],
  },
  {
    id: "bank-statement",
    title: "Bank Statement Import",
    subtitle: "PDF to Excel Conversion with Smart Ledger Matching",
    image: "/images/features/bank-pdf-import.png",
    link: "/bank-statement-to-tally",
    bullets: [
      "Convert PDF bank statements to structured Excel data with one click",
      "Auto-suggests party ledger names by matching narration text with Tally ledgers",
      "Automatically assigns voucher type (Receipt/Payment) based on debit/credit amounts",
      "Supports all major Indian banks — select from saved PDF conversions",
      "Review and edit converted data before importing to Tally",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to automate your Tally data entry — from smart
            mapping to AI validation to one-click import.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div
                className={`flex flex-col ${
                  imageLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={700}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-primary font-medium text-lg mb-6">
                    {feature.subtitle}
                  </p>
                  {"link" in feature && feature.link && (
                    <Link
                      href={feature.link}
                      className="inline-block mb-4 text-sm font-semibold text-white bg-primary px-5 py-2 rounded-lg hover:opacity-90 transition"
                    >
                      Learn More →
                    </Link>
                  )}
                  <ul className="space-y-3">
                    {feature.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Automate Your Tally?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Download TallyConnects and start importing data in minutes.
          </p>
          <Link
            href="/download"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
