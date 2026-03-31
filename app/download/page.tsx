import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Free Trial - TallyConnects",
  description: "Sign up for TallyConnects and start importing Excel data to Tally in minutes.",
};

const steps = [
  { num: "1", title: "Sign Up", desc: "Create your free account with phone and email verification" },
  { num: "2", title: "Download", desc: "Download the TallyConnects Automation for Excel" },
  { num: "3", title: "Open in Excel", desc: "Open Microsoft Excel — TallyConnects appears in the ribbon" },
  { num: "4", title: "Connect Tally", desc: "Open Tally in the background and connect in one click" },
  { num: "5", title: "Start Importing", desc: "Paste your data, map columns, and post to Tally instantly" },
];

export default function DownloadPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started with TallyConnects</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Sign up for free and start importing data into Tally right from Excel.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
            Create Your Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Free trial included — no credit card required
          </p>

          <div className="rounded-2xl border-2 border-primary/20 bg-white shadow-lg shadow-primary/5 overflow-hidden">
            <iframe
              src="https://tallyconnects.in/authentication/register?iframe=1"
              title="TallyConnects Registration"
              className="w-full border-0"
              style={{ height: "700px" }}
              allowFullScreen
            />
          </div>

          <div className="mt-8 text-left bg-gray-50 rounded-2xl p-8">
            <h3 className="font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Windows 10 or Windows 11
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Microsoft Excel 2016 or later
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Active internet connection
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Start Guide</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-primary text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
