import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://exceltotallyprime.com"),
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
    "PDF to Tally",
    "Tally API integration",
    "TallyConnects",
  ],
  openGraph: {
    title: "TallyConnects - Excel to Tally Automation",
    description: "Import 10,000+ vouchers to Tally in minutes. AI validation. Pay per use. Rated 4.9 stars by 25,000+ users.",
    type: "website",
    locale: "en_IN",
    siteName: "TallyConnects",
    url: "https://exceltotallyprime.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TallyConnects - Excel to Tally Automation",
    description: "Import 10,000+ vouchers to Tally in minutes. AI validation. Pay per use.",
  },
  alternates: {
    canonical: "https://exceltotallyprime.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TDK0QWEPJ1" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TDK0QWEPJ1');
          gtag('config', 'GT-WK5CGTXG');`}
        </Script>
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TallyConnects",
              url: "https://exceltotallyprime.com",
              description: "Excel to Tally automation software by IRRIION TECHNOLOGIES. Trusted by 25,000+ users.",
              email: "support@tallyconnects.in",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "366",
                bestRating: "5",
              },
            }),
          }}
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
