import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pay-per-use pricing for TallyConnects. Rs 0.10 per voucher. No subscriptions, no monthly fees. Buy tokens and use anytime.",
};

const plans = [
  { name: "Starter", tokens: "50,000", price: "5,000", perToken: "0.10" },
  { name: "Professional", tokens: "1,20,000", price: "10,000", perToken: "0.08" },
  { name: "Business", tokens: "2,00,000", price: "15,000", perToken: "0.075" },
];

const consumption = [
  { action: "Excel to Tally (per voucher)", tokens: "0.10" },
  { action: "AI Validation (per voucher)", tokens: "0.02" },
  { action: "PDF to Tally (per record)", tokens: "0.20" },
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Pay-Per-Use Pricing</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            No subscriptions. No monthly fees. Buy tokens and use them whenever you need.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-6 text-center ${
                  i === 1 ? "border-primary shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {i === 1 && (
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-primary mb-1">
                  {plan.tokens}
                </p>
                <p className="text-sm text-gray-500 mb-4">Tokens</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  Rs {plan.price}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Rs {plan.perToken} per token
                </p>
                <Link
                  href="/download"
                  className="block w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              No subscription required — tokens never expire
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Token Consumption Rates
          </h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Action</th>
                    <th className="text-right px-6 py-3 text-sm font-semibold text-gray-700">Tokens Used</th>
                  </tr>
                </thead>
                <tbody>
                  {consumption.map((item, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-6 py-4 text-gray-700">{item.action}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gray-900">{item.tokens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Free, Pay Only When You Need</h2>
          <p className="text-lg text-white/80 mb-8">Download TallyConnects and get free trial tokens to explore all features.</p>
          <Link href="/download" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download Now
          </Link>
        </div>
      </section>
    </main>
  );
}
