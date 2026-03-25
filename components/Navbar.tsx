"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/excel-to-tally", label: "Excel to Tally" },
  { href: "/bank-statement-to-tally", label: "Bank Statement" },
  { href: "/partner", label: "Partner Program" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/TCSlogonew.png"
              alt="TallyConnects"
              width={180}
              height={48}
              className="border border-gray-200 rounded-lg p-1"
              style={{ height: "60px", width: "auto", color: "transparent" }}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-base font-semibold text-gray-700 hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/download"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-base font-semibold transition-colors"
            >
              Get Free Trial
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-primary py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="block bg-primary text-white text-center px-5 py-2.5 rounded-lg font-medium"
          >
            Get Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
}
