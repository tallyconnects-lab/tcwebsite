import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TallyConnects vs Vouchrit",
  description: "Compare TallyConnects vs Vouchrit. Transparent pricing, Excel integration, e-commerce import support, and no subscription lock-in.",
};

const rows = [
  { feature: "Pricing Model", tc: "Pay per use (tokens)", competitor: "Subscription plans" },
  { feature: "Works in Excel", tc: "Yes — native Excel Automation", competitor: "No — separate web/desktop app" },
  { feature: "AI Validation", tc: "Yes", competitor: "Basic" },
  { feature: "E-Invoice IRN", tc: "Yes — bulk generation", competitor: "No" },
  { feature: "E-Commerce Import", tc: "Yes — Amazon, Flipkart, Meesho, Myntra", competitor: "No" },
  { feature: "Bank Statement Import", tc: "Yes — with AI narration matching", competitor: "Yes" },
  { feature: "PDF to Tally", tc: "Yes — AI extraction", competitor: "Limited" },
  { feature: "Auto-Create Masters", tc: "Yes — ledgers and stock items", competitor: "Limited" },
  { feature: "Transparent Pricing", tc: "Yes — per-token cost visible", competitor: "Plan-based, less transparent" },
  { feature: "Separate App Required", tc: "No — works inside Excel", competitor: "Yes" },
  { feature: "User Base", tc: "Growing", competitor: "22,000+ CAs" },
];

export default function VouchritPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TallyConnects vs Vouchrit</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how TallyConnects compares to Vouchrit for Tally data import and automation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 bg-gray-50 border-b text-gray-700 font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 bg-primary/5 border-b text-primary font-bold">TallyConnects</th>
                  <th className="text-center px-6 py-4 bg-gray-50 border-b text-gray-700 font-semibold">Vouchrit</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-primary/5 text-gray-900">{row.tc}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Where Vouchrit Excels</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">-</span>
                Trusted by 22,000+ CAs across India
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">-</span>
                Established brand in the CA community
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose TallyConnects Instead?</h2>
          <div className="space-y-4">
            {[
              { title: "No Separate App Needed", desc: "TallyConnects works right inside Microsoft Excel. No new software to install, no new interface to learn." },
              { title: "Transparent Pay-Per-Use Pricing", desc: "Know exactly what you pay: Rs 0.10 per voucher, Rs 0.25 per PDF record. No hidden costs in subscription tiers." },
              { title: "More Features Included", desc: "E-invoice IRN generation, e-commerce data import (Amazon, Flipkart, Meesho, Myntra), and advanced AI validation — all included." },
              { title: "No Subscription Lock-in", desc: "Buy tokens when you need them. No monthly fees, no annual commitments. Tokens never expire." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Try TallyConnects Free</h2>
          <p className="text-lg text-white/80 mb-8">Download and see the difference. No subscription required.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
