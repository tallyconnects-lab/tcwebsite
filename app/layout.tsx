import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TallyConnects - Excel to Tally Automation | Import Invoices, Bank Statements & Masters",
    template: "%s | TallyConnects",
  },
  description:
    "Import Excel data to Tally ERP in one click. Post sales, purchase, bank statements, ledgers & stock items. AI-powered validation. GST compliant. E-Invoice IRN. Pay only per use.",
  keywords: [
    "Excel to Tally",
    "import Excel to Tally",
    "Tally data import",
    "bank statement to Tally",
    "bulk voucher entry Tally",
    "Tally automation",
    "GST e-invoice Excel",
    "ledger master import Tally",
    "TallyPrime Excel integration",
    "Tally ERP data entry tool",
  ],
  openGraph: {
    title: "TallyConnects - Excel to Tally Automation",
    description: "Import 10,000+ vouchers to Tally in minutes. AI validation. Pay per use.",
    type: "website",
    locale: "en_IN",
    siteName: "TallyConnects",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
