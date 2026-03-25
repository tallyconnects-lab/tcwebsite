"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I get started with TallyConnects?",
    a: "Simply install the TallyConnects Excel Add-in, register your account, and login using your email and API Key. The add-in appears as a ribbon tab in Excel — you can start importing data to Tally right away.",
  },
  {
    q: "Which Tally versions does TallyConnects support?",
    a: "TallyConnects works seamlessly with Tally ERP 9, TallyPrime, and TallyPrime 5.1 — all versions are fully supported.",
  },
  {
    q: "What types of vouchers can I import?",
    a: "You can import Sales, Purchase, Receipt, Payment, Journal, Contra, Multi Dr/Cr, and Multi Dr/Cr with Inventory vouchers. It also supports Ledger Masters, Stock Items, Bank Statements, and E-Invoices.",
  },
  {
    q: "How does the token pricing work?",
    a: "Tokens are pay-per-use: Excel to Tally posting costs 0.10 token per record, PDF to Tally costs 0.25 token per record, and AI Validation costs 0.50 token per run. Purchased tokens never expire.",
  },
  {
    q: "Can TallyConnects auto-create ledgers and stock items?",
    a: "Yes! TallyConnects can auto-create Ledgers with GSTN, Stock Items with GST Rate & HSN, GST Ledgers (CGST, SGST, IGST), Units of Measure, and Stock Groups — all directly in Tally.",
  },
  {
    q: "How many bank statement formats are supported?",
    a: "TallyConnects supports 163+ bank statement templates including SBI, HDFC, ICICI, Axis, Kotak, PNB, and all major nationalized, private, and cooperative banks. New templates are added regularly.",
  },
  {
    q: "Can I use TallyConnects on multiple computers?",
    a: "Yes, simply login with your account on any computer. Sessions are cached for 24 hours, so you don't need to re-login after restarting Excel.",
  },
  {
    q: "What makes TallyConnects different from other Excel to Tally tools?",
    a: "TallyConnects offers smart auto-column mapping, AI-powered validation, bank narration matching, multi-voucher mode with inventory, e-invoice support, and handles complex multi-line vouchers — features not available in other tools.",
  },
];

export { faqs };

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-medium text-dark pr-4">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
