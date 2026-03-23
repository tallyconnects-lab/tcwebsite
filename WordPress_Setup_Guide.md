# TallyConnects WordPress Website - Complete Setup Guide

---

## 1. REQUIRED PLUGINS (Install First)

| Plugin | Purpose | Free/Pro |
|--------|---------|----------|
| **Elementor** | Page builder (drag-drop design) | Free (Pro recommended) |
| **RankMath SEO** | SEO settings, sitemaps, schema | Free |
| **RankMath Schema Pro** | Advanced JSON-LD schemas | Free with RankMath |
| **WP Rocket** or **LiteSpeed Cache** | Page speed optimization | Free/Pro |
| **Starter Templates** (by Starter) | Pre-built Elementor templates | Free |
| **Essential Addons for Elementor** | Extra widgets (pricing, FAQ accordion, comparison) | Free |
| **Schema Pro** or use RankMath | SoftwareApplication schema | Free |
| **Jepack Boost** or **Smush** | Image optimization | Free |
| **WPForms Lite** | Contact form | Free |
| **Insert Headers and Footers** | Add JSON-LD / tracking codes | Free |
| **TranslatePress** | Hindi + English (optional) | Free |

---

## 2. THEME SETUP

**Theme:** Starter theme (starter theme for Elementor) or Hello Elementor
- Install "Hello Elementor" theme (lightest theme, made for Elementor)
- Set Elementor as default page builder
- In Elementor Settings: Enable "Stretch Section" for full-width layouts

**Brand Colors (set in Elementor Global Settings):**
- Primary: `#078586` (teal)
- Primary Dark: `#065e5f`
- Primary Light: `#0aa8a9`
- Accent: `#f59e0b` (amber for CTAs that need attention)
- Dark: `#0f172a`
- Body Text: `#334155`
- Light BG: `#f8fafc`

**Fonts:**
- Headings: Inter (Bold/Semibold)
- Body: Inter (Regular)

---

## 3. PAGE STRUCTURE & NAVIGATION

### Primary Menu:
```
Home | Features | Pricing | Excel to Tally | Bank Statement | Partner Program | Blog | Download (Button)
```

### Footer Menu:
```
Product: Features, Pricing, Download, Blog
Solutions: Excel to Tally, Bank Statement to Tally, PDF to Tally, GST E-Invoice
Compare: vs Quick2Tally, vs Suvit, vs Vouchrit
Company: Partner Program, Contact Us
```

### Pages to Create (14 total):
1. Home (Front Page)
2. Features
3. Pricing
4. Download
5. Partner Program
6. Contact
7. Excel to Tally
8. Bank Statement to Tally
9. PDF to Tally
10. GST E-Invoice
11. Compare: TallyConnects vs Quick2Tally
12. Compare: TallyConnects vs Suvit
13. Compare: TallyConnects vs Vouchrit
14. Blog (Posts Page)

---

## 4. PAGE-BY-PAGE CONTENT & SEO SETTINGS

---

### PAGE 1: HOME

**RankMath SEO Settings:**
- SEO Title: `TallyConnects - Excel to Tally Automation | Import Invoices, Bank Statements & Masters`
- Meta Description: `Import Excel data to Tally ERP in one click. Post sales, purchase, bank statements, ledgers & stock items. AI-powered validation. GST compliant. E-Invoice IRN. Pay only per use.`
- Focus Keyword: `Excel to Tally`

**Elementor Sections:**

**Section 1: HERO (Full Width, gradient BG white→light teal)**
- Heading (H1): `Excel to Tally — Automated`
- Subheading: `Import invoices, bank statements, masters, and more from Excel directly into Tally ERP. No manual entry. No errors. 10x faster.`
- Button 1 (Primary): `Download Free Trial` → link to /download
- Button 2 (Outline): `View Pricing` → link to /pricing
- Right side: Product screenshot image (Excel ribbon showing TallyConnects)
- Below: Trust bar with 3 items:
  - `500+ Businesses Trust TallyConnects`
  - `Works with Tally ERP 9 & TallyPrime`
  - `GST & E-Invoice Ready`

