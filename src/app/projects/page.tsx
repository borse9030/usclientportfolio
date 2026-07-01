"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Footer from "@/components/sections/Footer";

const LIVE_DEMOS = [
  {
    title: "Zuppa Food Delivery",
    niche: "Web App",
    link: "https://zuppa-the-food-delhivery-app.vercel.app/",
    image: "/zuppa.jpg",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
  {
    title: "Bhavesh Skate",
    niche: "Interactive Website",
    link: "https://bhaveshskate.netlify.app/",
    image: "/skate.jpg",
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/30",
  }
];

const REVIEWS = [
  {
    name: "Alex M.",
    role: "Founder, TechFlow",
    text: "Bhavesh completely transformed our landing page. Conversion rates doubled in the first week. The attention to detail is insane.",
  },
  {
    name: "Sarah J.",
    role: "CEO, Elevate E-com",
    text: "We were losing international clients because our site looked cheap. Bhavesh gave us a premium Awwwards-level design. Worth every dollar.",
  },
  {
    name: "David K.",
    role: "Director, Nexus Agency",
    text: "Fast, communicative, and extremely talented. The code is clean and the animations are flawless. We will absolutely hire him again.",
  }
];

export default function ProjectsPage() {
  const [expandedReviewIndex, setExpandedReviewIndex] = useState<number | null>(null);

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#0A0A0A] pt-32">
      
      {/* Header */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[4rem] md:text-[6rem] font-black text-white leading-[0.9] tracking-tight uppercase"
        >
          The <span className="text-[#00F5D4]">Proof.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A1A1AA] text-lg md:text-2xl mt-6 max-w-2xl mx-auto"
        >
          Don't just take my word for it. Explore the live builds and see what premium clients are saying.
        </motion.p>
      </section>

      {/* Live Demos Grid */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-32">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-3 h-3 bg-[#FF5A2A] rounded-full" />
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Live Demos</h2>
        </div>
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {LIVE_DEMOS.map((demo, i) => (
            <motion.a 
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative h-[400px] rounded-3xl bg-gradient-to-br ${demo.color} border ${demo.border} overflow-hidden cursor-pointer flex flex-col justify-between p-8`}
            >
              <img src={demo.image} alt={demo.title} className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#0A0A0A]/60 group-hover:bg-[#0A0A0A]/20 transition-colors duration-500" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  {demo.niche}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {demo.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4">
          {LIVE_DEMOS.map((demo, i) => (
            <motion.a 
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group shrink-0 min-w-[85vw] snap-center rounded-3xl bg-[#111] border ${demo.border} overflow-hidden cursor-pointer flex flex-col`}
            >
              <div className="h-[200px] w-full relative">
                <img src={demo.image} alt={demo.title} className="absolute inset-0 w-full h-full object-cover object-top opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                    {demo.niche}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {demo.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#FF5A2A] font-bold text-sm tracking-widest uppercase">Live Demo</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="w-full bg-[#F3F4F6] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] uppercase tracking-tight text-center">
              Client Feedback
            </h2>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
                <p className="text-[#0A0A0A] font-medium text-lg italic">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] leading-tight">{review.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE VIEW */}
          <div className="flex md:hidden flex-col gap-4">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setExpandedReviewIndex(expandedReviewIndex === i ? null : i)}
                className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 flex flex-col cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A0A0A] text-sm leading-tight">{review.name}</h4>
                      <div className="flex gap-0.5 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={12} className="fill-[#FACC15] text-[#FACC15]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`text-gray-400 transition-transform duration-300 ${expandedReviewIndex === i ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedReviewIndex === i ? (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#0A0A0A] font-medium text-sm italic">
                        "{review.text}"
                      </p>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-3">{review.role}</p>
                    </motion.div>
                  ) : (
                    <div className="mt-4 overflow-hidden">
                      <p className="text-gray-500 font-medium text-sm truncate italic">
                        "{review.text}"
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
