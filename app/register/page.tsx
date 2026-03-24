import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - TallyConnects",
  description: "Create your TallyConnects account and start importing Excel data to Tally in minutes.",
};

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-dark mb-2">
          Create Your Account
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Get started with TallyConnects — free trial included
        </p>

        <div className="rounded-2xl border-2 border-primary/20 bg-white shadow-lg shadow-primary/5 overflow-hidden">
          <iframe
            src="https://xltotally.com/authentication/register?iframe=1"
            title="TallyConnects Registration"
            className="w-full border-0"
            style={{ height: "700px" }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