**Section 2: PAIN POINTS (White BG)**
- Heading (H2): `Tired of Manual Data Entry in Tally?`
- Comparison table (use Elementor Table or Essential Addons Comparison Table):

| Problem | Without TallyConnects | With TallyConnects |
|---------|----------------------|---------------------|
| Entering 500 invoices | 8-10 hours of typing | 5 minutes, one click |
| Bank statement posting | Copy-paste row by row | Auto-import & match |
| Creating 100 ledgers | 2-3 hours in Tally | 2 minutes from Excel |
| GST compliance check | Manual verification | AI-powered validation |
| E-Invoice IRN generation | Portal login per invoice | Bulk generate from Excel |

**Section 3: KEY FEATURES (Light Gray BG #f8fafc)**
- Heading (H2): `Everything You Need to Automate Tally`
- Subheading: `From voucher posting to AI validation, TallyConnects handles it all.`
- 4 Feature blocks (alternating image left/right):

Feature 1:
- Icon: 📄 or custom icon
- H3: `Voucher Posting`
- Text: `Import sales, purchase, receipt, payment, journal, and contra vouchers from Excel to Tally in one click.`
- Bullets: All voucher types supported | Multi-line and complex vouchers | Auto-maps columns from any format | GST-compliant with tax breakup
- Image: Screenshot of Excel with voucher data

Feature 2 (reversed):
- Icon: 🏦
- H3: `Bank Statement Import`
- Text: `Import bank statements directly into Tally. Smart narration matching auto-identifies parties and ledgers.`
- Bullets: Supports all major bank formats | AI narration matching | Auto-creates receipts and payments | Reconciliation-ready posting
- Image: Screenshot of bank statement flow

Feature 3:
- Icon: 📋
- H3: `Master Import`
- Text: `Bulk create ledgers, stock items, cost centres, and other masters from Excel spreadsheets.`
- Bullets: Ledger, stock item, and group creation | GST details auto-filled | Opening balance support | Handles 1000+ masters at once
- Image: Screenshot of master import

Feature 4 (reversed):
- Icon: 🤖
- H3: `AI Validation`
- Text: `Catch errors before they reach Tally. AI validates GSTIN, dates, amounts, and ledger names automatically.`
- Bullets: GSTIN format and existence check | Date and amount validation | Ledger name fuzzy matching | Color-coded error reporting
- Image: Screenshot showing color-coded validation results

- Button below: `See All Features →` → /features

**Section 4: HOW IT WORKS (White BG)**
- Heading (H2): `4 Simple Steps to Go from Excel to Tally`
- 4 columns with numbered circles:
  1. **Connect** — Open Excel, click Connect Tally. Select your company. Done.
  2. **Import** — Select your Excel/CSV file. Auto-mapping detects columns instantly.
  3. **Validate** — One-click AI validation. Auto-corrects errors, color-coded results.
  4. **Post** — Click Import to Tally. All vouchers posted in seconds. Zero manual entry.
- Optional: Add a short video/GIF here showing the 4-step process

**Section 5: PRICING PREVIEW (Light Gray BG)**
- Heading (H2): `Pay Only for What You Use`
- 4 pricing cards:
  - Starter: 100 Tokens / Rs 10 / Try it out
  - Professional: 500 Tokens / Rs 40 / Small businesses (POPULAR badge)
  - Business: 2000 Tokens / Rs 150 / Growing companies
  - Enterprise: 10000 Tokens / Rs 600 / High volume users
- Token consumption mini-table:
  - Post voucher: 0.10 token
  - AI Validation: 0.50 token
  - PDF to Excel: 0.25 token
- Note: `No monthly subscription. No hidden fees. Buy tokens, use anytime. Tokens never expire.`
- Button: `View Full Pricing →` → /pricing

**Section 6: TESTIMONIALS (White BG)**
- Heading (H2): `What Our Users Say`
- 3 testimonial cards (use Elementor Testimonial Carousel):
  1. "TallyConnects saved us 6 hours every day. We process 500+ invoices daily and it just works." — Rajesh M., CA Firm
  2. "Bank statement import is a game-changer. What took 2 hours now takes 5 minutes." — Priya S., Accountant
  3. "The AI validation catches errors before they reach Tally. Our data accuracy is now 99.9%." — Vikram T., Business Owner

**Section 7: FAQ (Light Gray BG)**
- Heading (H2): `Frequently Asked Questions`
- Use Elementor Accordion or Essential Addons FAQ widget:
  - Q: Does TallyConnects work with Tally ERP 9? A: Yes, it works with both Tally ERP 9 and TallyPrime.
  - Q: Do I need an internet connection? A: Yes, for login, validation, and template conversion. Tally connection is local (localhost).
  - Q: Is my data safe? A: Your data is processed securely via encrypted APIs. We do not store your Tally data on our servers.
  - Q: Can I use it on multiple computers? A: Yes, login with your account on any computer.
  - Q: What Excel versions are supported? A: Microsoft Excel 2016, 2019, 2021, and Microsoft 365 (Windows only).
  - Q: Do tokens expire? A: No, purchased tokens never expire. Use them anytime.
  - Q: What if a ledger doesn't exist in Tally? A: TallyConnects highlights unmatched ledgers and can auto-create them in Tally for you.
  - Q: How is this different from Tally's built-in Excel import? A: TallyConnects offers smart mapping, AI validation, bank narration matching, e-invoice support, and handles complex multi-line vouchers.

**RankMath Schema (add via RankMath > Schema):**
- Type: SoftwareApplication
- Name: TallyConnects
- Category: BusinessApplication
- OS: Windows
- Rating: 4.9 / 366 reviews
- Price: 0 (Free trial)
- Also add FAQPage schema (RankMath auto-detects FAQ blocks)

---

### PAGE 2: FEATURES

**RankMath SEO Settings:**
- SEO Title: `Features - TallyConnects Excel to Tally Automation`
- Meta Description: `Explore all TallyConnects features: voucher posting, bank statement import, AI validation, GST compliance, e-invoice IRN, master data import, and more.`
- Focus Keyword: `Tally automation features`

**Content: 9 feature sections with alternating white/gray backgrounds**

Section 1: Excel to Tally — Voucher Posting
- H2: Post Sales, Purchase, Credit Notes & Debit Notes Instantly
- Import from any Excel or CSV file
- Smart column auto-mapping — no manual setup
- Supports inventory and non-inventory vouchers
- Handles multi-line items, discounts, GST calculations
- Batch posting — 10,000+ rows in minutes
- Token cost: Just Rs 0.10 per voucher
- Supported types: Sales, Purchase, Credit Note, Debit Note (with/without Inventory), Payment, Receipt, Contra, Journal, Multi DR/CR
- IMAGE: Screenshot of voucher posting flow

Section 2: Bank Statement Import
- H2: Import Bank Statements to Tally in Minutes
- Support for all major banks (HDFC, SBI, ICICI, Axis, Kotak, and more)
- Auto-detect bank format from CSV/Excel
- Smart narration matching — auto-assigns ledgers
- Find & Replace for bulk ledger assignment
- Auto-creates Payment/Receipt vouchers
- Bank reconciliation wizard
- IMAGE: Screenshot of bank statement processing

Section 3: Master Data Import
- H2: Bulk Create Ledgers & Stock Items in Tally
- Ledger Master: Import 100s of ledgers, set group/address/GSTIN/PAN/opening balance, auto-validate groups
- Item Master: Bulk create stock items with HSN codes, UOM, GST rates, opening stock
- IMAGE: Screenshot of master import

Section 4: Smart Matching & AI Validation
- H2: AI-Powered Data Validation Before Posting
- Auto-Match Ledgers — Fuzzy matching finds closest Tally ledger
- Auto-Match Items — Match stock items with Tally's item list
- Find & Replace — Bulk rename/map entries
- Color-Coded Results — Blue (corrected), Red (error), Yellow (review)
- AI auto-corrects: GSTIN format, state codes, dates, GST rates, amounts
- Original values preserved as cell comments for audit trail
- IMAGE: Screenshot showing color-coded validation

Section 5: GST Compliance
- H2: GST-Ready from Day One
- GSTIN Lookup — Verify any GSTIN from government database
- Auto-Create GST Ledgers — CGST, SGST, IGST, Cess
- Smart GST Calculation — Auto-splits CGST+SGST (intra-state) or IGST (inter-state)
- HSN Code Support — Map HSN/SAC codes to items
- IMAGE: Screenshot of GST features

Section 6: E-Invoice (IRN) Generation
- H2: Generate E-Invoice IRN Directly from Excel
- Bulk IRN generation for multiple invoices
- Cancel IRN within 24-hour window
- Schema validation before submission
- Compliant with latest GST e-invoice standards
- No need to login to the e-invoice portal

Section 7: Multi DR/CR Vouchers
- H2: Complex Vouchers Made Simple
- Multiple debit and credit entries per voucher
- Up to 30 ledger lines per voucher
- Inventory items within multi-line vouchers
- Perfect for journal entries, salary disbursements, expense allocation

Section 8: E-Commerce Integration
- H2: Sync E-Commerce Orders to Tally
- Amazon, Flipkart, Meesho, Myntra order import
- Map platform charges, shipping fees, discounts to Tally ledgers
- Order and payment reconciliation
- Bulk posting of e-commerce transactions

Section 9: PDF to Tally
- H2: Convert PDF Invoices to Tally Entries
- Upload PDF invoices or bank statements
- AI extracts table data into Excel format
- Review and edit extracted data
- Post directly to Tally
- Token cost: Rs 0.25 per record

---

### PAGE 3: PRICING

**RankMath SEO Settings:**
- SEO Title: `Pricing - TallyConnects | Pay Per Use Token Plans`
- Meta Description: `TallyConnects pricing: pay only for what you use. Starting at Rs 0.10 per voucher. No monthly subscription. No hidden fees. Tokens never expire.`
- Focus Keyword: `TallyConnects pricing`

**Content:**
- H1: Pay Only for What You Use
- Subtitle: No monthly subscription. No hidden fees. Buy tokens, use anytime.

Token Plans (use Elementor Pricing Table widget):
| Plan | Tokens | Price | Best For |
|------|--------|-------|----------|
| Starter | 100 | Rs 10 | Try it out |
| Professional | 500 | Rs 40 | Small businesses |
| Business | 2,000 | Rs 150 | Growing companies |
| Enterprise | 10,000 | Rs 600 | High volume users |

Token Consumption Rates:
| Operation | Token Cost |
|-----------|-----------|
| Post voucher to Tally | 0.10 |
| AI Data Validation | 0.50 |
| PDF to Excel conversion | 0.25 |

Key points:
- Tokens never expire
- Works on any computer — not machine-locked
- Free trial included with download
- No subscription, no recurring charges

CTA: Download Free Trial

---

### PAGE 4: DOWNLOAD

**RankMath SEO Settings:**
- SEO Title: `Download TallyConnects - Free Trial | Excel to Tally Automation`
- Meta Description: `Download TallyConnects free trial. Import Excel data to Tally in one click. Works with Excel 2016+, Tally ERP 9 & TallyPrime. Windows only.`
- Focus Keyword: `download TallyConnects`

**Content:**
- H1: Download TallyConnects
- Big download button (link to your download file)
- Free trial included badge
- System Requirements: Windows 10/11, Excel 2016/2019/2021/365, Internet connection, Tally ERP 9 or TallyPrime
- Quick Start: 1. Download file → 2. Open in Excel → 3. Sign up for account → 4. Connect to Tally → 5. Start importing

---

### PAGE 5: PARTNER PROGRAM

**RankMath SEO Settings:**
- SEO Title: `Partner Program - Earn with TallyConnects | 50% Commission`
- Meta Description: `Join the TallyConnects Partner Program. Earn 50% commission on first purchase and 10% recurring. Perfect for CAs, Tally consultants, and accounting firms.`
- Focus Keyword: `TallyConnects partner program`

**Content:**
- H1: Earn with TallyConnects Partner Program
- How it works: Sign up → Get referral code → Share → Earn 50% first purchase → 10% recurring
- Who can join: CAs, Tally consultants/trainers, Accounting firms, IT providers, Software resellers
- Benefits: Dashboard, real-time tracking, wallet with easy withdrawals, marketing materials, priority support
- CTA: Become a Partner

---

### PAGE 6: CONTACT

**RankMath SEO Settings:**
- SEO Title: `Contact Us - TallyConnects Support`
- Meta Description: `Get help with TallyConnects. Email support@xltotally.com or use our contact form.`

**Content:**
- H1: Contact Us
- Email: support@xltotally.com
- Knowledge Base: xltotally.com/knowledge-base
- Contact form (WPForms): Name, Email, Message, Submit

---

### PAGE 7: EXCEL TO TALLY (SEO Landing Page)

**RankMath SEO Settings:**
- SEO Title: `Excel to Tally Software | Import Any Excel Data to Tally in One Click`
- Meta Description: `Import sales, purchase, bank statements, ledgers & stock items from Excel to Tally ERP. Smart auto-mapping. AI validation. Just Rs 0.10 per voucher.`
- Focus Keyword: `Excel to Tally`
- Secondary Keywords: `import Excel to Tally`, `Excel to Tally software`, `Excel to TallyPrime`

**Content:**
- H1: Import Any Excel Data to Tally in One Click
- What you can import: Sales, Purchase, Credit/Debit Notes, Receipts, Payments, Journals, Multi DR/CR, Masters
- How auto-mapping works: 3-level matching (exact → synonym → fuzzy) — works with ANY Excel format
- AI validation: auto-corrects GSTIN, state, dates, amounts before posting
- Cost: Rs 0.10 per voucher — import 10,000 vouchers for just Rs 1,000
- Supported: Tally ERP 9, TallyPrime, single/multi-user, cloud
- FAQ specific to Excel-to-Tally
- CTA: Download Free Trial
- Add HowTo schema via RankMath

---

### PAGE 8: BANK STATEMENT TO TALLY (SEO Landing Page)

**RankMath SEO Settings:**
- SEO Title: `Bank Statement to Tally | Import HDFC, SBI, ICICI Statements Automatically`
- Meta Description: `Import bank statements to Tally in minutes. Supports HDFC, SBI, ICICI, Axis, Kotak. Smart narration matching. Auto-creates receipts & payments.`
- Focus Keyword: `bank statement to Tally`

**Content:**
- H1: Import Bank Statements to Tally in Minutes
- Supported banks: HDFC, SBI, ICICI, Axis, Kotak, and more
- PDF upload with AI extraction
- Smart narration matching — auto-identifies parties
- Auto voucher type (Receipt/Payment/Contra)
- Bank reconciliation
- CTA: Download Free Trial

---

### PAGE 9: PDF TO TALLY (SEO Landing Page)

**RankMath SEO Settings:**
- SEO Title: `PDF to Tally | Convert PDF Invoices & Bank Statements to Tally`
- Meta Description: `Convert PDF invoices and bank statements to Tally entries. AI-powered extraction. Review and edit before posting. Rs 0.25 per record.`
- Focus Keyword: `PDF to Tally`

**Content:**
- H1: Convert PDF Invoices & Bank Statements to Tally
- Upload PDF → AI extracts data → Review in Excel → Post to Tally
- Supports: Invoices, bank statements, any tabular PDF
- Token cost: Rs 0.25 per record
- CTA: Download Free Trial

---

### PAGE 10: GST E-INVOICE (SEO Landing Page)

**RankMath SEO Settings:**
- SEO Title: `GST E-Invoice from Excel | Generate IRN Without Portal Login`
- Meta Description: `Generate GST e-invoice IRN directly from Excel. Bulk IRN generation, schema validation, cancel IRN. GSTIN lookup and auto GST calculation included.`
- Focus Keyword: `GST e-invoice from Excel`

**Content:**
- H1: Generate GST E-Invoice IRN Directly from Excel
- GSTIN lookup from government database
- Auto GST calculation (IGST vs CGST/SGST)
- Auto-create GST ledgers in Tally
- Bulk IRN generation
- Schema validation before submission
- Cancel IRN within 24 hours
- CTA: Download Free Trial

---

### PAGE 11: VS QUICK2TALLY

**RankMath SEO Settings:**
- SEO Title: `TallyConnects vs Quick2Tally - Feature Comparison 2026`
- Meta Description: `Compare TallyConnects vs Quick2Tally. See why TallyConnects Excel-based automation with pay-per-use pricing beats Quick2Tally's yearly subscription.`
- Focus Keyword: `TallyConnects vs Quick2Tally`

**Comparison Table:**
| Feature | TallyConnects | Quick2Tally |
|---------|--------------|-------------|
| Platform | Works inside Excel | Separate desktop app |
| Pricing | Pay per use (Rs 0.10/voucher) | Rs 4,000-13,000/year |
| AI Validation | Yes — auto-corrects 99% errors | No |
| E-Invoice IRN | Yes | No |
| Bank Narration Matching | AI-powered fuzzy matching | Template-based |
| Auto-Create Masters | Yes — ledgers, items, UOM | Limited |
| Machine Locked | No — use from any computer | Yes |
| PDF to Tally | Yes (AI extraction) | No |
| E-Commerce Import | Amazon, Flipkart, Meesho, Myntra | Amazon, Flipkart |

---

### PAGE 12: VS SUVIT (TAXONE)

**RankMath SEO Settings:**
- SEO Title: `TallyConnects vs Suvit (TaxOne by Vyapar) - Comparison 2026`
- Meta Description: `Compare TallyConnects vs Suvit TaxOne. Excel-based automation with transparent pay-per-use pricing vs web platform with hidden pricing.`
- Focus Keyword: `TallyConnects vs Suvit`

**Comparison Table:**
| Feature | TallyConnects | Suvit (TaxOne) |
|---------|--------------|----------------|
| Platform | Works inside Excel | Separate web app |
| Pricing | Transparent pay per use | Hidden — request callback |
| Works Offline with Tally | Yes (local connection) | No — cloud-based |
| Learning Curve | Zero (it's Excel) | New interface to learn |
| E-Invoice | Yes | No |
| PDF to Tally | Yes | Yes |
| Machine Locked | No | Account-based |
| GST Reconciliation | Basic | Advanced |
| WhatsApp Automation | No | Yes |
| User Base | 500+ businesses | 10,000+ firms |

---

### PAGE 13: VS VOUCHRIT

**RankMath SEO Settings:**
- SEO Title: `TallyConnects vs Vouchrit - Feature Comparison 2026`
- Meta Description: `Compare TallyConnects vs Vouchrit. Excel-native automation with transparent pricing vs separate app with hidden costs.`
- Focus Keyword: `TallyConnects vs Vouchrit`

**Comparison Table:**
| Feature | TallyConnects | Vouchrit |
|---------|--------------|----------|
| Platform | Works inside Excel | Separate web app |
| Pricing | Transparent per use | Hidden pricing |
| AI Validation | Yes — GSTIN, dates, amounts | Claims AI-powered |
| E-Invoice | Yes | No |
| E-Commerce | Amazon, Flipkart, Meesho, Myntra | No |
| Templates | 19+ voucher types | Limited |
| PDF to Tally | Yes | No |
| Machine Locked | No | Unknown |
| User Base | 500+ businesses | 22,000+ CAs |

---

### PAGE 14: BLOG

Set as WordPress Posts Page. Create categories:
- Tally Automation
- GST & Compliance
- Excel Tips
- Bank Statements
- Product Updates

**First 3 blog post ideas (write these for SEO):**
1. "How to Import 10,000 Invoices to Tally in 5 Minutes" (target: bulk import to Tally)
2. "Complete Guide to Bank Statement Import in Tally" (target: bank statement to Tally)
3. "GST E-Invoice: Generate IRN Directly from Excel" (target: e-invoice from Excel)

---

## 5. JSON-LD SCHEMA CODE

Add this to your homepage via RankMath > Edit Schema or via "Insert Headers and Footers" plugin:

### SoftwareApplication Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TallyConnects",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Windows",
  "description": "Excel-based Tally Automation that imports invoices, bank statements, masters, and more from Excel directly into Tally ERP. AI-powered validation ensures 99% error-free data.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "description": "Free trial available. Pay-per-use token model starting at Rs 0.10 per voucher."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "366",
    "bestRating": "5"
  },
  "featureList": [
    "Excel to Tally Import",
    "AI Data Validation",
    "Bank Statement Processing",
    "GST Compliance",
    "E-Invoice IRN Generation",
    "Master Data Import",
    "Smart Column Auto-Mapping",
    "PDF to Tally Conversion"
  ]
}
```

### HowTo Schema (Homepage & Excel-to-Tally page)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Import Excel Data to Tally",
  "description": "Import any Excel or CSV data into Tally ERP in 4 simple steps using TallyConnects.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Connect to Tally",
      "text": "Open Excel, click Connect Tally on the TallyConnects ribbon. Select your company."
    },
    {
      "@type": "HowToStep",
      "name": "Import Your Data",
      "text": "Select your Excel or CSV file. Auto-mapping detects and maps columns instantly."
    },
    {
      "@type": "HowToStep",
      "name": "Validate with AI",
      "text": "Click AI Validate. Auto-corrects GSTIN, dates, GST rates, amounts. Color-coded error reporting."
    },
    {
      "@type": "HowToStep",
      "name": "Post to Tally",
      "text": "Click Import Excel to Tally. All vouchers posted in seconds with zero manual entry."
    }
  ]
}
```

