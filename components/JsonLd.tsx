export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TallyConnects",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    description:
      "Excel-based Tally Automation that imports invoices, bank statements, masters, and more from Excel directly into Tally ERP. AI-powered validation ensures 99% error-free data.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free trial available. Pay-per-use token model starting at Rs 0.10 per voucher.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "366",
      bestRating: "5",
    },
    featureList: [
      "Excel to Tally Import",
      "AI Data Validation",
      "Bank Statement Processing",
      "GST Compliance",
      "E-Invoice IRN Generation",
      "Master Data Import",
      "Smart Column Auto-Mapping",
      "PDF to Tally Conversion",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HowToJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Import Excel Data to Tally",
    description: "Import any Excel or CSV data into Tally ERP in 4 simple steps using TallyConnects.",
    step: [
      {
        "@type": "HowToStep",
        name: "Connect to Tally",
        text: "Open Excel, click Connect Tally on the TallyConnects ribbon. Select your company.",
      },
      {
        "@type": "HowToStep",
        name: "Import Your Data",
        text: "Select your Excel or CSV file. Auto-mapping detects and maps columns instantly.",
      },
      {
        "@type": "HowToStep",
        name: "Validate with AI",
        text: "Click AI Validate. Auto-corrects GSTIN, dates, GST rates, amounts. Color-coded error reporting.",
      },
      {
        "@type": "HowToStep",
        name: "Post to Tally",
        text: "Click Import Excel to Tally. All vouchers posted in seconds with zero manual entry.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
