"use client";

import React, { useState } from "react";

const Sponsorship = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "" });

  const tiers = [
    {
      name: "Platinum",
      status: "Exclusive",
      color: "border-slate-300",
      bg: "bg-slate-50",
      benefits: [
        "“Powered by” recognition across all summit materials",
        "Prominent logo on website, backdrop, banners & media",
        "VIP speaking opportunity (thought leadership)",
        "Premium exhibition stand",
        "Full-page advert in summit brochure",
        "Brand mentions in press releases & media",
        "10 complimentary VIP delegate passes"
      ]
    },
    {
      name: "Gold",
      status: "Premium",
      color: "border-[#D4A017]",
      bg: "bg-white",
      benefits: [
        "Logo placement on major summit materials",
        "Executive speaking or panel participation",
        "Exhibition stand",
        "Half-page advert in summit brochure",
        "Brand mentions during the event",
        "6 complimentary delegate passes"
      ]
    },
    {
      name: "Silver",
      status: "Standard",
      color: "border-slate-200",
      bg: "bg-white",
      benefits: [
        "Logo placement on selected event materials",
        "Exhibition space",
        "Quarter-page advert in summit brochure",
        "Brand acknowledgement during sessions",
        "4 complimentary delegate passes"
      ]
    },
    {
      name: "Bronze",
      status: "Entry",
      color: "border-orange-100",
      bg: "bg-white",
      benefits: [
        "Logo on event backdrop and programme",
        "Brand recognition during the summit",
        "2 complimentary delegate passes"
      ]
    }
  ];

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const openPartnerModal = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "sponsorship-inquiry", tier: selectedTier, ...formData }),
    })
      .then(() => {
        alert("Success! The Partnership Desk will contact you shortly.");
        setIsModalOpen(false);
      })
      .catch((error) => alert("Submission error: " + error));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-16 pb-20 animate-in fade-in duration-700">
      {/* --- Intro Section --- */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-6">
          Partner with a Movement That Builds Businesses That Last
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          The Enterprise Transformation Summit 2026 is designed to equip SME leaders with the systems and leadership required to build scalable organizations. We invite forward-thinking organizations to partner with us as Sponsors and Strategic Partners.
        </p>
        <div className="bg-[#1D1D4B] p-6 rounded-2xl text-white inline-block italic font-bold">
          "This is more than sponsorship. It is strategic impact."
        </div>
      </section>

      {/* --- REFINED Why & Who Section --- */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Why Sponsor */}
        <div className="lg:col-span-5 bg-slate-100 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center">
          <h3 className="text-2xl font-black text-[#1D1D4B] mb-6">Why Sponsor?</h3>
          <ul className="space-y-4 text-gray-600">
            {[
              "Position as a champion of excellence",
              "Engage with 300–500 SME decision-makers ",
              "Gain strong brand visibility",
              "Support economic development",
              "Strengthen CSR and ESG initiatives"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-medium">
                <span className="text-[#D4A017] mt-1 font-bold">✓</span> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Who You Will Reach - Modernized Design */}
        <div className="lg:col-span-7 bg-white border-2 border-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/5 rounded-bl-full -mr-10 -mt-10" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-[#1D1D4B] mb-2">Who You Will Reach</h3>
            <p className="text-[#D4A017] font-bold text-sm uppercase tracking-widest mb-8">Building Long-Term Brand Trust</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-slate-50 p-3 rounded-2xl text-2xl">👥</div>
                <div>
                  <p className="text-2xl font-black text-[#1D1D4B]">300–500</p>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider leading-none">Target Decision-Makers </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-50 p-3 rounded-2xl text-2xl">🌍</div>
                <div>
                  <p className="text-2xl font-black text-[#1D1D4B]">100%</p>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider leading-none">Value-Driven Leaders</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Entrepreneurs", 
                "SME Owners", 
                "Family Businesses", 
                "Corporate Decision-makers", 
                "Consultants"
              ].map((item, i) => (
                <span key={i} className="bg-white border-2 border-slate-50 px-5 py-2 rounded-xl text-[11px] font-bold text-[#1D1D4B] shadow-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs italic text-gray-400 leading-relaxed border-t border-slate-50 pt-6">
              "These are buyers, influencers, and partners—not just attendees."
            </p>
          </div>
        </div>
      </section>

      {/* --- Sponsorship Tiers --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, i) => (
          <div key={i} className={`${tier.bg} border-2 ${tier.color} p-6 rounded-4xl flex flex-col shadow-sm hover:shadow-xl transition-all`}>
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase text-[#D4A017] tracking-widest">{tier.status}</span>
              <h4 className="text-2xl font-black text-[#1D1D4B]">{tier.name}</h4>
            </div>
            <ul className="space-y-4 mb-8 grow">
              {tier.benefits.map((benefit, j) => (
                <li key={j} className="flex gap-2 text-[11px] text-gray-600 leading-snug">
                  <span className="text-[#D4A017] font-bold">✓</span> {benefit}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => openPartnerModal(tier.name)}
              className="w-full bg-[#1D1D4B] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#D4A017] transition-colors uppercase tracking-tight"
            >
              Partner as {tier.name}
            </button>
          </div>
        ))}
      </section>

      {/* --- Special Options Section --- */}
      <section className="bg-white border-2 border-[#1D1D4B] p-8 md:p-12 rounded-[3rem] text-center space-y-6">
        <h3 className="text-2xl font-black text-[#1D1D4B]">Special Sponsorship Options</h3>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Organizations may sponsor specific summit elements including Breakfast, Delegate Packs, or Workshop Sessions. Custom packages are available on request.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/sponsorship-proposal.pdf" download className="bg-[#D4A017] text-white px-8 py-3 rounded-full font-black text-sm shadow-lg uppercase tracking-tight">
            Download Proposal
          </a>
          <button onClick={() => openPartnerModal("Custom")} className="bg-[#1D1D4B] text-white px-8 py-3 rounded-full font-black text-sm shadow-lg uppercase tracking-tight">
            Request Custom Partnership
          </button>
        </div>
      </section>

      {/* --- NETLIFY LEAD MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#1D1D4B]/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg p-8 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-black text-[#1D1D4B]">Partner Inquiry: {selectedTier}</h4>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-[#FF4500] text-2xl">✕</button>
            </div>
            <form 
              name="sponsorship-inquiry" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4"
            >
              <input type="hidden" name="form-name" value="sponsorship-inquiry" />
              <input type="hidden" name="tier" value={selectedTier} />
              <input required name="name" type="text" placeholder="Your Full Name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input required name="company" type="text" placeholder="Organization Name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none" onChange={(e) => setFormData({...formData, company: e.target.value})} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required name="email" type="email" placeholder="Work Email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required name="phone" type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <button type="submit" className="w-full bg-[#1D1D4B] text-white py-5 mt-4 rounded-2xl font-black shadow-lg hover:bg-[#D4A017] transition-all uppercase tracking-tighter">
                Contact Partnership Desk
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;