### Organization Schema (Sitewide via RankMath Settings)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TallyConnects",
  "url": "https://xltotally.com",
  "email": "support@xltotally.com",
  "description": "Excel-based Tally Automation for importing data, AI validation, and GST compliance."
}
```

---

## 6. IMAGE & VIDEO GUIDELINES

### Images Needed:
1. **Product Screenshots** (most important):
   - Excel ribbon showing TallyConnects tab (you already have this)
   - Voucher data in Excel with color-coded validation
   - Bank statement import flow
   - AI validation results (blue/red color coding)
   - Connect to Tally dialog
   - Template selection dialog
   - Before/After comparison (manual vs automated)

2. **Icons**: Use Elementor's built-in icons or Font Awesome

3. **Image Optimization**:
   - Save as WebP format
   - Max width 1200px for full-width, 600px for half-width
   - Add alt text with keywords (e.g., "Excel to Tally voucher import screenshot")
   - Use lazy loading (Elementor does this automatically)

### Videos:
- Record 2-3 minute demo video showing the 4-step workflow
- Upload to YouTube, embed on homepage and feature pages
- Add Video schema via RankMath for video SEO

---

## 7. SPEED OPTIMIZATION CHECKLIST

After building all pages:
1. Install WP Rocket or LiteSpeed Cache
2. Enable page caching, browser caching, GZIP compression
3. Optimize images with Smush or ShortPixel
4. Minify CSS/JS (WP Rocket does this)
5. Use Cloudflare CDN (you already have this)
6. Test with Google PageSpeed Insights — aim for 90+
7. Enable lazy loading for images and videos

---

## 8. RANKMATH SEO CHECKLIST (After All Pages Built)

1. Set homepage as static front page (Settings > Reading)
2. Set blog page as Posts page
3. Configure RankMath:
   - Set organization name, logo, social profiles
   - Enable sitemap (auto-generated)
   - Enable breadcrumbs
   - Set up Local SEO if applicable
4. Submit sitemap to Google Search Console
5. Add Google Analytics tracking code
6. Enable FAQ schema auto-detection
7. Check all pages score 80+ in RankMath SEO analysis
