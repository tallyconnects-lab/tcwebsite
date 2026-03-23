import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const articles = [
  {
    title: "How to Import 10,000 Invoices to Tally in 5 Minutes",
    description: "Learn how TallyConnects batch-posts thousands of sales and purchase invoices from Excel to Tally with auto-mapping and validation.",
    color: "bg-primary",
  },
  {
    title: "Complete Guide to Bank Statement Import in Tally",
    description: "Step-by-step guide to importing bank statements from HDFC, SBI, ICICI, and other banks into Tally using AI narration matching.",
    color: "bg-teal-600",
  },
  {
    title: "GST E-Invoice: Generate IRN Directly from Excel",
    description: "Everything you need to know about generating GST e-invoice IRN numbers in bulk using TallyConnects and Excel.",
    color: "bg-emerald-700",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TallyConnects Blog</h1>
          <p className="text-xl text-white/80">Tips, tutorials, and updates for Tally automation.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className={`${article.color} h-48 flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Coming Soon
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
