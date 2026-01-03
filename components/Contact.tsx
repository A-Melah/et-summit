"use client";

import React, { useState, useEffect } from "react";

type ContactProps = {
  initialSubject?: string;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = ({ initialSubject }: ContactProps) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-us", ...formData }),
      });

      setIsSuccess(true);

      // Reset after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch {
      // Keep failure simple but non-blocking
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-14 animate-in fade-in duration-700">
      {/* Header */}
      <header className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-5">
          Connect with the Summit Secretariat
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          The Committee is available to assist with partnership inquiries,
          delegate support, and strategic collaborations for the 2026 Summit.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 h-full flex flex-col space-y-8">
          {/* Info Card */}
          <div className="rounded-[2.5rem] bg-[#1D1D4B] p-8 sm:p-10 text-white shadow-2xl">
            <h3 className="text-xl font-black mb-8">
              Administrative Information
            </h3>

            <div className="space-y-7">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 flex items-center justify-center rounded-2xl bg-white/10 p-3 text-[#D4A017]">
                  {/* ORIGINAL ICON — RESTORED */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Official Email
                  </p>
                  <p className="mt-1 font-semibold break-all text-sm sm:text-base">
                    info@enterprisetransformationsummit.org.ng
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 flex items-center justify-center rounded-2xl bg-white/10 p-3 text-[#D4A017]">
                  {/* ORIGINAL ICON — RESTORED */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    WhatsApp Contact
                  </p>
                  <a
                    href="https://wa.me/2347033267555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-semibold text-sm sm:text-base hover:text-[#D4A017] transition"
                  >
                    +234 703 326 7555
                  </a>
                  <p className="mt-1 text-xs text-slate-400">
                    Office Hours: Monday – Friday, 9:00 AM – 5:00 PM (WAT)
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 flex items-center justify-center rounded-2xl bg-white/10 p-3 text-[#D4A017]">
                  {/* ORIGINAL ICON — RESTORED */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Summit Venue
                  </p>
                  <p className="mt-1 font-semibold text-sm sm:text-base leading-snug">
                    Astro Halls, G.U Ake Road, Eliozu, Port Harcourt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative flex-1 overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sm">
            <iframe
              title="Astro Halls Location"
              src="https://www.google.com/maps?q=Astro+Halls,+GU+Ake+Eliozu,+Port+Harcourt&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 rounded-[3.5rem] bg-white p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-50">
          
          {!isSuccess ? (
            <>
              <h3 className="mb-8 text-2xl font-black text-[#1D1D4B]">
                Direct Communication
              </h3>

              <form
                name="contact-us"
                method="POST"
                // data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
                // netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact-us" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <input required name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" className="contact-input" />
                  <input required name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email Address" className="contact-input" />
                </div>

                <select name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="contact-input text-gray-500">
                  <option value="">Select Topic</option>
                  <option value="Executive Partnership">Executive Partnership</option>
                  <option value="Delegate Relations">Delegate Relations</option>
                  <option value="Media & Communications">Media & Communications</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>

                <textarea required name="message" rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Detailed Inquiry..." className="contact-input resize-none" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-[#1D1D4B] py-5 font-black uppercase tracking-tight text-white transition hover:bg-[#D4A017] disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </>
          ) : (
            /* SUCCESS STATE */
            <div className="flex flex-col items-center justify-center text-center py-20 space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl">
                ✓
              </div>
              <h4 className="text-2xl font-black text-[#1D1D4B]">
                Message Sent Successfully
              </h4>
              <p className="text-gray-500 max-w-md">
                The Summit Secretariat has received your message and will respond shortly.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          padding: 1rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: all 0.2s ease;
        }
        .contact-input:focus {
          border-color: #d4a017;
          box-shadow: 0 0 0 2px rgba(212, 160, 23, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
