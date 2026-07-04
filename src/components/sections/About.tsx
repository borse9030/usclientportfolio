"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white pt-20 pb-32 overflow-hidden relative z-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5A2A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#FF3300] aspect-square md:aspect-[4/3] shadow-2xl"
          >
            {/* The user's image will be loaded here */}
            <Image 
              src="/Hero Image.png" 
              alt="Bhavesh Works - Premium Web Developer" 
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#FF5A2A]" />
              <span className="text-[10px] tracking-[0.2em] font-bold text-white/80 uppercase">
                The Architect
              </span>
            </div>

            <h2 className="text-[2.5rem] md:text-[5rem] font-black leading-[0.9] tracking-tight uppercase mb-8 w-full">
              Code Meets <br />
              <span className="text-[#FF5A2A]">Conversion.</span>
            </h2>

            <p className="text-[#A1A1AA] text-base md:text-xl font-medium max-w-lg mb-6">
              I don't just write code. I engineer digital experiences designed to build immense trust, elevate your brand perception, and directly increase your bottom line.
            </p>

            <p className="text-[#A1A1AA] text-base md:text-xl font-medium max-w-lg">
              When you work with me, you get a dedicated technical partner who understands business, aesthetics, and premium execution.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
