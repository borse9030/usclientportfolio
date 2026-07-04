"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function ZuppaCaseStudy() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#0A0A0A] pt-32">
      
      {/* Header */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest border border-orange-500/20">
              Web App
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs font-bold uppercase tracking-widest border border-white/10">
              Next.js
            </span>
          </div>

          <h1 className="text-[3rem] md:text-[5rem] font-black text-white leading-[0.9] tracking-tight uppercase mb-6">
            Zuppa Food <span className="text-orange-500">Delivery.</span>
          </h1>

          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl leading-relaxed">
            A premium food delivery web application designed for seamless user experience, fast conversions, and a modern aesthetic that makes food look irresistible.
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto px-6 mb-32"
      >
        <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.1)]">
          <Image 
            src="/zuppa.jpg" 
            alt="Zuppa Food Delivery App Interface" 
            fill 
            className="object-cover object-top"
          />
        </div>
      </motion.section>

      {/* Details */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-32 flex flex-col gap-16">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            The Challenge
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            The food delivery space is crowded with apps that feel clunky and slow. The goal with Zuppa was to build an interface that not only looked mouth-watering but operated with zero friction. From browsing restaurants to the final checkout step, every interaction was designed to minimize drop-off and maximize order volume.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            The Solution
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
            By leveraging a modern frontend stack, we created a lightning-fast application. High-quality imagery takes center stage, supported by a clean layout and intuitive navigation. The result is a web app that feels like a premium native mobile application.
          </p>
          
          <a 
            href="https://zuppa-the-food-delhivery-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            View Live Project
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
