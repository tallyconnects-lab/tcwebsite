import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF to Tally",
  description:
    "Convert PDF invoices and bank statements to Tally vouchers using AI extraction. Upload any PDF, review extracted data in Excel, and post to Tally. Rs 0.25 per record.",
};

export default function PdfToTallyPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Convert PDF Invoices to Tally Vouchers
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Upload any PDF invoice or bank statement. AI extracts the data, you review in Excel, and post to Tally.
          </p>
          <Link href="/download" className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Free Trial
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How PDF to Tally Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Upload PDF", desc: "Upload any PDF invoice, purchase order, or bank statement into TallyConnects" },
              { step: "2", title: "AI Extracts Data", desc: "AI reads the PDF and extracts party name, amounts, GST details, line items, and dates" },
              { step: "3", title: "Review & Post", desc: "Extracted data appears in Excel for review. Edit if needed, then post to Tally in one click" },
            ].map((s) => (
              <div key={s.step} className="text-center bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-primary text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Can You Convert?</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Sales and purchase invoices from vendors",
                  "Bank statements from any Indian bank",
                  "GST invoices with line-item details",
                  "Scanned and digital PDF documents",
                  "Credit notes and debit notes",
                  "Expense bills and receipts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
              <p className="text-sm text-gray-500 mb-2">Token Cost</p>
              <p className="text-4xl font-bold text-primary mb-2">Rs 0.25</p>
              <p className="text-gray-600">per record extracted</p>
              <hr className="my-6" />
              <p className="text-sm text-gray-500">No subscription. No monthly fees. Pay only for what you use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Extraction</h2>
          <p className="text-gray-600 text-lg mb-6">
            TallyConnects uses advanced AI to understand the structure of any PDF document.
            It identifies tables, headers, amounts, tax details, and party information
            regardless of the PDF layout or format. The extracted data is presented in
            a clean Excel format for you to verify before posting to Tally.
          </p>
          <p className="text-gray-600 text-lg">
            Works with both digitally generated PDFs and scanned documents. No templates
            or pre-configuration required.
          </p>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Convert PDFs to Tally Today</h2>
          <p className="text-lg text-white/80 mb-8">Stop manual data entry. Let AI extract your PDF data into Tally.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
