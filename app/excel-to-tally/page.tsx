import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TallyConnects API - Tally Prime Integration Solutions",
  description:
    "Seamless Tally Prime API integration with ERP, DMS, SAP, and other major software platforms. Trusted by 25,000+ users worldwide. Rated 4.9 stars.",
};

const integrations = [
  { name: "ERP Systems", desc: "Integrate Tally Prime with any ERP platform for real-time data sync" },
  { name: "DMS (Document Management)", desc: "Automate document flow between your DMS and Tally Prime" },
  { name: "SAP Integration", desc: "Bi-directional data exchange between SAP and Tally Prime" },
  { name: "E-Commerce Platforms", desc: "Sync orders, invoices, and payments from e-commerce to Tally" },
  { name: "Banking & Payment Gateways", desc: "Automate reconciliation and payment posting to Tally Prime" },
  { name: "Custom Software", desc: "Connect any custom application to Tally Prime via our flexible API" },
];

const features = [
  { title: "Real-Time Sync", desc: "Push and pull data from Tally Prime in real-time with low latency" },
  { title: "Secure & Reliable", desc: "Enterprise-grade security with encrypted data transfer and authentication" },
  { title: "Easy Integration", desc: "Well-documented RESTful APIs with SDKs and sample code for quick setup" },
  { title: "Scalable Architecture", desc: "Handle thousands of transactions per minute with our robust infrastructure" },
];

const stats = [
  { value: "25,000+", label: "Trusted Users" },
  { value: "4.9", label: "Star Rating" },
  { value: "10+", label: "Years of Expertise" },
  { value: "100+", label: "Integrations Delivered" },
];

export default function TallyConnectsAPIPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TallyConnects API Integration
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Seamless Tally Prime integration with ERP, DMS, SAP, and other major software platforms through robust and reliable APIs.
          </p>
          <Link href="/contact" className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Contact Us for Integration
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About IRRIION TECHNOLOGIES</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              IRRIION TECHNOLOGIES is a trusted Tally partner with over a decade of expertise in delivering seamless Tally integration services. Our flagship product, Excel to Tally Prime Software, is rated 4.9 stars and trusted by more than 25,000 users worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
              We specialize in providing innovative solutions that integrate Tally Prime with various ERP, DMS, SAP, and other major software platforms through robust and reliable API integrations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
              Our vision is to offer exceptional solutions that simplify working with Tally Prime, enhancing productivity by ensuring smooth integration with essential software platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center bg-primary/5 rounded-xl p-6">
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Integration Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">API Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary text-white font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Tally Integration?</h2>
          <p className="text-lg text-white/80 mb-8">Get in touch with our team to discuss your integration requirements.</p>
          <Link href="/contact" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
