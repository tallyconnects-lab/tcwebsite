"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: typeof window !== "undefined" ? window.location.hostname : "",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-primary hover:underline font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
          placeholder="How can we help?"
        />
      </div>
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
