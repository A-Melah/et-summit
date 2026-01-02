"use client";

import React from "react";

const Introduction = () => {
  const whyAttendItems = [
    "Build systems that make your business run with or without you",
    "Move from hustle-based operations to structured excellence",
    "Create consistency in service delivery and operations",
    "Improve customer satisfaction and business credibility",
    "Scale sustainably without burnout",
    "Position your business for growth, partnerships, and corporate opportunities"
  ];

  const objectives = [
    { 
      title: "Educate on Systems", 
      desc: "Help business owners understand why systems—not just talent or hard work—are the foundation of scalable businesses." 
    },
    { 
      title: "ISO 9001 Framework", 
      desc: "Demonstrate how the ISO 9001 Quality Management System provides a practical framework for growth and consistency." 
    },
    { 
      title: "Process Documentation", 
      desc: "Teach participants how to create procedures and workflows that reduce errors and dependence on individual workers." 
    },
    { 
      title: "Hustle to Structure", 
      desc: "Inspire a shift from daily 'firefighting' to a predictable, system-driven mode of operation." 
    },
    { 
      title: "Global Competitiveness", 
      desc: "Position Nigerian and African SMEs to meet compliance and quality expectations required by international markets." 
    },
    { 
      title: "Business Continuity", 
      desc: "Teach how structured systems help organizations survive crises and handle staff turnover consistently." 
    }
  ];

  const outcomes = [
    "Understand how systems drive sustainable growth",
    "Begin transitioning from owner-dependent to process-driven operations",
    "Be able to map and document at least one business process",
    "Gain clarity on how global management systems strengthen organizations",
    "Join a growing community of excellence-driven entrepreneurs"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-700 pb-2">
      
      {/* --- About Section --- */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-5">
          About the Summit
        </h2>
        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            The <span className="text-[#1D1D4B] font-bold">Enterprise Transformation Summit 2026</span> is a high-impact platform designed to equip business leaders with the mindset, tools, and global best practices required to build structured, scalable, and sustainable organizations.
          </p>
          <p>
            Across Nigeria and Africa, many businesses fail not due to lack of effort, but due to the absence of standardized processes. This summit addresses that gap by introducing participants to business excellence principles inspired by the <span className="text-[#D4A017] font-bold">ISO 9001 Quality Management System</span>, simplified for real-world application.
          </p>
        </div>
        
        <div className="bg-[#1D1D4B] text-white p-8 rounded-3xl shadow-xl italic">
          <p className="text-xl md:text-2xl font-black italic">
            &quot;This is not a motivational event. It is a transformation experience.&quot;
          </p>
        </div>
      </section>

      {/* --- Why Attend Section --- */}
      <section className="space-y-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-[#1D1D4B]">Why Attend?</h3>
          <p className="text-gray-600 mt-2">At the Enterprise Transformation Summit 2026, you will learn how to:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyAttendItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-[#D4A017] font-black">★</span>
              <p className="text-sm text-[#1D1D4B] font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* --- Objectives Grid --- */}
      <section className="space-y-10">
        <h3 className="text-2xl font-black text-[#1D1D4B]">Summit Objectives</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, i) => (
            <div key={i} className="p-6 bg-white border-2 border-slate-50 rounded-2xl shadow-sm hover:border-[#D4A017] transition-all">
              <h4 className="font-black text-[#1D1D4B] text-lg mb-2">{obj.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Expected Outcomes --- */}
      <section className="bg-slate-100 p-8 md:p-12 rounded-[2.5rem] space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-[#1D1D4B] mb-2">Expected Outcomes</h3>
          <p className="text-gray-500 text-sm">By the end of the summit, participants will:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <span className="text-[#FF4500] font-bold">✓</span>
              <p className="text-gray-700 text-sm font-semibold">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Final Tagline --- */}
      <div className="text-center py-10 border-t border-gray-200">
        <p className="text-[#1D1D4B] font-black text-xl md:text-2xl">
          Transforming Entrepreneurs into System-Driven Organizations 
        </p>
      </div>

    </div>
  );
};

export default Introduction;