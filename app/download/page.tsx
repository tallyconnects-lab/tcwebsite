import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download",
};

const steps = [
  { num: "1", title: "Download", desc: "Download the TallyConnects Automation for Excel" },
  { num: "2", title: "Open in Excel", desc: "Open Microsoft Excel — TallyConnects appears in the ribbon" },
  { num: "3", title: "Sign Up", desc: "Create your free account with phone and email verification" },
  { num: "4", title: "Connect Tally", desc: "Open Tally in the background and connect in one click" },
  { num: "5", title: "Start Importing", desc: "Paste your data, map columns, and post to Tally instantly" },
];

export default function DownloadPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Download TallyConnects</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The fastest way to import data into Tally, right from Excel.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gray-50 rounded-2xl p-10 shadow-sm">
            <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">TallyConnects for Excel</h2>

            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                Free trial included
              </span>
            </div>

            <a
              href="#"
              className="inline-block bg-primary text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-primary/90 transition shadow-lg mb-8"
            >
              Download Now
            </a>

            <div className="text-left space-y-3">
              <h3 className="font-semibold text-gray-900 mb-2">System Requirements</h3>
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
