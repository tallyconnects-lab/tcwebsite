import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Excel to Tally Software",
  description:
    "Import any Excel data to Tally in one click. Sales, Purchase, Credit Notes, Debit Notes, Receipts, Payments, Journals, and Multi DR/CR vouchers. Auto-mapping, AI validation, and batch posting of 10,000+ rows.",
};

const voucherTypes = [
  "Sales Invoices",
  "Purchase Invoices",
  "Credit Notes",
  "Debit Notes",
  "Receipts",
  "Payments",
  "Journal Entries",
  "Multi DR/CR Vouchers",
];

const mappingLevels = [
  { level: "Exact Match", desc: "Column header matches Tally field name exactly" },
  { level: "Synonym Match", desc: "Recognizes common alternatives (e.g., 'Party Name' = 'Ledger Name')" },
  { level: "Fuzzy Match", desc: "AI-powered matching for non-standard column headers" },
];

const faqs = [
  {
    q: "Does it work with any Excel format?",
    a: "Yes. TallyConnects auto-detects your columns regardless of order or naming. You can paste data from any source.",
  },
  {
    q: "Can I import inventory vouchers?",
    a: "Absolutely. Both with-inventory and without-inventory vouchers are supported, including item details, quantities, rates, and godowns.",
  },
  {
    q: "How many rows can I import at once?",
    a: "TallyConnects handles batch posting of 10,000+ rows in a single session. Large files are processed efficiently with progress tracking.",
  },
  {
    q: "What if a ledger does not exist in Tally?",
    a: "TallyConnects can auto-create missing ledgers and stock items in Tally before posting vouchers.",
  },
  {
    q: "How much does it cost?",
    a: "Excel to Tally posting costs Rs 0.10 per voucher. No subscription, no monthly fees.",
  },
];

export default function ExcelToTallyPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Import Any Excel Data to Tally in One Click
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sales, purchases, credit notes, receipts, journals — paste your data in Excel and post to Tally instantly.
          </p>
          <Link href="/download" className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Free Trial
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What You Can Import</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {voucherTypes.map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 text-center">
                <p className="font-semibold text-gray-900">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Auto-Mapping Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mappingLevels.map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-primary text-white font-bold rounded-full flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{m.level}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">AI Validation</h2>
          <p className="text-gray-600 text-center text-lg mb-8">
            Before posting to Tally, TallyConnects uses AI to validate your data. It checks for
            mismatched amounts, invalid GST rates, duplicate entries, missing fields, and more.
            Errors are highlighted directly in Excel with color-coded indicators so you can fix
            issues before they reach Tally.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-500 mb-1">Token Cost</p>
            <p className="text-3xl font-bold text-primary">Rs 0.10 <span className="text-lg font-normal text-gray-500">per voucher</span></p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Import Excel to Tally?</h2>
          <p className="text-lg text-white/80 mb-8">Download TallyConnects and start posting vouchers in minutes.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
