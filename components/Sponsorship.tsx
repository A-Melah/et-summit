"use client";

import React, { useState } from "react";

const Sponsorship = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

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
        "10 complimentary VIP delegate passes",
      ],
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
        "6 complimentary delegate passes",
      ],
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
        "4 complimentary delegate passes",
      ],
    },
    {
      name: "Bronze",
      status: "Entry",
      color: "border-orange-100",
      bg: "bg-white",
      benefits: [
        "Logo on event backdrop and programme",
        "Brand recognition during the summit",
        "2 complimentary delegate passes",
      ],
    },
  ];

  const encode = (data: any) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const openPartnerModal = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  fetch("/forms-check.html", { // Target the static file path
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": "sponsorship-inquiry",
      "bot-field": "", // Always include honeypot
      tier: selectedTier,
      ...formData,
    }).toString(),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Submission failed");
      
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        setFormData({ name: "", company: "", email: "", phone: "" });
      }, 2800);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error(error);
      alert("Submission failed. Please try again.");
    });
};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24 animate-in fade-in duration-700">
      
      {/* --- Intro Section --- */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-6">
          Partner with a Movement That Builds Businesses That Last
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          The Enterprise Transformation Summit 2026 is designed to equip SME leaders with the systems and leadership required to build scalable organizations.
        </p>
        <div className="bg-[#1D1D4B] p-6 rounded-2xl text-white inline-block italic font-bold">
          "This is more than sponsorship. It is strategic impact."
        </div>
      </section>

      {/* --- Why & Who Section (Restored) --- */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Why Sponsor */}
        <div className="lg:col-span-5 bg-slate-100 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center">
          <h3 className="text-2xl font-black text-[#1D1D4B] mb-6">Why Sponsor?</h3>
          <ul className="space-y-4 text-gray-600">
            {[
              "Position as a champion of excellence",
              "Engage with 300–500 SME decision-makers",
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

        {/* Who You Will Reach */}
        <div className="lg:col-span-7 bg-white border-2 border-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/5 rounded-bl-full -mr-10 -mt-10" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-[#1D1D4B] mb-2">Who You Will Reach</h3>
            <p className="text-[#D4A017] font-bold text-sm uppercase tracking-widest mb-8">Building Long-Term Brand Trust</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-slate-50 p-3 rounded-2xl text-2xl">👥</div>
                <div>
                  <p className="text-2xl font-black text-[#1D1D4B]">300–500</p>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider leading-none">Target Decision-Makers</p>
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
              {["Entrepreneurs", "SME Owners", "Family Businesses", "Corporate Leaders", "Consultants"].map((item, i) => (
                <span key={i} className="bg-white border-2 border-slate-50 px-5 py-2 rounded-xl text-[11px] font-bold text-[#1D1D4B] shadow-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs italic text-gray-400 border-t border-slate-50 pt-6">
              "These are buyers, influencers, and partners—not just attendees."
            </p>
          </div>
        </div>
      </section>

      {/* --- Sponsorship Tiers --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`${tier.bg} border-2 ${tier.color} p-6 rounded-4xl flex flex-col shadow-sm transition-all hover:shadow-xl hover:-translate-y-1`}
          >
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase text-[#D4A017] tracking-widest">
                {tier.status}
              </span>
              <h4 className="text-2xl font-black text-[#1D1D4B]">
                {tier.name}
              </h4>
            </div>

            <ul className="space-y-4 mb-8 grow">
              {tier.benefits.map((benefit, j) => (
                <li key={j} className="flex gap-2 text-[11px] text-gray-600 leading-snug">
                  <span className="text-[#D4A017] font-bold">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openPartnerModal(tier.name)}
              className="w-full bg-[#1D1D4B] text-white py-3 rounded-xl font-bold text-xs transition-all uppercase tracking-tight hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#1D1D4B]/30"
            >
              Partner as {tier.name}
            </button>
          </div>
        ))}
      </section>

      {/* --- Special Options Section (Restored) --- */}
      <section className="bg-white border-2 border-[#1D1D4B] p-8 md:p-12 rounded-[3rem] text-center space-y-6">
        <h3 className="text-2xl font-black text-[#1D1D4B]">Special Sponsorship Options</h3>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Organizations may sponsor specific summit elements including Breakfast, Delegate Packs, or Workshop Sessions. Custom packages are available on request.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/sponsorship-proposal.pdf" download className="bg-[#D4A017] text-white px-8 py-3 rounded-full font-black text-sm shadow-lg uppercase tracking-tight transition-transform hover:scale-105">
            Download Proposal
          </a>
          <button onClick={() => openPartnerModal("Custom")} className="bg-[#1D1D4B] text-white px-8 py-3 rounded-full font-black text-sm shadow-lg uppercase tracking-tight transition-transform hover:scale-105">
            Request Custom Partnership
          </button>
        </div>
      </section>

      {/* --- MODAL (Enhanced with Success State) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1D4B]/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg p-8 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
            {!isSuccess ? (
              <>
                <div className="flex justify-between mb-6">
                  <h4 className="text-2xl font-black text-[#1D1D4B]">
                    Partner Inquiry: {selectedTier}
                  </h4>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-red-500 text-xl">✕</button>
                </div>

                <form
                  name="sponsorship-inquiry"
                  method="POST"
                //   data-netlify="true"
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                >
                  <input type="hidden" name="form-name" value="sponsorship-inquiry" />
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="tier" value={selectedTier} />

                  {["name", "company", "email", "phone"].map((field, i) => (
                    <input
                      key={i}
                      required
                      type={field === "email" ? "email" : "text"}
                      placeholder={
                        field === "name" ? "Your Full Name" :
                        field === "company" ? "Organization Name" :
                        field === "email" ? "Work Email" : "Phone Number"
                      }
                      disabled={isSubmitting}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#D4A017] transition-colors"
                    />
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1D1D4B] text-white py-5 mt-4 rounded-2xl font-black uppercase tracking-tighter transition-all shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SUBMITTING…" : "Contact Partnership Desk"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-14 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-[#1D1D4B]">Inquiry Received 🎉</h4>
                <p className="text-gray-500 max-w-sm mx-auto">Our Partnership Desk will contact you shortly to discuss next steps.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;