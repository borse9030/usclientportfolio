"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function SkateCaseStudy() {
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
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
              Interactive Web
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs font-bold uppercase tracking-widest border border-white/10">
              React + GSAP
            </span>
          </div>

          <h1 className="text-[3rem] md:text-[5rem] font-black text-white leading-[0.9] tracking-tight uppercase mb-6">
            Bhavesh <span className="text-blue-500">Skate.</span>
          </h1>

          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl leading-relaxed">
            A highly interactive, animation-heavy promotional website designed to capture attention and deliver a memorable brand experience through smooth scrolling and dynamic elements.
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
        <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
          <Image 
            src="/skate.jpg" 
            alt="Bhavesh Skate Website Interface" 
            fill 
            className="object-cover object-top"
          />
        </div>
      </motion.section>

      {/* Details */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-32 flex flex-col gap-16">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            The Vision
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            Standard landing pages often fail to leave a lasting impression. The vision for this project was to break away from traditional static grids and create an immersive digital environment. It needed to feel alive, responding to user interactions with buttery-smooth animations that reflect the energy and culture of the brand.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            The Execution
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
            Complex animations can ruin a website's performance if not done correctly. By carefully optimizing the assets and utilizing hardware-accelerated animations, we achieved a visually stunning experience that maintains perfect frame rates even on mobile devices. It proves that a website can be highly creative without sacrificing speed.
          </p>
          
          <a 
            href="https://bhaveshskate.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Experience Live Site
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
