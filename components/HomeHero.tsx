"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HomeHeroProps = {
  setActiveTab: (tab: string) => void;
};

const HomeHero = ({ setActiveTab }: HomeHeroProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // --- Countdown Logic (Target: March 26, 2026) ---
  useEffect(() => {
    const launchDate = new Date("2026-03-26T08:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center border-2 border-[#D4A017] rounded-lg py-2 px-1 bg-white shadow-sm w-full">
      <span className="text-xl sm:text-2xl font-bold text-[#D4A017]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] uppercase font-bold text-gray-500 mt-0.5 tracking-tighter">
        {label}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Left Column: Text Content */}
      <div className="lg:col-span-7 space-y-6 sm:space-y-8">
        <div>
          <p className="text-[#D4A017] font-bold mb-2 uppercase text-[10px] sm:text-xs tracking-[0.2em]">
            Enterprise Transformation Summit 2026
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] mb-4">
            <span className="text-[#1D1D4B]">SYSTEMS:</span> <br />
            <span className="text-gray-800">The Goldmine</span>
          </h1>
          <p className="text-[#D4A017] font-bold text-sm sm:text-base italic mb-4">
            Transforming Entrepreneurs into System-Driven Organizations
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            Join forward-thinking entrepreneurs and business leaders to learn how systems, 
            structure, and world-class management practices transform hustle into sustainable growth.
          </p>
        </div>

        {/* Event Meta Data */}
        <div className="space-y-3 pt-6 border-t border-gray-200">
          <h2 className="text-[#1D1D4B] font-extrabold text-lg sm:text-xl md:text-2xl leading-snug">
            Thursday 26th of March, 2026 | 8am Prompt
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            <strong className="text-[#1D1D4B]">Astro Halls</strong>, G.U Ake Road, Eliozu, Port Harcourt.
          </p>
          <p className="text-[#D4A017] font-bold text-lg uppercase">Admission is Free.</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a 
            href="https://enterprisetransformationsummit2026.eventbrite.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1D1D4B] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:opacity-90 transition text-center text-sm"
          >
            Register Now
          </a>
          <button 
            onClick={() => setActiveTab("Sponsorship & Partnership")}
            className="bg-[#D4A017] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:opacity-90 transition text-sm"
          >
            Become a Sponsor
          </button>
          {/* <a 
            href="/summit-brochure.pdf" 
            download
            className="border-2 border-[#1D1D4B] text-[#1D1D4B] px-8 py-3 rounded-full font-bold hover:bg-[#1D1D4B] hover:text-white transition text-center text-sm"
          >
            Download Brochure [cite: 13]
          </a> */}
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-sm">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>

      {/* Right Column: QR Code Card */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
        <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 w-full max-w-90 text-center">
          <h3 className="text-lg font-black text-[#1D1D4B] mb-1">Get Your Reservation Now!</h3>
          <p className="text-xs text-gray-400 mb-8 font-medium italic">Secure your spot today!</p>
          
          <div className="relative inline-block">
            {/* The Badge */}
            <div className="bg-[#FF4500] text-white text-[10px] font-black py-1.5 px-6 rounded-t-xl uppercase tracking-wider -mb-px relative z-10">
              Scan to Register
            </div>
            {/* QR Container */}
            <div className="bg-white p-4 border-2 border-gray-100 rounded-b-2xl shadow-inner">
              <div className="w-40 h-40 sm:w-48 sm:h-48 bg-slate-50 flex items-center justify-center">
                <Image src="/qr-code.png" alt="Registration QR Code" width={200} height={200} />
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-[11px] text-gray-400 font-semibold px-4 leading-relaxed uppercase tracking-tighter">
            Don&apos;t miss out, reserve now for exclusive access. Act fast!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;