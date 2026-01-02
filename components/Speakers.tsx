"use client";

import React, { useState } from "react";

// Updated Speaker Card accepting a unique LinkedIn URL
const SpeakerCard = ({ 
  name, 
  role, 
  company, 
  linkedinUrl 
}: { 
  name: string; 
  role: string; 
  company: string; 
  linkedinUrl: string; 
}) => (
  <div className="relative group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2">
    {/* Image Container */}
    <div className="relative h-72 w-full bg-slate-200">
      <div className="flex items-center justify-center h-full text-slate-400">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* Unique LinkedIn Hover Overlay */}
      <div className="absolute inset-0 bg-[#1D1D4B]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full text-[#0077B5] hover:scale-110 transition-transform shadow-lg"
          aria-label={`Visit ${name}'s LinkedIn Profile`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Info Area */}
    <div className="p-6 text-center">
      <h4 className="text-xl font-black text-[#1D1D4B] mb-1">{name}</h4>
      <p className="text-[#D4A017] text-sm font-bold uppercase tracking-wider">{role}</p>
      <p className="text-gray-400 text-xs mt-2 font-medium">{company}</p>
    </div>
  </div>
);

const Speakers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration successful. Updates will be sent to ${email}.`);
    setIsModalOpen(false);
    setEmail("");
  };

  // Data array with unique LinkedIn URLs
  const featuredSpeakers = [
    { 
      name: "Cletus Akhigbe", 
      role: "Summit Convener", 
      company: "Management Systems Advocate",
      linkedinUrl: "https://www.linkedin.com/in/cletus-akhigbe/" 
    },
    { 
      name: "To be Announced", 
      role: "Corporate Executive", 
      company: "Strategic Leadership",
      linkedinUrl: "#" 
    },
    { 
      name: "To be Announced", 
      role: "Systems Expert", 
      company: "ISO 9001 Consultant",
      linkedinUrl: "#" 
    },
    { 
      name: "To be Announced", 
      role: "Thought Leader", 
      company: "Business Excellence",
      linkedinUrl: "#" 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <section className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-5 mb-4">
          Speakers & Panelists
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Connecting you with renowned business leaders and corporate executives who have successfully transitioned from hustle to structured excellence.
        </p>
      </section>

      {/* Speaker Categories [cite: 56-60] */}
      <section className="flex flex-wrap gap-3">
        {["Business Leaders", "Corporate Executives", "Systems Experts", "Successful Entrepreneurs", "Thought Leaders"].map((cat, i) => (
          <span key={i} className="px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-[#1D1D4B] bg-white">
            {cat}
          </span>
        ))}
      </section>

      {/* Speakers Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredSpeakers.map((speaker, i) => (
          <SpeakerCard key={i} {...speaker} />
        ))}
      </section>

      {/* Lead Capture for Updates [cite: 61] */}
      <section className="bg-[#1D1D4B] p-10 md:p-8 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h3 className="text-2xl md:text-4xl font-black">Full Lineup Coming Soon</h3>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are curating a world-class roster of experts to guide your transformation. Leave your email to receive the official reveal.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D4A017] text-white px-4 py-4 rounded-full font-black shadow-lg hover:scale-105 transition-transform"
          >
            Notify Me of Updates
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </section>

      {/* Official Contact  */}
      <div className="text-center pt-2 border-t border-gray-100">
        <p className="text-gray-500 mb-2 italic">For speaker recommendations or inquiries:</p>
        <a 
          href="mailto:info@enterprisetransformationsummit.org.ng" 
          className="text-[#1D1D4B] font-black hover:text-[#D4A017] transition-colors"
        >
          info@enterprisetransformationsummit.org.ng
        </a>
      </div>

      {/* Email Capture Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#1D1D4B]/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-xl font-black text-[#1D1D4B]">Stay Informed</h4>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-[#FF4500] font-bold">✕</button>
            </div>
            <form onSubmit={handleNotifySubmit} className="space-y-4">
              <input 
                type="email" 
                required
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#D4A017] outline-none text-[#1D1D4B]"
              />
              <button 
                type="submit"
                className="w-full bg-[#1D1D4B] text-white py-4 rounded-xl font-black shadow-lg"
              >
                KEEP ME POSTED
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;