"use client";

import React, { useState } from "react";

const EVENTBRITE_URL =
  "https://enterprisetransformationsummit2026.eventbrite.com";

const Register = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRegisterClick = () => {
    setIsRedirecting(true);

    // Immediate redirect — no success modal
    window.open(EVENTBRITE_URL, "_blank", "noopener,noreferrer");

    // Reset state in case user comes back
    setTimeout(() => {
      setIsRedirecting(false);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* --- Hero Section --- */}
      <section className="relative text-center py-10 md:py-20 px-6 rounded-[3rem] bg-white border border-slate-100 shadow-sm overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4A017]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#1D1D4B]/5 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[#D4A017] text-[10px] font-black uppercase tracking-[0.2em]">
            Transition to Excellence
          </span>

          <h2 className="text-3xl md:text-6xl font-black text-[#1D1D4B] leading-tight tracking-tighter">
            Build a Business That Works — <br />
            <span className="bg-linear-to-r from-[#D4A017] to-[#B8860B] bg-clip-text text-transparent">
              With or Without You
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed italic">
            "Stop the daily firefighting. Shift from owner-dependency to a predictable, system-driven operation."
          </p>
        </div>
      </section>

      {/* --- Action Cards --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left */}
        <div className="lg:col-span-7 bg-[#1D1D4B] p-10 md:p-14 rounded-[3.5rem] text-white flex flex-col justify-center">
          <h3 className="text-2xl font-black mb-6">Why Register Today?</h3>

          <p className="text-slate-300 leading-relaxed text-lg mb-6">
            The Enterprise Transformation Summit 2026 addresses the gap where businesses fail due to lack of standardized systems.
          </p>

          <ul className="space-y-4">
            {[
              "Gain clarity on global management systems",
              "Map and document critical business processes",
              "Join a community of excellence-driven entrepreneurs"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#D4A017] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTA */}
        <div className="lg:col-span-5 bg-white border-2 border-[#D4A017] p-10 rounded-[3.5rem] flex flex-col items-center justify-center text-center shadow-2xl">
          <p className="text-[#FF4500] font-black uppercase tracking-[0.2em] text-[10px] mb-2">
            Limited Capacity
          </p>

          <h4 className="text-2xl font-black text-[#1D1D4B] mb-8">
            Secure Your Spot
          </h4>

          <button
            onClick={handleRegisterClick}
            disabled={isRedirecting}
            className="
              w-full flex items-center justify-center
              py-5 px-4
              bg-[#1D1D4B] text-white
              text-base sm:text-lg font-black
              rounded-2xl shadow-xl
              transition-all
              hover:scale-[1.02]
              active:scale-95
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {isRedirecting ? "REDIRECTING..." : "REGISTER ON EVENTBRITE"}
          </button>

          <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            Admission is Free | First-come basis
          </p>
        </div>
      </div>

      {/* --- Support Section (unchanged) --- */}
      {/* … keep your existing support section exactly as-is … */}

    </div>
  );
};

export default Register;
