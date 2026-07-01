"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import BookingCalendar from "@/components/ui/BookingCalendar";

export default function Contact() {
  const whatsappNumber = "917972565911";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Bhavesh, I'm interested in working with you on a website project!")}`;

  return (
    <section className="w-full bg-[#0A0A0A] text-white pt-20 pb-32 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs tracking-[0.2em] font-bold text-white/80 uppercase">
            Available For New Projects
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-black leading-[0.9] tracking-tight uppercase mb-6"
        >
          Let's Build <br/>
          <span className="text-[#10B981]">Something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#A1A1AA] text-base md:text-xl lg:text-2xl max-w-2xl mb-12 font-medium px-4"
        >
          Stop losing premium clients to bad design. Let's discuss your project and see if we're a good fit.
        </motion.p>

        {/* Booking Calendar Integration */}
        <div id="booking" className="w-full mb-12 relative z-10 scroll-mt-32">
          <BookingCalendar />
        </div>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-[#0A0A0A] bg-[#10B981] hover:bg-[#0ea5e9] rounded-full overflow-hidden transition-colors duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.5)]"
        >
          <div className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex items-center gap-3">
            <MessageCircle size={24} className="fill-current" />
            <span>Chat on WhatsApp</span>
          </div>
        </motion.a>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-sm text-white/40 font-medium"
        >
          Replies usually within 2 hours.
        </motion.p>

      </div>
    </section>
  );
}
