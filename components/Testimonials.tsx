import Link from "next/link";

const testimonials = [
  {
    quote: "An absolute game-changer for our accounting team! The software makes importing Excel data into Tally so easy and accurate. We used to spend hours manually entering data, but now it's done in minutes. Highly recommend it to any business using Tally.",
    name: "Rikka Varshini",
    role: "Business User",
  },
  {
    quote: "This software is incredible! Importing data from Excel to Tally has never been this easy. The process is fast and error-free, saving me hours of manual work. It's a must-have for any business using Tally.",
    name: "Gothal & Co.",
    role: "Chartered Accountants",
  },
  {
    quote: "I am used bank templates only for last two years. It is old school but easy to use and understand well. Just recommendation update your template wise video in high resolution.",
    name: "Gaurav R Patel",
    role: "Local Guide",
  },
  {
    quote: "Offers a comprehensive set of features that streamline our workflow. From task management to data entry, it covers all our book-keeping needs efficiently. The customer support team is top-notch.",
    name: "GST Adda",
    role: "Tax Consultants",
  },
  {
    quote: "I have got the software designed in 2018 and after which there has been no looking back. I have access to all updates and we are really happy with excel to tally and their team. Definitely worth trying.",
    name: "Kadavakollu Associates",
    role: "Business Firm",
  },
  {
    quote: "I can't believe how much time we've saved since using this software! The integration with Tally is perfect, and I'm impressed by how well it handles large Excel files. A must-have for anyone looking to streamline their financial data imports!",
    name: "Parthipan Nagarajan",
    role: "Business User",
  },
  {
    quote: "My data gets imported in seconds. The team provides best support. No regrets about purchasing excel-tally software. Very time saving and most recommended software for all the CA's and Accountant out there.",
    name: "Chand Asopa",
    role: "Chartered Accountant",
  },
  {
    quote: "Totally amazing experience! They have really smooth software with 100% customer satisfaction. I live in Dubai (UAE) and the cost-output benefit ratio is immense. This is 100% worth service/software.",
    name: "Nikeeta Bahar",
    role: "Dubai, UAE",
  },
  {
    quote: "Excel-Tally is a powerful tool designed to simplify the process of data import into Tally. With its user-friendly interface and robust functionality, it makes importing data a breeze, saving users valuable time and effort.",
    name: "Sampat Kumar",
    role: "Business User",
  },
  {
    quote: "I was searching utility from 1 year, I used other monthly subscription also but then I realise what is difference. Very good support... they solve my issue within time and they all have good knowledge of software. Happy user.",
    name: "Anil Ahuja",
    role: "Business User",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Trusted by Accountants &amp; Businesses
        </h2>
        <p className="mt-3 text-center text-gray-500 text-lg">
          See what our users say on{" "}
          <Link
            href="https://www.google.com/maps?cid=10038447292421933675"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Google Reviews
          </Link>
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col">
              <StarRating />
              <p className="mt-3 text-gray-700 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://www.google.com/maps?cid=10038447292421933675"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            View all reviews on Google →
          </Link>
        </div>
      </div>
    </section>
  );
}
