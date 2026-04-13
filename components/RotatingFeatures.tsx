"use client";

import { useState, useEffect } from "react";

const FEATURES = [
  "Excel-Based User Friendly Software",
  "One Template, 20+ Formats — Just Select and Go",
  "Intelligent Column Matching for Effortless Import",
  "Smart Find & Replace with Tally Data Validation",
  "AI Validation Tally for Error-Free Import",
  "Auto-Fill Party Information from Tally & GST Portal",
  "Unlimited Bill References & Cost Centers Per Ledger",
  "PDF to Excel Conversion with Smart Ledger Matching",
];

export default function RotatingFeatures() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % FEATURES.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 h-10 sm:h-12 flex items-center justify-center overflow-hidden">
      <p
        className={`text-2xl sm:text-3xl font-medium text-primary/80 transition-all duration-400 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {FEATURES[index]}
      </p>
    </div>
  );
}
