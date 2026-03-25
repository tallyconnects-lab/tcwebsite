import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/download", label: "Download" },
    { href: "/blog", label: "Blog" },
  ],
  Solutions: [
    { href: "/excel-to-tally", label: "Excel to Tally" },
    { href: "/bank-statement-to-tally", label: "Bank Statement to Tally" },
    { href: "/pdf-to-tally", label: "PDF to Tally" },
    { href: "/gst-e-invoice", label: "GST E-Invoice" },
  ],
  Compare: [
    { href: "/compare/quick2tally", label: "vs Quick2Tally" },
    { href: "/compare/suvit", label: "vs Suvit (TaxOne)" },
    { href: "/compare/vouchrit", label: "vs Vouchrit" },
  ],
  Company: [
    { href: "/partner", label: "Partner Program" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Stop Manual Data Entry?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Download TallyConnects and start posting Excel data to Tally in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Trial
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Image
              src="/images/TCSlogonew.png"
              alt="TallyConnects"
              width={180}
              height={60}
              className="border border-gray-200 rounded-lg p-1"
              style={{ height: "60px", width: "auto", color: "transparent" }}
            />
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TallyConnects. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            support@xltotally.com
          </div>
        </div>
      </div>
    </footer>
  );
}
