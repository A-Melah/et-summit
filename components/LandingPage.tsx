"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import HomeHero from "./HomeHero";
import Introduction from "./Introduction";
import Speakers from "./Speakers";
import Sponsorship from "./Sponsorship";
// import Committee from "./Committee";
import Register from "./Register";
import Contact from "./Contact";
import FAQs from "./FAQs";

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  // Helper function to handle tab switching and scrolling
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });}
  
  // Shared state to pass the selected subject from FAQs to Contact Us
  const [contactSubject, setContactSubject] = useState("");

  // This function decides which component to display in the main view
  const renderContent = () => {
    switch (activeTab) {
      case "Introduction": 
        return <Introduction />;
      case "Speakers & Panelists": 
        return <Speakers />;
      case "Sponsorship & Partnership": 
        return <Sponsorship />;
      // case "Committee": return <Committee />;
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
        return <HomeHero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#1D1D4B]">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Clear the subject if navigating away via sidebar for a fresh start
          if (tab !== "Contact Us") setContactSubject("");
        }} 
      />

      <main className="md:ml-64 min-h-screen flex flex-col">
        {/* Mobile Header Toggle */}
        <header className="fixed top-0 inset-x-0 z-40 p-4 md:hidden bg-white/90 backdrop-blur-md border-b">
           <button 
             onClick={() => setSidebarOpen(true)} 
             className="text-[#D4A017] font-bold text-sm tracking-widest uppercase"
           >
             Menu
           </button>
        </header>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 grow mt-16 md:mt-0">
          {renderContent()}
        </div>

        {/* Universal Footer from the document */}
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