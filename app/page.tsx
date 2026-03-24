import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import FeatureCard from "@/components/FeatureCard";
import HowItWorks from "@/components/HowItWorks";
import PricingTable from "@/components/PricingTable";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ComparisonTable from "@/components/ComparisonTable";
import { SoftwareApplicationJsonLd, HowToJsonLd } from "@/components/JsonLd";

const features = [
  {
    icon: "📄",
    title: "Voucher Imports",
    description:
      "Import sales, purchase, receipt, payment, journal, and contra vouchers from Excel to Tally in one click.",
    bullets: [
      "All voucher types supported",
      "Multiline invoice Smart Merging",
      "Smart Excel Auto-Mapping",
      "Master Validation within Excel",
      "Auto create Ledger with GSTN",
      "Stockitem with GST Rate & HSN",
    ],
    image: "/images/voucherimport.png",
  },
  {
    icon: "🏦",
    title: "Bank Statement Import",
    description:
      "Import bank statements directly into Tally. Smart narration matching auto-identifies parties and ledgers.",
    bullets: [
      "Supports nationalized as well as cooperative bank",
      "AP Party Ledger Detection from Narration Match with Tally",
      "Auto Creates Receipt Payment & Contra voucher types",
    ],
    image: "/images/Bankpdf totallyimport.png",
  },
  {
    icon: "📋",
    title: "Master Import",
    description:
      "Bulk create ledgers, stock items, cost centres, and other masters from Excel spreadsheets.",
    bullets: [
      "Ledger, stock item, and group creation",
      "GST details auto-filled",
      "Opening balance support",
      "Handles 1000+ masters at once",
    ],
  },
  {
    icon: "🤖",
    title: "AI Validation",
    description:
      "Catch errors before they reach Tally. AI validates GSTIN, dates, amounts, and ledger names automatically.",
    bullets: [
      "GSTIN format and existence check",
      "Date and amount validation",
      "Ledger name fuzzy matching",
      "Color-coded error reporting",
    ],
    image: "/images/Aivalidationprocess.png",
  },
];

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      <HowToJsonLd />

      <Hero />
      <ComparisonTable />

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
            Everything You Need to Automate Tally
          </h2>
          <p className="mt-4 text-center text-gray-500 text-lg max-w-2xl mx-auto">
            From voucher posting to AI validation, TallyConnects handles it all.
          </p>

          <div className="mt-16 space-y-20">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bullets={feature.bullets}
                reversed={i % 2 === 1}
                image={feature.image}
              />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <PricingTable />
      <Testimonials />
      <FAQ />
    </>
  );
}
