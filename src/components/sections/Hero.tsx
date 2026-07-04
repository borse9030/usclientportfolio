"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 px-4 bg-[#0A0A0A] overflow-hidden text-center z-10">
      {/* Very faint background elements to match the clone */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00F5D4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#FF5A2A]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Pill Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-10 backdrop-blur-md"
      >
        <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
        <span className="text-[10px] tracking-[0.2em] font-bold text-white/80 uppercase">
          LIMITED TO 5 PREMIUM CLIENTS / MONTH
        </span>
      </motion.div>

      {/* Massive Typography Main Heading */}
      <div
        className="max-w-5xl mx-auto flex flex-col items-center leading-[0.85] tracking-[-0.03em] font-black opacity-0 animate-hero-fade-in-up"
        style={{ animationDelay: '100ms' }}
      >
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[8rem] lg:text-[10rem] text-[#F3F4F6] m-0 p-0 uppercase break-words leading-[0.9] text-center w-full">
          GET HIGH-CONVERTING
        </h1>
        <h1 className="text-[2.8rem] sm:text-[4.5rem] md:text-[9rem] lg:text-[11rem] text-[#FF5A2A] m-0 p-0 uppercase break-words leading-[0.9] text-center w-full">
          WEBSITES.
        </h1>
      </div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 md:mt-10 text-base sm:text-xl md:text-2xl text-[#A1A1AA] max-w-[95%] md:max-w-2xl mx-auto font-medium"
      >
        Build a world-class digital presence and attract premium clients — 
        <br className="hidden md:block" />
        with real engineering support, step-by-step.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12"
      >
        <a 
          href="https://wa.me/919529185458?text=Hi%20Bhavesh,%20I'm%20interested%20in%20working%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-transparent hover:bg-white/5 border border-white/10 rounded-full pl-6 pr-2 py-2 transition-all duration-300"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#FF5A2A] uppercase">Chat on WhatsApp</span>
          <div className="w-10 h-10 rounded-full bg-[#FF5A2A] group-hover:bg-[#ff6c42] flex items-center justify-center transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A0A0A]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
