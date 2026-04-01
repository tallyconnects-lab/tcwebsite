import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TallyConnects vs Suvit",
  description: "Compare TallyConnects vs Suvit. Excel-native interface, pay-per-use tokens, offline Tally access, AI validation, and e-invoice support.",
};

const rows = [
  { feature: "Pricing Model", tc: "Pay per use (tokens)", competitor: "Monthly/yearly subscription" },
  { feature: "Works in Excel", tc: "Yes — native Excel Automation", competitor: "No — web-based app" },
  { feature: "Offline Tally Access", tc: "Yes — connects directly to local Tally", competitor: "No — requires internet" },
  { feature: "AI Validation", tc: "Yes", competitor: "Yes" },
  { feature: "E-Invoice IRN", tc: "Yes", competitor: "Limited" },
  { feature: "Bank Statement Import", tc: "Yes — with narration matching", competitor: "Yes" },
  { feature: "WhatsApp Automation", tc: "Not yet", competitor: "Yes — document upload via WhatsApp" },
  { feature: "User Base", tc: "Growing", competitor: "10,000+ firms" },
  { feature: "Auto-Create Masters", tc: "Yes", competitor: "Yes" },
  { feature: "PDF to Tally", tc: "Yes", competitor: "Yes" },
  { feature: "E-Commerce Import", tc: "Yes — Amazon, Flipkart, etc.", competitor: "Limited" },
  { feature: "No Subscription Lock-in", tc: "Yes — pay per use", competitor: "No — subscription required" },
];

export default function SuvitPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TallyConnects vs Suvit</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A detailed comparison of TallyConnects and Suvit (TaxOne by Vyapar) for Tally automation.
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
                  <th className="text-center px-6 py-4 bg-gray-50 border-b text-gray-700 font-semibold">Suvit</th>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Where Suvit Excels</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">-</span>
                Large user base with 10,000+ accounting firms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">-</span>
                WhatsApp-based document upload automation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">-</span>
                Web-based interface accessible from anywhere
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose TallyConnects Instead?</h2>
          <div className="space-y-4">
            {[
              { title: "Excel-Native Experience", desc: "Work directly in Excel where your data already is. No uploading files to a web portal, no learning a new interface." },
              { title: "Pay Per Use, No Subscription", desc: "No monthly or yearly subscription fees. Buy tokens only when you need them, and they never expire." },
              { title: "Works Offline with Tally", desc: "TallyConnects connects directly to your local Tally instance. No internet dependency for data posting." },
              { title: "Transparent Token Pricing", desc: "Know exactly what each action costs. Rs 0.10 per voucher, Rs 0.25 per PDF record. No hidden fees." },
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
          <p className="text-lg text-white/80 mb-8">Download and compare for yourself. No subscription required.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
