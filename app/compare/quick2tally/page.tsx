import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TallyConnects vs Quick2Tally",
};

const rows = [
  { feature: "Pricing Model", tc: "Pay per use (tokens)", competitor: "Yearly subscription Rs 4,000 - Rs 13,000" },
  { feature: "Works in Excel", tc: "Yes — native Excel Automation", competitor: "No — separate desktop application" },
  { feature: "AI Validation", tc: "Yes — validates before posting", competitor: "No" },
  { feature: "E-Invoice IRN", tc: "Yes — bulk generation from Excel", competitor: "No" },
  { feature: "Bank Narration Matching", tc: "Yes — AI-powered", competitor: "No" },
  { feature: "Machine Locked", tc: "No — use on any machine", competitor: "Yes — locked to one machine" },
  { feature: "Auto-Create Masters", tc: "Yes — ledgers and stock items", competitor: "Limited" },
  { feature: "PDF to Tally", tc: "Yes — AI extraction", competitor: "No" },
  { feature: "E-Commerce Import", tc: "Yes — Amazon, Flipkart, etc.", competitor: "No" },
];

export default function Quick2TallyPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TallyConnects vs Quick2Tally</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how TallyConnects compares to Quick2Tally on features, pricing, and flexibility.
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
                  <th className="text-center px-6 py-4 bg-gray-50 border-b text-gray-700 font-semibold">Quick2Tally</th>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose TallyConnects?</h2>
          <div className="space-y-4">
            {[
              { title: "No Subscription Lock-in", desc: "Buy tokens when you need them. No monthly or yearly fees. Tokens never expire." },
              { title: "Works Right in Excel", desc: "No separate application to learn. TallyConnects works as an Automation inside Microsoft Excel where your data already lives." },
              { title: "AI-Powered Features", desc: "Smart validation, fuzzy matching, narration-based bank matching, and PDF extraction — features you will not find in Quick2Tally." },
              { title: "Use on Any Machine", desc: "Your TallyConnects account works on any computer. No machine locking or license transfers needed." },
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
          <h2 className="text-3xl font-bold mb-4">Switch to TallyConnects</h2>
          <p className="text-lg text-white/80 mb-8">More features, lower cost, no lock-in. Try it free today.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
