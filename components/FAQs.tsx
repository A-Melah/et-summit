"use client";

import React, { useState, Dispatch, SetStateAction } from "react";

// Define the interface for the component props
interface FAQProps {
  setActiveTab: Dispatch<SetStateAction<string>>;
  setContactSubject: Dispatch<SetStateAction<string>>;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-black transition-colors ${isOpen ? "text-[#D4A017]" : "text-[#1D1D4B] group-hover:text-[#D4A017]"}`}>
          {question}
        </span>
        <span className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#D4A017]" : "text-slate-300"}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-125 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQs = ({ setActiveTab, setContactSubject }: FAQProps) => {
  const faqData = [
      {
    question: "What is the Enterprise Transformation Summit 2026?",
    answer:
      "The Enterprise Transformation Summit 2026 is a high-impact entrepreneurial development summit designed to help entrepreneurs and business leaders build structured, system-driven, and sustainable organizations using simplified global best practices inspired by ISO 9001."
  },
  {
    question: "Who should attend this summit?",
    answer:
      "Entrepreneurs, startup founders, SME owners, business managers, family business leaders, consultants, and executives who want to transition from hustle-based operations to structured excellence."
  },
  {
    question: "Is this an ISO certification training?",
    answer:
      "No. This is not an ISO certification training. The summit simplifies ISO 9001 principles into practical business tools that entrepreneurs can apply immediately, without technical or compliance-heavy jargon."
  },
  {
    question: "Do I need to own a large business to attend?",
    answer:
      "No. The summit is designed for startups, SMEs, and growing businesses at any stage that desire structure, consistency, and sustainable growth."
  },
  {
    question: "Will the sessions be practical or theoretical?",
    answer:
      "The sessions are highly practical and include real-life case studies, workshops, panel discussions, and actionable business insights—not just lectures."
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "Yes. The summit offers both structured and informal networking opportunities, including breakfast sessions and executive roundtables for premium and VIP delegates."
  },
  {
    question: "Is this a physical or virtual event?",
    answer:
      "The summit is primarily a physical event. A hybrid option may be introduced and communicated to registered participants if applicable."
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. All registered participants will receive a Certificate of Participation after attending the summit."
  },
  {
    question: "Can organizations register multiple staff?",
    answer:
      "Yes. Group and corporate registrations are encouraged, and discounted rates may apply for organizations registering multiple participants."
  },
  {
    question: "How do I become a sponsor or partner?",
    answer:
      "You can become a sponsor or partner by clicking the “Become a Sponsor” button on the website, downloading the sponsorship proposal, or contacting the Summit Secretariat directly."
  },
  {
    question: "Who is the Convener of the Summit?",
    answer:
      "The summit is convened by Cletus Akhigbe, a business excellence and management systems advocate with extensive experience in organizational transformation."
  },
  {
    question: "How can I get more information?",
    answer:
      "You can reach the Summit Secretariat via the Contact Us page, email, or phone number listed on the website for further inquiries."
  }
  ];

  const handleCTAClick = () => {
    setContactSubject("General Inquiry"); // Pre-select the subject
    setActiveTab("Contact Us"); // Navigate to the contact page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
      <section className="text-center md:text-left space-y-4 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Find clarity on the 2026 Summit and how to build a business that works with or without you.
        </p>
      </section>

      <section className="bg-white rounded-[3rem] p-6 md:p-12 shadow-sm border border-slate-50 mx-4">
        <div className="divide-y divide-slate-100">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <div className="bg-[#1D1D4B] p-10 rounded-[3rem] text-center text-white space-y-6 mx-4 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-black">Still have questions?</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed mt-2">
            Connect with our Organizing Committee for personalized assistance.
          </p>
          <button 
            onClick={handleCTAClick}
            className="mt-6 bg-[#D4A017] text-white px-10 py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-all uppercase tracking-tighter"
          >
            Contact the Committee
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;