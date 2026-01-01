"use client";

import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
          bg-sidebar text-sidebar-foreground
          border-sidebar-border
          
          /* Mobile: slide from right */
          right-0 border-l
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}

          /* Desktop: fixed on left */
          md:left-0 md:right-auto md:border-l-0 md:border-r
          md:translate-x-0 md:transition-none
        `}
      >
        {/* Logo */}
        <div className="px-6 py-6">
          <Image
            src="/ets-logo.png"
            alt="ETS Summit Logo"
            width={140}
            height={64}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-1">
          {[
            "Home",
            "Introduction",
            "Speakers & Panelists",
            "Sponsorship & Partnership",
            "Committee",
            "Register",
            "Testimonial",
            "FAQs",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="
                block rounded-md px-4 py-2 text-sm font-medium
                hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                transition-colors
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-6 py-6 text-xs text-muted-foreground">
          © 2026 ETS Summit
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
