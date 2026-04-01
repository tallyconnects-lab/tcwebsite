import Link from "next/link";

const plans = [
  { name: "Starter", tokens: "50,000", price: "5,000", desc: "Try it out" },
  { name: "Professional", tokens: "1,20,000", price: "10,000", desc: "Small businesses", popular: true },
  { name: "Business", tokens: "2,00,000", price: "15,000", desc: "Growing companies" },
];

const consumption = [
  { action: "Post voucher", tokens: "0.10 token" },
  { action: "AI Validation", tokens: "0.02 token" },
  { action: "PDF to Tally", tokens: "0.20 token" },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Simple, Pay-Per-Use Pricing
        </h2>
        <p className="mt-4 text-center text-gray-500 text-lg max-w-xl mx-auto">
          Buy tokens. Use anytime. No subscriptions.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 text-center transition-shadow hover:shadow-lg ${
                plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-dark">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
              <div className="mt-6">
                {plan.price ? (
                  <span className="text-4xl font-extrabold text-dark">Rs {plan.price}</span>
                ) : (
                  <span className="text-3xl font-extrabold text-dark">Contact for Pricing</span>
                )}
              </div>
              <p className="mt-2 text-lg font-bold text-primary">{plan.tokens} Tokens</p>
              <Link
                href={plan.contact ? "/contact" : "/pricing"}
                className={`mt-6 block w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "border border-primary text-primary hover:bg-primary/5"
                }`}
              >
                {plan.contact ? "Contact Us" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <h3 className="text-xl font-bold text-center text-dark mb-6">Token Consumption Rates</h3>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            {consumption.map((item, i) => (
              <div key={i} className={`flex justify-between items-center px-6 py-4 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                <span className="text-gray-700 font-medium">{item.action}</span>
                <span className="text-primary font-semibold">{item.tokens}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 max-w-lg mx-auto">
          No monthly subscription. No hidden fees. Buy tokens, use anytime. Tokens never expire.
        </p>
      </div>
    </section>
  );
}
