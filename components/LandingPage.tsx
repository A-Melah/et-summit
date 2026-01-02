"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import HomeHero from "./HomeHero";
import Introduction from "./Introduction";
import Speakers from "./Speakers";
import Sponsorship from "./Sponsorship";
// import Committee from "./Committee";
import Register from "./Register";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Image from "next/image";

/* ---------------------------
   URL <-> Tab helpers
---------------------------- */
const tabToHash = (tab: string) =>
  tab.replace(/\s+/g, "-").toLowerCase();

const hashToTab = (hash: string) =>
  hash
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Home");

  // Shared state to pass the selected subject from FAQs to Contact Us
  const [contactSubject, setContactSubject] = useState("");

  /* ---------------------------
     Production-grade tab change
  ---------------------------- */
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    window.history.pushState(
      { tab },
      "",
      `#${tabToHash(tab)}`
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------------------
     Restore state on refresh / deep link
  ---------------------------- */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      setActiveTab(hashToTab(hash));
    } else {
      // Ensure Home exists in history
      window.history.replaceState(
        { tab: "Home" },
        "",
        "#home"
      );
    }
  }, []);

  /* ---------------------------
     Enable back button & swipe-back
  ---------------------------- */
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.tab) {
        setActiveTab(event.state.tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  /* ---------------------------
     Main content switch
  ---------------------------- */
  const renderContent = () => {
    switch (activeTab) {
      case "Introduction":
        return <Introduction />;
      case "Speakers & Panelists":
        return <Speakers />;
      case "Sponsorship & Partnership":
        return <Sponsorship />;
      case "Register":
        return <Register />;
      case "Contact Us":
        return <Contact initialSubject={contactSubject} />;
      case "FAQs":
        return (
          <FAQs
            setActiveTab={setActiveTab}
            setContactSubject={setContactSubject}
          />
        );
      default:
        return <HomeHero setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#1D1D4B]">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          handleTabChange(tab);
          if (tab !== "Contact Us") setContactSubject("");
        }}
      />

      <main className="md:ml-64 min-h-screen flex flex-col">
        {/* Mobile Header */}
        <header
          className={`fixed top-0 inset-x-0 z-40 md:hidden
            bg-white/90 backdrop-blur-md border-b
            transition-opacity duration-300
            ${sidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Image
              src="/ets-logo.png"
              alt="Enterprise Transformation Summit"
              width={120}
              height={40}
              priority
            />

            {/* Animated Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="relative flex items-center justify-center w-10 h-10 rounded-lg
                         border border-gray-200 text-[#1D1D4B]
                         hover:bg-slate-50 transition"
            >
              <span
                className={`absolute w-5 h-0.5 bg-current transition-all duration-300
                  ${sidebarOpen ? "rotate-45" : "-translate-y-1.5"}
                `}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current transition-all duration-300
                  ${sidebarOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current transition-all duration-300
                  ${sidebarOpen ? "-rotate-45" : "translate-y-1.5"}
                `}
              />
            </button>
          </div>
        </header>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 grow mt-16 md:mt-0">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="w-full px-6 py-10 bg-white border-t border-gray-100 mt-auto">
          <p className="text-[#1D1D4B] font-black text-center mb-2 text-sm sm:text-base">
            Don’t hustle forever. Build systems. Build excellence. Build businesses that last.
          </p>
          <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-tighter">
            © 2026 Enterprise Transformation Summit. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
