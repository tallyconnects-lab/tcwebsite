const rows = [
  {
    problem: "Entering 500 invoices",
    without: "8-10 hours of typing",
    with: "5 minutes, one click",
  },
  {
    problem: "Bank statement posting",
    without: "Copy-paste row by row",
    with: "Auto-import & match",
  },
  {
    problem: "Creating 100 ledgers",
    without: "2-3 hours in Tally",
    with: "2 minutes from Excel",
  },
  {
    problem: "GST compliance check",
    without: "Manual verification",
    with: "AI-powered validation",
  },
  {
    problem: "E-Invoice IRN generation",
    without: "Portal login per invoice",
    with: "Bulk generate from Excel",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Tired of Manual Data Entry in Tally?
        </h2>
        <p className="mt-4 text-center text-gray-500 text-lg max-w-2xl mx-auto">
          See how TallyConnects transforms your workflow.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 rounded-tl-lg">Problem</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-red-600">Without TallyConnects</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-primary rounded-tr-lg">With TallyConnects</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-gray-900">{row.problem}</td>
                  <td className="py-4 px-6 text-gray-500">{row.without}</td>
                  <td className="py-4 px-6 text-primary font-medium">{row.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
