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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "sponsorship-inquiry",
        tier: selectedTier,
        ...formData,
      }),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
          setFormData({ name: "", company: "", email: "", phone: "" });
        }, 2800);
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Submission failed. Please try again.");
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
      {/* INTRO */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-black text-[#1D1D4B] border-l-8 border-[#D4A017] pl-6">
          Partner with a Movement That Builds Businesses That Last
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          The Enterprise Transformation Summit 2026 equips SME leaders with
          systems and leadership required to build scalable organizations.
        </p>
        <div className="bg-[#1D1D4B] p-6 rounded-2xl text-white inline-block italic font-bold">
          "This is more than sponsorship. It is strategic impact."
        </div>
      </section>

      {/* TIERS */}
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
                <li
                  key={j}
                  className="flex gap-2 text-[11px] text-gray-600"
                >
                  <span className="text-[#D4A017] font-bold">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openPartnerModal(tier.name)}
              className="
                w-full bg-[#1D1D4B] text-white py-3 rounded-xl font-bold text-xs
                transition-all uppercase tracking-tight
                hover:scale-105
                active:scale-95
                active:shadow-inner
                focus:outline-none focus:ring-4 focus:ring-[#1D1D4B]/30
              "
            >
              Partner as {tier.name}
            </button>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1D4B]/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg p-8 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
            {!isSuccess ? (
              <>
                <div className="flex justify-between mb-6">
                  <h4 className="text-2xl font-black text-[#1D1D4B]">
                    Partner Inquiry: {selectedTier}
                  </h4>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-300 hover:text-red-500 text-xl"
                  >
                    ✕
                  </button>
                </div>

                <form
                  name="sponsorship-inquiry"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                >
                  <input type="hidden" name="form-name" value="sponsorship-inquiry" />
                  <input type="hidden" name="tier" value={selectedTier} />

                  {["name", "company", "email", "phone"].map((field, i) => (
                    <input
                      key={i}
                      required
                      type={field === "email" ? "email" : "text"}
                      placeholder={
                        field === "name"
                          ? "Your Full Name"
                          : field === "company"
                          ? "Organization Name"
                          : field === "email"
                          ? "Work Email"
                          : "Phone Number"
                      }
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none"
                    />
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full bg-[#1D1D4B] text-white py-5 mt-4 rounded-2xl
                      font-black uppercase tracking-tighter
                      transition-all shadow-lg
                      hover:scale-[1.02]
                      active:scale-95
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting
                      ? "SUBMITTING…"
                      : "Contact Partnership Desk"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-14 space-y-4 animate-in fade-in zoom-in duration-500">
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
                  Inquiry Received 🎉
                </h4>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Our Partnership Desk will contact you shortly to discuss next
                  steps.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;
