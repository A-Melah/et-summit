"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Transparent Mobile Navbar */}
      <header
        className="
          fixed top-0 inset-x-0 z-50
          flex items-center justify-between
          px-4 py-4
          md:hidden
          bg-background/10
          backdrop-blur-sm
        "
      >
        <Image
          src="/ets-logo.png"
          alt="ETS Summit Logo"
          width={120}
          height={52}
          priority
        />

        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-muted transition"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-secondary" />
            <span className="block h-0.5 w-6 bg-secondary" />
            <span className="block h-0.5 w-6 bg-secondary" />
          </div>
        </button>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main
        className="
          pt-20 md:pt-0
          md:ml-64
          min-h-screen
          md:h-screen md:overflow-y-auto
        "
      >
        <div className="px-4 py-8 sm:px-6 md:px-12 md:py-14">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold mb-3 uppercase text-sm tracking-wide">
              Enterprise Transformation Summit 2026
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary">SYSTEMS:</span>{" "}
              <span>The Goldmine</span>
            </h1>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base sm:text-lg">
              Join forward-thinking entrepreneurs and business leaders at 
              the <strong className="text-foreground">Enterprise Transformation Summit 2026</strong> to learn how systems,
              structure, and world-class management practices transform hustle into sustainable growth.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base sm:text-lg italic">
                Transforming Entrepreneurs into System-Driven Organizations
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Register
              </button>

              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Be a Sponsor
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-primary font-bold text-lg mb-2">
                Thursday 26th of March, 2026 | 8am Prompt
              </h2>

              <p className="text-muted-foreground mb-1">
                <strong className="text-foreground">Astro Halls</strong>, G.U Ake
                Road (Airport Road), Eliozu, Port Harcourt.
              </p>

              <p className="font-semibold">Admission is Free.</p>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <p className="font-semibold">+234 703 326 7555</p>
              <p className="text-muted-foreground">
                info@enterprisetransformationsummit.org.ng
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
