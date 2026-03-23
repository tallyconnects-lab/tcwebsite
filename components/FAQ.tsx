"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does TallyConnects work with Tally ERP 9?",
    a: "Yes, TallyConnects works with both Tally ERP 9 and TallyPrime.",
  },
  {
    q: "Do I need an internet connection?",
    a: "Yes, an internet connection is required for login, validation, and template conversion. The Tally connection itself is local.",
  },
  {
    q: "Is my data safe?",
    a: "Data is processed securely via encrypted APIs. We don't store your Tally data on our servers.",
  },
  {
    q: "Can I use it on multiple computers?",
    a: "Yes, simply login with your account on any computer.",
  },
  {
    q: "What Excel versions are supported?",
    a: "Microsoft Excel 2016, 2019, 2021, and Microsoft 365 (Windows only).",
  },
  {
    q: "Do tokens expire?",
    a: "No, purchased tokens never expire.",
  },
  {
    q: "What if a ledger doesn't exist in Tally?",
    a: "TallyConnects highlights unmatched ledgers and can auto-create them for you.",
  },
  {
    q: "How is this different from Tally's built-in Excel import?",
    a: "TallyConnects offers smart column mapping, AI validation, bank narration matching, e-invoice support, and handles complex multi-line vouchers — features not available in Tally's built-in import.",
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
