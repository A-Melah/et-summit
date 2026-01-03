"use client";

import React, { useState } from "react";

/* =========================
   Speaker Card Component
========================= */
const SpeakerCard = ({
  name,
  role,
  company,
  linkedinUrl,
}: {
  name: string;
  role: string;
  company: string;
  linkedinUrl: string;
}) => (
  <div className="relative group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2">
    {/* Image */}
    <div className="relative h-72 w-full bg-slate-200">
      <div className="flex items-center justify-center h-full text-slate-400">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* LinkedIn Overlay */}
      <div className="absolute inset-0 bg-[#1D1D4B]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white p-3 rounded-full text-[#0077B5]
            transition-all shadow-lg
            hover:scale-110
            active:scale-95
            active:shadow-inner
          "
          aria-label={`Visit ${name}'s LinkedIn Profile`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Info */}
    <div className="p-6 text-center">
      <h4 className="text-xl font-black text-[#1D1D4B] mb-1">{name}</h4>
      <p className="text-[#D4A017] text-sm font-bold uppercase tracking-wider">
        {role}
      </p>
      <p className="text-gray-400 text-xs mt-2 font-medium">{company}</p>
    </div>
  </div>
);

/* =========================
   Main Component
========================= */
const Speakers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const handleNotifySubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/forms-check.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "speaker-updates",
        "bot-field": "",
        email: email,
      }).toString(),
    });

    if (!response.ok) throw new Error("Submission failed");

    setIsSuccess(true);

    // Auto-close modal after success
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSuccess(false);
      setEmail("");
    }, 2500);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  };

  const featuredSpeakers = [
    {
      name: "Cletus Akhigbe",
      role: "Summit Convener",
      company: "Management Systems Advocate",
      linkedinUrl: "https://www.linkedin.com/in/cletus-akhigbe/",
    },
    {
      name: "To be Announced",
      role: "Corporate Executive",
      company: "Strategic Leadership",
      linkedinUrl: "#",
    },
    {
      name: "To be Announced",
      role: "Systems Expert",
      company: "ISO 9001 Consultant",
      linkedinUrl: "#",
    },
    {
      name: "To be Announced",
      role: "Thought Leader",
      company: "Business Excellence",
      linkedinUrl: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-5 mb-4">
          Speakers & Panelists
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Connecting you with renowned business leaders and corporate executives
          who have successfully transitioned from hustle to structured
          excellence.
        </p>
      </section>

      {/* Categories */}
      <section className="flex flex-wrap gap-3">
        {[
          "Business Leaders",
          "Corporate Executives",
          "Systems Experts",
          "Successful Entrepreneurs",
          "Thought Leaders",
        ].map((cat, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-[#1D1D4B] bg-white"
          >
            {cat}
          </span>
        ))}
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredSpeakers.map((speaker, i) => (
          <SpeakerCard key={i} {...speaker} />
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#1D1D4B] p-10 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden">
        <h3 className="text-2xl md:text-4xl font-black mb-4">
          Full Lineup Coming Soon
        </h3>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          Leave your email to receive the official speaker reveal.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            bg-[#D4A017] px-8 py-4 rounded-full font-black
            transition-all shadow-lg
            hover:scale-105
            active:scale-95
            active:shadow-inner
            focus:outline-none focus:ring-4 focus:ring-[#D4A017]/40
          "
        >
          Notify Me of Updates
        </button>
      </section>

      {/* Contact */}
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-gray-500 mb-2 italic">
          For speaker recommendations or inquiries:
        </p>
        <a
          href="mailto:info@enterprisetransformationsummit.org.ng"
          className="
            text-[#1D1D4B] font-black transition-colors
            hover:text-[#D4A017]
            break-all inline-block max-w-full
          "
        >
          info@enterprisetransformationsummit.org.ng
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1D4B]/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
            {!isSuccess ? (
              <>
                <div className="flex justify-between mb-6">
                  <h4 className="text-xl font-black text-[#1D1D4B]">
                    Stay Informed
                  </h4>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-300 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>

                <form 
  name="speaker-updates" 
  onSubmit={handleNotifySubmit} 
  className="space-y-4"
>
  {/* Hidden identifiers for Netlify */}
  <input type="hidden" name="form-name" value="speaker-updates" />
  <input type="hidden" name="bot-field" />

  <input
    type="email"
    name="email" // Added name attribute
    required
    disabled={isSubmitting}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email address"
    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#D4A017] outline-none"
  />

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-[#1D1D4B] text-white py-4 rounded-xl font-black transition-all shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {isSubmitting ? "SUBMITTING..." : "KEEP ME POSTED"}
  </button>
</form>
              </>
            ) : (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-[#1D1D4B]">
                  You’re on the List 🎉
                </h4>
                <p className="text-gray-500">
                  We’ll notify you as soon as the full lineup is revealed.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
