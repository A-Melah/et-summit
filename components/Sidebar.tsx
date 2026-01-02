"use client";

import Image from "next/image";

// 1. Update the Props to include the navigation state
type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    "Home",
    "Introduction",
    "Speakers & Panelists",
    "Sponsorship & Partnership",
    "Register",
    "Contact Us",
    "FAQs",
  ];

  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40
          transition-opacity duration-500
          md:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 z-50 h-screen w-64
          bg-white text-sidebar-foreground
          border-r border-gray-200
          flex flex-col /* Ensures mt-auto works for the footer */
          
          /* Mobile: slide from right */
          right-0 border-l
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}

          /* Desktop: fixed on left */
          md:left-0 md:right-auto md:border-l-0 md:border-r
          md:translate-x-0 md:transition-none
        `}
      >
        {/* Logo Section */}
        <div className="px-6 py-6">
          <Image
            src="/ets-logo.png"
            alt="Enterprise Transformation Summit Logo"
            width={140}
            height={64}
            priority
            className="h-auto w-auto" 
    sizes="(max-width: 768px) 140px, 200px"
          />
        </div>

        {/* Navigation Section */}
        <nav className="px-4 space-y-1 grow overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item); // 2. Update the active page
                onClose();          // 3. Close mobile sidebar after clicking
              }}
              className={`
                w-full text-left block rounded-xl px-4 py-3 text-sm font-bold transition-all
                ${activeTab === item 
                  ? "bg-[#1D1D4B] text-white shadow-lg" // Active state: Deep Blue
                  : "text-gray-500 hover:bg-slate-50 hover:text-[#D4A017]" // Hover state: Gold
                }
              `}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="px-4 pb-6 mt-auto">
          <div className="flex items-center justify-center px-3 py-2 border border-gray-100 rounded-full bg-slate-50 shadow-sm w-full">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter whitespace-nowrap">
              Powered by <span className="text-[#D4A017]">QMSAI</span> 
              <span className="mx-1 text-gray-300">|</span> 
              <span className="text-[#1D1D4B]">OSH Media</span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;