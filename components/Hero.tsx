import Link from "next/link";
import Image from "next/image";
import RotatingFeatures from "./RotatingFeatures";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white pt-8 sm:pt-12 pb-20 sm:pb-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Flexible Pay Per Use
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark leading-tight">
          Excel to Tally Prime <span className="text-primary">Import Software</span>
        </h1>

        {/* Rotating Features */}
        <RotatingFeatures />

        {/* Subheading */}
        <p className="mt-5 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
          Import Excel &amp; PDF data into Tally in one click with powerful Excel Automation and
          AI Validation that automatically detects, corrects, and imports your data for error-free.
        </p>

        {/* Banner Image */}
        <div className="mt-8 mx-auto max-w-2xl">
          <Image
            src="/images/banner2.png"
            alt="TallyConnects Features - Excel to Tally Import"
            width={720}
            height={240}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all"
          >
            Start Free Trial — Register Now
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            View Pricing
          </Link>
        </div>

        {/* Hero Screenshot */}
        <div className="mt-14 mx-auto max-w-5xl">
          <div className="rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/images/banner.jpg"
              alt="TallyConnects Excel Add-in showing invoice import with AI validation toolbar"
              width={1920}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-base font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span>5000+ Businesses Trust TallyConnects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span>Excel to Tally Prime Import Software</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span>TallyConnects API Software</span>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://share.google/SAxEqtFunmdghFMRw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full border border-gray-200 bg-white px-8 py-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800">4.9</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-xl">{star}</span>
                ))}
              </div>
            </div>
            <span className="text-base font-semibold text-gray-500 border-l border-gray-200 pl-4">366 Google Reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
}
