"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[600px] md:w-auto"
    >
      <div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 px-4 md:px-6 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,90,42,0.15)] rounded-full w-full">
        
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF5A2A] rounded-sm shadow-[0_0_10px_rgba(255,90,42,0.5)]" />
          <span className="text-white font-black tracking-tighter text-base md:text-lg hidden sm:block">BHAVESH.</span>
        </Link>

        <div className="w-[1px] h-4 bg-white/20 hidden sm:block" />

        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            href="/" 
            className={`text-xs md:text-sm font-semibold transition-colors ${pathname === "/" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className={`text-xs md:text-sm font-semibold transition-colors ${pathname === "/projects" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Projects
          </Link>
        </div>

        <button 
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#10B981] text-[#0A0A0A] font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#0ea5e9] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] flex-shrink-0"
        >
          Book Call
        </button>
      </div>
    </motion.nav>
  );
}
