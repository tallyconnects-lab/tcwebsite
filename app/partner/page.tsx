import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Program",
};

const whoCanJoin = [
  "Chartered Accountants (CAs)",
  "Tally Consultants and Implementors",
  "Accounting and Bookkeeping Firms",
  "IT Service Providers",
  "Software Resellers",
];

const benefits = [
  { title: "Partner Dashboard", desc: "Track referrals, earnings, and payouts in real time" },
  { title: "Real-Time Tracking", desc: "See every signup and purchase from your referral link" },
  { title: "Wallet & Payouts", desc: "Accumulated earnings in your wallet, withdraw anytime" },
  { title: "Marketing Materials", desc: "Get banners, brochures, and demo videos to share" },
  { title: "Priority Support", desc: "Dedicated support channel for partners and their clients" },
  { title: "No Investment Required", desc: "Completely free to join, start earning immediately" },
];

export default function PartnerPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Earn with TallyConnects Partner Program
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Refer TallyConnects to your clients and earn commissions on every purchase.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Register as a partner for free" },
              { step: "2", title: "Get Referral Code", desc: "Receive your unique referral link and code" },
              { step: "3", title: "Share", desc: "Share with your clients, network, and audience" },
              { step: "4", title: "Earn", desc: "Earn 25% on first purchase, 10% recurring" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-white font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Be a Partner?</h2>
              <ul className="space-y-3">
                {whoCanJoin.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-700">First Purchase</span>
                  <span className="text-2xl font-bold text-primary">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Recurring Purchases</span>
                  <span className="text-2xl font-bold text-primary">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Partner Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Earning Today</h2>
          <p className="text-lg text-white/80 mb-8">Join the TallyConnects Partner Program and earn commissions on every referral.</p>
          <a href="#" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Become a Partner
          </a>
        </div>
      </section>
    </main>
  );
}
