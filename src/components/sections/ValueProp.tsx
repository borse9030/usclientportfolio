"use client";

import { motion } from "framer-motion";
import { DollarSign, Target, Briefcase, Rocket } from "lucide-react";

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mx-8">
    <div className="w-2 h-2 rounded-full bg-[#FF5A2A]" />
    <span className="text-[13px] font-bold tracking-[0.15em] text-[#0A0A0A] uppercase whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default function ValueProp() {
  return (
    <section className="w-full bg-[#F3F4F6] text-[#0A0A0A] flex flex-col pt-32 pb-0 overflow-hidden relative z-20">
      
      {/* Light Section: Inline Icon Typography */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 flex flex-col items-center justify-center text-center font-bold tracking-tight leading-[1.1]">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2 md:gap-x-4 gap-y-1 sm:gap-y-2 text-[1.8rem] sm:text-[3.5rem] md:text-[6.5rem]"
        >
          <span>In</span>
          <span className="inline-flex items-center justify-center bg-[#10B981] text-white w-[1em] h-[1em] rounded-xl sm:rounded-2xl md:rounded-3xl align-middle shadow-lg hover:scale-105 transition-transform">
            <DollarSign strokeWidth={3} className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20" />
          </span>
          <span>dollars, not rupees.</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2 md:gap-x-4 gap-y-1 sm:gap-y-2 text-[1.8rem] sm:text-[3.5rem] md:text-[6.5rem] mt-2"
        >
          <span>No templates</span>
          <span className="inline-flex items-center justify-center bg-[#FF5A2A] text-white w-[1em] h-[1em] rounded-xl sm:rounded-2xl md:rounded-3xl align-middle shadow-lg hover:scale-105 transition-transform">
            <Target strokeWidth={3} className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20" />
          </span>
          <span>or themes,</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2 md:gap-x-4 gap-y-1 sm:gap-y-2 text-[1.8rem] sm:text-[3.5rem] md:text-[6.5rem] mt-2"
        >
          <span>just your</span>
          <span className="inline-flex items-center justify-center bg-[#FACC15] text-[#0A0A0A] w-[1em] h-[1em] rounded-xl sm:rounded-2xl md:rounded-3xl align-middle shadow-lg hover:scale-105 transition-transform">
            <Briefcase strokeWidth={3} className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20" />
          </span>
          <span className="inline-flex items-center justify-center bg-[#3B82F6] text-white w-[1em] h-[1em] rounded-xl sm:rounded-2xl md:rounded-3xl align-middle shadow-lg hover:scale-105 transition-transform">
            <Rocket strokeWidth={3} className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20" />
          </span>
          <span>brand.</span>
        </motion.div>
      </div>

      {/* Marquee Divider */}
      <div className="w-full bg-white border-y border-gray-200 py-6 overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {/* Double the list for seamless looping */}
          <div className="flex items-center">
            <MarqueeItem text="DOLLAR REVENUE" />
            <MarqueeItem text="5 CLIENTS ONLY" />
            <MarqueeItem text="US & UK CLIENTS" />
            <MarqueeItem text="CUSTOM CODE" />
            <MarqueeItem text="PROVEN SYSTEM" />
            <MarqueeItem text="REAL EXECUTION" />
            <MarqueeItem text="BHAVESH STUDIO" />
            <MarqueeItem text="INTERNATIONAL CLIENTS" />
          </div>
          <div className="flex items-center">
            <MarqueeItem text="DOLLAR REVENUE" />
            <MarqueeItem text="5 CLIENTS ONLY" />
            <MarqueeItem text="US & UK CLIENTS" />
            <MarqueeItem text="CUSTOM CODE" />
            <MarqueeItem text="PROVEN SYSTEM" />
            <MarqueeItem text="REAL EXECUTION" />
            <MarqueeItem text="BHAVESH STUDIO" />
            <MarqueeItem text="INTERNATIONAL CLIENTS" />
          </div>
        </motion.div>
      </div>

      {/* Dark Section: Text Block with Highlights */}
      <div className="w-full bg-[#0A0A0A] text-white pt-20 pb-32 md:pt-32 md:pb-40 px-4 sm:px-6 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl text-[1.8rem] sm:text-[3rem] md:text-[5rem] font-bold tracking-tight leading-[1.3] md:leading-[1.1] text-center md:text-left"
        >
          Your business is in demand globally. Companies pay top dollar for excellence. 
          Yet most brands settle for average — because no one built them the 
          <span className="inline-block bg-[#D9F99D] text-[#0A0A0A] px-2 md:px-4 rounded-lg md:rounded-xl mx-1 md:mx-2 -rotate-2">
            right
          </span>
          <span className="inline-block bg-[#D9F99D] text-[#0A0A0A] px-2 md:px-4 rounded-lg md:rounded-xl mx-1 md:mx-2 rotate-2">
            website.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
