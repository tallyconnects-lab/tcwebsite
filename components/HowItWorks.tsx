const steps = [
  {
    num: 1,
    title: "Connect",
    description: "Open Excel, click Connect Tally. Select your company.",
  },
  {
    num: 2,
    title: "Import",
    description: "Select your Excel/CSV file. Auto-mapping detects columns instantly.",
  },
  {
    num: 3,
    title: "Validate",
    description: "One-click AI validation. Auto-corrects errors, color-coded results.",
  },
  {
    num: 4,
    title: "Post",
    description: "Click Import to Tally. All vouchers posted in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          How It Works
        </h2>
        <p className="mt-4 text-center text-gray-500 text-lg max-w-xl mx-auto">
          From Excel to Tally in 4 simple steps.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold shadow-lg shadow-primary/25">
                {step.num}
              </div>
              <h3 className="mt-6 text-xl font-bold text-dark">{step.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
