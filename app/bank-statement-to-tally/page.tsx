import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bank Statement to Tally",
  description:
    "Import bank statements to Tally in minutes. Supports HDFC, SBI, ICICI, Axis, Kotak and all major Indian banks. PDF upload, AI extraction, narration matching, and auto reconciliation.",
};

const banks = [
  { name: "HDFC", logo: "/images/banks/hdfc.png" },
  { name: "SBI", logo: "/images/banks/sbi.png" },
  { name: "ICICI", logo: "/images/banks/icici.png" },
  { name: "Axis Bank", logo: "/images/banks/axis.png" },
  { name: "Kotak", logo: "/images/banks/kotak.png" },
  { name: "PNB", logo: "/images/banks/pnb.png" },
  { name: "Bank of Baroda", logo: "/images/banks/bob.png" },
  { name: "Union Bank", logo: "/images/banks/unionbank.png" },
  { name: "IndusInd", logo: "/images/banks/indusind.png" },
  { name: "Yes Bank", logo: "/images/banks/yesbank.png" },
  { name: "IDBI", logo: "/images/banks/idbi.png" },
  { name: "Federal Bank", logo: "/images/banks/federalbank.png" },
  { name: "Canara Bank", logo: "/images/banks/canara.png" },
  { name: "Bank of India", logo: "/images/banks/boi.png" },
  { name: "Indian Bank", logo: "/images/banks/indianbank.png" },
  { name: "IOB", logo: "/images/banks/iob.png" },
  { name: "Bandhan Bank", logo: "/images/banks/bandhan.png" },
  { name: "AU Bank", logo: "/images/banks/aubank.png" },
  { name: "IDFC First", logo: "/images/banks/idfc.png" },
  { name: "UCO Bank", logo: "/images/banks/uco.png" },
  { name: "Central Bank", logo: "/images/banks/centralbank.png" },
  { name: "Bank of Maharashtra", logo: "/images/banks/bom.png" },
  { name: "RBL Bank", logo: "/images/banks/rbl.png" },
  { name: "Saraswat Bank", logo: "/images/banks/saraswat.png" },
  { name: "DBS", logo: "/images/banks/dbs.png" },
  { name: "HSBC", logo: "/images/banks/hsbc.png" },
  { name: "Karnataka Bank", logo: "/images/banks/karnatakabank.png" },
  { name: "KVB", logo: "/images/banks/kvb.png" },
  { name: "TMB", logo: "/images/banks/tmb.png" },
  { name: "TJSB Bank", logo: "/images/banks/tjsb.png" },
];

const steps = [
  { title: "Select & Upload PDF", desc: "Upload your bank statement PDF — our tool reads and displays the pages with table detection. Select the bank template or auto-detect the format.", image: "/images/features/pdf-selection.png" },
  { title: "Convert & Import to Excel", desc: "Converted PDF data loads into the Bank Statement template. Party ledger suggestions are auto-matched from Tally. Voucher types (Receipt/Payment) are assigned based on amounts.", image: "/images/features/bank-pdf-import.png" },
  { title: "Match Ledgers", desc: "AI matches narrations to ledgers in Tally automatically. Use smart Find & Replace for unmatched entries." },
  { title: "Review & Post to Tally", desc: "Verify mapped data in Excel and post to Tally in one click with batch processing." },
];

export default function BankStatementPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Import Bank Statements to Tally in Minutes
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Upload PDF or Excel bank statements. AI matches narrations to ledgers and posts vouchers to Tally automatically.
          </p>
          <Link href="/download" className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Free Trial
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Supported Banks</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {banks.map((bank, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center gap-2">
                <Image src={bank.logo} alt={bank.name} width={32} height={32} className="w-8 h-8 object-contain" />
                <span className="text-xs font-semibold text-gray-700 text-center">{bank.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4">And many more — TallyConnects auto-detects any bank format.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="space-y-16">
            {steps.map((s, i) => {
              const imageLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`}
                >
                  {/* Image or Step Number */}
                  {"image" in s && s.image ? (
                    <div className="w-full md:w-1/2">
                      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <Image src={s.image} alt={s.title} width={700} height={450} className="w-full h-auto" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="w-24 h-24 bg-primary text-white font-bold text-4xl rounded-full flex items-center justify-center shadow-lg">
                        {i + 1}
                      </div>
                    </div>
                  )}
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary text-white font-bold text-lg rounded-full flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Narration-Based Ledger Matching</h2>
              <p className="text-gray-600 mb-4">
                TallyConnects reads the narration/description in each bank transaction and uses AI to
                match it to the correct ledger in your Tally company. It learns from your past mappings
                to get more accurate over time.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Matches "NEFT/RTGS" narrations to party ledgers
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Auto-detects salary, rent, and expense payments
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Handles UPI, cheque, and card transactions
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Auto Voucher Type Detection</h2>
              <p className="text-gray-600 mb-4">
                Based on the transaction type (debit/credit) and matched ledger group, TallyConnects
                automatically assigns the correct voucher type.
              </p>
              <div className="space-y-3">
                {[
                  { type: "Receipt", desc: "Money received (credit entries)" },
                  { type: "Payment", desc: "Money paid (debit entries)" },
                  { type: "Contra", desc: "Bank-to-bank or cash transfers" },
                ].map((v, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                    <span className="font-bold text-primary">{v.type}</span>
                    <span className="text-gray-600">{v.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank Reconciliation</h2>
          <p className="text-gray-600 text-lg">
            After importing bank transactions, TallyConnects helps you reconcile them with existing
            Tally entries. Identify unmatched transactions, duplicate entries, and discrepancies
            between your bank statement and Tally books.
          </p>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Import Your Bank Statement Now</h2>
          <p className="text-lg text-white/80 mb-8">Download TallyConnects and import bank statements in minutes.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
