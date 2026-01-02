"use client";

import React from "react";

const Register = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* --- Modern Hero Hook --- */}
      <section className="relative text-center py-10 md:py-20 px-6 rounded-[3rem] bg-white border border-slate-100 shadow-sm overflow-hidden">
        {/* Decorative Gold Glow */}
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
        
        {/* Left: Purpose Card */}
        <div className="lg:col-span-7 bg-[#1D1D4B] p-10 md:p-14 rounded-[3.5rem] text-white flex flex-col justify-center">
          <h3 className="text-2xl font-black mb-6">Why Register Today?</h3>
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              The Enterprise Transformation Summit 2026 addresses the gap where businesses fail due to a lack of standardized processes. Learn the mindset and tools required to build scalable, sustainable organizations.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Gain clarity on global management systems",
                "Map and document critical business processes",
                "Join a community of excellence-driven entrepreneurs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#D4A017] flex items-center justify-center text-white text-[10px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: CTA Card */}
        <div className="lg:col-span-5 bg-white border-2 border-[#D4A017] p-10 rounded-[3.5rem] flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="mb-8">
            <p className="text-[#FF4500] font-black uppercase tracking-[0.2em] text-[10px] mb-2">
              Limited Capacity
            </p>
            <h4 className="text-2xl font-black text-[#1D1D4B]">Secure Your Spot</h4>
          </div>

<a 
  href="https://enterprisetransformationsummit2026.eventbrite.com"
  target="_blank"
  rel="noopener noreferrer"
  className="
    /* Layout & Sizing */
    w-full flex items-center justify-center gap-2 sm:gap-3 
    py-4 sm:py-6 px-4
    
    /* Typography */
    text-base sm:text-lg font-black text-center text-white
    
    /* Aesthetics */
    bg-[#1D1D4B] rounded-xl sm:rounded-2xl shadow-xl 
    
    /* Animations */
    transition-all hover:scale-[1.02] active:scale-95 group"
>
  <span className="leading-tight">REGISTER ON EVENTBRITE</span>
  
  {/* <svg 
    className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg> */}
</a>
          
          <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            Admission is Free | First-come basis
          </p>
        </div>
      </div>

      {/* --- Professional Support Section --- */}
      <section className="bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-[#1D1D4B] mb-2">Registration Assistance</h4>
            <p className="text-gray-500 max-w-sm">Need help with group bookings or professional inquiries? Reach out to the Partnership Desk.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Gmail-like Support Link */}
            <a 
              href="mailto:info@enterprisetransformationsummit.org.ng"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:border-[#FF4500] transition-colors">
                {/* Stylized Gmail/Email Icon */}
                <svg className="w-8 h-8 text-[#FF4500]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email Support</span>
            </a>

            {/* WhatsApp Support Link */}
            <a 
              href="https://wa.me/2347033267555"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:border-[#25D366] transition-colors">
                {/* WhatsApp Icon */}
                <svg className="w-8 h-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Register;