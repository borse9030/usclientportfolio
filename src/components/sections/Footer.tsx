"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const textToAnimate = "BHAVESH.";

  return (
    <footer 
      ref={containerRef}
      className="relative min-h-[70vh] bg-[#0A0A0A] flex flex-col justify-between overflow-hidden pt-32 pb-6"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <motion.div 
        style={{ y, opacity }}
        className="w-full flex flex-col justify-between h-full z-10"
      >
        {/* Top Info Section */}
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center md:items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <p className="text-[#FF5A2A] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-2">
              Ready to scale?
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Premium Web Developer
            </h3>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/borse9030" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/bhavesh-borse-49917b377?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/layer_labs7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Edge-to-Edge Typography */}
        <div className="w-full flex justify-center mt-auto px-4 overflow-hidden py-4">
          <h2 className="text-[15vw] leading-[0.8] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter w-full text-center flex justify-between uppercase">
            {textToAnimate.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px", amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/70 text-xs sm:text-sm font-medium">
            &copy; {new Date().getFullYear()} Bhavesh Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All systems nominal
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
