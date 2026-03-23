import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GST E-Invoice from Excel",
  description:
    "Generate GST e-invoices and IRN directly from Excel. GSTIN lookup, auto GST calculation (IGST/CGST/SGST), bulk IRN generation, and schema validation. Works with TallyConnects.",
};

export default function GstEInvoicePage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GST E-Invoice: Generate IRN from Excel
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Look up GSTIN, auto-calculate GST, and generate e-invoice IRN for bulk invoices directly from Excel.
          </p>
          <Link href="/download" className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Free Trial
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GSTIN Lookup",
                desc: "Validate any GSTIN against the government portal. Auto-fill trade name, address, and state code. Detect inactive or cancelled GSTINs before invoicing.",
              },
              {
                title: "Auto GST Calculation",
                desc: "Smart IGST vs CGST/SGST calculation based on supplier and buyer state codes. Handles cess, reverse charge, and composition scheme automatically.",
              },
              {
                title: "Bulk IRN Generation",
                desc: "Generate e-invoice IRN for hundreds of invoices at once. Schema validation ensures compliance before submission to IRP portal.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Prepare Data", desc: "Enter invoice data in Excel with buyer GSTIN and line items" },
              { step: "2", title: "GSTIN Validation", desc: "TallyConnects validates GSTINs and auto-fills party details" },
              { step: "3", title: "GST Calculation", desc: "Auto-calculates IGST or CGST/SGST based on state codes" },
              { step: "4", title: "Generate IRN", desc: "Submit to IRP and receive IRN, signed JSON, and QR code" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Auto-Create GST Ledgers</h2>
              <p className="text-gray-600 mb-4">
                TallyConnects automatically creates missing GST ledgers in Tally, including CGST, SGST,
                IGST, and Cess ledgers at the correct tax rates. No manual ledger setup needed.
              </p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Creates Output/Input CGST, SGST, IGST ledgers",
                  "Supports multiple GST rates (5%, 12%, 18%, 28%)",
                  "Handles cess and additional cess",
                  "HSN/SAC code validation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E-Invoice Capabilities</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Generate IRN for B2B, SEZ, and export invoices",
                  "Cancel e-invoices with reason codes",
                  "Download signed e-invoice JSON",
                  "QR code generation for each invoice",
                  "Schema validation before IRP submission",
                  "Support for credit notes and debit notes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Simplify GST E-Invoicing</h2>
          <p className="text-lg text-white/80 mb-8">Generate IRN for bulk invoices directly from Excel with TallyConnects.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
